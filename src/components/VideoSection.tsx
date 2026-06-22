interface Video {
  title: string;
  description: string;
  embedUrl: string;
  duration: string;
}

const sampleVideos: Video[] = [
  {
    title: "Red Cup Rebellion",
    description:
      "In December 2025, Starbucks workers gathered outside of stores for the Unfair Labor Practice (ULP) strike, organized by Starbucks Workers Unite.",
    embedUrl: "https://www.youtube.com/embed/PYapbMKsn6U",
    duration: "4:47",
  },
  {
    title: "Northwestern Belegarth's Club",
    description:
      "The Medeival Combat Society's transports students back to the Middle-Ages.",
    embedUrl: "https://www.youtube.com/embed/Tefgqdz1mag",
    duration: "1:51",
  },
];

const VideoCard = ({ video }: { video: Video }) => {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-1">
            {video.title}
          </h3>
          <p className="text-muted-foreground font-body">{video.description}</p>
        </div>

        <div className="text-xs text-muted-foreground flex-shrink-0 mt-1 font-body">
          {video.duration}
        </div>
      </div>

      <div className="relative aspect-video bg-secondary rounded-sm overflow-hidden">
        <iframe
          src={video.embedUrl}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <section id="video" className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-10">
          video work
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