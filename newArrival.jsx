import React from 'react'

import {PRODUCTS1} from './products'
function newArrival() {
  return (
  <>
  <div>
     <div className="row ">
        {PRODUCTS1.slice(2, 6).map((product) => (
          <div className="col-3">
            <div key={product.id}>
              <div className="card text-center ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                />
                <div className="card-details">
                  <span> {product.brand} </span>
                  <h2>{product.name}</h2>
                  <div className="card-footer">
                    <p className=" mb-3d-flex align-it ems-center justify-content-center">
                      {product.status}
                    </p>

                    <p className="d-flex align-items-center justify-content-center  ">
                      {" "}
                      <strike className="text-danger">{product.rate} </strike>
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      </div>
  
  </>
  )
}

export default newArrival
