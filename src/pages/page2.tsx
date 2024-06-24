import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pannellum } from "pannellum-react";
import tamanFatahilah2 from '../../public/tamanFatahilah2.png';

import './style.css';

const Page2 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [image] = useState(tamanFatahilah2);
    const [hotspots] = useState([
        {
            name: "page1",
            type: "custom",
            pitch: 6,
            yaw: 352,
            navigate: "/",
        },
        {
            name: "Cafe Batavia",
            type: "info",
            pitch: -10,
            yaw: 260,
            navigate: "",
        },
        {
            name: "Bank Mega",
            type: "info",
            pitch: 10,
            yaw: 170,
            navigate: "",
        },
        {
            name: "Museum Wayang",
            type: "info",
            pitch: -3,
            yaw: 135,
            navigate: "",
        },
        {
            name: "Museum Nasional Jakarta",
            type: "info",
            pitch: 7,
            yaw: 71,
            navigate: "",
        },
    ])
    const panImage = useRef<any>(null);

    return (
        <div>
            <div className="pitch-yaw">
                <p className="pitch-yaw-text"> Pitch: {pitch} </p>
                <p className="pitch-yaw-text"> Yaw: {yaw} </p>
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
                pitch={-10}
                yaw={280}
                hfov={120}
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
                    hotspots.map((hotspot, index) => {
                        const { name, type, pitch, yaw } = hotspot;
                        return (
                            <Pannellum.Hotspot
                                name = {name}
                                // @ts-ignore
                                type = {type}
                                pitch = {pitch}
                                yaw = {yaw}
                                handleClick = {
                                    () => type === 'custom' && startTransition(() => navigate(hotspot.navigate))
                                }
                                text = {name}
                                key = {index}
                            />
                        )
                    })
                }
            </Pannellum>
        </div>
    )
}

export default Page2;