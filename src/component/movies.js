import React from 'react'
import Details from './details'
import { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import classes from './movies.module.css'
import { authActions } from '../store/AuthRedux';
import { useNavigate } from 'react-router-dom';
const Movies = () => {
    const[create,setCreate]=useState(false);
    const[movies,setMovies]=useState([])
    const history=useNavigate();
    const dispatch=useDispatch();
    const optionHandler=()=>{
        setCreate((create) => !create);
    }
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.post('https://hoblist.com/api/movieList',{
                    category:'movies',
                    language:'Kannada',
                    genre:'all',
                    sort:'voting'
                })
                setMovies(response.data.result)
                // console.log(response.data.result)
            }
            catch{
                console.log('Error fetching movies')
            }
        }
        fetchData();
    },[])
    const LogoutHandler=()=>{
        dispatch(authActions.logout())
         history('/')
     
       }
  return (
    <div>
        <button onClick={LogoutHandler}>logout</button>
    <Button  className={classes.buttons} onClick={optionHandler}>Company Information</Button>
    {create&&<Details/>}
    <h1>Kannada Movie List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>Title:</strong> {movie.title} <br />
            <strong>Directors:</strong> {movie.director.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movies