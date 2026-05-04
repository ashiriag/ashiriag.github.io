import React from "react";
import stealth from '../assets/images/stealth.png';
import arm from '../assets/images/arm.png';
import '../assets/styles/Project.scss';

interface ProjectProps {
    onProjectClick?: (view: string) => void;
}

function Project({ onProjectClick }: ProjectProps) {
    const saveScrollPosition = () => {
        sessionStorage.setItem('homeScrollY', String(window.scrollY));
    };

    const projects = [
        {
            title: "RobotX - Autonomous Surface Vehicle",
            github: "https://www.teaminspiration.global/robotx2022",
            image: "https://images.squarespace-cdn.com/content/v1/62d312a3f70ea76c81021b3a/5aafc4f0-06af-409a-add3-26ad70a4d407/Screenshot+2024-08-16+144719.jpg?format=2500w",
            description: "An autonomous surface vehicle stack for maritime navigation, built around ROS2, Python, Gazebo, GPS waypoint following, LiDAR, and depth-camera perception for simulation-to-deployment testing.",
            isExternal: true,
            view: '',
            skills: ["ROS2", "Python", "Gazebo", "LiDAR", "GPS", "Depth Cameras", "Autonomy"]
        },
        {
            title: "RoboSub - Autonomous Underwater Vehicle",
            github: "https://www.inspirationrobosub.com/robosub-2021",
            image: "https://images.squarespace-cdn.com/content/v1/646905901bef743846df8fac/5682c9f0-bef6-4bd8-b475-00004e827603/Screenshot+2024-06-20+at+10.11.10%E2%80%AFPM.png?format=2500w",
            description: "An autonomous underwater vehicle platform using ROS, Python, DVL-IMU sensor fusion, underwater communication, and Unity simulation to support perception-driven mission execution.",
            isExternal: true,
            view: '',
            skills: ["ROS", "Python", "Unity", "Sensor Fusion", "DVL", "IMU", "Simulation"]
        },
        {
            title: "Temporal Motion Planning for Stealth Navigation",
            github: "https://github.com/ashiriag/temporal-motion-planning",
            image: stealth,
            description: "A motion-planning project for x-y-time navigation through dynamic danger zones, comparing RRT, A*, and search-based planners under time-varying visibility constraints.",
            isExternal: false,
            view: 'temporal',
            skills: ["Motion Planning", "Python", "RRT", "A*", "Search"]
        },
        {
            title: "Ping Pong Robotic Arm",
            github: "",
            image: arm,
            description: "A ROS2/RViz robotic arm simulation for tracking ping pong balls, predicting trajectories, solving inverse kinematics, and planning paddle motions to redirect each ball toward a target.",
            isExternal: false,
            view: 'pingpong',
            skills: ["ROS2", "RViz", "Inverse Kinematics", "Trajectory Prediction", "Python", "Controls"]
        }
    ];

    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div key={index} className="project">
                    {project.isExternal ? (
                        <>
                            <a href={project.github} onClick={saveScrollPosition}><img src={project.image} className="zoom" alt="thumbnail" width="100%"/></a>
                            <a href={project.github} onClick={saveScrollPosition}><h2>{project.title}</h2></a>
                        </>
                    ) : (
                        <>
                            <div onClick={() => onProjectClick?.(project.view)} style={{ cursor: 'pointer' }}>
                                <img src={project.image} className="zoom" alt="thumbnail" width="100%"/>
                            </div>
                            <div onClick={() => onProjectClick?.(project.view)} style={{ cursor: 'pointer' }}>
                                <h2>{project.title}</h2>
                            </div>
                        </>
                    )}
                    <p>{project.description}</p>
                    <div className="project-skills">
                        {project.skills.map((skill, i) => (
                            <span key={i} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
