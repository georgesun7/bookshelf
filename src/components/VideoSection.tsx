import { Play } from "lucide-react";
import { useRef, useState } from "react";

interface Video {
  title: string;
  description: string;
  src: string;
  duration: string;
}

// Place your MP4 files in the public/videos/ folder (or import from src/assets)
// These will be committed to your GitHub repo and served by Vercel
const sampleVideos: Video[] = [
  {
    title: "Voices from the Valley",
    description:
      "A short documentary exploring the agricultural communities of California's Central Valley.",
    src: "/videos/voices-from-the-valley.mp4",
    duration: "12:34",
  },
  {
    title: "The Last Print Shop",
    description:
      "Following the final days of a family-owned newspaper printing operation in the Midwest.",
    src: "/videos/the-last-print-shop.mp4",
    duration: "8:21",
  },
];

const VideoCard = ({ video }: { video: Video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div
        className="relative aspect-video bg-secondary rounded-sm overflow-hidden mb-4 cursor-pointer group"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={video.src}
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
          playsInline
          onEnded={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 text-foreground ml-1" />
            </div>
          </div>
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-1">
            {video.title}
          </h3>
          <p className="text-muted-foreground font-body">{video.description}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-shrink-0 mt-1">
          <Play className="w-3 h-3" />
          <span className="font-body">{video.duration}</span>
        </div>
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <section id="video" className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-10">
          video & visual work
        </h2>

        <div className="grid gap-12">
          {sampleVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
