import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import pingpongVideo from '../assets/documents/pingpongrobot.mp4';
import pingpongPdf from '../assets/documents/PingPongRobot.pdf';
import '../assets/styles/ProjectDetail.scss';

interface PingPongProjectDetailProps {
    onBack: () => void;
}

function PingPongProjectDetail({ onBack }: PingPongProjectDetailProps) {
    return (
        <div className="project-detail-container">
            <button className="back-button" onClick={onBack}>
                <ArrowBackIcon /> Back
            </button>

            <div className="detail-content">
                <h1>Ping Pong Robotic Arm</h1>

                <div className="project-description">
                    <h2>Project Overview</h2>
                    <p>
                        This project implements a control and planning pipeline for a robotic arm to track and predict
                        the trajectory of randomly spawned ping pong balls, executing paddle motions to redirect them
                        toward a target in RViz.
                    </p>
                    <p>
                        The system integrates real-time ball trajectory prediction with inverse kinematics and motion
                        planning to generate fast, accurate paddle swings. The pipeline was developed and validated
                        entirely in simulation using ROS and RViz.
                    </p>
                </div>

                <div className="video-section">
                    <h2>Project Video</h2>
                    <div className="video-wrapper">
                        <video
                            width="100%"
                            height="600"
                            controls
                            title="Ping Pong Robotic Arm Video"
                        >
                            <source src={pingpongVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className="report-section">
                    <h2>Project Report</h2>
                    <div className="pdf-viewer">
                        <iframe
                            src={pingpongPdf}
                            width="100%"
                            height="800"
                            title="PingPongRobot Report"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PingPongProjectDetail;
