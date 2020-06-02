import React, {useState} from 'react';
import './Bio.css';

function Bio(props){
    const {image, bio, name, title, linkedin} = props;

    return (
        <div class="container-fluid">
            <div class="line-solid"></div>
            
            <div class="row justify-content-lg-center bio-row">

                <div class="col col-md-auto highlight">
                        <img class="circ-img" src={image} alt='booo'></img>
                        <h3>{name}</h3>
                        <p>{title}</p>
                        <button class="bio-btn" type="link">
                            {linkedin}
                        </button>
                </div>

                <div class="col col-md-auto highlight text-wrap">
                    {bio}
                </div>
            </div>
        </div>  
    )
}

export default Bio;
