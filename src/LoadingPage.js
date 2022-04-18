import React from "react";

// import { Container } from './styles';

function LoadingPage(props) {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
            <p></p>
        </div>
    );
}
LoadingPage.defaultProps = {
    message: "Loading...",
};

export default LoadingPage;
