import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import Home from './Components/Home';
import Detail_movie from './Components/detail-movie';

const Page = styled.body`
  background: #292931;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  color: lightgray;
  text-align: center;
  font-family: source-code-pro;
`
const Nav = styled.nav`
  height: 400px;
  background: url('/series.jpg');
`

const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #ba2025;
  text-shadow: 0 0 10px black;
`
const Logo = styled.img`
  background: #000000b6;
  height: 200px;
  margin-top: 100px;
  padding: 10px;
  border-radius: 50px;
`
const Title = styled.h1`
  margin-top: 100px;
  font-size: 40px;
  letter-spacing: 2px;
  background: #000000b6;
  padding: 90px;
  border-radius: 50px;
`

function App() {
  return (
    <Page>
      <Nav>
        <DivTitle>
          <Logo src="/logo.png"></Logo>
          <Title>Films</Title>
        </DivTitle>
      </Nav>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail-movie/:id" component={Detail_movie} />
        </Switch>
      </Router>
    </Page>
  );
}

export default App;
