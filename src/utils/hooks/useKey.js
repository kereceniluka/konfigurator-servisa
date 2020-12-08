import { useEffect, useState } from 'react';

const useKey = targetKey => {

    const [isPressed, setIsPressed] = useState(false);

    const downHandler = ({ key }) => {
        key === targetKey && setIsPressed(true);
    }
    
    const upHandler = ({ key }) => {
        key === targetKey && setIsPressed(false);
    }

    useEffect(() => {

        document.addEventListener('keydown', downHandler);
        document.addEventListener('keyup', upHandler);
        return () => {
            document.addEventListener('keydown', downHandler);
            document.addEventListener('keyup', upHandler);
        }
    }, []);

    return isPressed;
}

export default useKey;