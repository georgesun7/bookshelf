import PageLayout from "@/components/PageLayout";

// Add your photo URLs here. You can drop images in public/visual/ and reference them as "/visual/photo-1.jpg"
const photos: { src: string; caption?: string }[] = [
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200", caption: "morning light, brooklyn" },
  { src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200", caption: "field notes" },
  { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200" },
  { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200" },
];

const Visual = () => {
  return (
    <PageLayout title="visual work">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-10">
          visual work
        </h1>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((p, i) => (
            <figure key={i} className="break-inside-avoid">
              <img
                src={p.src}
                alt={p.caption || ""}
                className="w-full rounded-sm"
                loading="lazy"
              />
              {p.caption && (
                <figcaption className="text-xs text-muted-foreground font-body mt-2">
                  {p.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Visual;
