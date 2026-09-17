'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [token, setToken] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (!token.trim()) {
            setError('Enter your admin token.');
            return;
        }

        localStorage.setItem(
            'hireway.adminToken',
            token.trim()
        );

        const next =
            new URLSearchParams(window.location.search).get('next') ||
            '/admin';

        window.location.href = next;
    }

    return (
        <main
            style={{
                minHeight: '100vh',
                display: 'grid',
                placeItems: 'center',
                padding: 30
            }}
        >
            <div
                className="card tilt"
                style={{
                    width: 'min(460px, 100%)'
                }}
            >
                <a
                    className="brand"
                    href="/"
                >
                    HIRE<span>WAY</span>
                </a>

                <h1
                    style={{
                        fontSize: 38,
                        letterSpacing: '-2px'
                    }}
                >
                    Welcome back.
                </h1>

                <p
                    style={{
                        color: 'var(--muted)'
                    }}
                >
                    Sign in with your admin token to view the operations dashboard.
                </p>

                <form
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="password"
                        placeholder="Admin token"
                        value={token}
                        onChange={event => setToken(event.target.value)}
                        autoComplete="off"
                        required
                    />

                    <button
                        className="btn primary"
                        type="submit"
                    >
                        Sign in
                    </button>

                    <div
                        className="notice"
                        style={{
                            display: error ? 'block' : 'none',
                            background: '#fee2e2',
                            color: '#991b1b'
                        }}
                    >
                        {error}
                    </div>
                </form>
            </div>
        </main>
    );
}
