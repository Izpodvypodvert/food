import React from "react"

function Footer() {
    return (
        <footer className="page-footer green lighten-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/Izpodvypodvert/React-fortnite-shop-edu"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }
