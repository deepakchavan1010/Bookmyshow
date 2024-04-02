import React from 'react'

const Partner = () => {
    const data = ["hp-logo.avif","ola-logo.avif","axis-logo.avif","mastercard-logo.avif","icici-logo.avif"]
    return (
        <div className='container bg-white my-3 p-5 text-center text-secondary b_parnter'>
            <h6 >OUR PARTNERS</h6>
            <div className="row justify-content-center mt-5">
                {data.map((ele, index) => {
                    return <div key={index} style={{ width: "19%" }}>
                        <div>
                            <img src={`Corporate/${ele}`} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Partner