import React, {useState, useEffect} from 'react'
import { Card, CardText, CardBody, CardTitle, Col, Container, Row } from 'reactstrap'

export default function App() {
  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    .then(response => response.json())
    .then(data => setPokemons(data.results))
    .catch(err => console.log(err))
  })
  return (
    <Container>
      <h1>Pokedex</h1>
      <Row>
        {pokemons.map(pokemon => <PokemonCard name={pokemon.name} />)}
      </Row>
    </Container>
  )
}

const PokemonCard = (props) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3">
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>Lorem Ipsum dolor sit amet</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}