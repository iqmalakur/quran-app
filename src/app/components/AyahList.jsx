"use client"

import Ayah from "@/app/components/Ayah";
import {useState} from "react";

export default function AyahList({ surah }) {
    const [currentSurah, setCurrentSurah] = useState(null);

    const handleSurahChange = (surahNumber) => {
        setCurrentSurah(surahNumber);
    }

    return (
        <div className="mb-28 px-28">
            {/* Don't start with bismillah for Al-Fatihah and At-Tawbah */}
            {surah.number === 1 || surah.number === 9 ? '' :
                <Ayah
                    number={0}
                    arab={surah.bismillah.arab}
                    translation={surah.bismillah.translation}
                    audio={surah.bismillah.audio.alafasy}
                    currentSurah={currentSurah}
                    onSurahChange={handleSurahChange}
                />
            }
            {surah.ayahs.map(ayah =>
                <Ayah
                    key={ayah.number.inQuran}
                    number={ayah.number.inSurah}
                    arab={ayah.arab}
                    translation={ayah.translation}
                    audio={ayah.audio.alafasy}
                    currentSurah={currentSurah}
                    onSurahChange={handleSurahChange}
                />
            )}
        </div>
    )
}