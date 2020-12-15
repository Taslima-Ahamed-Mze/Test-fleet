import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import $ from 'jquery';


const MovieTitle = styled.h1`
    margin-top: 50px;
    margin-bottom: 50px;
    letter-spacing: 1px;
    font-size: 25px;
`

const ImgMovie = styled.img`
    width: 300px;
    height:300px;
    margin-left: 10%;
    display: inline-block
`



const Infos = styled.div`
    display: inline-block;
    margin-left: 10%;
    padding-top: 30px;
    font-size: 17px;
    letter-spacing: 1px;
`
const Resume = styled.p`
    font-size: 17px;
    letter-spacing: 1px;
    margin-top: 50px;
    margin-left: 10%;
    margin-right: 10%;
`

const RevenirMovies = styled.button`
    margin-top: 20px;
    margin-bottom: 100px;
    background: #ba2025;
    color: lightgray;
    font-weight: bold;
    padding: 5px 10px;
    font-size: 17px;
    letter-spacing: 1px;
    border-radius: 20px;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
        padding: 10px 15px;
    }
`


const Button = styled(RevenirMovies)`
    border-radius: 40px;
    height: 30px;
    width: 20%;
    background: lightgray;
    color: #ba2025;
    margin-top: 20px;
    margin-bottom: 100px;

    &:hover {
        box-shadow: 5px 5px 5px gray;
        padding: 0;
    }
`


const EachMovie = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 20px;
    letter-spacing: 1px;
    border-bottom: 1px #80808071 solid;
`
let splitURL = window.location.href.split('/');
let movieId = splitURL[4];

class Detail_movie extends Component {

    state = {
        id: movieId,
        details: [],
        key : '57966f0628fca55255fefdee65748a91',
    };

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/'+this.state.id+'?api_key='+this.state.key)
            .then(response => {
                // console.log("detail episode",response.data.results[this.state.id]);
                this.setState({
                    details: [response.data],
                })
            });
        
    }


    render() {
        return (
            <div>
                {this.state.details.map(detail => {
                    return (
                        <div>
                            <EachMovie>
                                <ImgMovie src={"https://image.tmdb.org/t/p/original" + detail.poster_path}></ImgMovie>
                                <Infos>
                                    <MovieTitle>{detail.title}</MovieTitle>
                                    <p>{"Note : " + detail.vote_average}</p>
                                    <p>{detail.release_date}</p>
                                </Infos>
                            </EachMovie>
                            <Resume>{detail.overview}</Resume>
                            <a href="javascript:history.go(-1)"><RevenirMovies>Revenir à la liste</RevenirMovies></a>
                            
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default Detail_movie;