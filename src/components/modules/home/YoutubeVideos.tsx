import Link from "next/link";
import { PlayCircle, PlayCircleIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: "video-1",
    title: "Understanding Load Shedding",
    description: "Learn about power outages and electricity schedules.",
    videoId: "fAMpbPik_34",
  },
  {
    id: "video-2",
    title: "Electrical Safety Tips",
    description: "Essential tips for safe electricity usage.",
    videoId: "Mr3Od9ZFpHg",
  },
  {
    id: "video-3",
    title: "Electricity Meter Guide",
    description: "Understand electricity meters and consumer services.",
    videoId: "UAhT4B5UB7M",
  },
  {
    id: "video-4",
    title: "7 ways to reduce current bill",
    description: "Learn tips and tricks to reduce your current bill.",
    videoId: "qWW6fr6LpRA",
  },
];

const YouTubeVideos = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      {/* Heading */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Video Library
          </p>

          <h2 className="text-3xl font-bold tracking-tight">
            Learn With PowerSync
          </h2>

          <p className="max-w-xl text-muted-foreground">
            Watch helpful videos about electricity, safety, power updates, and
            our platform.
          </p>
        </div>

        <Button
          variant="outline"
          nativeButton={false}
          render={
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <PlayCircleIcon className="mr-2 size-4 text-red-600" />
              Visit YouTube
            </Link>
          }
        ></Button>
      </div>

      {/* Four-column video grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Watch ${video.title} on YouTube`}
            >
              {/* YouTube thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
                  <PlayCircle className="size-12 fill-white/90 text-primary drop-shadow-lg transition-transform group-hover:scale-110" />
                </div>
              </div>
            </a>

            <CardContent className="space-y-2 p-4">
              <h3 className="line-clamp-2 font-semibold leading-snug">
                {video.title}
              </h3>

              <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {video.description}
              </p>

              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 pt-1 text-sm font-medium text-primary hover:underline"
              >
                Watch video
                <PlayCircle className="size-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default YouTubeVideos;
