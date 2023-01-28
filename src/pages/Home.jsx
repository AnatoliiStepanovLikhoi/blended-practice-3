import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useState, useEffect } from 'react';
import { getCountries } from '../service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchCountries = async () => {
      try {
        const countryList = await getCountries();

        setCountries(countryList);

        // console.log(countryList);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {countries && <CountryList countries={countries} />}
        {error && <Heading>Ops, something went wrong!</Heading>}
      </Container>
    </Section>
  );
};
