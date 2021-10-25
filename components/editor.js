import { useState } from "react";
import Yamde from "yamde";
import { sampleContent } from "./sampleContent";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Editor() {

    const [text, setText] = useState(sampleContent);
    const [isLightMode, setIsLightMode] = useState(true);
   

    return(
        <>
            <div className="button-switch">
                <DarkModeToggle
                    onChange={setIsLightMode}
                    checked={isLightMode}
                    size={80}
                />
            </div>
            <div className="button-switch" onClick={() => setIsLightMode(!isLightMode)}>
                {`${isLightMode ? "Dark" : "Light"} Mode`}
            </div>
            <div className="container-edit">
                <Yamde value={text} handler={setText} theme={isLightMode ? "light" : "dark"} />
            </div>
        </>
    );
}