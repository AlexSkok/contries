import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
  overflow: hidden;
  cursor: pointer;
`
const CardImg = styled.img`
  width: 100%;
`
const CardBody = styled.div`
  padding: 1.5rem 1rem;
`
const CardTitle = styled.h3`
  margin: 0;
  font-family: var(--family);
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`
const CardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
const CardItem = styled.li`
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  line-height: 1.5rem;
  & > b {
    font-weight: var(--fw-bold);
  }
`

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImg src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardItem key={el.title}>
              <b>{el.title}: </b>
              {el.description}
            </CardItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  )
}

export default Card
