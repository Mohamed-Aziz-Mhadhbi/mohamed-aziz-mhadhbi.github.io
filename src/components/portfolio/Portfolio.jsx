import React from 'react';
import './portfolio.css';

const projects = [
    {
        id: '1',
        company: 'Instagram',
        logo: 'https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6f6589d043962eba9989_Instagram.png',
        videoSrc: 'https://www.dl.dropboxusercontent.com/s/ziy402vw9fnt783/ReshareHub1000bitrate.mp4?dl=0',
        poster: 'https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png',
        title: 'DM Resharing',
        year: '2022',
    },
    {
        id: '2',
        company: 'Instagram',
        logo: 'https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6f6589d043962eba9989_Instagram.png',
        videoSrc: 'https://www.dl.dropboxusercontent.com/s/cd23zgazbqowbw1/GyroThemeFrame.mp4?dl=0',
        poster: 'https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png',
        title: 'Gyro Pride Theme',
        year: '2021',
    },
    {
        id: '3',
        company: 'Meta · with Chris S',
        logo: 'https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6ff0f87d29567099f57b_Meta.png',
        videoSrc: 'https://www.dl.dropboxusercontent.com/s/lrcsd1pd5iz1e92/Messenger%20Origami%20System.mp4?dl=0',
        poster: 'https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png',
        title: 'Origami System',
        year: '2020',
    },
    {
        id: '4',
        company: 'Microsoft',
        logo: 'https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6ffaab93d72ba3854b81_Microsoft.png',
        videoSrc: 'https://www.dl.dropboxusercontent.com/s/51sc1915rpd72ya/ProjectWeb.mp4?dl=0',
        poster: 'https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png',
        title: 'Microsoft Project',
        year: '2019',
    },
    {
        id: '5',
        company: 'Microsoft · with Nando C',
        logo: 'https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6ffaab93d72ba3854b81_Microsoft.png',
        videoSrc: 'https://www.dl.dropboxusercontent.com/s/lm47adbjo2rrdf8/MicrosoftTasks%20Cut.mp4?dl=0',
        poster: 'https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png',
        title: 'Microsoft Tasks',
        year: '2018',
    },
    {
        id: '6',
        company: 'Microsoft',
        logo: 'https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6ffaab93d72ba3854b81_Microsoft.png',
        videoSrc: 'https://drive.google.com/file/d/1n6-vaHmT0jkRGIS2f04y7tX_Sts6A-vo/view',
        poster: 'https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png',
        title: 'Mobile Tasks',
        year: '2017',
    },
];
const ProjectItem = ({ project }) => {
    const videoRef = React.useRef(null);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    const handleMouseOver = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseOut = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div role="listitem" className="collection-item-4 w-dyn-item">
            <div data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40eda" className="_22-companyforproject">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '24px' }}>
                    <img src={project.logo} style={{ height: '16px' }} alt={`${project.company} logo`} />
                    <span style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue'", opacity: 1, paddingLeft: '8px', fontSize: '14px' }}>
                        {project.company}
                    </span>
                </div>
            </div>
            <div data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40edb" className="_22-videopreviewwrapper w-container">
                <img src="https://cdn.prod.website-files.com/5c58d24c0c3ff625822bee4b/6265e3642fe049989c180c39_22-closeBtn.svg" loading="lazy" data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40edc" alt="Close button" className="_22-closepreviewbtn" />
                <div
                    data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40edd"
                    className="previewframe"
                    // initial={{ opacity: 0, scale: 0.95 }}
                    // animate={{ opacity: 1, scale: 1 }}
                    // transition={{ duration: 0.3 }}
                    >
                    <video ref={videoRef} className="video" style={{ objectFit: 'contain', overflow: 'hidden', maxHeight: '81vh', maxWidth: '80vw' }} preload="preload" loop muted playsInline poster={project.poster}>
                        <source src={project.videoSrc} type="video/mp4" />
                    </video>
                </div>
                <div data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40ede"
                    className="popupbg"
                    // style={{ display: isPopupOpen ? 'block' : 'none' }}
                    // onClick={() => setIsPopupOpen(false)}
                    >
                    </div>
            </div>
            <div data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40edf" className="_22-navbuttonblock" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className="_22-navbutton">{project.title}</div>
                <div className="_22-navbutttonyear">{project.year}</div>
            </div>
        </div>
    );
};

const Portfolio = () => {
    return (
        <>
            <div className="_22-section">
                <div className="_22-homemaincolumn w-row">
                    <div className="_22-homeleftcolumn w-col w-col-5 w-col-medium-5">
                        <div className="stickymenu">
                            <div className="collection-list-wrapper-2 w-dyn-list">
                                <div role="list" className="collection-list-3 w-dyn-items">
                                    {projects.map((project) => (
                                        <ProjectItem key={project.id} project={project} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40ee5" className="_22-homerightcolumn w-col w-col-7 w-col-medium-7">
                        <div>
                            <div className="div-block-25">
                                <div className="div-block-24">
                                    <div className="text-block-7 _2">
                                        Mohamed Aziz Mhadhbi, <br />
                                        mobile engineer{' '}
                                        <a href="/" target="_blank" className="_22-link _2">
                                            Work
                                        </a>
                                    </div>
                                </div>
                                <div className="div-block-24 secondary">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="_22-animatedgradientbackground"></div>
        </>
    );
};

export default Portfolio;