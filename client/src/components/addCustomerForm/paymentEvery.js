import React from 'react';

const paymentEvery = (props) => {

  
  return (
    <div>
      <label style={{ color: 'white' }}>Payment </label>
      <select
        type="number"
        className="input-reset ba b--black-20 pa2 br3 mb2 ma1 w-60"
        onChange={(e, id) => props.onChange(e, props.stateId)}>
        <option value="1" selected={props.Value=== "1"}>1</option>
        <option value="2" selected={props.Value=== "2"}>2</option>
        <option value="3" selected={props.Value=== "3"}>3</option>
        <option value="4" selected={props.Value=== "4"}>4</option>
      </select>
    </div>
  );
}

export default paymentEvery;