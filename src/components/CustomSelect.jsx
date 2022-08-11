import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius)',
      padding: '0.25rem',
      border: 'none',
      outline: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-text)',
      backgroundColor: state.isSelected
        ? 'var(--colors-bg)'
        : 'var(--colors-ui-base)',
    }),
  },
})`
  width: 250px;
  borderradius: var(--radius);
  font-family: var(--family);
  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }
  & * {
    color: var(--colors-text) !important;
  }
  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`
export default CustomSelect
