import clsx from "clsx";

export default function OurSperator() {
  return (
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
  );
}
