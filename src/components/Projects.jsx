import React from "react";
import vpn from '../assets/vpn.png';
import copeople from '../assets/copeople.png';
import research from '../assets/researchpaper.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies, iJRASET }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                {git && <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>}
                {iJRASET && <a href={iJRASET} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">iJRASET</a>}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        iJRASET={item.iJRASET}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'Data Visualisation Dashboard',
        description: 'This Dashboard is a dynamic web application I crafted using React, Flask, Next JS and MongoDB. This project is a modern and engaging dashboard which fetches data from a json file and provides graphical insights to interact seamlessly.',
        image: copeople,
        git: 'https://github.com/parth9028/Visualisation-Dashboard.git',
        technologies: ['MongoDb', 'ReactJS', 'NextJS', "Flask", "Tailwind CSS"]
    },
    {
        title: 'Road Accident Analysis',
        description: 'This is classification machine learning project designed to advice the Ministry Of Road Transport and Highways, India. It seamlessly classifies the factors leading to the accident resulting in helping the government take informed decision about the upgradation of infrastructure.',
        image: vpn,
        git: "https://github.com/parth9028/Road-accident-analysis-.git",
        technologies: ['Machine Learning', 'Python']
    },
    {
        title: 'Publications',
        description: 'Published a certified research paper on iJRASET on Road Accident Analysis and Classification using Machine Learning in 2024.',
        image: research,
        iJRASET: "https://www.ijraset.com/best-journal/road-accident-analysis-and-classification-using-machine-learning-algorithms",
        technologies: ['Machine Learning', 'Python']

    }
]

export default Projects;