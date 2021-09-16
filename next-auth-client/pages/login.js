import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const router = useRouter()
    return (
        <div>
            <h2 className="text-center pt-4">Login Page</h2>
            <div className="col-md-8">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-control"/>
                    <small>We'll never share your email</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="email"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    className="form-control"/>
                </div>
                <button className="btn btn-primary w-100">
                    Login
                </button>
            </div>       
        </div>
    )
}
