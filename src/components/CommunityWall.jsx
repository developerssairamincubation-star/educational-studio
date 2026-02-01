import React, { useState, useEffect } from 'react';
import { db, auth, storage } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, updateDoc, doc, arrayUnion, arrayRemove, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import CommunitySignIn from './CommunitySignIn';
import './CommunityWall.css';

const CommunityWall = ({ setPage }) => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [user, setUser] = useState(null);

    // Listen to authentication state changes
    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribeAuth();
    }, []);

    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, []);

    // Show sign-in page if user is not authenticated
    if (!user) {
        return <CommunitySignIn onBack={() => setPage('home')} />;
    }

    const compressImage = (file) => {
        return new Promise((resolve) => {
            const maxWidth = 1920;
            const maxHeight = 1080;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    canvas.toBlob((blob) => {
                        const compressedFile = new File([blob], file.name, {
                            type: 'image/jpeg',
                            lastModified: Date.now(),
                        });
                        resolve(compressedFile);
                    }, 'image/jpeg', 0.8);
                };
            };
        });
    };

    const handleImageChange = async (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            try {
                const compressed = await compressImage(file);
                setImage(compressed);
            } catch (error) {
                console.error("Error compressing image:", error);
                setImage(file);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newPost.trim() && !image) return;

        setUploading(true);
        try {
            let imageUrl = '';
            if (image) {
                const imageRef = ref(storage, `images/${Date.now()}_${image.name}`);
                const snapshot = await uploadBytes(imageRef, image);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            await addDoc(collection(db, 'posts'), {
                text: newPost,
                imageUrl,
                user: user.displayName || user.email,
                userPhoto: user.photoURL,
                uid: user.uid,
                createdAt: serverTimestamp(),
                likes: [],
                comments: []
            });

            setNewPost('');
            setImage(null);
        } catch (error) {
            console.error("Detailed Error creating post: ");
            console.dir(error);
            if (error.code === 'storage/unauthorized') {
                alert('Storage upload failed: Permission denied. Please check your Firebase Storage Rules.');
            } else if (error.message.includes('CORS') || error.code === 'storage/retry-limit-exceeded' || error.name === 'FirebaseError') {
                alert('Storage upload failed. IMPORTANT: You likely need to enable Storage in the Firebase Console OR set CORS rules. Check the terminal/instructions for the "gsutil" command.');
            } else {
                alert(`Failed to post: ${error.message}`);
            }
        }
        setUploading(false);
    };

    const handleLike = async (postId, likes) => {
        const postRef = doc(db, 'posts', postId);
        if (likes?.includes(user.uid)) {
            await updateDoc(postRef, {
                likes: arrayRemove(user.uid)
            });
        } else {
            await updateDoc(postRef, {
                likes: arrayUnion(user.uid)
            });
        }
    };

    const handleComment = async (postId, commentText) => {
        if (!commentText.trim()) return;
        const postRef = doc(db, 'posts', postId);
        await updateDoc(postRef, {
            comments: arrayUnion({
                text: commentText,
                user: user.displayName || user.email,
                uid: user.uid,
                createdAt: new Date().toISOString()
            })
        });
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className="community-wall-container">
            <div className="community-header">
                <div className="header-content">
                    <div>
                        <h2>Community Wall</h2>
                        <p>Connect, share, and learn with your peers.</p>
                    </div>
                    <div className="user-profile-section">
                        {user.photoURL ? (
                            <img src={user.photoURL} alt={user.displayName} className="user-avatar" />
                        ) : (
                            <div className="user-avatar-placeholder">
                                {(user.displayName || user.email).charAt(0).toUpperCase()}
                            </div>
                        )}
                        <div className="user-info">
                            <span className="user-name">{user.displayName || user.email}</span>
                            <button onClick={handleSignOut} className="signout-btn">
                                <span className="material-symbols-outlined">logout</span>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="create-post-container">
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="What's on your mind? Share an idea, question, or resource..."
                        rows="3"
                    />
                    <span className="markdown-hint">Markdown supported</span>

                    {image && (
                        <div className="image-preview-container">
                            <img src={URL.createObjectURL(image)} alt="Preview" className="image-preview" />
                            <button type="button" onClick={() => setImage(null)} className="remove-image-btn">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                    )}

                    <div className="form-actions">
                        <div className="file-input-wrapper">
                            <label htmlFor="file-upload" className="file-upload-label">
                                <span className="material-symbols-outlined">add_photo_alternate</span>
                                {image ? 'Change Image' : 'Add Image'}
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden-file-input"
                            />
                        </div>
                        <button type="submit" disabled={uploading}>
                            {uploading ? 'Posting...' : 'Post'}
                        </button>
                    </div>
                </form>
            </div>

            <div className="posts-feed">
                {posts.map(post => (
                    <PostItem
                        key={post.id}
                        post={post}
                        currentUser={user}
                        onLike={handleLike}
                        onComment={handleComment}
                    />
                ))}
            </div>
        </div>
    );
};

const PostItem = ({ post, currentUser, onLike, onComment }) => {
    const [commentText, setCommentText] = useState('');
    const [showComments, setShowComments] = useState(false);

    const submitComment = (e) => {
        e.preventDefault();
        onComment(post.id, commentText);
        setCommentText('');
    };

    const getInitials = (name) => {
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    const formatDate = (date) => {
        if (!date) return '';
        // If it's a Firestore timestamp
        if (date.toDate) return date.toDate().toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' }) + ' • ' + date.toDate().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
        // If it's an ISO string (comments)
        return new Date(date).toLocaleDateString();
    };


    return (
        <div className="post-card">
            <div className="post-header">
                <div className="post-user-info">
                    {post.userPhoto ? (
                        <div className="post-avatar" style={{ backgroundImage: `url(${post.userPhoto})` }}></div>
                    ) : (
                        <div className="post-avatar">{getInitials(post.user)}</div>
                    )}
                    <div className="post-info">
                        <span className="post-author">{post.user}</span>
                        <span className="post-date">{formatDate(post.createdAt)}</span>
                    </div>
                </div>
                <div className="post-options">
                    <span className="material-symbols-outlined">more_horiz</span>
                </div>
            </div>

            <div className="post-content">
                <p>{post.text}</p>
                {post.imageUrl && <img src={post.imageUrl} alt="Post content" className="post-image" />}
            </div>

            <div className="post-actions">
                <button
                    className={`action-btn ${post.likes?.includes(currentUser.uid) ? 'liked' : ''}`}
                    onClick={() => onLike(post.id, post.likes)}
                >
                    <span className="material-symbols-outlined">favorite</span>
                    {post.likes?.length || 0} Likes
                </button>
                <button className="action-btn" onClick={() => setShowComments(!showComments)}>
                    <span className="material-symbols-outlined">chat_bubble</span>
                    {post.comments?.length || 0} Comments
                </button>
                <button className="action-btn">
                    <span className="material-symbols-outlined">share</span>
                </button>
            </div>

            {showComments && (
                <div className="comments-section">
                    {post.comments?.map((comment, idx) => (
                        <div key={idx} className="comment">
                            <div className="comment-avatar">{getInitials(comment.user)}</div>
                            <div className="comment-bubble">
                                <div className="comment-header">
                                    <span className="comment-author">{comment.user}</span>
                                    <span className="comment-time">{formatDate(comment.createdAt)}</span>
                                </div>
                                <div className="comment-text">{comment.text}</div>
                            </div>
                        </div>
                    ))}
                    <form onSubmit={submitComment} className="comment-form">
                        <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Write a comment..."
                        />
                        <button type="submit">SEND</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CommunityWall;
