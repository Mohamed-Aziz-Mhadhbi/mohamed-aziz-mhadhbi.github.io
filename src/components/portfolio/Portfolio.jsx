import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import './portfolio.css';

const projects = [
    {
        company: "Instagram",
        logo: "https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6f6589d043962eba9989_Instagram.png",
        title: "DM Resharing",
        year: "2022",
        videoSrc: "https://www.dl.dropboxusercontent.com/s/ziy402vw9fnt783/ReshareHub1000bitrate.mp4?dl=0",
        poster: "https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png",
        dataWId: "e30fc721-3b58-d17e-eeb2-4554dfd40eda",
    },
    {
        company: "Instagram",
        logo: "https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6f6589d043962eba9989_Instagram.png",
        title: "Gyro Pride Theme",
        year: "2021",
        videoSrc: "https://www.dl.dropboxusercontent.com/s/cd23zgazbqowbw1/GyroThemeFrame.mp4?dl=0",
        poster: "https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png",
        dataWId: "e30fc721-3b58-d17e-eeb2-4554dfd40eda",
    },
    {
        company: "Meta · with Chris S",
        logo: "https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6ff0f87d29567099f57b_Meta.png",
        title: "Origami System",
        year: "2020",
        videoSrc: "https://www.dl.dropboxusercontent.com/s/lrcsd1pd5iz1e92/Messenger%20Origami%20System.mp4?dl=0",
        poster: "https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png",
        dataWId: "e30fc721-3b58-d17e-eeb2-4554dfd40eda",
    },
    {
        company: "Microsoft",
        logo: "https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6ffaab93d72ba3854b81_Microsoft.png",
        title: "Microsoft Project",
        year: "2019",
        videoSrc: "https://www.dl.dropboxusercontent.com/s/51sc1915rpd72ya/ProjectWeb.mp4?dl=0",
        poster: "https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png",
        dataWId: "e30fc721-3b58-d17e-eeb2-4554dfd40eda",
    },
    {
        company: "Microsoft · with Nando C",
        logo: "https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6ffaab93d72ba3854b81_Microsoft.png",
        title: "Microsoft Tasks",
        year: "2018",
        videoSrc: "https://www.dl.dropboxusercontent.com/s/lm47adbjo2rrdf8/MicrosoftTasks%20Cut.mp4?dl=0",
        poster: "https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png",
        dataWId: "e30fc721-3b58-d17e-eeb2-4554dfd40eda",
    },
    {
        company: "Microsoft",
        logo: "https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6ffaab93d72ba3854b81_Microsoft.png",
        title: "Mobile Tasks",
        year: "2017",
        videoSrc: "https://www.dl.dropboxusercontent.com/s/lm47adbjo2rrdf8/MicrosoftTasks%20Cut.mp4?dl=0",
        poster: "https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png",
        dataWId: "e30fc721-3b58-d17e-eeb2-4554dfd40eda",
    },
];

// VideoPlayer component with enhanced pop-up effect
const VideoPlayer = ({ src, poster, isDesktop, isTablet, onMouseOver, onMouseOut, onClick, dataWId, isInView }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        let isMounted = true;

        const playVideo = async () => {
            if (video && isMounted) {
                try {
                    await video.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.error('Video play failed:', error);
                    if (isMounted) setIsPlaying(false);
                }
            }
        };

        const pauseVideo = () => {
            if (video && isMounted) {
                video.pause();
                video.currentTime = 0; // Reset to start
                setIsPlaying(false);
            }
        };

        // Play video when in view, pause when out of view
        if (isInView) {
            playVideo();
        } else {
            pauseVideo();
        }

        return () => {
            isMounted = false;
            if (video) {
                video.pause();
            }
        };
    }, [isInView]);

    const handleMouseOverInternal = () => {
        if (
            videoRef.current &&
            !window.matchMedia('(pointer: coarse)').matches && // Exclude touch devices
            !isPlaying
        ) {
            setIsPlaying(true);
        }
        if (onMouseOver) onMouseOver();
    };

    const handleMouseOutInternal = () => {
        if (videoRef.current && isPlaying && !isInView) {
            setIsPlaying(false);
        }
        if (onMouseOut) onMouseOut();
    };

    const handleClickInternal = () => {
        if (videoRef.current) {
            setIsPlaying((prev) => !prev);
        }
        if (onClick) onClick();
    };

    const videoWrapperVariants = {
        hidden: { opacity: isDesktop || isTablet ? 0 : 1 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                delay: isDesktop || isTablet ? 0.2 : 0,
            },
        },
        popup: {
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    const videoFrameVariants = {
        hidden: { opacity: 0, scale: isDesktop || isTablet ? 0.98 : 1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                delay: isDesktop || isTablet ? 0.3 : 0,
            },
        },
        popup: {
            scale: isDesktop ? 1.5 : isTablet ? 1.3 : 1.2, // Larger scale for visibility
            zIndex: 1000,
            position: 'fixed',
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            borderRadius: '10px',
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    return (
        <motion.div
            className="relative _22-videopreviewwrapper"
            initial="hidden"
            animate={isInView ? 'popup' : 'visible'}
            variants={videoWrapperVariants}
            data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40edb"
        >
            <img
                src="https://cdn.prod.website-files.com/5c58d24c0c3ff625822bee4b/6265e3642fe049989c180c39_22-closeBtn.svg"
                alt="Close button"
                className={`absolute top-2 right-2 z-10 cursor-pointer _22-closepreviewbtn ${isInView ? '' : 'hidden'}`}
                data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40edc"
            />
            <motion.div
                className="relative previewframe"
                variants={videoFrameVariants}
                animate={isInView ? 'popup' : 'visible'}
                onMouseOver={handleMouseOverInternal}
                onMouseOut={handleMouseOutInternal}
                onClick={handleClickInternal}
                data-w-id={dataWId}
            >
                <video
                    ref={videoRef}
                    className="max-h-[70vh] max-w-[70vw] object-contain video"
                    preload="preload"
                    loop
                    muted
                    playsInline
                    poster={poster}
                >
                    <source src={src} type="video/mp4" />
                </video>
                <div
                    className={`absolute inset-0 bg-black bg-opacity-50 popupbg ${isInView ? '' : 'hidden'}`}
                    data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40ede"
                ></div>
            </motion.div>
        </motion.div>
    );
};

VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string,
    isDesktop: PropTypes.bool,
    isTablet: PropTypes.bool,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onClick: PropTypes.func,
    dataWId: PropTypes.string,
    isInView: PropTypes.bool,
};

