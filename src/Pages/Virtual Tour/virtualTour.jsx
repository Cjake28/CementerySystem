import { useEffect } from 'react';
import './VirtualTour.css'

export default function VirtualTour() {
  useEffect(() => {
    const onFrameLoaded = (event) => {
      if (event.data.cmd === 'frameloaded') {
        console.log('Kuula tour loaded!');
       
        const postOBJ = event.data.data.posts;
        console.log('Event Data:', postOBJ);
        const scnID = postOBJ.filter((ScnID) => ScnID.title === 'R0011836');
        console.log(scnID[0].id);
        window.KuulaPlayerAPI.load(event.data.uuid, 'NqTyN');
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
      
        <iframe
          style={{ width: '100%', height: '100%' }}
          src="https://kuula.co/share/collection/7qlvj?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=3"
          allowFullScreen
        ></iframe>

    </div>
  );
}
