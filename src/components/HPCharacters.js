import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card.js'

const url = "https://hp-api.herokuapp.com/api/characters"
function HPCharacters() {
    const [characters, setCharacters] = useState([]);
    const [searchString, setSearchString] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() =>{
        const getData = async () =>{
            try {
                const res = await axios.get(url);
                setCharacters(res.data)
                // setFilteredCharacters([...characters])            
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    useEffect(() =>{
        let filteredCharacters = characters;
        if (searchString && characters.length > 0) {
          filteredCharacters = characters.filter(character =>
            {return character.name.toLowerCase().includes(searchString.toLowerCase()) || character.house.toLowerCase().includes(searchString.toLowerCase())}
          );
        }
        setFilteredCharacters(filteredCharacters);
    },[characters, searchString])

    return (
        <div className="contianer">
            <div className="row">
                <form>
                <input type="text" placeholder="Search by name or house" value={searchString} onChange={(e)=>setSearchString(e.target.value)} />
                
                </form>
                
            </div>
            <div className="row">
                {filteredCharacters ? filteredCharacters.map((character)=><Card data={character} />):<h1>No characters found</h1>}
            </div>
        </div>
    )
}

export default HPCharacters
