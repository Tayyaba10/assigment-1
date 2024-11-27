import {countries} from "@/app/data/countries";

import CountryDetail from "@/app/components/countryinfo";


interface CountryPageProps {
    params: {country : string};
}

export default function CountryPage ({params}: CountryPageProps)  {
    const countryName = params.country;
    const country = countries[countryName as keyof typeof countries];
   
    if (!country) {
        return 
        <div className="text-ceenter text-blue-950"> Country not found</div>;
    }

    return (
    <div className="flex items-center p-8 py-20 justify-center shadow-2xl bg-rose-200">
        <div className="bg-red-100 p-12 py-20 px-20 rounded-xl shadow-xl">
            <h1 className="text-3xl font-bold text-center mb-6">{country.name}</h1>
            <CountryDetail
             name = {country.name}
             capital={country.capital}
             population= {country.population}
            />
        </div>
    </div>
    );
};
