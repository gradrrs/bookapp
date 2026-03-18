import Card from "./Card";


export default function CardList(){

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 ml-30 mr-30">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    )
}