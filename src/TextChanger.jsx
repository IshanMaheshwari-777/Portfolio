import React from 'react'
import { useState, useEffect } from 'react'
const TextChanger = () => {
    const texts=["Frontend Developer crafting responsive and interactive web experiences.","Hi, I'm Ishan Maheshwari."]
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [endValue, setendValue] = useState(0);
    const [isForward, setisForward] = useState(true);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(texts[index].substring(0,endValue ));
            if(isForward){
                setendValue((prev)=>prev+1);
            }else{
                setendValue((prev)=>prev-1);
            }
            if(endValue>texts[index].length){
                setisForward(false);
            }
            if (endValue<=0){
                setisForward(true);
                setIndex((prev)=>(prev+1) % texts.length);
            }

    },75)
  return ()=>clearInterval(intervalId);
  },[endValue, index, isForward,texts])
  return <div className='transition ease duration-300'>{currentText}

  </div>
}

export default TextChanger


