"use client"
import getAllSurah from "@/util/getAllSurah";
import {useEffect, useState} from "react";
import {useDebounce} from "use-debounce";

export default function Table({keyword}) {
    const [surahs, setSurahs] = useState([]);

    const fetchSurahs = async (keyword) => {
        setSurahs(await getAllSurah(keyword));
    }

    const [debouncedValue] = useDebounce(keyword, 800)

    useEffect(()=>{
        fetchSurahs(debouncedValue);
    }, [debouncedValue])
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" className="tab-header w-0">
                    No.
                </th>
                <th scope="col" className="tab-header">
                    Nama Surah
                </th>
                <th scope="col" className="tab-header">
                    Kategori
                </th>
                <th scope="col" className="tab-header">
                    Ayat
                </th>
            </tr>
            </thead>
            <tbody>
            {surahs.map((surah) => (
                <tr key={surah.number} className=" border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white w-0">
                        {surah.number}.
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                  <span className="block text-lg">
                    {surah.name}
                  </span>
                        <span className="block text-green-600">
                    ({surah.translation})
                  </span>
                    </th>
                    <td className="px-6 py-4">
                        {surah.revelation}
                    </td>
                    <td className="px-6 py-4">
                        {surah.numberOfAyahs} Ayat
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}