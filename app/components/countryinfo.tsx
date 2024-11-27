
interface CountryDetailProps {
    name : string,
    capital : string,
    population : string;
}
const CountryDetail = ({name,population,capital } : CountryDetailProps ) => { 
    return (
        <div className="border p-10 rounded-lg shadow-md bg-green-50 ">
            <h2 className="text-lg "><strong>Country Name :</strong> {name} </h2>
            <p className="text-lg"><strong>Capital :</strong> {capital}</p>
            <p className="text-lg"><strong>Population :</strong> {population}</p>
        </div>
    );
};
export default CountryDetail;