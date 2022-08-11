import styled from 'styled-components'
import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from './Container'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`
const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`

const Header = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where in the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'dark' ? <IoMoon /> : <IoMoonOutline />}

            <span style={{ marginLeft: '15px' }}>
              {theme === 'light' ? 'dark' : 'light'} mode
            </span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
