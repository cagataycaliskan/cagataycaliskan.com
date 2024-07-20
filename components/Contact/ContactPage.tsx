import React from "react";

function ContactPage() {
  return (
    <>
      <div className="container text-orange-400 contact-page">
        <div className="space-y-8">
          <div>
            <a
              href="https://github.com/cagataycaliskan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <svg width="35" height="35" viewBox="0 0 24 24" fill="#E6EDF3">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.492.997.107-.776.418-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.382 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23.955-.265 1.98-.398 3-.403 1.02.005 2.045.138 3 .403 2.29-1.552 3.295-1.23 3.295-1.23.65 1.653.24 2.873.12 3.176.77.838 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.82 1.096.82 2.21 0 1.597-.015 2.887-.015 3.28 0 .32.215.694.825.576 4.765-1.587 8.2-6.085 8.2-11.387 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>cagataycaliskan</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/cagataycaliskan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="#0A66C2"
                className="bg-white rounded-lg"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19.5h-3v-10h3v10zm-1.5-11.29c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.29h-3v-5.554c0-1.32-.027-3.021-1.843-3.021-1.844 0-2.127 1.437-2.127 2.924v5.651h-3v-10h2.886v1.367h.041c.402-.763 1.381-1.565 2.844-1.565 3.044 0 3.609 2.004 3.609 4.612v5.586z" />
              </svg>
              <span>cagataycaliskan</span>
            </a>
          </div>
          <div>
            <a
              href="mailto:cagataycaliskan98@gmail.com"
              className="flex items-center space-x-2"
            >
              <svg width="35" height="35" viewBox="0 0 24 24" fill="#D14836">
                <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.6 4.99c-.21.14-.49.14-.7 0L4.4 8.25c-.31-.2-.4-.59-.2-.9.2-.31.59-.4.9-.2L12 11.75l7.8-4.91c.31-.2.7-.11.9.2.2.31.11.7-.2.91z" />
              </svg>
              <span>cagataycaliskan98@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
