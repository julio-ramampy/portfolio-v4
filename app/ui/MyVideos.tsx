import YouTubePlayer from "./YoutubePlayer";

const data = ['_rGV8QBIHcQ'/*,'xiV2aPBa67Y','UEQREPuQlPY','3dta66UFmaA','D3KntcGTfgU','OJjwGBurZGA','7420gH2hHTY'*/];

export default function MyVideos() {
    return (
      <div className="flex-col p-4" id='experiences'>
          <div className="
            flex justify-center text-[15px] font-bold text-gray-500
            relative
            before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1/4 before:h-[2px] before:bg-gray-500 before:-translate-y-1/2
            after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-1/4 after:h-[2px] after:bg-gray-500 after:-translate-y-1/2
            "
            >
             MES VIDEOS
          </div>
          <div className="flex-col">
            {
                data.map((d, index) => (
                    <YouTubePlayer videoId={d} key={index} />
                ))
            }
            <div className="flex justify-center text-sm font-bold">
                <a href='https://www.youtube.com/@tahirilalainaramasioninampy?fbclid=IwY2xjawIxkgFleHRuA2FlbQIxMAABHTOnwnPtkJVzF8rU-9KLokh4IKQ-UvYMne6k5HYNz0s-8QpQ7hdNnrBRCw_aem_kk6JK9oK1PPRCCe6vBn2RQ' target='_blank'>
                    Cliquez ici si vous voulez voir les videos
                </a>
            </div>
          </div>
      </div>
    );
}