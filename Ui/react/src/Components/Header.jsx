function Header() {
    return ( 
        <header className="w-full h-15 bg-blue-950 flex justify-between flex-row gap-x-3 items-center fixed">
            <h1 className="text-blue-200 text-4xl font-bold">Gerox</h1>
            <nav>
                <ul className="flex flex-row gap-x-14 font-normal text-2xl text-white cursor-pointer">
                    <li>الالعاب</li>
                    <li>البطولات</li>
                    <li>البث المباشر</li>
                    <li>المتجر </li>
                </ul>
            </nav>
            <button className="px-5 font-medium text-{20px}
             rounded-3xl py-2
             text-cyan-50
             bg-blue-600 cursor-pointer">التسجيل</button>
        </header>
     );
}

export default Header;