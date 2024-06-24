import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pannellum } from "pannellum-react";
import tamanFatahilah1 from '../../public/tamanFatahilah1.png';

import './style.css';

const Page1 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [ image ] = useState(tamanFatahilah1);
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
                pitch={1}
                yaw={180}
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
                <Pannellum.Hotspot
                    type='custom'
                    pitch={-5}
                    yaw={200}
                    handleClick={() => startTransition(() => navigate('/page2'))}
                    // @ts-ignore
                    name='area2'
                />
                <Pannellum.Hotspot
                    type='info'
                    pitch={3}
                    yaw={129}
                    text='Museum Nasional Jakarta'
                />
                <Pannellum.Hotspot
                    type='info'
                    pitch={-6}
                    yaw={178}
                    text='Meriam Si Jagur'
                />
                <Pannellum.Hotspot
                    type='custom'
                    pitch={4}
                    yaw={30}
                    handleClick={() => startTransition(() => navigate('/page3'))}
                    // @ts-ignore
                    name='area3'
                />
            </Pannellum>
        </div>
    )
}

export default Page1;