export default function DesktopNavigation() {
    return (
        <nav className="z-40 fixed bottom-8 translate-x-1/2 right-1/2 flex justify-center items-center bg-appPink p-5 border-5 border-black rounded-[101px] shadow-[4px_4px_0_0_black]">
            <ul className="flex gap-7 uppercase italic text-xl p-6 bg-[#302138] rounded-[101px]">
                <li><a href="/projets">Projets</a></li>
                <li><a href="/eveements">évent</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>
        </nav>
    );
}