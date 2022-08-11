import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Details from './pages/Details'
import HomePage from './pages/HomePage'
import styled from 'styled-components'
import { Container } from './components/Container'
import NotFound from './pages/NotFound'

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`
function App() {
  const [countries, setCountries] = useState([])
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage countries={countries} setCountries={setCountries} />
              }
            />
            <Route path="/country/:name" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Wrapper>
    </>
  )
}

export default App
