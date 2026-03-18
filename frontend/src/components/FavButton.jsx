import { useState } from "react"

export default function FavButton(){

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <button onClick={() => setIsFavorite(!isFavorite)} className="cursor-pointer">
            {isFavorite ? '🤍' : '💗'}
        </button>
    )
}