VideoPlayer.defaultProps = {
    isDesktop: false,
    isTablet: false,
    poster: '',
    onMouseOver: null,
    onMouseOut: null,
    onClick: null,
    dataWId: '',
    isInView: false,
};

// ProjectItem component with Intersection Observer
function ProjectItem({ project, isDesktop, isTablet, isActive, setActiveIndex }) {
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveIndex(project.index);
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the item is visible
                rootMargin: '0px',
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, [setActiveIndex, project.index]);

    const itemVariants = {
        hidden: { opacity: 0, scale: isDesktop || isTablet ? 0.95 : 1, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: isDesktop || isTablet ? 0.1 : 0,
            },
        },
    };

    return (
        <motion.div
            ref={itemRef}
            className="mb-6 collection-item-4"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            data-w-id={project.dataWId}
        >
            <div className="flex items-center pb-6 _22-companyforproject">
                <img src={project.logo} alt={`${project.company} logo`} className="h-4" />
                <span className="ml-2 text-sm font-montserrat opacity-100">{project.company}</span>
            </div>
            <VideoPlayer
                src={project.videoSrc}
                poster={project.poster}
                isDesktop={isDesktop}
                isTablet={isTablet}
                dataWId="e30fc721-3b58-d17e-eeb2-4554dfd40edd"
                isInView={isActive}
            />
            <div
                className="flex justify-between items-center mt-4 cursor-pointer _22-navbuttonblock"
                data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40edf"
            >
                <div className="_22-navbutton">{project.title}</div>
                <div className="_22-navbutttonyear">{project.year}</div>
            </div>
        </motion.div>
    );
}

ProjectItem.propTypes = {
    project: PropTypes.shape({
        index: PropTypes.number.isRequired,
        company: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        videoSrc: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        dataWId: PropTypes.string.isRequired,
    }).isRequired,
    isDesktop: PropTypes.bool,
    isTablet: PropTypes.bool,
    isActive: PropTypes.bool,
    setActiveIndex: PropTypes.func.isRequired,
};

ProjectItem.defaultProps = {
    isDesktop: false,
    isTablet: false,
    isActive: false,
};

// Portfolio component with active index state
function Portfolio() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth <= 991);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(isTouch);
        document.documentElement.className += isTouch ? ' w-mod-touch' : ' w-mod-js';

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 992);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 991);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const profileVariants = {
        hidden: { opacity: isDesktop || isTablet ? 0 : 1, x: isDesktop || isTablet ? 20 : 0 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: isDesktop || isTablet ? 0.4 : 0,
            },
        },
    };

    const indexedProjects = projects.map((project, index) => ({ ...project, index }));

    return (
        <section className="portfolio section" id="portfolios">
            <div className="min-h-screen bg-gray-100 bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50 animate-gradient font-montserrat _22-section">
                <div className="_22-homemaincolumn container mx-auto px-4 py-8 flex flex-col md:flex-row">
                    <div className="_22-homeleftcolumn md:w-5/12 md:sticky md:top-0 md:max-h-screen overflow-y-auto">
                        <div className="stickymenu">
                            <div className="collection-list-wrapper-2">
                                <div role="list" className="collection-list-3">
                                    <AnimatePresence>
                                        {indexedProjects.map((project) => (
                                            <ProjectItem
                                                key={project.index}
                                                project={project}
                                                isDesktop={isDesktop}
                                                isTablet={isTablet}
                                                isActive={activeIndex === project.index}
                                                setActiveIndex={setActiveIndex}
                                            />
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        className="_22-homerightcolumn md:w-7/12 mt-8 md:mt-0"
                        initial="hidden"
                        animate="visible"
                        variants={profileVariants}
                        data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40ee5"
                    >
                        <div className="div-block-25">
                            <div className="div-block-24">
                                <div className="text-block-7">
                                    Mohamed Aziz Mhadhbi, <br />
                                    Mobile {' '}
                                    <a href="https://www.linkedin.com/in/mohamed-aziz-mhadhbi" target="_blank" className="_22-link">
                                        Engineer
                                    </a>
                                </div>
                            </div>
                            <div className="div-block-24 secondary flex space-x-4 mt-4">
                                <a href="https://read.cv" target="_blank" className="_22-link secondary">
                                    About
                                </a>
                                <a href="mailto:mhadhbimohamedaziz94@gmail.com" className="_22-link secondary">
                                    Email
                                </a>
                                <a href="https://www.linkedin.com/in/mohamed-aziz-mhadhbi" target="_blank" className="_22-link secondary">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;