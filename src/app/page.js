import Image from "next/image";

export default function Home() {
  return (


      <div className="relative px-40 py-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nama Surah
            </th>

            <th scope="col" className="px-6 py-3">
              Kategori
            </th>
            <th scope="col" className="px-6 py-3">
              Ayat
            </th>
          </tr>
          </thead>
          <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Al-Fatihah
            </th>

            <td className="px-6 py-4">
              Makiyyah
            </td>
            <td className="px-6 py-4">
              7 Ayat
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Al-Baqarah
            </th>

            <td className="px-6 py-4">
              Madaniyyah
            </td>
            <td className="px-6 py-4">
              286 Ayat
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Ali Imran
            </th>

            <td className="px-6 py-4">
              Madaniyyah
            </td>
            <td className="px-6 py-4">
              200 Ayat
            </td>
          </tr>
          </tbody>
        </table>
      </div>

  );
}
