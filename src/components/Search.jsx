import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'
import React from 'react'

const InputContainer = styled.label`
  display: flex;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  padding: 1rem 2rem;
  width: 100%;
  background-color: var(--colors-ui-base);
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`
const InputSearch = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--colors-text);
`

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch style={{ cursor: 'pointer' }} />
      <InputSearch
        onChange={(e) => {
          console.log(e.target.value)
          setSearch(e.target.value)
        }}
        value={search}
      />
    </InputContainer>
  )
}

export default Search
