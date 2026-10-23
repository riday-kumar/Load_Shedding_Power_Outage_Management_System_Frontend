import { Zap, Building2, Network } from "lucide-react";

const companies = [
  {
    name: "BPDB",
    fullName: "Bangladesh Power Development Board",
    color: "#2563eb",
    bg: "#eff6ff",
    x: "25%",
    y: "17%",
  },
  {
    name: "BREB",
    fullName: "Bangladesh Rural Electrification Board",
    color: "#16a34a",
    bg: "#f0fdf4",
    x: "75%",
    y: "17%",
  },
  {
    name: "DESCO",
    fullName: "Dhaka Electric Supply Company Limited",
    color: "#e11d48",
    bg: "#fff1f2",
    x: "13%",
    y: "50%",
  },
  {
    name: "DPDC",
    fullName: "Dhaka Power Distribution Company Limited",
    color: "#7c3aed",
    bg: "#f5f3ff",
    x: "87%",
    y: "50%",
  },
  {
    name: "WZPDCL",
    fullName: "West Zone Power Distribution Company Limited",
    color: "#ea580c",
    bg: "#fff7ed",
    x: "25%",
    y: "83%",
  },
  {
    name: "NESCO",
    fullName: "North West Zone Power Distribution Company",
    color: "#0891b2",
    bg: "#ecfeff",
    x: "75%",
    y: "83%",
  },
];

export default function PowerDistributionCompanies() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            Power Distribution Network
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bangladesh&apos;s Power Distribution Companies
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Six distribution organizations help deliver electricity across
            different regions of Bangladesh.
          </p>
        </div>

        {/* Desktop radial diagram */}
        <div className="relative mx-auto hidden aspect-10/7 w-full max-w-5xl md:block">
          {/* SVG connector lines */}
          <svg
            viewBox="0 0 1000 700"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {companies.map((company) => {
              const x = parseFloat(company.x) * 10;
              const y = parseFloat(company.y) * 7;

              return (
                <line
                  key={company.name}
                  x1="500"
                  y1="350"
                  x2={x}
                  y2={y}
                  stroke={company.color}
                  strokeWidth="2.5"
                  strokeOpacity="0.7"
                />
              );
            })}
          </svg>

          {/* Central card */}
          <div className="absolute left-1/2 top-1/2 z-10 flex aspect-square w-[clamp(180px,25vw,250px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-white bg-linear-to-br from-green-700 to-emerald-950 p-5 text-center text-white shadow-xl shadow-green-900/20">
            {/* <div className="mb-3 flex size-14 items-center justify-center rounded-full border border-white/40 bg-white/10">
              <Zap size={30} fill="currentColor" />
            </div> */}

            <h3 className="mt-2 text-lg font-bold leading-snug sm:text-xl">
              Power Distribution Companies
            </h3>
          </div>

          {/* Company cards */}
          {companies.map((company) => (
            <div
              key={company.name}
              className="group absolute z-20 flex aspect-square w-[clamp(120px,18vw,180px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 p-3 text-center shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                left: company.x,
                top: company.y,
                borderColor: company.color,
                backgroundColor: company.bg,
                boxShadow: `0 8px 24px ${company.color}15`,
              }}
            >
              <div
                className="mb-2 flex size-10 items-center justify-center rounded-full bg-white shadow-sm"
                style={{ color: company.color }}
              >
                <Building2 size={22} />
              </div>

              <h4
                className="text-base font-extrabold sm:text-lg"
                style={{ color: company.color }}
              >
                {company.name}
              </h4>

              <div
                className="my-2 h-0.5 w-10 rounded-full"
                style={{ backgroundColor: company.color }}
              />

              <p className="max-lg:hidden text-[10px] leading-4 text-gray-700 sm:text-xs sm:leading-4">
                {company.fullName}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="mx-auto mb-8 flex max-w-sm items-center gap-4 rounded-2xl bg-linear-to-r from-green-800 to-emerald-950 p-5 text-white shadow-lg">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <Network size={30} />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                6 Power Distribution Companies
              </h3>
              <p className="mt-1 text-sm text-green-100">
                Connecting Bangladesh
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex min-h-44 flex-col items-center justify-center rounded-full border-2 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{
                  borderColor: company.color,
                  backgroundColor: company.bg,
                }}
              >
                <Building2 size={28} style={{ color: company.color }} />

                <h4 className="mt-2 font-bold" style={{ color: company.color }}>
                  {company.name}
                </h4>

                <p className="mt-2 text-xs leading-5 text-gray-700">
                  {company.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
