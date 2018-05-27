import React from 'react';

const Header = (props) => (
    <div className='header' >
        <div className='container'>
            <h1>{props.title}</h1>
            {props.subtitle && <h3 className='header__subtitle' >{props.subtitle}</h3>}
        </div>
    </div>
);

Header.defaultProps = {
    title: 'THINGS TO DO'
}

export default Header;
