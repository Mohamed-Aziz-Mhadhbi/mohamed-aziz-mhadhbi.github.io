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
    poster:
      "https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png",
    dataWId: "e30fc721-3b58-d17e-eeb2-4554dfd40eda",
  },
];

// ✅ VideoPlayer popup
const VideoPlayer = ({ src, poster, isInView, onClose, positionClass }) => {
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
          className={`w-[220px] h-[440px] rounded-2xl shadow-2xl bg-black overflow-hidden ${positionClass}`}
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {!isLoaded && (
            <img
              src={poster}
              alt="Loading..."
              className="w-full h-full object-cover"
            />
          )}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsLoaded(true)}
            className="w-full h-full object-cover"
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
  onClose: PropTypes.func,
  positionClass: PropTypes.string,
};

VideoPlayer.defaultProps = {
  poster: "",
  isInView: false,
  onClose: () => {},
  positionClass: "",
};

// ✅ Each project item
function ProjectItem({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="mb-6 collection-item-4 relative"
      initial="hidden"
      animate="visible"
      role="listitem"
    >
      {/* Company */}
      <div className="flex items-center pb-6 _22-companyforproject">
        <img src={project.logo} alt={`${project.company} logo`} className="h-4" />
        <span className="ml-2 text-sm font-montserrat">{project.company}</span>
      </div>

      {/* Button + Video popup wrapper */}
      <div
        className="relative inline-block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* The button (stays fixed in place) */}
        <div className="flex justify-between items-center mt-4 cursor-pointer _22-navbuttonblock relative">
          <div className="_22-navbutton">{project.title}</div>
          <div className="_22-navbutttonyear">{project.year}</div>
        </div>

        {/* Video popup (absolute beside the button) */}
        <VideoPlayer
          src={project.videoSrc}
          poster={project.poster}
          isInView={hovered}
          onClose={() => setHovered(false)}
          positionClass="absolute top-0 left-full ml-3 z-50"
        />
      </div>
    </motion.div>
  );
}

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

// ✅ Portfolio main component
function Portfolio() {
  const indexedProjects = projects.map((project, index) => ({
    ...project,
    index,
  }));

  return (
    <section className="portfolio section" id="portfolios">
      <div className="min-h-screen bg-gray-100 bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50 animate-gradient font-montserrat _22-section">
        <div className="_22-homemaincolumn container mx-auto px-4 py-8 flex flex-col md:flex-row">
          <div className="_22-homeleftcolumn md:w-5/12 md:sticky md:top-0 md:max-h-screen overflow-y-auto">
            <div className="stickymenu">
              <div className="collection-list-wrapper-2">
                <div role="list" className="collection-list-3">
                  {indexedProjects.map((project) => (
                    <ProjectItem key={project.dataWId} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <motion.div
            className="_22-homerightcolumn md:w-7/12 mt-8 md:mt-0"
            initial="hidden"
            animate="visible"
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
              <div className="div-block-24 secondary flex space-x-4 mt-4">
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
}

export default Portfolio;
