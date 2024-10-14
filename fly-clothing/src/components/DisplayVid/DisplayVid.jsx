
import './DisplayVid.css'

const DisplayVid = () => {
  return (
    <div className='disVid'>
        <video autoPlay loop muted className='video-bakground'>
            <source src='../src/assets/DisplayVid2.mp4' type='video/mp4'/>
        </video>

    </div>
  )
}

export default DisplayVid