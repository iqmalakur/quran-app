const getSurah = async (number) => {
    const data = await fetch(`https://quran-api-id.vercel.app/surahs/${number}`);
    const surah = await data.json();
    return surah;
}

export default getSurah;