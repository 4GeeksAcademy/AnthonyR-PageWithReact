import React from 'react';

const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron bg-light p-3 pb-5 rounded mb-4">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit eveniet minus autem quia explicabo et quod earum, illum, delectus mollitia. Deleniti, dolorum distinctio aliquam debitis officiis non quae odio.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                    </p>
            </div>
        </>
    )
};

export default Jumbotron;