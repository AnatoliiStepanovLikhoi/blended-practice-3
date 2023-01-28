import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({onSubmit}) =>
{
  const [ input, setInput ] = useState( '' );

  const handleInput = (event) => {
    setInput( event.target.value );
    
  }
  const submitHandler = ( event ) =>
  {
    event.preventDefault();
    onSubmit( input );
    setInput( "" );
  }
  
  return (
    <SearchFormStyled onSubmit={submitHandler}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select onChange={handleInput} aria-label="select" name="region" required>
        <option disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
