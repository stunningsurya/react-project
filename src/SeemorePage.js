import Header from "./Header"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function SeemorePage() {

    const { link } = useParams();
    const [data, setdata] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:3004/${link}`)
            .then(
                (res) => {
                    setdata(res.data)

                }
            )
            .catch(() => {
                setdata([]);
            })

    }, [])
    return (<>

        <Header />
        <div className="seemorepage">
            {

                data.map((e) => {
                    return (

                        <Link className='link2' to={`/Login/HomePage/${link}/${e.id}`}>

                            <div className="mobilesdiv mobilesdiv2">

                                <img className={`seemoreimg `} src={e.image} />
                                <h3>{e.Model}</h3>
                                <h3>{e.Rate}</h3>

                            </div>
                        </Link>
                    )
                })
            }
        </div>

    </>)
}

export default SeemorePage