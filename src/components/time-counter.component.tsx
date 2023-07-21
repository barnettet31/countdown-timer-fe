import { TimeContainer } from "./time-container.component";
import { Card } from "./card.component";
import { useCountdown } from "../hooks/useCountdown";

export function TimeCounter() {
  const targetDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <TimeContainer>
      <Card number={days} type="days" />
      <Card number={hours} type="hours" />
      <Card number={minutes} type="minutes" />
      <Card number={seconds} type="seconds" />
    </TimeContainer>
  );
}
