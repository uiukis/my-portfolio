import React from "react";
import ReactTooltip from "react-tooltip";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoReader } from "react-icons/io5"
import pdf from '../files/curriculo.pdf'


export default function About() {
    return (
        <section id="about">
            <div className="banner container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Wilker.
                        <span class="emoji-alien" aria-label="alien" role="img">👽</span>

                        <br className="lg:inline-block" />
                        I love to build amazing apps.
                    </h1>
                    &nbsp;
                    <p className="mb-8 leading-relaxed">
                        I am currently in the last semester of the Faculty of Systems Analysis and Development.
                        In addition to the knowledge I gained at graduation, I have experience in the Information Technology Area in general.
                        I'm looking for an opportunity in the job market to put my knowledge into practice and get more enriching experiences for professional and personal growth.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://github.com/uiukis" data-tip data-for='github' target="_blank" rel="noopener noreferrer"
                            className="inline-flex w-10 mb-4" >
                            <IoLogoGithub className="icon" size={40} color="#fff" />
                        </a>
                        <ReactTooltip id='github'>GitHub</ReactTooltip>
                        &nbsp;
                        <a
                            href="https://www.linkedin.com/in/fquirino/" data-tip data-for='linkedin' target="_blank" rel="noopener noreferrer"
                            className="inline-flex w-10 mb-4" >
                            <IoLogoLinkedin className="icon" size={40} color="#fff" />
                        </a>
                        <ReactTooltip id='linkedin'>LinkedIn</ReactTooltip>
                        &nbsp;
                        <a href="https://www.instagram.com/_uiukis/" data-tip data-for='instagram' target="_blank" rel="noopener noreferrer"
                            className="inline-flex w-10 mb-4" >
                            <IoLogoInstagram className="icon" size={40} color="#fff" />
                        </a>
                        <ReactTooltip id='instagram'>Instagram</ReactTooltip>
                        &nbsp;
                        <a
                            href={pdf} data-tip data-for='Resume' target="_blank" rel="noopener noreferrer"
                            className="inline-flex w-10 mb-4" >
                            <IoReader className="icon" size={39} color="#fff" />
                        </a>
                        <ReactTooltip id='Resume'>Resume</ReactTooltip>
                    </div>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            <button>Talk To Me</button>
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            <button>See Some Of My Projects</button>
                        </a>

                    </div>

                </div>

                <div className="img wrapper lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}
