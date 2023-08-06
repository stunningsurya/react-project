import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function HomepageContainer(p) {

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get(p.data)
            .then(
                (res) => {
                    setdata(res.data)

                }
            )
            .catch(() => {
                setdata([]);
            })

    }, [])

    return (

        <div className="card">
            {
                data.slice(0, 3).map((e) => {
                    return (

                        <Link className='link2' to={`/Login/HomePage/${p.link}/${e.id}`} >

                            <div className="mobilesdiv mobilesdiv2" >

                                <img className={`mobileimg ${p.css} `} src={e.image} />
                                <h3>{e.Model}</h3>
                                <h3>{e.Rate}</h3>

                            </div>
                        </Link>
                    )
                })
            }
            <Link to={`/Login/HomePage/${p.link}`}><button className="button">See more</button></Link>
        </div>)

}

export default HomepageContainer;
