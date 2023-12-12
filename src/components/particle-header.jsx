"use client"
import React, { useCallback } from 'react'
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { loadSlim } from 'tsparticles-slim';


export default function ParticleHeader() {

   const options = React.useMemo(()=>{
    return {
        "links" : {
            "enable" : true
        },
        "fullScreen": {
            "zIndex": -1
        },
        "interactivity": {
            "events": {
                "onClick": {
                    "enable": false,
                    "mode": "push"
                },
                "onDiv": {
                    "elementId": "repulse-div",
                    "enable": false,
                    "mode": "repulse"
                },
                "onHover": {
                    "enable": true,
                    "mode": "bubble",
                    "parallax": {
                        "enable": false,
                        "force": 60,
                        "smooth": 10
                    }
                },
                "resize": true
            },
            "modes": {
                "bubble": {
                    "distance": 400,
                    "duration": 2,
                    "opacity": 0.8,
                    "size": 40,
                    "speed": 3
                },
                "connect": {
                    "distance": 80,
                    "lineLinked": {
                        "opacity": 0.5
                    },
                    "radius": 60
                },
                "grab": {
                    "distance": 400,
                    "lineLinked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "quantity": 4
                },
                "remove": {
                    "quantity": 2
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                }
            }
        },
        "particles": {
            "color": {
                "value": "#ffffff"
            },
            "lineLinked": {
                "blink": false,
                "color": "#000",
                "consent": false,
                "distance": 150,
                "enable": false,
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "attract": {
                    "enable": false,
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "bounce": false,
                "direction": "none",
                "enable": true,
                "outMode": "out",
                "random": false,
                "speed": 2,
                "straight": false
            },
            "number": {
                "density": {
                    "enable": true
                },
                "limit": 0,
                "value": 80
            },
            "opacity": {
                "animation": {
                    "enable": true,
                    "minimumValue": 0.2,
                    "speed": 1,
                    "sync": false
                },
                "random": true,
                "value": 1
            },
            "rotate": {
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                },
                "direction": "random",
                "random": true,
                "value": 0
            },
            "shape": {
                "character": {
                    "fill": false,
                    "font": "Verdana",  
                    "style": "",
                    "value": "*",
                    "weight": "400"
                },
                "image": [
                    {
                        "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "https://miro.medium.com/v2/resize:fit:720/1*Cnv3NyPBLkabjYUBJuZnBw.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/tailwindcss.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "https://play-lh.googleusercontent.com/lNy35u_4HIHu4Wqj0WIENtN0HmeZuEx4V8UwdMw0wxcRKvYbskmPEII05HWxK5nI0g=w240-h480-rw",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "https://cdn.iconscout.com/icon/free/png-256/free-npm-3521612-2945056.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
                        "width": 32,
                        "height": 32
                    },
                    {
                        "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/next-js-icon-512x512-zuauazrk.png?alt=media&token=468a5b4b-2ad9-4426-a402-06db307f783d",
                        "width": 32,
                        "height": 32
                    },
                ],
                "polygon": {
                    "sides": 5
                },
                "stroke": {
                    "color": "#000000",
                    "width": 0
                },
                "type": "image"
            },
            "size": {
                "animation": {
                    "enable": false,
                    "minimumValue": 0.1,
                    "speed": 40,
                    "sync": false
                },
                "random": false,
                "value": 16
            }
        },
        "polygon": {
            "draw": {
                "enable": false,
                "lineColor": "#ffffff",
                "lineWidth": 0.5
            },
            "move": {
                "radius": 10
            },
            "scale": 1,
            "type": "none",
            "url": ""
        },
        "background": {
            "color": "#222222",
            "image": "url(/noise.png)",
            // "position": "50% 50%",
            // "repeat": "no-repeat",
            "size": "contain"
        }
    }
   }, [])

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull (engine);
    // await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    console.log(container);
}, []);

return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
    />
);
}
