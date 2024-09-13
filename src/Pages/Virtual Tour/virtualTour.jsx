import { useEffect, useState } from 'react';
import './VirtualTour.css'

export default function VirtualTour() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const onFrameLoaded = (event) => {
      if (event.data.cmd === 'frameloaded') {
        console.log('Kuula tour loaded!');
       
        const postOBJ = event.data.data.posts;
        console.log('Event Data:', postOBJ);
        const scnID = postOBJ.filter((ScnID) => ScnID.title === 'R0011836');
        console.log(scnID[0].id);
        window.KuulaPlayerAPI.load(event.data.uuid, 'NqTyN');
        setLoading(false);
      }
    };

    window.addEventListener('message', onFrameLoaded);

    return () => {
      // Cleanup event listeners
      window.removeEventListener('message', onFrameLoaded);
    };
  }, []);

  return (
    <div className="virtualTour">
        {loading && <div style={{ width: '100%', height: '100%'}}> <h1>Loading....</h1></div>}
        <iframe
          style={{ width: '100%', height: '100%', display: loading ? 'none' : 'block'}}
          src="https://kuula.co/share/collection/7qlvj?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=3"
          allowFullScreen
        ></iframe>

    </div>
  );
}
