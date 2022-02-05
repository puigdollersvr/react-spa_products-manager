import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

/*
 * THE APP FRAME (WITH FOOTER) 
 * PRESENTATIONAL COMPONENT
 */
const AppFrame = ({header, body}) => {
    return (
        <div>
            <div className="app-frame h-screen">
                <AppHeader title={header}></AppHeader>
                <div className="container mx-auto my-auto min-h-[79%]">{body}</div>
                <div className="app-footer bg-gray-100 py-8"><b>SPA ReactJS</b> - Ricard Puigdollers Vila</div>
            </div>
        </div>
    );
};

//Validate necessary props
AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,

};

export default AppFrame;