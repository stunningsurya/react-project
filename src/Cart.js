import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom"

function Cart() {

    const [data, setdata] = useState([])
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3004/cart')
            .then(
                (res) => {

                    setdata(res.data)

                }
            )
            .catch(() => {
                setdata([])
            })

    })

    function handledelete(id) {

        axios.delete(`http://localhost:3004/cart/${id}`)
            .then(res => {
                console.log(res)

            })

        window.location.reload(false)
    }

    function inc(quantity, id) {

        let a = quantity + 1
        if (a < 6) {
            axios.patch(`http://localhost:3004/cart/${id}`, { quantity: a })
        }

    }

    function dec(quantity, id) {

        let a = quantity - 1
        if (a > 0) {
            axios.patch(`http://localhost:3004/cart/${id}`, { quantity: a })
        }
        else {

            handledelete(id)
        }

    }

    function handlebuy(){
        Navigate('/Login/HomePage/Buy')
    }


    return (

        <div className="cartpage">

            <Header />

            {

                data.map((e) => {
                    return (

                        <div className="cartitem">

                            <img className="cartimg" src={e.image} />
                            <h1>{e.model}</h1>
                            <div className="cartbuton">
                                <button onClick={() => inc(e.quantity, e.id)}>+</button>
                                <p key={e.id} >{e.quantity}</p>
                                <button onClick={() => dec(e.quantity, e.id)}>-</button>
                            </div>
                            <button onClick={handlebuy} className="button">BUY</button>
                            <button className="button" onClick={() => handledelete(e.id)}>remove product</button>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default Cart;