'use client';

import { useState } from 'react';

export default function LeadForm() {
    const [notice, setNotice] = useState('');
    const [success, setSuccess] = useState(false);
    const [pending, setPending] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setPending(true);
        setNotice('');
        setSuccess(false);

        const form = event.currentTarget;
        const body = Object.fromEntries(new FormData(form));

        const api =
            process.env.NEXT_PUBLIC_API_BASE_URL ||
            'http://localhost:3001/api';

        try {
            const response = await fetch(`${api}/leads`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    data.error ||
                    `Unable to submit requirement (${response.status})`
                );
            }

            setSuccess(true);
            setNotice('Requirement received. Thank you.');
            form.reset();
        } catch (error) {
            setNotice(
                error.message ||
                'Something went wrong. Please try again.'
            );
        } finally {
            setPending(false);
        }
    }

    return (
        <form
            className="form reveal"
            id="leadForm"
            onSubmit={handleSubmit}
        >
            <input
                name="name"
                placeholder="Full name"
                required
            />

            <input
                name="email"
                type="email"
                placeholder="Work email"
                required
            />

            <input
                name="company"
                placeholder="Company"
            />

            <select
                name="model"
                defaultValue=""
            >
                <option value="">
                    Engagement model
                </option>

                <option>
                    C2C
                </option>

                <option>
                    C2H
                </option>

                <option>
                    FTE
                </option>
            </select>

            <textarea
                name="message"
                placeholder="Requirement details"
                required
            ></textarea>

            <button
                className="btn primary"
                type="submit"
                disabled={pending}
            >
                {pending ? 'Sending…' : 'Submit requirement →'}
            </button>

            <div
                className="notice"
                style={{
                    display: notice ? 'block' : 'none',
                    ...(success
                        ? {}
                        : {
                              background: '#fee2e2',
                              color: '#991b1b'
                          })
                }}
            >
                {notice}
            </div>
        </form>
    );
}
