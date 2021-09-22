import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="nav bg-light d-flex justify-content-between">
            <Link href="/">
                <a className="nav-link">Home</a>
            </Link>
            <Link href="/login">
                <a className="nav-link">Login</a>
            </Link>
            <Link href="/register">
                <a className="nav-link">Sign Up</a>
            </Link>
        </nav>
    )
}
