import React, { useState } from "react";
import Form from "../Forms/Form";
import FormField from "../Forms/FormField";
import FormAction from "../Forms/FormAction";


function Login(){
    const[formData, setFormData]= useState({
        username: "",
        password: "",
        usernameError: "",
        passwordError: ""

    });

const _self = this;

const myOnChange= function(e){
    const { name, value } = e.currentTarget;
    //validaciones

    let error=null;
    if (name==="password"){
       error = (/^(?=.*\d)(?=.* A-Z)(?=.* a-z)(?=.* ^\w\d\s:)( \s ){8,32}$/).test(value) ? null: "Contraseña Incorrecta";
    }

    setFormData({...setFormData,[name]:value, [name+"Error"]: error});
}
    return (
        <Form>
            <FormField 
            type="text"
            id="username"
            fname="username"
            onChange={myOnChange}
            caption="Correo Electronico"
            value={formData.username}
            error={formData.usernameError}
            placeholder="usuario@gmail.com"
            className="bg-gray-100 appearance-none border-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-teal focus:placeholder-blue-300"
            ></FormField>

            <FormField
            type="password"
            id="password"
            fname="password"
            onChange={myOnChange}
            caption="Contraseña"
            value={formData.password}
            error={formData.passwordError}
            placeholder="Contraseña"
            className="bg-gray-100 appearance-none border-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-teal focus:placeholder-blue-300"
            ></FormField>
            <FormAction
            caption="Enviar"
            onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                const {username, password}=_self.formData;
                alert (`Usuario:${username} Psswd:${password}`);
            }}
            >    
            </FormAction>
        </Form>
    );
}

export default Login;