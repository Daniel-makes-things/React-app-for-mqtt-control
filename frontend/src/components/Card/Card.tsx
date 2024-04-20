export default function Card({ timestamp, temp, humidity }: { timestamp: string; temp: string; humidity: string; }): JSX.Element {
  return (
    <div className="block rounded-lg bg-gray-200 p-4 shadow-md">
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
        {`Time: ${timestamp}`}
      </h5>
      <div className="flex justify-between">
        <div className="mb-2 text-base text-neutral-600">
          {`Temperature: ${temp}\u00b0C`}
        </div>
        <div className="mb-2 text-base text-neutral-600">
          {`Humidity: ${humidity}%`}
        </div>
      </div>
      
    </div>
  );
}