import React from 'react';
import { connect } from 'react-redux';
import { fetchPicture } from '../actions';
import Loader from 'react-loader-spinner';

function RandomPicture(props) {
    console.log(props)
    return (
        <>
        <div className="buttons">
            <button onClick={() => props.fetchPicture()}>Random Image</button>
            <button className="greyButton" onClick={() => props.fetchPicture("grayscale")}>Random Grayscale Image</button>
            <button onClick={() => props.fetchPicture("blur")}>Random Blurred Image</button>
        </div>
            {props.isLoading && <Loader type="MutatingDots" color="#f44965" height={100} width={100} />}
            {props.error && <div>{props.error.message}</div>}
            <div className="image">
                <img src={props.picture} alt="" />
            </div>
        </>
    );
}

const mapDispatchToProps = {
    fetchPicture
};

export default connect(state => state, mapDispatchToProps)(RandomPicture);