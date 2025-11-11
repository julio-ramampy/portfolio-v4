// components/YouTubePlayer.tsx
import React from 'react';
import Image from 'next/image'

interface YouTubePlayerProps {
  url: string;
}

const ImageViewer: React.FC<YouTubePlayerProps> = ({ url }) => {

  return (
    <div className="flex justify-center p-8">
          <Image 
              src={"/realisations/"+url} 
              alt="./profil.jpg" 
              width={400}
              height={400}
          />
    </div>
  )
};

export default ImageViewer;
