import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group">
      <div className="h-full p-8 bg-white border border-gray-100 rounded-2xl hover:border-[#C9A327]/30 hover:shadow-xl hover:shadow-[#C9A327]/5 transition-all duration-300">
        {icon && (
          <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A327] transition-colors">
            <div className="text-[#C9A327] group-hover:text-black transition-colors">
              {icon}
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-[#C9A327] transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <span className="inline-flex items-center text-sm font-medium text-[#C9A327]">
          Learn More
          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
