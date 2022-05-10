import React from 'react'
import cloud from "../resources/cloud.png"
import a2 from "../resources/a2.jpg"

const Home = () => {
    return (
        <div class="p-2 flex-fill bd-highlight" style={{ backgroundImage: `url(${a2})`, height: "100vh", backgroundSize: 'cover', width: '60%' }}>
            <div style={{ "position": "absolute", "bottom": "100px", "left": "100px" }}>
                <div className='row'>
                    <div className='col-4 text-light' style={{ "fontSize": '125px' }}>
                        45 &#176;
                    </div>
                    <div className='col-6 text-light' style={{ "fontSize": '40px' }}>
                        <div>
                            Ahmedabad
                        </div>
                        <div>
                            06:09 - Tuesday, 10 May'22
                        </div>
                    </div>
                    <div className='col-2 text-light' style={{ "fontSize": '125px' }}>
                        <img src={`${cloud}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home