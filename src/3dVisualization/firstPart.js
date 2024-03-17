import React from 'react'
import firstVideo from '../Video/3d_visualization-1.webm'

function firstPart() {
    return (
        <>
            <div className="main-firstVideo-bg">
                <video className='main-firstVideo' src={firstVideo} autoPlay muted loop></video>
                <div className="firstVideo-line1">Equip Your Ideas with Ultimate Video Rendering</div>
                <div className="firstVideo-line2">Coohom is proud of our industry-leading rendering abilities. The tool can perfectly visualize your design ideas with accurate lighting and shadows, realistic materials. With Coohom, you can render images, videos, or 360° walkthrough in just 1 minute</div>
            </div>
            
        </>
    )
}

export default firstPart