import { Button } from "@/components/ui/button";
import videoFile from "@/assets/video_sito.mp4";
import videoCover from "@/assets/copertina-sito.png";

const VideoSection = () => {
  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-8 lg:py-10 bg-background">
      <div className="w-full px-4 mx-auto">
        <div className="text-center">
          <div className="bg-muted rounded-2xl p-6 lg:p-10 max-w-4xl mx-auto shadow-card">
            {/* Contenitore video 16:9 */}
            <div className="relative aspect-video rounded-lg overflow-hidden border border-muted-foreground/20 bg-card">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                controls
                preload="metadata"
                playsInline
                poster={videoCover} // Copertina del video
              >
                <source src={videoFile} type="video/mp4" />
                Il tuo browser non supporta il video HTML5.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
