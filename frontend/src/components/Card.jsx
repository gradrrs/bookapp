import FavButton from "./FavButton"

export default function Card() {
    return (
        <div className="bg-amber-50 p-10 pb-45 max-w-xs">
            <div className="relative h-65 bg-amber-400 rounded-lg shadow-md transition-transform hover:scale-[1.02]">
                
                <div className="absolute right-2 top-2 z-10">
                    <FavButton />
                </div>

                <div className="flex h-full items-center justify-center">
                    <span className="text-white font-medium">Контент</span>
                </div>
                
            </div>
        </div>
    )
}