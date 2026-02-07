import { FileText } from "lucide-react";
import { useState } from "react";

interface WritingSample {
  title: string;
  description: string;
  pdfUrl: string;
}

const sampleWritings: WritingSample[] = [
  {
    title: "Long-form Feature: Life on the Border",
    description: "A 5,000-word narrative on families navigating daily life along the US-Mexico border.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Opinion: The Future of Independent Media",
    description: "An essay on the evolving landscape of journalism funding and editorial independence.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

const WritingSection = () => {
  const [activePdf, setActivePdf] = useState<string | null>(null);

  return (
    <section id="writing" className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 font-body">
          Original Work
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Writing Samples
        </h2>
        <div className="w-12 h-px bg-foreground mb-16" />

        <div className="space-y-8">
          {sampleWritings.map((writing, index) => (
            <div key={index} className="bg-background rounded-sm border border-border overflow-hidden">
              <div className="p-6 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <FileText className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                      {writing.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {writing.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    setActivePdf(activePdf === writing.pdfUrl ? null : writing.pdfUrl)
                  }
                  className="text-xs uppercase tracking-widest font-body font-semibold text-foreground hover:text-muted-foreground transition-colors px-4 py-2 border border-border rounded-sm flex-shrink-0"
                >
                  {activePdf === writing.pdfUrl ? "Close" : "Read"}
                </button>
              </div>
              {activePdf === writing.pdfUrl && (
                <div className="border-t border-border">
                  <iframe
                    src={writing.pdfUrl}
                    className="w-full h-[600px]"
                    title={writing.title}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
