import clsx from "clsx";

export function SubHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className={clsx("relative")}>
      <svg
        className={clsx(
          "wave-top",
          "absolute",
          "top-0",
          "left-0",
          "w-full",
          "h-96",
          "transform",
          "scale-y-[-1]",
        )}
        viewBox="0 0 1440 320"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >



        <path
  fill="#000"
  fillOpacity="0.03"
  d="M0,90L48,105C96,120,192,150,288,175C384,200,480,220,576,195C672,170,768,100,864,95C960,90,1056,170,1152,180C1248,190,1344,140,1392,110L1440,80L1440,320L0,320Z"
/>

<path
  fill="#000"
  fillOpacity="0.06"
  d="M0,120L48,100C96,80,192,70,288,90C384,110,480,170,576,200C672,230,768,250,864,230C960,210,1056,150,1152,120C1248,90,1344,70,1392,75L1440,80L1440,320L0,320Z"
/>

<path
  fill="#000"
  fillOpacity="0.10"
  d="M0,160L48,185C96,210,192,260,288,245C384,230,480,170,576,145C672,120,768,135,864,170C960,205,1056,235,1152,225C1248,215,1344,180,1392,160L1440,145L1440,320L0,320Z"
/>

<path
  fill="#000"
  fillOpacity="0.15"
  d="M0,205L48,180C96,155,192,130,288,150C384,170,480,240,576,265C672,290,768,270,864,235C960,200,1056,150,1152,155C1248,160,1344,205,1392,230L1440,255L1440,320L0,320Z"
/>

<path
  fill="#000"
  fillOpacity="0.20"
  d="M0,245L48,265C96,285,192,315,288,300C384,285,480,235,576,210C672,185,768,200,864,230C960,260,1056,305,1152,295C1248,285,1344,245,1392,215L1440,190L1440,320L0,320Z"
/>

<path
  fill="#000"
  fillOpacity="0.30"
  d="M0,285L48,275C96,265,192,245,288,225C384,205,480,195,576,220C672,245,768,295,864,310C960,325,1056,310,1152,285C1248,260,1344,235,1392,225L1440,215L1440,320L0,320Z"
/>


      </svg>
      <section
        className={clsx(
          "container",
          "mx-auto",
          "text-center",
          "py-6",
          "relative",
          "z-10",
        )}
      >
        <h2
          className={clsx(
            "w-full",
            "my-2",
            "text-5xl",
            "font-bold",
            "leading-tight",
            "text-center",
            "text-white",
            "mt-32"
          )}
        >
          {title}
        </h2>
        <div className={clsx("w-full", "mb-4")}>
          <div
            className={clsx(
              "h-1",
              "mx-auto",
              "bg-white",
              "w-1/6",
              "opacity-25",
              "my-0",
              "py-0",
              "rounded-t",
            )}
          ></div>
        </div>
        <h3 className={clsx("my-4", "text-3xl", "leading-tight")}>
          {subtitle}
        </h3>
      </section>
    </div>
  );
}
