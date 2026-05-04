import React from "react";
import '../assets/styles/Experience.scss';

function Experience() {
    const experiences = [
        {
            title: "Robotics/Simulation Researcher",
            organization: "Caltech Autonomous Robotics and Control Lab (ARCL)",
            period: "Oct 2025 - Present",
            logo: "https://images.squarespace-cdn.com/content/v1/5da73021d0636f4ec706fa0a/1724351614913-KZ0LW4XI5YXASX39A4WX/AV-24+Right+Side+Caltech_Press+Release.png?format=1500w",
            bullets: [
                "Integrating an autonomous driving stack with Assetto Corsa for closed-loop, high-speed autonomy testing.",
                "Developing multi-agent simulation scenarios for passing, following, and vehicle coordination under realistic dynamics.",
                "Building tools that connect autonomy algorithms with repeatable simulation experiments and measurable behavior."
            ]
        },
        {
            title: "Intern",
            organization: "NASA, Jet Propulsion Laboratory (JPL)",
            period: "Jun 2025 - Aug 2025",
            logo: "https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg",
            bullets: [
                "Processed and analyzed JunoCam imagery to study atmospheric structure and scattering phenomena on Jupiter.",
                "Characterized rainbow haze features near the terminator by identifying spatial and radiometric trends.",
                "Worked with ISIS and NEMESIS modeling tools to connect image data with planetary science hypotheses."
            ]
        },
        {
            title: "Harold and Mary Zirin SURF Fellow",
            organization: "Caltech, COMAP Group",
            period: "Jun 2024 - Sept 2024",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/250px-Seal_of_the_California_Institute_of_Technology.svg.png",
            bullets: [
                "Refined Lyman-alpha source classification for HETDEX by identifying and removing false positives.",
                "Improved algorithm accuracy by approximately 10% through data review, feature analysis, and validation.",
                "Performed multi-dataset stacking of CO and Lyman-alpha observations to study links between gas content and emission behavior."
            ]
        }
    ];

    return (
        <div className="experience-container" id="experience">
            <div className="content-container">
                <h1>Work & Research Experience</h1>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <div className="card-content">
                                {exp.logo && <img src={exp.logo} alt={exp.organization} className="company-logo" />}
                                <div className="content-right">
                                    <div className="experience-header">
                                        <h3>{exp.title}</h3>
                                        <p className="period">{exp.period}</p>
                                    </div>
                                    <p className="organization">{exp.organization}</p>
                                    <ul className="description-list">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
