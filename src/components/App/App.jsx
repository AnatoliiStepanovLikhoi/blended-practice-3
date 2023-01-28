import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route element={<Home />} index />
        <Route path="/country" element={<CountrySearch />} />
        <Route path="/country/:countryId" element={<Country />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
