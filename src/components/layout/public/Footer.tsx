import Link from "next/link";
import { Zap, Mail, Phone, MapPin, ArrowUpRight, BellRing } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Power Schedule", href: "/load-shedding" },
  { label: "Notices", href: "/notices" },
  { label: "Government Jobs", href: "/jobs" },
  { label: "Subscription", href: "/subscription" },
];

const serviceLinks = [
  { label: "Find Your Feeder", href: "/select-area" },
  { label: "Submit a Complaint", href: "/complaints" },
  { label: "Meter Services", href: "/complaints" },
  { label: "New Connection", href: "/complaints" },
  { label: "Call Centers", href: "/call-centers" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="w-11/12 mx-auto px-4">
        {/* Main footer */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-white text-white shadow-lg shadow-blue-600/20">
                {/* <Zap className="size-6 fill-current" /> */}
                <img src="/logo.png" alt="Power Sync" className="size-9" />
              </span>

              <span className="text-2xl font-bold tracking-tight text-green-primary">
                Power<span className="text-red-primary">Sync</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Smarter power information for everyone. Stay informed about load
              shedding, electricity schedules, and essential service updates.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-lg border border-slate-800 transition-colors hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebook className="size-4" />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex size-10 items-center justify-center rounded-lg border border-slate-800 transition-colors hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                <FaYoutube className="size-4" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-lg border border-slate-800 transition-colors hover:border-slate-500 hover:bg-slate-800 hover:text-white"
              >
                <FaGithub className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Electricity Services
            </h3>

            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Need Help?</h3>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Find electricity information and support for your area.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-blue-400">
                  <BellRing className="size-5" />
                </span>

                <div>
                  <p className="text-sm font-medium text-white">
                    Power Updates
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Check schedules and outage announcements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-blue-400">
                  <Mail className="size-5" />
                </span>

                <div>
                  <p className="text-sm font-medium text-white">
                    Customer Support
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Get help with electricity services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-blue-400">
                  <MapPin className="size-5" />
                </span>

                <div>
                  <p className="text-sm font-medium text-white">Bangladesh</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Serving electricity consumers nationwide.
                  </p>
                </div>
              </div>

              {/* Replace with your real support email when available */}
              <a
                href="mailto:support@yourdomain.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                <Mail className="size-4" />
                Contact Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-5 text-slate-500">
              © {new Date().getFullYear()} PowerSync. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="/privacy-policy"
                className="text-xs text-slate-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-xs text-slate-400 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              Built for a smarter Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
