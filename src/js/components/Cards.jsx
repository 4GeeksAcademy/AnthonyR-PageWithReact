import React from 'react';

const Cards = (props) => {
    return (
        <div className='col mb-4'>
            <div className="card m-auto" style={{ width: "18rem" }}>
                <img src={props.imageCard} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className='card-footer text-center'>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
};

export default Cards;