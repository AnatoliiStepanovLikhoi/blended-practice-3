import { useState, useEffect } from 'react';
import
  {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { Country } from "./Country";
import {fetchByRegion} from '../service/country-service'

export const CountrySearch = () =>
{
  const [ countries, setCountries ] = useState( [] );
  const [ loading, setLoading ] = useState( null );
  const [ error, setError ] = useState( null );
  const [ input, setInput ] = useState( '' );

  const inputHandler = ( input ) =>
  {
    setInput( input );
  }

useEffect(() => {
    setLoading(true);

    const fetchCountriesByRegion = async () => {
      try {
        const countriesInfo = await fetchByRegion(input);

        setCountries(countriesInfo);

        console.log(countriesInfo);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountriesByRegion();
  }, [ input ] );


  return (
    <Section>
      <Container>
       {loading && <Loader />}
        <SearchForm onSubmit={inputHandler}/>
        <CountryList countries={ countries } />
        {error && !countries && <Heading>Ops, something went wrong!</Heading>}
      </Container>
    </Section>
  );
};
