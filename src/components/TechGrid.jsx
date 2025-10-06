import { TiltCard } from "./TiltCard";

export default function TechGrid({ techItems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-4">
      {techItems.map((item, idx) => (
        <TiltCard key={idx} item={item} />
      ))}
    </div>
  );
}
