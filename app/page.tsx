
export default function HomePage () {
    return (
        <div className="bg-red-300 shadow-2xl py-20 ">
            <h1 className="font-bold text-center text-6xl ">COUNTRY LISTING</h1>

            <ul className="space-y-9 m-10 text-3xl text-fuchsia-950 hover:underline font-semibold text-center">
                <li><a href="/countries/canada">Canada</a></li>   
                <li><a href="/countries/australia">Australia</a></li>   
                <li><a href="/countries/unitedStates">United States</a></li>   
                <li><a href="/countries/mexico">Mexico</a></li>   
                <li><a href="/countries/unitedKingdom">United Kingdom</a></li>   
            </ul>
            
        </div>
    )
};