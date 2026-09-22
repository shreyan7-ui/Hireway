'use client';

import { useState } from 'react';

export default function ContactUsForm() {
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
                    `Unable to submit contact details (${response.status})`
                );
            }

            setSuccess(true);
            setNotice('Thanks. Our team will contact you shortly.');
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
            onSubmit={handleSubmit}
        >
            {/* <input
                name="name"
                placeholder="Full name"
                required
            /> */}

            <div className="contact-numbers">
                <div>
                    <span>Email</span>
                    <a href="mailto:business@hireway.online">
                        business@hireway.online
                    </a>
                </div>

                <div>
                    <span>Phone</span>
                    <a href="tel:+918219284677">
                        +91 82192 84677
                    </a>
                </div>

                <div>
                    <span>WhatsApp</span>
                    <a href="https://wa.me/916230627887">
                        +91 62306 27887
                    </a>
                </div>
            </div>

            <input
                type="hidden"
                name="email"
                value="vansh.a@hireway.com"
                readOnly
            />

            <input
                type="hidden"
                name="phone"
                value="+91 82192 84677"
                readOnly
            />

            <input
                type="hidden"
                name="whatsapp"
                value="+91 62306 27887"
                readOnly
            />

            <div className="form-actions">
                <button
                    className="btn primary"
                    type="submit"
                    disabled={pending}
                >
                    {pending ? 'Sending...' : 'Contact us'}
                </button>

                <a
                    className="linkedin-btn"
                    href="https://www.linkedin.com/company/hireway1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                >
                    <img
                        className="linkedin-icon"
                        src="/assets/linkedin.png"
                        alt="LinkedIn"
                    />
                </a>
            </div>

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