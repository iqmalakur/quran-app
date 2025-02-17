export default function SearchBox({onKeyUp}) {
    return (
        <div className="relative hidden md:block mb-8 w-1/4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar"
                   className="block w-full p-2 ps-10 text-sm border rounded-lg bg-gray-50 focus:border-blue-500 dark:bg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Search..."
                   onKeyUp={onKeyUp}
            />
        </div>
    )
}