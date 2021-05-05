import React, { PropTypes } from 'react';
import { Progress } from 'react-sweet-progress';



const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const galPng = require('../../../assets/images/gal.png');
const delPng = require('../../../assets/images/del.png');


const Card = (props) => {
  const { style, item } = props;

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-container">
        <div className="item-content">
          <p>Re-designed the zero-g doggie bags. No more spills!</p>
        </div>
      </div>
      <div className="item-perfomers">
        <div className="add-perfomers">
         <Progress percent={100} status="success"/>
        </div>
        <div className="delete-perfomers">
            ...
        </div>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
