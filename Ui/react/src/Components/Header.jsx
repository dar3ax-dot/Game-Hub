function Header() {
    return ( 
        <header className="w-{100%} h-17 bg-blue-950 flex justify-between flex-row gap-x-3 items-center">
            <h1 className="text-blue-200 text-4xl font-bold">Gerox</h1>
            <nav>
                <ul className="flex flex-row gap-x-8 text-2xl text-white cursor-pointer">
                    <li>Games</li>
                    <li>Tournments</li>
                    <li>Lives</li>
                    <li>Top Clans</li>
                </ul>
            </nav>
            <button className="px-7 rounded-3xl py-3 text-cyan-50 bg-green-600">Register</button>
        </header>
     );
}

export default Header;