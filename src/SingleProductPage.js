import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Header from "./Header"
import { useParams } from "react-router-dom"

import { useNavigate } from "react-router-dom"
function Singleproduct() {

    const { link } = useParams();
    const { id } = useParams();
    const [data, setdata] = useState([])
    const [data2, setdata2] = useState([])
    const [name, setname] = useState();
    const [data3, setdata3] = useState(0);
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3004/${link}/${id}`)
            .then(
                (res) => {
                    setdata(res.data)

                }
            )
            .catch(() => {
                setdata([]);

            })

        axios.get(`http://localhost:3004/cart/${id}`)
            .then(
                (res) => {
                    setdata2(res.data)
                    setname('***Added to cart***')

                }
            )
            .catch(() => {
                setdata2([])
                setname('Add to cart')


            })

    }, [])

    function addtocart() {
        axios.get(`http://localhost:3004/cart/${id}`)
            .then(
                (res) => {
                    setdata2(res.data)

                }
            )
            .catch(() => {
                setdata2([])

            })

        if (data2.length === 0) {

            axios.post('http://localhost:3004/cart', { model: data.Model, image: data.image, id: data.id, quantity: 1, })
                .then(() => {
                    console.log('posted')


                })
                .catch(() => {
                    console.log('sucessfully posted');

                })

            setname('***Added to cart***')
            setdata3(1)
        }
    }

    function handlebuy(){
        Navigate('/Login/HomePage/Buy')
    }
    

    return (<>

        <Header count={data3} />

        <div className="Homepage2">

            {
                <div className="singelproduct">

                    <img className="singleimg" src={data.image} />
                    <div className="singleproductcontent">
                        <h1>{data.Model}</h1>
                        <h2>{data.Rate}</h2>
                        <p className="des">{data.Description}</p>
                        <div className="spbuttons">
                            <button onClick={handlebuy} className=" button">Buy</button>
                            <button className="button" onClick={addtocart}>{name}</button>
                        </div></div>
                </div>
            }
        </div>

    </>)
}

export default Singleproduct;