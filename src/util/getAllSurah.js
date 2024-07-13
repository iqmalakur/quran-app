const getAllSurah = async (keyword) =>{
    const data = await fetch("https://quran-api-id.vercel.app/surahs")
    const surahs = await data.json();

    const cleanedKeyword = keyword.replace(/[^\w]/gi, '').toLowerCase();

    const filteredSurahs = surahs.filter((surah) => surah.name.replace(/[^\w\s]/gi, '').toLowerCase().includes(cleanedKeyword));

    return filteredSurahs;
}

export default getAllSurah