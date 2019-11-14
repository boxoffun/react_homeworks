import React from 'react';
import img from '../../assets/images/252.png'

function Card() {
  return (

            <div id="box">
                <div id="box-head">
                    <p>Johny Doe Profile</p>
                </div>
                <hr />
                <div id="box-main">
                    <img alt="avatar" src={img} width="150 px" />
                </div>

                <div id="box-foot-wrap">
                    <div className="box-foot1">
                        <p>4535<br />Followers</p>
                    </div>
                    <div id="line"></div>
                    <div className="box-foot2">
                        <p>535<br />Following</p>
                    </div>

                </div>
            </div>
    

    
  );
}

export default Card;
