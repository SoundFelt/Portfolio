import React, { useEffect, useRef, useState } from 'react'
import {useStyles} from './styles/ProjectStyles'
import { Popover } from 'react-tiny-popover'
import { IoMdInformationCircle } from "react-icons/io";

function Project (props) {
    const { projectImage, projectVideo, projectVideo2, projectVideos, title, textLeft } = props
    const classes = useStyles();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        (textLeft || width < 1200) ? (
            <div className={classes.rowContainer}>
                <ProjectDescription {...props} />
                <ProjectMedia title={title} width={width} projectVideo={projectVideo} projectVideo2={projectVideo2} projectVideos={projectVideos} projectImage={projectImage} />
            </div>
        ) : (
            <div className={classes.rowContainer}>
                <ProjectMedia title={title} width={width} projectVideo={projectVideo} projectVideo2={projectVideo2} projectVideos={projectVideos} />
                <ProjectDescription {...props} />
            </div>
        )
    )
}

const ProjectDescription = (props) => {
    const { title, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, description, seeLive, seeCode, projectVideos } = props;
    const classes = useStyles();

    const [popoverOpenIndex, setPopoverOpenIndex] = useState(null);

    const refs = useRef([]);

    const secondButtons = title === 'Client websites';

    const handleClickItem = (index) => {
        setPopoverOpenIndex((prev) => (prev === index ? null : index));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !refs.current.some((ref) => ref?.contains(event.target)) &&
                event.target.className !== 'see-code' && event.target.className !== 'see-live'
            ) {
                setPopoverOpenIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={classes.descriptionContainer}>
            <h4>{title}</h4>
            <div className={classes.logosContainer}>
                {logo1 && (
                    <div className={classes.logo1}>
                        <img alt="logo1" src={logo1}></img>
                    </div>
                )}
                {logo2 && (
                    <div className={classes.logo2}>
                        <img alt="logo2" src={logo2}></img>
                    </div>
                )}
                {logo3 && (
                    <div className={classes.logo3}>
                        <img alt="logo3" src={logo3}></img>
                    </div>
                )}
                {logo4 && (
                    <div className={classes.logo4}>
                        <img alt="logo4" src={logo4}></img>
                    </div>
                )}
                {logo5 && (
                    <div className={classes.logo5}>
                        <img alt="logo5" src={logo5}></img>
                    </div>
                )}
                {logo6 && (
                    <div className={classes.logo6}>
                        <img alt="logo5" src={logo6}></img>
                    </div>
                )}
                {logo7 && (
                    <div className={classes.logo7}>
                        <img alt="logo5" src={logo7}></img>
                    </div>
                )}
                {logo8 && (
                    <div className={classes.logo8}>
                        <img alt="logo5" src={logo8}></img>
                    </div>
                )}
            </div>
            {projectVideos ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                    { projectVideos.map((project, index) => (
                        <Popover 
                            isOpen={popoverOpenIndex === index} 
                            ref={(el) => (refs.current[index] = el)} 
                            content={(
                                <div style={{ maxWidth: '300px', fontSize: '1.1rem',backgroundColor: 'white', borderRadius: '5px', boxShadow: '3.1px 6.2px 6.2px hsl(0deg 0% 0% / 0.40)', padding: '1px 20px 20px' }}>
                                    <span dangerouslySetInnerHTML={{ __html: project.description }}/>
                                    <div style={{ display: 'flex', fontSize: '0.5rem', justifyContent: 'center' }}>
                                        {!!seeCode && <a onClick={(e) => e.stopPropagation()} target="_blank" className="see-code" href={project.codeLink} style={{ color: 'black', fontSize: '0.9rem', border: '2px solid black', padding: '2px 20px 3px', cursor: 'pointer', marginRight: '30px' }}>See code</a>}
                                        {!!seeLive && <a onClick={(e) => e.stopPropagation()} target="_blank" className="see-live" href={project.liveLink} style={{ color: 'black', fontSize: '0.9rem', border: '2px solid black', padding: '2px 20px 3px', cursor: 'pointer' }}>View live</a>}
                                    </div>
                                </div>
                            )}
                        >
                            <div onClick={() => handleClickItem(index)} 
                                style={{ fontSize: '1.4rem', margin: '0 25px 25px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                            >
                                <span>{project.title}</span>
                                <IoMdInformationCircle style={{ fontSize: '1.2rem', marginLeft: '5px', marginTop: '5px' }} />
                            </div>
                        </Popover>
                    ))}
                </div>
            ) : 
                description
            }
            { !projectVideos && (
                <div style={{ display: 'flex', marginTop: '30px' }}>
                    {!!seeCode && <a target="_blank" className="see-code" href={seeCode} style={{ color: 'black', fontSize: '0.9rem', border: '2px solid black', padding: '2px 20px 3px', cursor: 'pointer', marginRight: '30px' }}>{secondButtons ? 'See code (1)' : 'See code'}</a>}
                    {!!seeLive && <a target="_blank" className="see-live" href={seeLive} style={{ color: 'black', fontSize: '0.9rem', border: '2px solid black', padding: '2px 20px 3px', cursor: 'pointer' }}>{secondButtons ? 'View live (1)' : 'View live'}</a>}
                </div>
            )}
            { title === 'Client websites' && (
                <div style={{ display: 'flex', marginTop: '30px' }}>
                    <a target="_blank" className="see-code" href='https://github.com/SoundFelt/Dob-Personal-Website' style={{ color: 'black', fontSize: '0.9rem', border: '2px solid black', padding: '2px 20px 3px', cursor: 'pointer', marginRight: '30px' }}>See code (2)</a>
                    <a target="_blank" className="see-live" href='https://dobromirtsenov.netlify.app' style={{ color: 'black', fontSize: '0.9rem', border: '2px solid black', padding: '2px 20px 3px', cursor: 'pointer' }}>View live (2)</a>
                </div>
            )}
        </div>
    )
}

const ProjectMedia = (props) => {
    const { projectImage, projectVideo, projectVideo2, projectVideos, title, width } = props;
    const classes = useStyles();

    return (
        <div className={classes.mediaContainer}>
            {!!projectImage && (
                <img alt="project" style={{ maxWidth: '100%', maxHeight: '100%', border: '2px solid black'}} src={props.projectImage} />
            )}
            {!props.projectVideos && !projectImage && (
                <div style={{ display: 'flex', maxHeight: '100%', flexDirection: width < 500 ? 'column' : 'row', objectFit: 'contain', overflow: 'scroll', justifyContent: 'center'}}>
                    <video style={{ border: '2px solid black', maxWidth: width < 500 ? '100%' : title === 'Calendars' ? '33%' : projectVideo2 ? '45%' : '100%', objectFit: 'cover' }} loop muted playsInline autoPlay src={projectVideo}/>
                    {projectVideo2 && <video style={{ border: '2px solid black', maxWidth: width < 500 ? '100%' : title === 'Calendars' ? '62%' : '45%', objectFit: 'cover', margin: width < 500 ? '20px 0 0px' : '0 20px', }} loop muted playsInline autoPlay src={projectVideo2}/> }
                </div>
            )}
            {!!projectVideos && (
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        border: '2px solid black',
                        width: '100%',
                        height: '500px',
                        overflow: 'scroll'
                    }}
                >
                    {projectVideos.map((project, index) => (
                        <video
                            key={index}
                            style={{
                                flex: '1 1 50%',
                                maxWidth: width < 500 ? '100%' : '50%',
                                border: '1px solid black',
                                objectFit: 'cover',
                            }}
                            loop
                            muted
                            playsInline
                            autoPlay
                            src={project.video}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Project;

