import { useEffect, useState } from "react";
import { getDateTime } from "lib/util/get-date-time";
import { manrope } from "lib/util/get-class";
import clsx from "clsx";

type Props = {};

const ClockWidget = (props: Props) => {
  const [time, setTime] = useState<string[]>(getDateTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getDateTime());
    }, 1000);
  }, []);

  const [formattedDay, formattedDate, formattedTime] = time;

  return (
    <div
      className={clsx(
        manrope,
        "text-primary-white text-right",
        "space-y-3.5",
        "hidden md:block"
      )}
    >
      <h1 className="text-4xl text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">{formattedTime}</h1>
      <div className="text-primary-gray">
        <p className="text-base leading-5">{formattedDate}</p>
        <p className="text-lg">{formattedDay}</p>
      </div>
    </div>
  );
};

export default ClockWidget;
