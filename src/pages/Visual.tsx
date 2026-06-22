import PageLayout from "@/components/PageLayout";

const photos: { src: string; caption?: string; className: string; fit?: "cover" | "contain" }[] = [
  {
    src: `${import.meta.env.BASE_URL}visual/photo-1.jpg`,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: `${import.meta.env.BASE_URL}visual/photo-2.jpg`,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: `${import.meta.env.BASE_URL}visual/photo-3.jpg`,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: `${import.meta.env.BASE_URL}visual/photo-4.jpg`,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: `${import.meta.env.BASE_URL}visual/photo-5.jpg`,
    className: "md:col-span-2 md:row-span-2",
    fit: "contain",
  },
  {
    src: `${import.meta.env.BASE_URL}visual/photo-6.jpg`,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: `${import.meta.env.BASE_URL}visual/photo-7.jpg`,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: `${import.meta.env.BASE_URL}visual/photo-8.jpg`,
    className: "md:col-span-2 md:row-span-2",
  },
];

const Visual = () => {
  return (
    <PageLayout title="visual work">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-10">
          visual work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-sm bg-secondary ${p.className}`}
            >
              <img
                src={p.src}
                alt={p.caption || `visual work ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {p.caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm text-xs text-muted-foreground font-body p-2">
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