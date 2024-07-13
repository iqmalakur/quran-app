import getSurah from "@/util/getSurah";
import AyahList from "@/app/components/AyahList";

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
            <AyahList surah={surah} />
        </div>
    );
}