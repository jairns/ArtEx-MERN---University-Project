import React from 'react';

const currencyConverter = (props) => {

    return (
      <div className='col-md-8 m-auto d-flex justify-content-end row'>
        <div className="form-group">
          <label htmlFor="exampleSelect1">Convert Currency</label>
          <select className="form-control" id="exampleSelect1" onChange={props.onChange}>
            <option value='GBP'>GBP</option>
            <option value='EUR'>EUR</option>
            <option value='USD'>USD</option>
            <option value='CHF'>CHF</option>
            <option value='JPY'>JPY</option>
            <option value='AUD'>AUD</option>
          </select>
        </div>
      </div>
    )
}

export default currencyConverter;