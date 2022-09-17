import React, {useState} from "react";

const Registration = () => {

    const [user, setUser] = useState({username: "", email: "", password: "", passwordConfirm: ""});

    const handleClick = () => {
        //if (user.username === "") {
        //    setUser({...user, username: user.email})
        //    console.log("teď se mělo něco stát")
        //} else {
        //    console.log("nic se neděje")
        //};
        
        setUser({...user, username: username.value, email: email.value, password: password.value})

        console.log(user);
    }

    return (
        <div className="container">
            <h1>REGISTRATION</h1>

            <form method="post" action="">
                
                <input 
                    className="form-field" 
                    type="email" name="email" 
                    id="email" 
                    placeholder="Email Address" 
                    required 
                />
                
                <input 
                    className="form-field" 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="User Name" 
                />
            
                <input 
                    className="form-field" 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    required 
                />
            
                <input 
                    className="form-field" 
                    type="password" 
                    name="confirm-password" 
                    id="confirm-password" 
                    placeholder="Confirm password" 
                    required 
                />
                
                <button 
                    className="button--submit" 
                    type="submit" 
                    onClick={ handleClick }
                >REGISTER</button>

            </form>
        </div>
    )
}

export default Registration;

//poznámky:
//když jsem použila u buttonu onClick = { console.log(user) } >> tak se to vypisovalo rovnou a ne až při clicku, nutné uvést () => { ... }

//nepoužito (původně u každého inputu):
//onChange={ (event) => { setUser({ ...user, username: event.target.value}) } }