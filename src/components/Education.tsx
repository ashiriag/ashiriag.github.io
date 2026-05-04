import React from "react";
import '../assets/styles/Experience.scss';

function Education() {
    const education = [
        {
            degree: "B.S. Computer Science, Minor in Robotics",
            institution: "California Institute of Technology (Caltech)",
            period: "Sept 2023 - Jun 2027",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/250px-Seal_of_the_California_Institute_of_Technology.svg.png",
            description: "Relevant Coursework: Experimental Robotics, Robotic Manipulation, Robotic Planning, Deep Learning, Machine Learning and Data Mining, LLMs for Reasoning, Mathematical Foundations of Computer Science, Decidability and Tractability, Software Design, Computing Systems, Algorithms",
            taRoles: [
                "ME/CS/EE 129: Experimental Robotics"
            ]
        }
    ];

    return (
        <div className="experience-container" id="education">
            <div className="content-container">
                <h1>Education</h1>
                <div className="experience-list">
                    {education.map((edu, index) => (
                        <div key={index} className="experience-card">
                            <div className="card-content">
                                {edu.logo && <img src={edu.logo} alt={edu.institution} className="company-logo" />}
                                <div className="content-right">
                                    <div className="experience-header">
                                        <h3>{edu.degree}</h3>
                                        <p className="period">{edu.period}</p>
                                    </div>
                                    <p className="organization">{edu.institution}</p>
                                    {edu.description && <p className="description">{edu.description}</p>}
                                    {edu.taRoles && edu.taRoles.length > 0 && (
                                        <div className="description" style={{ marginTop: '10px' }}>
                                            <strong>Teaching Assistant:</strong>
                                            <ul style={{ margin: '6px 0 0 0', paddingLeft: '20px' }}>
                                                {edu.taRoles.map((role, i) => (
                                                    <li key={i}>{role}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
