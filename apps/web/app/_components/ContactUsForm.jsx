'use client';

export default function ContactUsForm() {
    return (
        <div className="form reveal">
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

            <div className="form-actions">
                {/* <button
                    className="btn primary"
                    type="button"
                >
                    Contact us
                </button> */}

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

            {/* <div className="notice" style={{ display: 'block' }}>
                Contact details are listed above.
            </div> */}
        </div>
    );
}