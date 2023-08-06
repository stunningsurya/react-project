import './Header.css'
import { Link } from 'react-router-dom';
import { SearchBar } from "./searchbox/Searchbar";
import { SearchResultsList } from "./searchbox/searchlist";
import ProfilePage from './ProfilePage';
import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header(p) {
    const [results, setResults] = useState([]);

    const [data2, setdata2] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:3004/cart')
            .then(
                (res) => {
                    setdata2(res.data)
                }
            )
            .catch(() => {
                setdata2([])
            })
    }, [])

    let tt = data2.length + p.count
    return (
        <div className="Header">
            <Link to="/Login/HomePage" className='link2'><h1 className="logo">
                SURYA
            </h1></Link>

            <form>
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && <SearchResultsList results={results} />}

            </form>
            <Link to="/Login/HomePage"> <button className='button'>Home</button></Link>
            <Link to="/Login/HomePage/cart"> <button className='cart button'>Cart{tt || data2.length}</button></Link>
            <Popup  trigger={<button className='button'>Profile</ button>} position={'center top'}>
                <ProfilePage />
            </Popup>

        </div>
    )
}

export default Header;