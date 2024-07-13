'use client'

import {toArabic} from "arabic-digits";
import {useRef} from "react";

export default function Ayah({ number, arab, translation, audio, currentSurah, onSurahChange }) {
    const audioRef = useRef(null);
    const playStatus = number === currentSurah;

    if(audioRef.current) {
        if(playStatus) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }

    const handleOnClick = () => {
        onSurahChange(playStatus ? null : number);
    }

    const handleOnEnded = () => {
        onSurahChange(number + 1);
    }

    return (
        <div className="py-12 px-5 shadow-md shadow-slate-900">
            <span className="block text-3xl text-right leading-loose">
                {arab}
                <span className="inline-block mx-2"></span>
                {number === 0 ? '' : `(${toArabic(number)})`}
            </span>
            <span
                className="block mt-5 text-md text-left text-slate-400">{number === 0 ? '' : `${number}.`} {translation}</span>
            <button
                className={"flex justify-center items-center w-10 h-10 mt-3 text-slate-500 rounded-full " +
                "hover:bg-[rgba(226,232,240,0.2)]"}
                onClick={handleOnClick}>
                <img src={playStatus ? "/pause.svg" : "/play.svg"} alt="play button" className="h-6" />
            </button>
            <audio ref={audioRef} onEnded={handleOnEnded}>
                <source src={audio} type="audio/mpeg"/>
                Your browser does not support the audio tag.
            </audio>
        </div>
    )
}