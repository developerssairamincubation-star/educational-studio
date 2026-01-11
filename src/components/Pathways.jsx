import { motion } from 'framer-motion';
import './Pathways.css';

const pathwaysData = [
    {
        title: 'XR Zone',
        description: 'Immersive experiences in VR/AR designed for spatial learning.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBALWFqF0QhyakzXWm1rFBB4rro_fs-m9IrM2TcLBnsflMf17DnsYpRQLonooFaDWlOBegLnyuQGwHz3q9X5KfjZrJ8ntMoRQR0KfbLYZfPgGY_hbuyMZMVJy4Q8vxrd26yE0KtmTcZ0rGfRdNbSAgzdx0XkTyosVIMHuDbZK5HySvmPzFOQ0Qi9baDel6lx7VQ3-nQ9-DeyLiqlh8tfYRNYjqqB5tSBEIg9vA_KgHI39YwDahRQZc_GXLE4JCNV1J-lJZIb_Y8Hjs'
    },
    {
        title: 'Quest Hub',
        description: 'Gamified learning maps, daily challenges, and progress tracking.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEAM-qB9RrOFbLox-cxRTfHzNmYzINfx9VOz3lh75OXeGRX9UlGPhr1uAUi1Vveg1pF4voJ8nDGFbz-4DRhcBYMKz2R77ec1-AYUStEf-qceIqjdiEX8gYyaqlMeK3gaLgMJf57l7je8HrH6p3KqpQ63bPg_5MjJvBlnP83V70IelD-48jBMMPZPm-5jucJ_jR9rESu2BR-cez0cgmiIEbhN06kofC6OBE2zhHRMqO_JmWVrr_fDbzYCeFXfGy_w7_pv2s09kQBbY'
    },
    {
        title: 'Learning Studio',
        description: 'Collaborative workspace for team projects and peer review.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpocY_j9sstVWWVReqG29AsMpN_09q-W8lAu1b6fN3EMlvjlUCs15XgpNbQo0heKNPosR-eheNbNxj5LNksNjVay55hBLwG6oOVYoMdZrencnsmiODAIHDiU3viK0OGKfFFMj4NxxVSO6C_ZAlHm_FDFnbSwDAwnm8w1mb08rIzFWKXG_jkPrH-lMbWDR0yQkUR0-HKZyaA1EEMhgqZFgJK4-C5K-WarImSbZ84REMaK9sQQ8L7tfVvLG8MxXqwUjOleqbEzHmYcw'
    },
    {
        title: 'Community Wall',
        description: 'Connect with peers, alumni mentors, and industry experts.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_o_OdrSVFWdCJvroINKUspXXkGYj_9x0KeY11FiHsmm-XU2wJbfi65RBo4pxXuUrGeUWOKN1xfyjfRz1uwe-go3w0i7iGBc22SqYJYtgNPkKMOSNf3q74VNfl4RGyyzHws3FllmsOzExYtEmaOxhWbuLq7HXQaVcTiV3JU2nZykz4joJCHCBFWLVu7hpYZ2uh1i0768q3Bn-JsR5zMggM2yLzuFDsFQaomjGzbdgDeEpwiDL7Tzh3LOfDe_k3m18LljyeSVQ09Zw'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

export default function Pathways() {
    return (
        <section className="pathways-section">
            <div className="pathways-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Explore Pathways</h2>
                    <p>Quick access to your specialized learning environments.</p>
                </motion.div>

                <motion.div
                    className="pathways-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {pathwaysData.map((pathway, index) => (
                        <motion.a
                            href="#"
                            className="pathway-card"
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div
                                className="pathway-image"
                                style={{ backgroundImage: `url("${pathway.image}")` }}
                            >
                                <div className="pathway-overlay"></div>
                            </div>
                            <div className="pathway-content">
                                <h3>{pathway.title}</h3>
                                <p>{pathway.description}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
