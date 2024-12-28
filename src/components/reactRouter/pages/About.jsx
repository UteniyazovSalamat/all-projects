import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">About us</h1>
            <p className="about__paragraph">This is a demo website about React-router-dom library.</p>
            <ul className="about__links">
                <li>
                    <Link to="contacts">Our Contacts</Link>
                </li>
                <li>
                    <Link to="team">Our Team</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
};

export default About;
