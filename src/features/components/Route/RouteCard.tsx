import cn from 'clsx';

interface RouteCardProps {
  type: 'fast' | 'normal' | 'comfortable';
  duration: string;
  distance: string;
  description: string;
  className?: string;
}

export default function RouteCard({ type, duration, distance, description, className }: RouteCardProps) {
  const styles = {
    fast: 'bg-[#DD2828] text-white',
    normal: 'bg-[#2D50B8] text-white',
    comfortable: 'bg-[#62B708] text-white'
  };

  const titles = {
    fast: '빠른길',
    normal: '일반길',
    comfortable: '편한길'
  };

  return (
    <div className={cn(
      "w-[120px] h-[100px] rounded-2xl overflow-hidden shadow-md transition-shadow hover:shadow-lg mx-2",
      className
    )}>
      <div className={cn("px-3 py-2", styles[type])}>
        <h2 className="text-sm font-semibold">{titles[type]}</h2>
      </div>
      <div className="bg-white px-3 py-2">
        <div className="flex items-baseline">
          <span className="text-lg font-bold">{duration}</span>
          <span className="text-xs ml-1 text-gray-600">{distance}</span>
        </div>
        <p className="mt-1 text-xs text-gray-500 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
