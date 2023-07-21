import { TimeCard } from "./time-card.component";

export function Card({ number, type }: { number: string, type: string }) {
  const key = Math.random();

  return (
    <div className="flex flex-col gap-3">
    <div className="h-[80px] lg:h-[150px] bg-dark-desaturated rounded-lg">
      <div className="flex flex-col rounded-lg overflow-hidden w-[70px] h-[71px] lg:h-[140px] lg:w-[148px] bg-black relative">
        <div key={key} className="z-10 w-full border-b opacity-70 h-1/2 bg-primary border-b-black border-opacity-10"></div>
        <div className="absolute z-20 w-4 h-4 -translate-y-1/2 rounded-full bg-dark-desaturated -left-2 top-1/2 transparent"></div>
        <div className="absolute z-20 translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2">
          <TimeCard number={number} />
        </div>
        <div className="absolute z-20 w-4 h-4 -translate-y-1/2 rounded-full bg-dark-desaturated -right-2 top-1/2 transparent"></div>
        <div className="relative z-10 w-full h-1/2 bg-primary opacity-90"></div>
      </div>
    </div>
    <span className="font-bold text-center uppercase text-primary">{type}</span>
    </div>
  );
}