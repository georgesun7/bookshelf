import { Play } from "lucide-react";

interface Video {
  title: string;
  description: string;
  embedUrl: string;
  duration: string;
}

const sampleVideos: Video[] = [
  {
    title: "Voices from the Valley",
    description: "A short documentary exploring the agricultural communities of California's Central Valley.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:34",
  },
  {
    title: "The Last Print Shop",
    description: "Following the final days of a family-owned newspaper printing operation in the Midwest.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:21",
  },
];

const VideoSection = () => {
  return (
    <section id="video" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 font-body">
          Documentary
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Video Work
        </h2>
        <div className="w-12 h-px bg-foreground mb-16" />

        <div className="grid gap-12">
          {sampleVideos.map((video, index) => (
            <div key={index}>
              <div className="relative aspect-video bg-secondary rounded-sm overflow-hidden mb-4">
                <iframe
                  src={video.embedUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {video.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-shrink-0 mt-1">
                  <Play className="w-3 h-3" />
                  <span className="font-body">{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
