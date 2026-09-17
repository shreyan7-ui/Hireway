'use client';

import { useEffect, useState } from 'react';

function useAdminToken() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const saved =
            typeof window !== 'undefined'
                ? localStorage.getItem('hireway.adminToken')
                : '';
        if (saved) setToken(saved);
    }, []);

    return token;
}

export default function AdminPage() {
    const token = useAdminToken();
    const [stats, setStats] = useState(null);
    const [leads, setLeads] = useState([]);
    const [status, setStatus] = useState('Checking administrator access…');

    useEffect(() => {
        document.title = 'Admin | HIREWAY';
    }, []);

    useEffect(() => {
        if (!token) {
            setStatus('Sign in required. Go to /login to enter your admin token.');
            return;
        }

        const api =
            (typeof window !== 'undefined' && window.__HATCHABLE__?.api) ||
            '/api';

        (async () => {
            try {
                const dashboardResponse = await fetch(api + '/admin/dashboard', {
                    headers: { 'x-admin-token': token }
                });

                if (
                    dashboardResponse.status === 401 ||
                    dashboardResponse.status === 403
                ) {
                    setStatus(
                        'Administrator access required. Check that your admin token is correct.'
                    );
                    return;
                }

                if (!dashboardResponse.ok) {
                    throw new Error('Dashboard request failed');
                }

                const dashboard = await dashboardResponse.json();
                setStats(dashboard);
                setStatus('');

                const leadsResponse = await fetch(api + '/admin/leads', {
                    headers: { 'x-admin-token': token }
                });

                if (leadsResponse.ok) {
                    setLeads(await leadsResponse.json());
                }
            } catch (error) {
                console.error('Admin dashboard error:', error);
                setStatus('Dashboard unavailable. Please try again.');
            }
        })();
    }, [token]);

    return (
        <div className="admin">
            <div className="adminnav">
                <div className="wrap adminbar">
                    <b>HIREWAY Admin</b>
                    <a href="/">← Website</a>
                </div>
            </div>

            <main className="wrap dash">
                <div className="head reveal">
                    <div className="eyebrow">Operations</div>
                    <h1>Dashboard</h1>
                    <p>Lead and delivery overview for authorized administrators.</p>
                </div>

                {status && <div className="card">{status}</div>}

                {stats && (
                    <div className="dashcards" style={{ display: 'grid' }}>
                        <div className="dashcard tilt reveal visible">
                            <b>{stats.leads}</b>
                            <br />
                            All leads
                        </div>
                        <div className="dashcard tilt reveal visible">
                            <b>{stats.new_leads}</b>
                            <br />
                            New leads
                        </div>
                        <div className="dashcard tilt reveal visible">
                            <b>{stats.active_jobs}</b>
                            <br />
                            Active jobs
                        </div>
                        <div className="dashcard tilt reveal visible">
                            <b>{stats.applications}</b>
                            <br />
                            Applications
                        </div>
                    </div>
                )}

                {leads.length > 0 && (
                    <div className="table" style={{ display: 'block' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Contact</th>
                                    <th>Company</th>
                                    <th>Model</th>
                                    <th>Status</th>
                                    <th>Received</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.map(lead => (
                                    <tr key={lead.id}>
                                        <td>
                                            <b>{lead.name}</b>
                                            <br />
                                            {lead.email}
                                        </td>
                                        <td>{lead.company || '—'}</td>
                                        <td>
                                            <span className="pill">{lead.model || '—'}</span>
                                        </td>
                                        <td>{lead.status}</td>
                                        <td>
                                            {new Date(lead.created_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
}
