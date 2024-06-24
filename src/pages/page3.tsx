import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pannellum } from "pannellum-react";
import tamanFatahilah3 from '../../public/tamanFatahilah3.png';

import './style.css';

const Page3 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [image] = useState(tamanFatahilah3);
    const [hotspots] = useState([
        {
            name: "page1",
            type: "custom",
            pitch: -7,
            yaw: 192,
            navigate: "/",
        },
        {
            name: "Museum Nasional Jakarta",
            type: "info",
            pitch: 1.6,
            yaw: 133,
            navigate: "",
        },
        {
            name: "Museum Seni Rupa dan Keramik",
            type: "info",
            pitch: 10,
            yaw: 35,
            navigate: "",
        },
        {
            name: "Pos Indonesia",
            type: "info",
            pitch: -3,
            yaw: 235,
            navigate: "",
        },
    ]);
    const panImage = useRef<any>(null);

    return (
        <div>
            <div className="pitch-yaw">
                <p className="pitch-yaw-text"> Pitch: {pitch} </p>
                <p className="pitch-yaw-text"> Yaw: {yaw} </p>
                <h5 className="pitch-yaw-text">© Alterra Academy</h5>
            </div>
            <Pannellum
                width='100%'
                height='100vh'
                image={image}
                title='Taman Fatahilah'
                previewTitle ="Taman Fatahilah"
                author="Dhiki Fauzan"
                previewAuthor="Dhiki Fauzan"
                // @ts-ignore
                authorURL="https://github.com/Fouz7"
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
                compass
                disableKeyboardCtrl
                ref={panImage}
                onMouseup = {(event: any) => {
                    setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
                    setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
                }}
            >
                {
                    hotspots.map((hotspot, idx) => {
                        const { name, type, pitch, yaw } = hotspot;
                        return(
                            <Pannellum.Hotspot 
                                name={name}
                                // @ts-ignore
                                type={type}
                                pitch={pitch}
                                yaw = {yaw}
                                handleClick={() => type === 'custom' && startTransition(() => navigate(hotspot.navigate))}
                                text={name}
                                key={idx}
                            />
                        )
                    })
                }
            </Pannellum>
        </div>
    )
}

export default Page3;