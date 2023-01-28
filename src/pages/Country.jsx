import { Section, Container, CountryInfo, Loader } from 'components';
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from "react-router-dom";
import { fetchCountry } from "service/country-service";

export const Country = () =>
{
  const { countryId } = useParams();
  console.log( countryId )
  
  const [ country, setCountry ] = useState( '' );
  const [error, setError] = useState(null);
  const [ loading, setLoading ] = useState( null );

  const location = useLocation();
  
  useEffect(() => {
    setLoading(true);

    const fetchCountryInfo = async () => {
      try {
        const countryInfo = await fetchCountry(countryId);

        setCountry(countryInfo);

        console.log(countryInfo);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryInfo();
  }, [ countryId ] );
  

const goBack = location?.state?.from ?? "/"
  return (
  <>
    {loading && <Loader />}
    <Section>
        <Container>
          <button type='button'><Link to={goBack}>Back to list</Link></button>
         
        <CountryInfo flag= {country.flag}
  capital={country.capital}
  country={country.countryName}
  id= {country.id}
  languages={country.languages}
            population={ country.population } />
          
        </Container>
        
    </Section>
      { error && <div>Ops, something went wrong!</div> }
      </>
  );
};
