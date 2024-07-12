const getAllSurah = async () =>{
    const data = await fetch("https://quran-api-id.vercel.app/surahs")
    const surahs = await data.json();

    return surahs;
}

export default getAllSurah