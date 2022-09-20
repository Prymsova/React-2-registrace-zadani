import React, {useState} from "react";

const Registration = () => {

    //toto pro mě bylo nové - zabrání to smazání formuláře i výpisu v konzoli po odeslání formuláře kliknutím na button
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const [user, setUser] = useState({username: "", email: "", password: "", passwordConfirm: ""});

    const handleBlur = () => {
        if(user.username === "" && user.email.includes("@")) {
            const usernameEmail = user.email.split("@").shift();
            setUser({...user, username: usernameEmail, email: email.value, password: password.value, passwordConfirm: passwordConfirm.value});
        } else {
            setUser({...user, username: username.value, email: email.value, password: password.value, passwordConfirm: passwordConfirm.value})
        }
    }

    return (
        <div className="container">
            <h1>REGISTRATION</h1>

            <form action="" method="" onSubmit={ handleSubmit }>
                
                <input 
                    className="form-field" 
                    type="email" name="email" 
                    id="email" 
                    placeholder="Email Address" 
                    required 
                    onBlur = { handleBlur }
                />
                
                <input 
                    className="form-field" 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="User Name"
                    value={ user.username }
                    onChange = { () => {setUser({...user, username: username.value})} }
                    onBlur = { handleBlur }
                />
            
                <input 
                    className="form-field" 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    required 
                    onBlur = { handleBlur }
                />
            
                <input 
                    className="form-field" 
                    type="password" 
                    name="passwordConfirm" 
                    id="passwordConfirm" 
                    placeholder="Confirm password" 
                    required
                    onBlur = { handleBlur }
                />
                
                <button 
                    className="button--submit" 
                    type="submit"
                    onClick={ () => {console.log(user)} }
                >REGISTER</button>

            </form>
        </div>
    )
}

export default Registration;
