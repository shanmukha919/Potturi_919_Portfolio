import styles from '../styles/Projects.module.css'

const HospitalSVG = () => (
    <svg viewBox="0 0 400 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ background: 'linear-gradient(135deg, #050811, #111625)' }}>
        <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
            </pattern>
            <linearGradient id="hospGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00abf0" />
                <stop offset="100%" stopColor="#005588" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="rgba(5, 8, 17, 0.1)" />
        
        {/* Medical Cross shapes */}
        <rect x="175" y="60" width="50" height="100" rx="6" fill="url(#hospGrad)" opacity="0.1" />
        <rect x="150" y="85" width="100" height="50" rx="6" fill="url(#hospGrad)" opacity="0.1" />
        <path d="M190 70h20v25h25v20h-25v25h-20v-25h-25v-20h25z" fill="url(#hospGrad)" filter="url(#glow)" />
        
        {/* Heart Rate Wave Line */}
        <path d="M 50 150 L 120 150 L 130 135 L 140 165 L 150 120 L 160 180 L 170 145 L 180 155 L 190 150 L 350 150" 
              fill="none" stroke="#00abf0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
              
        {/* UI Dashboard lines */}
        <rect x="50" y="30" width="80" height="8" rx="4" fill="rgba(255, 255, 255, 0.2)" />
        <rect x="50" y="44" width="40" height="6" rx="3" fill="rgba(255, 255, 255, 0.1)" />
    </svg>
)

const CarRentalSVG = () => (
    <svg viewBox="0 0 400 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ background: 'linear-gradient(135deg, #050811, #111625)' }}>
        <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
            </pattern>
            <linearGradient id="carGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00abf0" />
                <stop offset="100%" stopColor="#0077aa" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="rgba(5, 8, 17, 0.1)" />
        
        {/* Speed / motion lines */}
        <line x1="30" y1="125" x2="100" y2="125" stroke="rgba(0, 171, 240, 0.25)" strokeWidth="2" strokeDasharray="5 5" />
        <line x1="20" y1="135" x2="80" y2="135" stroke="rgba(0, 171, 240, 0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Car Outline Profile */}
        <path d="M 80 135 L 90 135 C 105 135, 110 115, 125 115 L 155 115 C 175 115, 190 75, 215 75 L 270 75 C 290 75, 310 100, 325 105 L 345 112 C 360 115, 365 125, 365 135 L 375 135 C 375 145, 365 145, 355 145 L 340 145 C 335 130, 310 130, 305 145 L 165 145 C 160 130, 135 130, 130 145 L 90 145 C 80 145, 80 135, 80 135 Z" 
              fill="none" stroke="url(#carGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
              
        {/* Wheels */}
        <circle cx="147.5" cy="145" r="16" fill="#050811" stroke="#00abf0" strokeWidth="3" filter="url(#glow)" />
        <circle cx="147.5" cy="145" r="6" fill="#00abf0" />
        <circle cx="322.5" cy="145" r="16" fill="#050811" stroke="#00abf0" strokeWidth="3" filter="url(#glow)" />
        <circle cx="322.5" cy="145" r="6" fill="#00abf0" />
        
        {/* Car windows / cabin details */}
        <path d="M 218 83 L 268 83 C 280 83, 290 98, 298 105 L 218 105 Z" fill="rgba(0, 171, 240, 0.15)" stroke="#00abf0" strokeWidth="1.5" />
        <path d="M 210 83 L 175 110 L 210 110 Z" fill="rgba(0, 171, 240, 0.08)" stroke="#00abf0" strokeWidth="1.5" />
    </svg>
)

const ECommerceSVG = () => (
    <svg viewBox="0 0 400 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ background: 'linear-gradient(135deg, #050811, #111625)' }}>
        <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
            </pattern>
            <linearGradient id="ecomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00abf0" />
                <stop offset="100%" stopColor="#005588" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="rgba(5, 8, 17, 0.1)" />
        
        {/* Shopping Cart Body outline */}
        <path d="M110 60 L140 140 L260 140 L290 60 Z" fill="rgba(0, 171, 240, 0.1)" stroke="url(#ecomGrad)" strokeWidth="4" strokeLinejoin="round" filter="url(#glow)" />
        
        {/* Bag Handles */}
        <path d="M160 60 C160 30, 240 30, 240 60" fill="none" stroke="#00abf0" strokeWidth="4" strokeLinecap="round" filter="url(#glow)" />
        
        {/* Credit Card Floating badge */}
        <rect x="230" y="90" width="70" height="42" rx="6" fill="#050811" stroke="#00abf0" strokeWidth="2.5" transform="rotate(-12, 265, 111)" filter="url(#glow)" />
        <line x1="230" y1="102" x2="295" y2="88" stroke="#00abf0" strokeWidth="5" />
        <rect x="240" y="112" width="12" height="8" rx="1" fill="#00abf0" />
        
        {/* Discount Sale Tag badge */}
        <path d="M120 90 L100 110 C96 114, 90 114, 86 110 L70 94 C66 90, 66 84, 70 80 L90 60 Z" fill="url(#ecomGrad)" filter="url(#glow)" />
        <circle cx="98" cy="82" r="3" fill="#050811" />
    </svg>
)

function Projects() {
    const projects = [
        {
            title: 'Hospital Management System',
            description: 'A comprehensive full-stack platform designed to streamline hospital operations. It manages patient electronic health records (EHR), schedules doctor appointments, organizes department allocation, and automates billing workflows securely.',
            renderImage: () => <HospitalSVG />,
            tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            title: 'Car Rental System',
            description: 'A dynamic online platform for vehicle hiring services. Features a user-friendly booking interface, real-time car availability tracking, filter options by category/brand, and a comprehensive admin panel to manage the fleet, rentals, and payments.',
            renderImage: () => <CarRentalSVG />,
            tags: ['React.js', 'Node.js', 'MongoDB', 'REST API'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online storefront with modern shopping capabilities. Integrates product search and filtering, user shopping carts, secure checkout/payment gateways, order tracking, and a merchant dashboard to manage inventory and sales.',
            renderImage: () => <ECommerceSVG />,
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            liveLink: '#',
            codeLink: '#'
        },
    ]

    return (
        <section className={styles.projects} id="projects">

            <div className="container">
                <h2 className="section-title">
                    Latest <span>Projects</span>
                </h2>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>

                            <div className={styles.projectImage}>
                                {project.renderImage()}
                                <div className={styles.imageOverlay}></div>
                            </div>

                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>
                                    {project.title}
                                </h3>

                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>

                                <div className={styles.projectTech}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={styles.techTag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.projectButtons}>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.primaryBtn}
                                    >
                                        Live Demo <i className="fas fa-external-link-alt"></i>
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.secondaryBtn}
                                    >
                                        GitHub <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
