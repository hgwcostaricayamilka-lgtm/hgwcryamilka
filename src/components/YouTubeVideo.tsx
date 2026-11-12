import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
}

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, title }) => (
  <div className="bg-white rounded-[2rem] overflow-hidden border border-stone-200 shadow-lg hover:shadow-xl transition-all group">
    <div className="aspect-video relative">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-black text-black group-hover:text-[#00795F] transition-colors">{title}</h3>
      <p className="text-sm text-stone-600 mt-2">Tutorial oficial para nuevos socios.</p>
    </div>
  </div>
);
