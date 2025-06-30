import React from 'react'
import Card from './Card';
import { useEffect,useState } from 'react'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "6f5e4ed00a6040e1be9f838a1c6e1c88";

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    const userInput = (event) =>{
        setSearch(event.target.value)
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>Daily Dispatch</h1>
                </div>
                <ul>
                    <a>All News</a>
                    <a>Trending</a>
                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={search} onChange = {handleInput}/>
                    <button onClick={getData}>Search</button>
                </div>
            </nav>

            <div>
                <p className='head'>Stay Update With Daily Dispatch</p>
            </div>

            <div className='categoryBtn'>
                <button id="btn" onClick={userInput} value="sports">Sports</button>
                <button id="btn" onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button id="btn" onClick={userInput} value="health">Health</button>
                <button id="btn" onClick={userInput} value="fitness">Fitness</button>
            </div>

            <div className='card-outerbox'>
             {newsData? <Card data={newsData}/> : null}
            </div>
        </div>
    )
}

export default Newsapp