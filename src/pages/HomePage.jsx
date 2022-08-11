import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import List from '../components/List'
import Main from '../components/Main'
import { ALL_COUNTRIES } from '../config'
import Card from '../components/Card'
import Controls from '../components/Controls'
import { useNavigate } from 'react-router-dom'

const HomePage = ({ setCountries, countries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const push = useNavigate()
  const handleSearch = (search, region) => {
    let data = [...countries]
    if (region) {
      data = data.filter((c) => c.region.includes(region))
    }
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase()),
      )
    }
    setFilteredCountries(data)
  }
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }
  }, [])
  useEffect(() => {
    handleSearch()
  }, [countries])
  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          }
          return (
            <Card
              key={c.name}
              onClick={() => push(`country/${c.name}`)}
              img={countryInfo.img}
              name={countryInfo.name}
              info={countryInfo.info}
            />
          )
        })}
      </List>
    </>
  )
}

export default HomePage

{
  /* <Main
      child={[
        <Controls />,
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            }
            return (
              <Card
                key={c.name}
                onClick={() => push(`country/${c.name}`)}
                {...countryInfo}
              />
            )
          })}
        </List>,
      ]}
    /> */
}
