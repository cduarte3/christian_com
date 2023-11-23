import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

export default function MainNav() {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.addEventListener('scroll', updateProgressBar);
        }
    }, []);

    function updateProgressBar() {
        const { scrollTop, scrollHeight } = document.documentElement;
        const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100 + '%';
        const progressBar = document.querySelector('#progress-bar');
        progressBar.style.setProperty('--progress', scrollPercent);
    }
    return (
        <>
            <Navbar fixed="top" className="bg-body-primary navbar-light">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center flex-grow-1 pe-3 fs-5 nav-fill">
                            <Link href="/" passHref legacyBehavior>
                                <Nav.Link>
                                    Home
                                </Nav.Link>
                            </Link>
                            <Link href="resume" passHref legacyBehavior>
                                <Nav.Link>
                                    Resume
                                </Nav.Link>
                            </Link>
                            <Link href="projects" passHref legacyBehavior>
                                <Nav.Link href="projects">
                                    Projects
                                </Nav.Link>
                            </Link>
                            <Link href="feedback" passHref legacyBehavior>
                                <Nav.Link href="feedback">
                                    Feedback Board
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar fixed="top">
                <Container fluid>
                    <div id="progress-bar"></div>
                </Container>
            </Navbar>

        </>
    );
}