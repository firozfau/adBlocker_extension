 
(() => {
    
    const isDefined = value => value !== null && value !== undefined;
  
     
    const checkForAds = setInterval(() => {
      
      const ad = document.querySelector('.ad-showing');
      
       
      if (isDefined(ad)) {
        const video = document.querySelector('video');
        if (isDefined(video)) {
          video.currentTime = video.duration;   
        }
      }
    }, 500);
  
     
    return function cleanup() {
      clearInterval(checkForAds);
    };
  })();
  