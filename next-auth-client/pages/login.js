import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const router = useRouter()

    const register = () => {

    }

    const login = () => {

    }

    const loginRegisterForm = () => {


    }

    return (
        <div>
            <div className="container ">
                <h2 className="text-center pt-4">Login</h2>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="form-control" />
                            <small>We'll never share your email</small>
                        </div>
                        <div className="form-group mt-6">
                            <label>Password</label>
                            <input type="email"
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                                className="form-control mb-2" />
                        </div>
                        <button onClick={register} className="btn btn-primary w-100">
                            Login
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
