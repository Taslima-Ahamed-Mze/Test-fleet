import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';


const Section = styled.section`
    padding-bottom: 100px;
`

const Title = styled.h1`
margin-top: 30px;
margin-bottom: 100px;
font-size: 25px;
letter-spacing: 2px;
text-transform: uppercase;
`


const Text = styled.p`
color: lightgray;
font-size: 20px;
padding-bottom: 40px;
margin-bottom: 40px;
border-bottom: #ba2025 1px solid;
margin-left: 10%;
margin-right: 10%;
letter-spacing: 1px;
`

const InfoMovie = styled.div`
display: flex;
`

const TitleMovie = styled.h3`
font-size: 20px;
letter-spacing: 2px;
width: 70%;

@media (max-width: 1500px) {
    width: 60%;
    text-align: center;
}
`



const ButtonMovie = styled.button`
background: transparent;
border: none;
color: lightgray;
letter-spacing: 1px;
font-size: 15px;
border-left: 1px #80808071 solid;
padding-left: 20px;

&:hover {
    cursor: pointer;
    color: #ba2025;
}
`
const Button = styled.button`
border-radius: 40px;
width: 100px;
background: lightgray;
color: #ba2025;


`
const Input = styled.input`
background: lightgray;
padding: 10px;
border-radius: 20px;
font-size: 15px;
border: #ba2025 2px solid;
width:300px
`

const Search = styled.div`
    display: flex;
    justify-content: center;
    
`

let count = 0;
class Home extends Component {

    state = {
        key :'57966f0628fca55255fefdee65748a91',
        movies: [],
        titre : "",
    }
    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+this.state.key)
            .then(response => {
                console.log("result", response.data.results)
                this.setState({
                    movies: response.data.results,
                })
            })
    }
    handleClick = async (id) => {
        window.parent.location = "/detail-movie/" + id;
    }
    handleSubmitFormTitre = async (event) => {
        try {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key='+this.state.key+'&query='+this.state.titre)
            .then(response => {
                console.log("result", response.data.results)
                this.setState({
                    movies: response.data.results,
                })
            })
        } catch (error) {
            console.log(error)
        }
        event.preventDefault();
    }

    handleChange = async (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value,
        });
    }
    

    render() {
        return (
            <Section >
                <Title>Bienvenue</Title>
                <Search>
                    <Input id="titre" name="titre" placeholder="Tape un titre" value={this.state.titre} onChange={event => this.handleChange(event)} ></Input>
                    <Button onClick={this.handleSubmitFormTitre}>Rechercher</Button>
                </Search>
                <Text></Text>
                <div>
                    {this.state.movies.map((movie) => {
                        
                        return (
                            
                            <InfoMovie>
                                <TitleMovie>{movie.title}</TitleMovie>
                                <ButtonMovie onClick={event => this.handleClick(movie.id)}>Savoir+</ButtonMovie>
                            </InfoMovie>
                        )
                        
                    })}
                </div>
            </Section>
        )
    }
}

export default Home;
