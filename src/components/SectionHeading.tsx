interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16`}>
      {eyebrow && (
        <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
          {eyebrow}
        </p>
      )}
      
      <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 ${light ? "text-white" : "text-black"}`}>
        {title}
      </h2>
      
      {description && (
        <p className={`text-lg ${light ? "text-white/70" : "text-gray-600"} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
}
