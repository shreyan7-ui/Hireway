'use client';

import { useRef, useState } from 'react';
import SiteChrome from '../_components/SiteChrome';

export default function ResourceRequestPage() {
    const formRef = useRef(null);
    const [notice, setNotice] = useState('');
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setPending(true);
        setNotice('');
        setSuccess(false);

        const body = Object.fromEntries(
            new FormData(formRef.current)
        );

        const api =
            process.env.NEXT_PUBLIC_API_BASE_URL ||
            'http://localhost:3001/api';

        try {
            const response = await fetch(
                `${api}/resource-requests`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            );

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    data.error ||
                    `Unable to submit request (${response.status})`
                );
            }

            const ticket = String(
                data.request?.id || ''
            )
                .slice(0, 8)
                .toUpperCase();

            setSuccess(true);
            setNotice(
                `Ticket ${ticket} received. Our team will follow up shortly.`
            );

            formRef.current.reset();
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
        <SiteChrome>
            <section className="hero supporthero">
                <div className="wrap">
                    <div className="eyebrow reveal">
                        Client resource desk
                    </div>

                    <h1>
                        Something around your hired resource needs attention.
                    </h1>

                    <p>
                        Open one ticket for delivery issues, replacement needs,
                        availability, onboarding, billing or contract questions.
                        We&rsquo;ll route it to the right HIREWAY team.
                    </p>

                    <div className="supportchips reveal">
                        <span>
                            Resource support
                        </span>

                        <span>
                            Priority handling
                        </span>

                        <span>
                            Enterprise response
                        </span>

                        <span>
                            C2C · C2H · FTE
                        </span>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrap">
                    <div className="contactgrid">
                        <div className="copy">
                            <div className="eyebrow reveal">
                                How this works
                            </div>

                            <h2 className="reveal">
                                One ticket. One clear trail.
                            </h2>

                            <p className="reveal">
                                Use this desk for any resource already engaged
                                through HIREWAY. Add the resource name or ID
                                whenever possible so the operations team can
                                identify the engagement quickly.
                            </p>

                            <div className="step-list">
                                <div className="step reveal">
                                    <b>
                                        01
                                    </b>

                                    <div>
                                        <strong>
                                            Identify the engagement
                                        </strong>

                                        <span>
                                            Company, contact and resource details.
                                        </span>
                                    </div>
                                </div>

                                <div className="step reveal">
                                    <b>
                                        02
                                    </b>

                                    <div>
                                        <strong>
                                            Choose the issue
                                        </strong>

                                        <span>
                                            Delivery, replacement, availability,
                                            onboarding or commercial support.
                                        </span>
                                    </div>
                                </div>

                                <div className="step reveal">
                                    <b>
                                        03
                                    </b>

                                    <div>
                                        <strong>
                                            Set the priority
                                        </strong>

                                        <span>
                                            Critical, High, Medium or Low depending
                                            on business impact.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form
                            ref={formRef}
                            className="form requestform reveal"
                            id="resourceForm"
                            onSubmit={handleSubmit}
                        >
                            <div className="section-kicker">
                                Raise a support ticket
                            </div>

                            <div className="formrow">
                                <input
                                    name="company"
                                    placeholder="Company name"
                                    required
                                />

                                <input
                                    name="contact_name"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <input
                                name="email"
                                type="email"
                                placeholder="Work email"
                                required
                            />

                            <input
                                name="phone"
                                placeholder="Phone number"
                            />

                            <div className="formrow">
                                <input
                                    name="resource_name"
                                    placeholder="Resource name"
                                />

                                <input
                                    name="resource_id"
                                    placeholder="Resource / CV ID"
                                />
                            </div>

                            <select
                                name="request_type"
                                required
                                defaultValue=""
                            >
                                <option value="">
                                    Request type
                                </option>

                                <option>
                                    Resource replacement
                                </option>

                                <option>
                                    Performance / delivery
                                </option>

                                <option>
                                    Attendance / availability
                                </option>

                                <option>
                                    Onboarding / access
                                </option>

                                <option>
                                    Timesheet / billing
                                </option>

                                <option>
                                    PO / contract
                                </option>

                                <option>
                                    Other
                                </option>
                            </select>

                            <select
                                name="priority"
                                defaultValue="Medium"
                            >
                                <option>
                                    Medium
                                </option>

                                <option>
                                    High
                                </option>

                                <option>
                                    Critical
                                </option>

                                <option>
                                    Low
                                </option>
                            </select>

                            <input
                                name="subject"
                                placeholder="Request subject"
                                required
                            />

                            <textarea
                                name="details"
                                placeholder="Describe the issue, impact and what outcome you need"
                                required
                            ></textarea>

                            <button
                                className="btn primary"
                                type="submit"
                                disabled={pending}
                            >
                                {pending
                                    ? 'Sending ticket…'
                                    : 'Raise support ticket ↗'}
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
                    </div>
                </div>
            </section>

            <section className="dark">
                <div className="wrap">
                    <div className="banner tilt reveal">
                        <div className="eyebrow">
                            Need a new resource instead?
                        </div>

                        <h2>
                            Tell us the role and we&rsquo;ll build a shortlist.
                        </h2>

                        <p>
                            For a new hiring requirement, use the main requirement
                            desk instead of the resource support queue.
                        </p>

                        <a
                            className="btn"
                            style={{
                                background: 'white',
                                color: '#07111f'
                            }}
                            href="/contact"
                        >
                            Raise hiring requirement ↗
                        </a>
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
