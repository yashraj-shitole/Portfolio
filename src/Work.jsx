import React from 'react';
import { Fade } from "react-awesome-reveal";
import Project from './Components/Project';


const Work = () => {




return (
      <div className='md:pt-[150px]'>
          
            <Fade>
            <div className='flex gap-5 md:gap-10 pt-20  md:pt-16'>
                  <h1 className='text-4xl md:text-6xl pl-[5vw]'>Projects</h1>
            </div>
            </Fade>
            <div className='flex flex-wrap items-center w-[100%] mb-20 justify-center gap-5 md:gap-10 pt-10  md:pt-[10vh]'>

                  <Fade className='flex items-center justify-center' cascade damping={0.06}>
                        <Project name="Kalakaar Tatto" url="https://cdn.dribbble.com/userupload/16737509/file/original-69977dacb6cd1bc9bc0d03735d8e0af3.png?resize=1504x813" link="https://kalakaartattoo.com/"  />
                        <Project name="Dattayog Farmers PVT. LTD. website" url="https://cdn.dribbble.com/userupload/14492789/file/original-b1a6d1d27b44bb8f7e98ee8ab1afbb0e.png?resize=1299x1180" link="https://dattayog.com/"  />
                        <Project name="Opinions       - thoughts sharing platform" url="https://cdn.dribbble.com/userupload/14409217/file/original-3c40ee594b8a69ac9649fdb20d5a78e0.png?resize=1024x1169" link="https://share-opinions.vercel.app/"  />
                        <Project name="AnuDeep Industries" url="https://cdn.dribbble.com/userupload/12972117/file/original-828929f8a8486c95fc0458d518351187.png?resize=1393x1236" link="https://anudeepindustries.onrender.com/"  />
                        <Project name="Spotify Clone" url="https://cdn.dribbble.com/userupload/12972189/file/original-630c5853cceae15c13d008d18f3e3eb9.png?resize=1200x1091" link="https://spotifyclone-by-yashraj.netlify.app/"  />
                        <Project name="Minimal Portfolio" url="https://cdn.dribbble.com/userupload/12973276/file/original-68853383c46ad38dfac772574b5ea33d.png?resize=1024x914" link="https://minimalportfolio1.netlify.app/"  />
                        <Project name="Weather app" url="https://cdn.dribbble.com/userupload/12973342/file/original-3ca9e6a073121a35e87be01e9f346056.png?resize=1514x1248" link="https://showmeweathernow.netlify.app/"  />
                        <Project name="Crypto landing page" url="https://cdn.dribbble.com/userupload/12973292/file/original-b7fb14466c29a123e8ed5e5cdaa31321.png?resize=1200x1048" link="https://ui-to-webpage-project2.netlify.app/"  />
     
                  </Fade>
            </div>
            
        

      </div>
)
}

export default Work
