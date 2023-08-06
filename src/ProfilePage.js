import { useEffect, useState } from "react";

function ProfilePage() {

    const [address, setAddress] = useState([{ id: 1, value: '' }]);
    const [add, setadd] = useState(true)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [textarea, setTextarea] = useState(false);
    const [name, setName] = useState('edit');
    
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));

        setUsername(userData[0].name);
        setEmail(userData[0].email)
        console.log('sadghj')

    }, [])
    function handleEdit() {

        if (name === 'edit') {

            setName('save')
            setTextarea(true)
        }

        else {
            setName('edit')
            setTextarea(false)
            
        }
    }

    function addAddress() {
        setAddress([...address, { id: address[0].id + 1, value: '' }])
        setadd(false)

    }
    const handleInputChange = (id, value) => {

        if (textarea === true) {
            setAddress((prevState) =>
                prevState.map((box) => (box.id === id ? { ...box, value } : box))
            );

        };
    }

    function handledelete(id) {
        setadd(true)
        setAddress(address.filter((e) => { return e.id !== id }))
         
    }
    return (
        <div className="Profilebox">
            <h2 className="Head">Profile</h2><br></br>
            <h4 className="whitetext">Username:{username}</h4><br></br>
            <h4 className="whitetext">
                Email               {`        :${email}`}
            </h4><br></br>
            <h4 className="whitetext" style={{ display: "inline" }}>
                Address:
            </h4>

            {
                add === true &&
                <button className="Addbutton" onClick={addAddress}>+</button>}

            <div className="textareadiv">
                {
                    address.map((e) => {
                        return (
                            <div style={{ position: "relative" }}>

                                <textarea

                                    style={{ resize: 'none', width: "2in", height: ".8in", margin: "6px 0" }}
                                    key={e.id}
                                    value={e.value}
                                    
                                    
                                    onChange={(a) => handleInputChange(e.id, a.target.value)}
                                >
                                </textarea>

                                {textarea === true && address.length > 1 && <button className="removebutton"
                                    onClick={() => handledelete(e.id)}>-</button>}
                            </div>
                        )
                    })
                }

            </div>

            <button className="button" style={{ marginLeft: '2in', marginBottom: "10px" }}
                onClick={handleEdit}>{name}</button>

        </div>
    )
}

export default ProfilePage;
