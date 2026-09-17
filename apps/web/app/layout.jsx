export const metadata = {
    title: 'HIREWAY | Enterprise IT Services & Consulting',
    description:
        'Enterprise IT services, consulting and flexible technology workforce solutions across C2C, C2H and FTE.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="/assets/styles.css"
                />
            </head>

            <body>
                {children}
            </body>
        </html>
    );
}
