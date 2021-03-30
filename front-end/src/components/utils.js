import { createContext, useContext } from "react";
import { useThree } from "react-three-fiber";

export function getCurrentDate(separator='-'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`
}

export function getAPIKey(){

    let apiKey = 'AOb7pUI6SWcptJeaS13zybABmo1eQrCvQPTtOVzq'

    return `${apiKey}`
}

const offsetContext = createContext(0);

export function useSection() {

    const { size, viewport } = useThree();
    const offset = useContext(offsetContext);
    const viewportWidth = viewport.width;
    const viewportHeight = viewport.height;
    const canvasWidth = viewportWidth;
    const canvasHeight = viewportHeight;
    const mobile = size.width < 700;
    const margin = canvasWidth * (mobile ? 0.2 : 0.1);
    const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
    const aspect = size.height / viewportHeight;
    return {
      aspect,
      viewport,
      offset,
      viewportWidth,
      viewportHeight,
      canvasWidth,
      canvasHeight,
      mobile,
      margin,
      contentMaxWidth,
    };
}
