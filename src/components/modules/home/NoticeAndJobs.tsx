import Link from "next/link";
import {
  BellRing,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  FileText,
  MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const notices = [
  {
    id: 1,
    title: "Scheduled Power Maintenance Notice",
    description:
      "Customers are advised to check their area's scheduled maintenance updates.",
    date: "10 Oct 2026",
    category: "Important",
    variant: "destructive" as const,
  },
  {
    id: 2,
    title: "Customer Service Information Update",
    description:
      "Updated guidelines for submitting electricity-related complaints.",
    date: "08 Oct 2026",
    category: "Announcement",
    variant: "secondary" as const,
  },
  {
    id: 3,
    title: "Electricity Safety Awareness",
    description:
      "Follow electrical safety guidelines during storms and power outages.",
    date: "05 Oct 2026",
    category: "General",
    variant: "outline" as const,
  },
];

const jobs = [
  {
    id: 1,
    title: "Assistant Engineer",
    department: "BPDB",
    type: "Engineering",
    deadline: "30 Oct 2026",
    status: "Open",
  },
  {
    id: 2,
    title: "Sub-Assistant Engineer",
    department: "DESCO",
    type: "Technical",
    deadline: "05 Nov 2026",
    status: "Open",
  },
  {
    id: 3,
    title: "Office Assistant",
    department: "DPDC",
    type: "Administrative",
    deadline: "12 Nov 2026",
    status: "Open",
  },
];

const NoticeAndJobs = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Section heading */}
      <div className="mb-8 max-w-2xl space-y-2">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Stay Informed
        </p>

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Notices & Career Opportunities
        </h2>

        <p className="text-muted-foreground">
          Get the latest announcements and explore career opportunities in the
          electricity sector.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Notices */}
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center gap-3 space-y-0">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BellRing className="size-5" />
            </div>

            <div className="flex-1 space-y-1">
              <CardTitle>Notices & Announcements</CardTitle>
              <CardDescription>
                Important updates for electricity consumers
              </CardDescription>
            </div>

            <Badge variant="secondary">{notices.length} Notices</Badge>
          </CardHeader>

          <CardContent className="space-y-0">
            {notices.map((notice, index) => (
              <article
                key={notice.id}
                className={`py-4 ${index !== 0 ? "border-t" : ""}`}
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant={notice.variant}>{notice.category}</Badge>

                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {notice.date}
                  </span>
                </div>

                <h3 className="font-semibold leading-snug">{notice.title}</h3>

                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {notice.description}
                </p>

                {/* <Link
                  href="/"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Read details
                  <ChevronRight className="size-4" />
                </Link> */}
              </article>
            ))}

            {/* <Button
              variant="outline"
              disabled={true}
              className="mt-2 flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <FileText className="size-4" />
              View All Notices
              <ChevronRight className="size-4" />
            </Button> */}
          </CardContent>
        </Card>

        {/* Government jobs */}
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center gap-3 space-y-0">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BriefcaseBusiness className="size-5" />
            </div>

            <div className="flex-1 space-y-1">
              <CardTitle>Electricity Department Jobs</CardTitle>
              <CardDescription>
                Government and utility-sector opportunities
              </CardDescription>
            </div>

            <Badge variant="secondary">{jobs.length} Jobs</Badge>
          </CardHeader>

          <CardContent className="space-y-0">
            {jobs.map((job, index) => (
              <article
                key={job.id}
                className={`py-4 ${index !== 0 ? "border-t" : ""}`}
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{job.status}</Badge>

                  <span className="text-xs text-muted-foreground">
                    {job.type}
                  </span>
                </div>

                <h3 className="font-semibold leading-snug">{job.title}</h3>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <BriefcaseBusiness className="size-4" />
                    {job.department}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-4" />
                    Deadline: {job.deadline}
                  </span>
                </div>

                {/* <Link
                  href="/"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  View job details
                  <ChevronRight className="size-4" />
                </Link> */}
              </article>
            ))}

            {/* <Button
              variant="outline"
              disabled={true}
              className="mt-2 flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <BriefcaseBusiness className="size-4" />
              Explore All Jobs
              <ChevronRight className="size-4" />
            </Button> */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NoticeAndJobs;
