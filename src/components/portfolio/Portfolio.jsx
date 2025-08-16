import "./portfolio.css";

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="_22-section">
                <div className="_22-homemaincolumn w-row">
                    <div className="_22-homeleftcolumn w-col w-col-5 w-col-medium-5">
                        <div className="stickymenu">
                            <div className="collection-list-wrapper-2 w-dyn-list">
                                <div role="list" className="collection-list-3 w-dyn-items">
                                    <div role="listitem" className="collection-item-4 w-dyn-item">
                                        <div
                                            data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40eda"
                                            className="_22-companyforproject w-embed"
                                        >
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                paddingBottom: 24
                                            }}>
                                                <img
                                                    src="https://cdn.prod.website-files.com/5c58d24c0c3ff685c32bee79/626f6f6589d043962eba9989_Instagram.png"
                                                    height="16px"
                                                    alt="Instagram"
                                                />
                                                <span style={{
                                                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue"',
                                                    opacity: 1,
                                                    paddingLeft: 8,
                                                    fontSize: 14
                                                }}>
                                                    Instagram
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40edb"
                                            className="_22-videopreviewwrapper w-container"
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/5c58d24c0c3ff625822bee4b/6265e3642fe049989c180c39_22-closeBtn.svg"
                                                loading="lazy"
                                                alt="Close button"
                                                className="_22-closepreviewbtn"
                                            />
                                            <div
                                                data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40edd"
                                                className="previewframe w-embed"
                                            >
                                                <video
                                                    className="video"
                                                    style={{
                                                        objectFit: "contain",
                                                        overflow: "hidden",
                                                        maxHeight: "81vh",
                                                        maxWidth: "80vw"
                                                    }}
                                                    preload="auto"
                                                    loop
                                                    muted
                                                    playsInline
                                                    poster="https://www.dl.dropboxusercontent.com/s/85io6p4762caep4/BettyPoster3.png"
                                                >
                                                    <source
                                                        src="https://www.dl.dropboxusercontent.com/s/ziy402vw9fnt783/ReshareHub1000bitrate.mp4?dl=0"
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>
                                            <div className="popupbg" />
                                        </div>
                                        <div className="_22-navbuttonblock">
                                            <div className="_22-navbutton">DM Resharing</div>
                                            <div className="_22-navbutttonyear">2022</div>
                                        </div>
                                    </div>
                                    {/* Repeat similar fixes for other items */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-w-id="e30fc721-3b58-d17e-eeb2-4554dfd40ee5"
                        className="_22-homerightcolumn w-col w-col-7 w-col-medium-7"
                    >
                        <div>
                            <div className="div-block-25">
                                <div className="div-block-24">
                                    <div className="text-block-7 _2">
                                        Mohamed Aziz Mhadhbi, <br />
                                        Mobile Engineer —
                                        <span className="_22-link _2" />
                                        <a href="https://apple.com" target="_blank" rel="noreferrer">
                                            <span className="_22-link _2">Turning Ideas into Seamless Apps</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="div-block-24 secondary">
                                    <a href="mailto:mhadhbimohamedaziz94@gmail.com" className="_22-link secondary">
                                        Email
                                    </a>
                                    <a href="https://www.linkedin.com/in/mohamed-aziz-mhadhbi" target="_blank" rel="noreferrer" className="_22-link secondary">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_22-lastupdated">Aug '22</div>
            </div>
            <div className="_22-animatedgradientbackground w-embed">
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                            body {
                                background-color: hsla(180,1%,97%,1);
                                background-image: radial-gradient(at 81% 65%, hsla(218,98%,94%,1) 0px, transparent 50%);
                                background-size: 500% 500%;
                                animation: gradient 9s ease infinite;
                                height: 100vh;
                            }
                            @keyframes gradient {
                                0% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                                100% { background-position: 0% 50%; }
                            }
                        `
                    }}
                />
            </div>
        </section>
    );
};

export default Portfolio;
