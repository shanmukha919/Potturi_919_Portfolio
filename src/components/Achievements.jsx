import { useState, useEffect } from 'react'
import styles from '../styles/Achievements.module.css'

function Achievements() {
    const [subSection, setSubSection] = useState('certificates'); // 'certificates' or 'hackathons'
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeDesc, setActiveDesc] = useState({});
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setLightboxOpen(false);
            if (e.key === 'ArrowLeft' && lightboxImages.length > 1) {
                setCurrentImgIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
            }
            if (e.key === 'ArrowRight' && lightboxImages.length > 1) {
                setCurrentImgIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, lightboxImages]);

    const openLightbox = (images) => {
        setLightboxImages(images);
        setCurrentImgIndex(0);
        setLightboxOpen(true);
    };

    const certificates = [
        {
            title: 'Juniper Networks Certified Associate - Junos (JNCIA-Junos)',
            issuer: 'Juniper Networks',
            category: 'Networking',
            src: `${import.meta.env.BASE_URL}docs/assets/juniper-jncia-junos.png`,
            type: 'image',
            description: 'Validates foundational knowledge of the Junos OS, routing fundamentals, routing policy, firewall filters, and network configuration on Juniper devices.'
        },
        {
            title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
            issuer: 'Microsoft',
            category: 'Cloud',
            src: `${import.meta.env.BASE_URL}docs/assets/Azure-900.pdf#toolbar=0`,
            description: 'Validates foundational knowledge of cloud services and how those services are provided with Microsoft Azure.'
        },
        {
            title: 'Jenkins - From Zero to Hero',
            issuer: 'LearnKartS (Coursera)',
            category: 'DevOps',
            src: `${import.meta.env.BASE_URL}docs/assets/Coursera 0S7L839S2MZ1.pdf#toolbar=0`,
            description: 'Covers Jenkins architecture, CI/CD pipelines, automated testing, configuration management, and DevOps best practices.'
        },
        {
            title: 'Introduction to Cyber Attacks',
            issuer: 'NYU Tandon School of Engineering',
            category: 'Cyber Security',
            src: `${import.meta.env.BASE_URL}docs/assets/Coursera G1WK3ZQC0ARZ.pdf#toolbar=0`,
            description: 'Explores foundational security threats, vulnerabilities, cyber warfare strategies, and modern mitigation techniques.'
        },
        {
            title: 'Spring Framework',
            issuer: 'LearnQuest (Coursera)',
            category: 'Backend',
            src: `${import.meta.env.BASE_URL}docs/assets/Coursera III2UKW102MQ.pdf#toolbar=0`,
            description: 'Deep dive into Spring Ecosystem, Spring MVC, Spring Boot, REST APIs, microservices, and database connectivity with Spring Data.'
        },
        {
            title: 'Real-Time Cyber Threat Detection and Mitigation',
            issuer: 'NYU Tandon School of Engineering',
            category: 'Cyber Security',
            src: `${import.meta.env.BASE_URL}docs/assets/Coursera KUH8DIZ793BF.pdf#toolbar=0`,
            description: 'Focuses on real-time threat intelligence, network monitoring, security operations centers (SOC), and incident response.'
        },
        {
            title: 'IBM Introduction to Machine Learning',
            issuer: 'IBM (Coursera)',
            category: 'AI/ML',
            src: `${import.meta.env.BASE_URL}docs/assets/Coursera SD4NJRUEJ3FF.pdf#toolbar=0`,
            description: 'Covers regression, classification, clustering, exploratory data analysis, and practical implementation of ML algorithms using Python.'
        },
        {
            title: 'Aviatrix Certified Engineer - Multicloud Network Associate',
            issuer: 'Aviatrix',
            category: 'Networking',
            src: `${import.meta.env.BASE_URL}docs/assets/MultiCloudNetwork.newlogo20251031-32-1n874.pdf#toolbar=0`,
            description: 'Covers multicloud networking architectures across AWS, Azure, Google Cloud Platform, and Oracle Cloud Infrastructure.'
        },
        {
            title: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
            issuer: 'Oracle',
            category: 'Cloud',
            src: `${import.meta.env.BASE_URL}docs/assets/Certified Architect Associate.pdf#toolbar=0`,
            description: 'Demonstrates strong understanding of OCI services to design, build, and deploy secure and resilient cloud solutions.'
        },
        {
            title: 'Oracle Cloud Infrastructure 2025 Certified Developer Professional',
            issuer: 'Oracle',
            category: 'Cloud',
            src: `${import.meta.env.BASE_URL}docs/assets/Certified Developer Professional.pdf#toolbar=0`,
            description: 'Validates professional expertise in developing, deploying, securing, and scaling cloud-native applications on OCI.'
        }
    ];

    const hackathons = [
        {
            title: "IIIT - TechZite 2025",
            tags: ["E-Commerce", "Web Development"],
            description: "Developed a full-featured E-Commerce Platform at TechZite 2025 hosted by IIIT, designed with secure payment integrations, product catalog search, and real-time inventory management.",
            icon: "fas fa-shopping-cart",
            links: [
                { label: "Team Post", url: "https://www.linkedin.com/posts/potturi-shanmukha-b7b13638b_aiandml-techzite2025-healthcareinnovation-activity-7413245910048137217-6IuR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF_zHg8BZaCPKRaZvQ6pTs253ZTdYlzgZBU" },
                { label: "My Post", url: "https://www.linkedin.com/posts/potturi-shanmukha-b7b13638b_aiandml-techzite2025-healthcareinnovation-activity-7413245910048137217-6IuR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF_zHg8BZaCPKRaZvQ6pTs253ZTdYlzgZBU" }
            ],
            photos: [
                "https://media.licdn.com/dms/image/v2/D5622AQHOEfygZPU9mw/feedshare-shrink_1280/B56ZuEj1w8G0As-/0/1767455548345?e=2147483647&v=beta&t=lK8dam7yqtErsc1gtqyIeieFph3jn6YEqr7pvSADfoE",
                "https://media.licdn.com/dms/image/v2/D5622AQEX3gLjzWS8ng/feedshare-shrink_800/B56ZuEj1wlJgAc-/0/1767455552843?e=2147483647&v=beta&t=X3q5JAjRZWgFPM7rX_lxhmzoxQuvD7LNqxnwUas2Mi8",
                "https://media.licdn.com/dms/image/v2/D5622AQHUU4uQw7es1A/feedshare-shrink_800/B56ZuEj1wfK8Ag-/0/1767455554606?e=2147483647&v=beta&t=Zf8IaNp_5b-L0Ujv3shMv_V_F6WXQKizz_pEuF8K94g"
            ]
        },
        {
            title: "PSCMR Hackathon",
            tags: ["Car Rental", "Web Development"],
            description: "Developed a Car Rental System at the PSCMR Hackathon, designed to streamline vehicle booking, customer registration, fleet management, and real-time availability tracking for a smooth and efficient renting experience.",
            icon: "fas fa-car",
            links: [
                { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/msvvssainadh_mindsprint2025-brainovision-brainovisionsolutions-ugcPost-7404843097471315968-YP5D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF_zHg8BZaCPKRaZvQ6pTs253ZTdYlzgZBU" }
            ],
            photos: [
                "https://media.licdn.com/dms/image/v2/D5622AQFC4zG3NhcFfA/feedshare-shrink_800/B56ZsNJdnCG8Ag-/0/1765452147530?e=2147483647&v=beta&t=4bzPwkjzxNfes9YZ7oTQUS_Y8w1y3C-xul97OoIJdec",
                "https://media.licdn.com/dms/image/v2/D5622AQFsuK7RA7CpRw/feedshare-shrink_800/B56ZsNJdnkIcAg-/0/1765452144321?e=2147483647&v=beta&t=EGsiQW3t0Lz95CsBdW1S0nJKuZcQeOeB2BMLH4S6lJA"
            ]
        }
    ];

    const categories = ['All', ...new Set(certificates.map(c => c.category))];

    const filteredCertificates = activeCategory === 'All'
        ? certificates
        : certificates.filter(c => c.category === activeCategory);

    const toggleDescription = (index) => {
        setActiveDesc(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section className={styles.achievements} id="achievements">
            <div className="container">
                <h2 className="section-title">My <span>Achievements</span></h2>

                {/* Sub-section Toggle */}
                <div className={styles.sectionToggleContainer}>
                    <button
                        className={`${styles.toggleBtn} ${subSection === 'certificates' ? styles.active : ''}`}
                        onClick={() => setSubSection('certificates')}
                    >
                        Certificates <span className={styles.countBadge}>{certificates.length}</span>
                    </button>
                    <button
                        className={`${styles.toggleBtn} ${subSection === 'hackathons' ? styles.active : ''}`}
                        onClick={() => setSubSection('hackathons')}
                    >
                        Hackathons <span className={styles.countBadge}>{hackathons.length}</span>
                    </button>
                </div>

                {subSection === 'certificates' ? (
                    <>
                        {/* Filter Tabs */}
                        <div className={styles.filterContainer}>
                            {categories.map((cat) => {
                                const count = cat === 'All'
                                    ? certificates.length
                                    : certificates.filter(c => c.category === cat).length;
                                return (
                                    <button
                                        key={cat}
                                        className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat} <span className={styles.countBadge}>{count}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Certificates Grid */}
                        <div className={styles.allCertificatesContainer}>
                            <div className={styles.certificatesGridAll}>
                                {filteredCertificates.map((cert, index) => {
                                    // Find original index in certificates array for stable toggle state
                                    const originalIndex = certificates.findIndex(c => c.title === cert.title);
                                    const isDescActive = activeDesc[originalIndex];
                                    
                                    return (
                                        <div key={originalIndex} className={styles.fullCertificate}>
                                            <div className={styles.certificateWrapper}>
                                                {cert.type === 'image' ? (
                                                    <img
                                                        src={cert.src}
                                                        alt={cert.title}
                                                        className={styles.certificateFrame}
                                                        style={{ objectFit: 'contain', background: '#fff' }}
                                                    />
                                                ) : (
                                                    <iframe
                                                        src={cert.src}
                                                        title={cert.title}
                                                        className={styles.certificateFrame}
                                                    ></iframe>
                                                )}
                                                
                                                {/* Category Tag overlay on top-left */}
                                                <span className={styles.categoryBadge}>{cert.category.toUpperCase()}</span>
                                                
                                                {/* Eye icon overlay on bottom-right */}
                                                <button
                                                    className={`${styles.eyeBtn} ${isDescActive ? styles.eyeBtnActive : ''}`}
                                                    onClick={() => toggleDescription(originalIndex)}
                                                    title={isDescActive ? "Hide Description" : "Show Description"}
                                                    aria-label="Toggle certificate description"
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </button>

                                                {/* Speech-bubble description overlay */}
                                                {isDescActive && (
                                                    <div className={styles.descriptionBubble}>
                                                        <p>{cert.description}</p>
                                                        <div className={styles.bubbleArrow}></div>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className={styles.cardContent}>
                                                <h4>{cert.title}</h4>
                                                <div className={styles.issuerRow}>
                                                    <span className={styles.bulletDot}></span>
                                                    <span className={styles.issuerText}>{cert.issuer}</span>
                                                </div>
                                                
                                                <a 
                                                    href={cert.type === 'image' ? cert.src : cert.src.replace('#toolbar=0', '')} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className={styles.viewLink}
                                                >
                                                    View Certificate <i className="fas fa-external-link-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                ) : (
                    /* Hackathons Grid */
                    <div className={styles.hackathonsContainer}>
                        <div className={styles.hackathonsGrid}>
                            {hackathons.map((hack, index) => {
                                return (
                                    <div key={index} className={styles.hackathonCard}>
                                        <div className={styles.hackathonCardHeader}>
                                            <div className={styles.hackathonIconWrapper}>
                                                <div className={styles.hackathonIconContainer}>
                                                    <i className={hack.icon}></i>
                                                </div>
                                                <div className={styles.hackathonTitleWrapper}>
                                                    <h4 className={styles.hackathonTitle}>{hack.title}</h4>
                                                    <div className={styles.tagPills}>
                                                        {hack.tags.map((tag, tIdx) => (
                                                            <span key={tIdx} className={styles.tagPill}>{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <button
                                                className={styles.hackathonEyeBtn}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    openLightbox(hack.photos);
                                                }}
                                                title="View Photos"
                                                aria-label="View Photos"
                                            >
                                                <i className="fas fa-eye"></i>
                                            </button>
                                        </div>
                                        
                                        <p className={styles.hackathonDescription}>{hack.description}</p>
                                        
                                        <div className={styles.hackathonLinksRow}>
                                            {hack.links.map((link, lIdx) => (
                                                <a
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.hackathonPostLink}
                                                >
                                                    <i className="fas fa-external-link-alt"></i> {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className={styles.lightboxOverlay} onClick={() => setLightboxOpen(false)}>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.lightboxCloseBtn} onClick={() => setLightboxOpen(false)}>
                            &times;
                        </button>
                        
                        {lightboxImages.length > 1 && (
                            <button 
                                className={`${styles.lightboxNavBtn} ${styles.lightboxPrev}`}
                                onClick={() => setCurrentImgIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))}
                            >
                                &#10094;
                            </button>
                        )}

                        <div className={styles.lightboxImageWrapper}>
                            <img 
                                src={lightboxImages[currentImgIndex]} 
                                alt={`Photo ${currentImgIndex + 1}`} 
                                className={styles.lightboxImage} 
                            />
                            <div className={styles.lightboxCounter}>
                                {currentImgIndex + 1} / {lightboxImages.length}
                            </div>
                        </div>

                        {lightboxImages.length > 1 && (
                            <button 
                                className={`${styles.lightboxNavBtn} ${styles.lightboxNext}`}
                                onClick={() => setCurrentImgIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))}
                            >
                                &#10095;
                            </button>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Achievements;
