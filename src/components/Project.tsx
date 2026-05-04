import React from "react";
import stealth from '../assets/images/stealth.png';
import arm from '../assets/images/arm.png';
import '../assets/styles/Project.scss';

interface ProjectProps {
    onProjectClick?: (view: string) => void;
}

function Project({ onProjectClick }: ProjectProps) {
    const projects = [
        {
            title: "RobotX - Autonomous Surface Vehicle",
            github: "https://www.teaminspiration.global/robotx2022",
            image: "https://images.squarespace-cdn.com/content/v1/62d312a3f70ea76c81021b3a/5aafc4f0-06af-409a-add3-26ad70a4d407/Screenshot+2024-08-16+144719.jpg?format=2500w",
            description: "Developed navigation and control software for an autonomous surface vehicle using ROS2, Python, and Gazebo, integrating LiDAR, depth cameras, and GPS for simulation-to-deployment. Awards: 1st Place – Design Presentation, 1st Place – Team Intro Video, 2nd Place – Design Documentation.",
            isExternal: true,
            view: '',
            skills: ["ROS2", "Python", "Gazebo", "LiDAR", "GPS", "Depth Cameras", "Multi-Agent Collaboration"]
        },
        {
            title: "RoboSub - Autonomous Underwater Vehicle",
            github: "https://www.inspirationrobosub.com/robosub-2021",
            image: "https://images.squarespace-cdn.com/content/v1/646905901bef743846df8fac/5682c9f0-bef6-4bd8-b475-00004e827603/Screenshot+2024-06-20+at+10.11.10%E2%80%AFPM.png?format=2500w",
            description: "Led development of AUV navigation and sensor fusion systems using ROS, integrating DVL, IMU, and underwater modem communication for autonomous mission execution. Built a Unity-based simulation to test performance in realistic underwater environments. Awards: Global Champion (2020), IEEE OES Innovation Award (2019).",
            isExternal: true,
            view: '',
            skills: ["ROS", "Python", "Unity", "Sensor Fusion", "DVL", "IMU", "Multi-Agent Collaboration"]
        },
        {
            title: "Temporal Motion Planning for Stealth Navigation",
            github: "https://github.com/ashiriag/temporal-motion-planning",
            image: stealth,
            description: "Implemented and compared multiple motion planning strategies over a 3D (x, y, t) state space to generate dynamically feasible, collision-free, and detection-avoiding trajectories. Integrated time-varying visibility constraints and geometric collision checking for realistic environment modeling.",
            isExternal: false,
            view: 'temporal',
            skills: ["Motion Planning", "Python", "RRT", "A*", "Collision Detection"]
        },
        {
            title: "Ping Pong Robotic Arm",
            github: "",
            image: arm,
            description: "Implemented a control and planning pipeline for a robot to track and predict the trajectory of randomly spawned ping pong balls, executing paddle motions to redirect them toward a target in RViz.",
            isExternal: false,
            view: 'pingpong',
            skills: ["ROS", "RViz", "Inverse Kinematics", "Trajectory Prediction", "Python"]
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
                            <a href={project.github} target="_blank" rel="noreferrer"><img src={project.image} className="zoom" alt="thumbnail" width="100%"/></a>
                            <a href={project.github} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
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