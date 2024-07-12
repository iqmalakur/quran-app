import getSurah from "@/util/getSurah";
import Ayah from "@/app/components/Ayah";

export default async function Surah({ params }){
    const number = params.number;
    const surah = await getSurah(number);

    return (
        <div className="container text-center min-h-[60vh]">
            <div className="mt-14">
                <h1 className="text-4xl font-bold">{surah.name}</h1>
                <hr className="w-1/2 mt-3 mb-4 mx-auto border-slate-800"/>
                <span className="block mx-32 mb-3 text-center text-sm text-slate-400">{surah.description}</span>
            </div>
            <div className="mb-28 px-28">
                {/* Don't start with bismillah for Al-Fatihah and At-Tawbah */}
                {number === '1' || number === '9' ? '' :
                    <Ayah
                        number={0}
                        arab={surah.bismillah.arab}
                        translation={surah.bismillah.translation}
                    />
                }
                {surah.ayahs.map(ayah =>
                    <Ayah
                        key={ayah.number.inQuran}
                        number={ayah.number.inSurah}
                        arab={ayah.arab}
                        translation={ayah.translation}
                    />
                )}
            </div>
        </div>
    );
}