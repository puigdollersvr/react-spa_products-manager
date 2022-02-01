import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = props => {
    return (
        <div>
            <div className="app-header bg-sky-500 shadow-xl mb-2">
                <h1 className="text-3xl font-bold text-white py-8">{props.title}</h1>
            </div>
        </div>
    );
};

AppHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default AppHeader;