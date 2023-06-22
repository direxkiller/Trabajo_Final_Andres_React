import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '../../public/Images/Teaser Demeter.mp4';
import ReactPlayer from 'react-player'

const four_comp = () => {
  return (
    <div>
      {/* <div className="video" id="juego" style={{ minHeight: "70vh"}}>
        <div className="position-relative">
          <video className="position-absolute top-50 start-50 translate-middle" controls style={{ minWidth: "100%", minHeight: "100%"}}>
            <source src="./Images/Terra-Arable-La-fertilidad-del-suelo-y-el-cultivo-sustentable.mp4" type="video/mp4" />
          </video>
        </div>
      </div> */}

      <div className='video'>
        <ReactPlayer url={video} controls playing loop muted style={{margin: '0 auto'}}/>
      </div>
    </div>
  )
}

export default four_comp
