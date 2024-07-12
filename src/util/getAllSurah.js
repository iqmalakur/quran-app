const getAllSurah = async (keyword) =>{
    const data = await fetch("https://quran-api-id.vercel.app/surahs")
    const surahs = await data.json();

    const filteredSurahs = surahs.filter((surah) => surah.name.toLowerCase().includes(keyword));

    return filteredSurahs;
}

export default getAllSurah