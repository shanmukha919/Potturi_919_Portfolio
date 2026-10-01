import { useState } from "react";
import styles from "../styles/About.module.css";
import shanmukhaImage from "../assets/images/Shanmukha.JPG";
import tvsLogo from "../assets/images/tvs.jpeg";
import kluLogo from "../assets/images/klu.jpeg";
import nttfLogo from "../assets/images/nttf.jpeg";
import rbpsLogo from "../assets/images/rbps.gif";
import resumePdf from "../assets/images/2300039137_P.Shanmukha.pdf";
import experienceCertificate from "../assets/images/experience-certificate.jpg";


function About() {
    const [activeTab, setActiveTab] = useState("experience");

    const viewResume = () => {
        window.open(resumePdf, "_blank");
    };

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = resumePdf;
        link.download = "2300039137_P.Shanmukha.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const viewExperiences = () => {
        window.open(experienceCertificate, "_blank");
    };

    const educationTimeline = [
        {
            degree: "Bachelor of Engineering",
            institution: "KL University, Vijayawada, AP",
            link: "https://www.kluniversity.in/",
            duration: "2024 - 2027",
            description: "Computer Science and Engineering — CGPA: 9.16/10"
        },
        {
            degree: "Diploma in Tool Engineering & Digital Manufacturing",
            institution: "NTTF, Gannavaram, AP",
            link: "https://www.nttftrg.com/",
            duration: "2018 - 2021",
            description: "Tool Engineering & Digital Manufacturing — CGPA: 8.68/10"
        },
        {
            degree: "SSC (10th Grade)",
            institution: "Ravindra Bharathi Public School, Vijayawada, AP",
            link: "https://www.rbpschools.in/",
            duration: "2017",
            description: "Secondary School Certificate — CGPA: 9.3/10"
        }
    ];

    const experienceTimeline = [
        {
            role: "Junior Technical Trainee",
            company: "T.V.S Brakes India PVT LMT, Naidupeta, Andhra Pradesh",
            link: "https://www.google.com/maps/search/?api=1&query=Brakes+India+Private+Limited+Menakuru+Naidupeta",
            duration: "2021 - 2024",
            description: "Worked in the Development Department (1 year as Trainee & 2 years as Junior Technical Trainee). Handled development, testing, and quality control of automotive braking systems."
        }
    ];

    return (
        <section className={styles.about} id="about">

            <div className="container">
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <div className={styles.aboutContent}>

                    {/* LEFT IMAGE */}
                    <div className={styles.aboutImage}>
                        <div className={styles.imageWrapper}>
                            <img src={shanmukhaImage} alt="Shanmukha Potturi" />
                            <div className={styles.decorationCircle}></div>
                        </div>

                        {/* SOFT SKILLS SECTION */}
                        <div className={styles.softSkillsContainer}>
                            <h3 className={styles.softSkillsTitle}>Strengths & Soft Skills</h3>
                            <div className={styles.softSkillsGrid}>
                                <div className={styles.softSkillCard}>
                                    <div className={styles.softSkillIcon}>
                                        <i className="fas fa-bullseye"></i>
                                    </div>
                                    <span>Adaptability</span>
                                </div>
                                <div className={styles.softSkillCard}>
                                    <div className={styles.softSkillIcon}>
                                        <i className="fas fa-brain"></i>
                                    </div>
                                    <span>Observation</span>
                                </div>
                                <div className={styles.softSkillCard}>
                                    <div className={styles.softSkillIcon}>
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <span>Problem-solving</span>
                                </div>
                                <div className={styles.softSkillCard}>
                                    <div className={styles.softSkillIcon}>
                                        <i className="fas fa-comments"></i>
                                    </div>
                                    <span>Communication</span>
                                </div>
                                <div className={styles.softSkillCard}>
                                    <div className={styles.softSkillIcon}>
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <span>Teamwork</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className={styles.aboutInfo}>
                        <h3>Full Stack Developer</h3>

                        <div className={styles.aboutText}>
                            <p>
                                I’m a Full Stack Developer with a strong technical background. My professional journey began at TVS Brakes India, where I worked for 3 years in the Development Department — 1 year as a Trainee and 2 years as a Junior Technical Trainee. During this time, I gained hands-on experience in the manufacturing and development of automotive braking systems, building strong analytical thinking and problem-solving skills.

                                With this foundation, I transitioned into web development. I now focus on frontend and backend technologies, building responsive and scalable web applications. I’m passionate about continuous learning and creating solutions that solve real-world problems.
                            </p>

                            <ul className={styles.skillsHighlights}>
                                <li>Familiar with frontend and backend development</li>
                                <li>Experience with modern web technologies</li>
                                <li>Strong problem-solving skills</li>
                            </ul>
                        </div>

                        {/* PERSONAL INFO
                        <div className={styles.personalInfo}>
                            <div className={styles.infoGrid}>
                                <div className={styles.infoItem}>
                                    <i className="fas fa-user"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Age:</span>
                                        <span className={styles.infoValue}>23</span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-globe"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Country:</span>
                                        <span className={styles.infoValue}>India</span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-envelope"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Email:</span>
                                        <span className={styles.infoValue}>
                                            potturishanmukha919@gmail.com
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-venus-mars"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Gender:</span>
                                        <span className={styles.infoValue}>Male</span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-briefcase"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Work:</span>
                                        <span className={styles.infoValue}>Student</span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-language"></i>
                                    <div>
                                        <span className={styles.infoLabel}>Language:</span>
                                        <span className={styles.infoValue}>
                                            Telugu, English, Hindi, Tamil
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* BUTTONS */}

                        {/* TABS */}
                        <div className={styles.tabsSection}>
                            <div className={styles.resumeActions}>
                                <button className="btn btn-primary" onClick={viewExperiences}>
                                    <span className={styles.emoji}>💼</span> View Experiences
                                </button>

                                <button className="btn btn-outline" onClick={viewResume}>
                                    <span className={styles.emoji}>📄</span> View Resume
                                </button>

                                <button className="btn btn-outline" onClick={downloadResume}>
                                    <span className={styles.emoji}>⬇️</span> Download CV
                                </button>
                            </div>

                            <div className={styles.tabsHeader}>
                                <button
                                    className={`${styles.tabBtn} ${activeTab === "experience" ? styles.active : ""}`}
                                    onClick={() => setActiveTab("experience")}
                                >
                                    Experience
                                </button>

                                <button
                                    className={`${styles.tabBtn} ${activeTab === "education" ? styles.active : ""}`}
                                    onClick={() => setActiveTab("education")}
                                >
                                    Education
                                </button>
                            </div>

                            <div className={styles.tabsContent}>
                                {activeTab === "experience" && (
                                    <div className={styles.tabPanel} id="experience">
                                        <h3 className={styles.timelineTitle}>
                                            <i className="fas fa-briefcase"></i> Experience Timeline
                                        </h3>
                                        <div className={styles.timelineContainer}>
                                            {experienceTimeline.map((item, index) => (
                                                <div key={index} className={styles.timelineItem}>
                                                    <div className={styles.timelineItemHeader}>
                                                        <span className={styles.timelineDegree}>{item.role}</span>
                                                        <a 
                                                            href={item.link} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer" 
                                                            className={styles.timelineInstitution}
                                                        >
                                                            {item.company} <i className="fas fa-external-link-alt"></i>
                                                        </a>
                                                    </div>
                                                    <span className={styles.timelineDuration}>{item.duration}</span>
                                                    <p className={styles.timelineDescription}>{item.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === "education" && (
                                    <div className={styles.tabPanel}>
                                        <h3 className={styles.timelineTitle}>
                                            <i className="fas fa-graduation-cap"></i> Education Timeline
                                        </h3>
                                        <div className={styles.timelineContainer}>
                                            {educationTimeline.map((item, index) => (
                                                <div key={index} className={styles.timelineItem}>
                                                    <div className={styles.timelineItemHeader}>
                                                        <span className={styles.timelineDegree}>{item.degree}</span>
                                                        <a 
                                                            href={item.link} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer" 
                                                            className={styles.timelineInstitution}
                                                        >
                                                            {item.institution} <i className="fas fa-external-link-alt"></i>
                                                        </a>
                                                    </div>
                                                    <span className={styles.timelineDuration}>{item.duration}</span>
                                                    <p className={styles.timelineDescription}>{item.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
