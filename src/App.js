import React from "react";
import { useState } from "react";

export default function Form(){
    const [formData, setFormData] = useState({
        fullname: "",
        phonenumber: "",
        email:"",
    })
    const [data, setData] = useState({
        fullname: "",
        phonenumber: "",
        email: "",
    })

    const [error, setError] = useState({
        email: "",
        phonenumber:"",
    })

    const [showSubmittedData, setShowSubmittedData] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
        
        if (name === "email" ) {
            const regExp = /^[a-zA-Z0-9_]+@(gmail\.com|mail\.ru)$/
            const isValid = regExp.test(value)
            setError({...error, email: isValid ? "" : "Неверно указана почта"})
        }
        if (name === "phonenumber" ) {
            const phoneRegExp = /^\+996 (\d{3} \d{2}-\d{2}-\d{2})$/
            const isNumberValid = phoneRegExp.test(value)
            setError({...error, phonenumber: isNumberValid ? "" : "Неверно указан номер"})
        }
 }

    const handleSubmit = (e) => {
        setData(formData)
        setShowSubmittedData(true)
    }

    return(
        <>
            <div className="form-container">
                <div className="fullname-block">
                    <label>
                        ФИО:
                        <input type="text" 
                        name="fullname" 
                        value={formData.fullname} 
                        onChange={handleChange}>
                        </input>
                    </label>
                </div>
                <div className="phonenumber">
                    <label>
                        Номер телефона:
                        <input type="text" 
                        name="phonenumber" 
                        value={formData.phonenumber} 
                        onChange={handleChange} 
                        placeholder="+996 XXX XX-XX-XX">
                        </input>
                        {error.phonenumber && <span className="error">{error.phonenumber}</span>}
                    </label>
                </div>
                <div className="email">
                    <label>
                        E-mail:
                        <input type="text" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}>
                        </input>
                        {error.email && <span className="error">{error.email}</span>}
                    </label>
                </div>
                <input className="submit-btn" type="submit" onClick={handleSubmit}></input>
            </div>
            {showSubmittedData && ( <div className="submitted-data">
                <h2>Введенные данные:</h2>
                <p>ФИО: <span className="data-on-sub">{data.fullname}</span></p>
                <p>Номер телефона: <span className="data-on-sub">{data.phonenumber}</span></p>
                <p>Email: <span className="data-on-sub">{data.email}</span></p>
            </div>
            )}
        </>
    )
}
