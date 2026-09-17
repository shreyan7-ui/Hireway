'use client';

import { useEffect, useState } from 'react';

export default function JobsList() {
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        const api =
            process.env.NEXT_PUBLIC_API_BASE_URL ||
            'http://localhost:3001/api';

        fetch(`${api}/jobs`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Unable to load jobs');
                }

                return response.json();
            })
            .then(setJobs)
            .catch(() => setJobs([]));
    }, []);

    if (jobs === null) {
        return (
            <div className="jobs">
                <p>Loading roles…</p>
            </div>
        );
    }

    if (!jobs.length) {
        return (
            <div className="jobs">
                <p>
                    Roles will be published here soon.
                </p>
            </div>
        );
    }

    return (
        <div className="jobs">
            {jobs.map(job => (
                <div
                    className="job tilt reveal visible"
                    key={job.id}
                >
                    <div>
                        <h3>
                            {job.title}
                        </h3>

                        <small>
                            {job.department}
                            {' · '}
                            {job.location}
                            {' · '}
                            {job.employment_type}
                        </small>

                        <p>
                            {job.description}
                        </p>
                    </div>

                    <a
                        className="btn primary"
                        href={`/contact?role=${encodeURIComponent(job.title)}`}
                    >
                        Apply / Enquire
                    </a>
                </div>
            ))}
        </div>
    );
}
