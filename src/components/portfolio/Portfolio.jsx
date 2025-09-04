import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import "./portfolio.css";

const projects = [
  {
    company: "BJJ",
    logo: "https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6f6589d043962eba9989_Instagram.png",
    title: "Home BJJ App",
    year: "2024",
    videoSrc: "/videos/HomePrograms.mp4",
    poster: "https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png",
    dataWId: "e30fc721-3b58-d17e-eeb2-4554dfd40eda",
  },
];

const VideoPlayer = ({ src, poster, isInView }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isInView]);

  return (
    <AnimatePresence>
      {isInView && (
        <motion.div
          className="previewframe"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 250, damping: 22 }}
        >
          {!isLoaded && <img src={poster} alt="Video loading" className="video" />}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsLoaded(true)}
            className="video"
          >
            <source src={src} type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  isInView: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  poster: "",
  isInView: false,
};

const ProjectItem = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div className="collection-item-4 relative" role="listitem">
      <div className="_22-companyforproject">
        <img src={project.logo} alt={`${project.company} logo`} />
        <span>{project.company}</span>
      </div>
      <div
        className="relative inline-block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="_22-navbuttonblock" data-w-id={project.dataWId}>
          <div className="_22-navbutton">{project.title}</div>
          <div className="_22-navbutttonyear">{project.year}</div>
        </div>
        <VideoPlayer
          src={project.videoSrc}
          poster={project.poster}
          isInView={hovered}
        />
      </div>
    </motion.div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    company: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    dataWId: PropTypes.string.isRequired,
  }).isRequired,
};

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolios">
      <div className="_22-section">
        <div className="_22-homemaincolumn w-container">
          <div className="_22-homeleftcolumn w-col w-col-5">
            <div className="stickymenu">
              <div className="collection-list-wrapper-2">
                <div role="list" className="collection-list-3">
                  {projects.map((project) => (
                    <ProjectItem key={project.dataWId} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="_22-homerightcolumn w-col w-col-7"
            role="region"
            aria-label="Profile section"
          >
            <div className="div-block-25">
              <div className="div-block-24">
                <div className="text-block-7">
                  Mohamed Aziz Mhadhbi, <br />
                  Mobile{" "}
                  <a
                    href="https://www.linkedin.com/in/mohamed-aziz-mhadhbi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="_22-link"
                  >
                    Engineer
                  </a>
                </div>
              </div>
              <div className="div-block-24 secondary">
                <a
                  href="https://read.cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="_22-link secondary"
                >
                  About
                </a>
                <a
                  href="mailto:mhadhbimohamedaziz94@gmail.com"
                  className="_22-link secondary"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-aziz-mhadhbi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="_22-link secondary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;