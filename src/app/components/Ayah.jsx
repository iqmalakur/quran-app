import {toArabic} from "arabic-digits";

export default function Ayah({ number, arab, translation }) {
    return (
        <div className="py-12 px-5 shadow-md shadow-slate-900">
            <span className="block text-3xl text-right leading-loose">
                {arab}
                <span className="inline-block mx-2"></span>
                {number === 0 ? '' : `(${toArabic(number)})`}
            </span>
            <span className="block mt-5 text-md text-left text-slate-400">{number === 0 ? '' : `${number}.`} {translation}</span>
        </div>
    )
}