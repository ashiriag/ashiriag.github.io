import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import stealthRobotVideo from '../assets/documents/StealthRobot.mp4';
import '../assets/styles/ProjectDetail.scss';

interface TemporalProjectDetailProps {
    onBack: () => void;
}

function TemporalProjectDetail({ onBack }: TemporalProjectDetailProps) {
    const publicUrl = process.env.PUBLIC_URL || '';
    const pdfUrl = `${window.location.origin}${publicUrl}/StealthPlanning.pdf`;

    return (
        <div className="project-detail-container">
            <button className="back-button" onClick={onBack}>
                <ArrowBackIcon /> Back
            </button>

            <div className="detail-content">
                <h1>Temporal Motion Planning for Stealth Navigation</h1>

                <div className="project-description">
                    <h2>Project Overview</h2>
                    <p>
                        This project implements and compares multiple motion planning strategies over a 3D (x, y, t) state space 
                        to generate dynamically feasible, collision-free, and detection-avoiding trajectories. The work integrates 
                        time-varying visibility constraints and geometric collision checking for realistic environment modeling.
                    </p>
                    <p>
                        The research addresses the challenge of planning paths that not only avoid collisions but also minimize 
                        detection probability by an observer with time-varying fields of view. This has applications in robotics, 
                        autonomous navigation, and surveillance avoidance scenarios.
                    </p>
                </div>

                <div className="video-section">
                    <h2>Project Video</h2>
                    <div className="video-wrapper">
                        <video
                            width="100%"
                            height="600"
                            controls
                            title="Temporal Motion Planning Video"
                        >
                            <source src={stealthRobotVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {
                    <div className="report-section">
                        <h2>Project Report</h2>
                        <div className="pdf-viewer">
                            <iframe
                                src={pdfUrl}
                                width="100%"
                                height="800"
                                title="StealthPlanning Report"
                            ></iframe>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default TemporalProjectDetail;
