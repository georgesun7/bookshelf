import PageLayout from "@/components/PageLayout";
import { Mail, LinkedinIcon } from "lucide-react";
import profilePhoto from "@/assets/website_profile_bw.jpg";

const About = () => {
  return (
    <PageLayout title="about me">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-10">
          about me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_340px] gap-12 md:gap-16 items-start mb-12">
          <div className="space-y-5">
            <p className="text-lg text-foreground font-body leading-relaxed">
              Hey! I'm George, a rising junior at Northwestern pursuing a B.S. in Journalism and a B.A. in Data Science.
              I'm a journalist and writer based in the Chicago area, but am originally from Vancouver, Canada. My interests
              lie in investigative reporting and documentary journalism.
            </p>

            <p className="text-muted-foreground font-body leading-relaxed">
              This summer, I'll be working at <strong>The Chicago Reporter</strong> as an Investigative Reporting Intern where I'll be researching and writing data-driven stories
              on public policy around the Chicagoland area. Next winter, I'll be residing in Washington D.C. and reporting on Capitol Hill as part of Northwestern's Medill on the Hill program.
            </p>

            <p className="text-muted-foreground font-body leading-relaxed">
              When I'm not chasing a story, I love playing basketball, journaling and learning languages. My current obsession is American Sign Language.
              I'll be in between Chicago, Minneapolis, New York City, Vancouver and Shanghai this summer, so I'm happy to chat anytime and anywhere!
            </p>
          </div>

          <div className="w-full">
            <img
              src={profilePhoto}
              alt="George"
              className="w-full max-w-[340px] md:max-w-none object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm font-body pt-6 border-t border-border">
          <a
            href="mailto:gsun@u.northwestern.edu"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" /> email
          </a>
          <a
            href="https://www.linkedin.com/in/georgesunn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" /> linkedin
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;