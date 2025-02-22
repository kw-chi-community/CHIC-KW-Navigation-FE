  import cn from 'clsx';

  interface RouteCardProps {
    type: 'fast' | 'normal' | 'comfortable';
    duration: string;
    distance: string;
    description: string;
    className?: string;
    onClick: () => void;  // 클릭 이벤트 추가
  }

  export default function RouteCard({ type, duration, distance, description, className, onClick }: RouteCardProps) {
    const styles = {
      fast: 'bg-[#DD2828] text-white',
      normal: 'bg-[#2D50B8] text-white',
      comfortable: 'bg-[#62B708] text-white'
    };

    const titles = {
      fast: '빠른 길',
      normal: '일반 길',
      comfortable: '편한 길'
    };

    return (
      <div onClick={onClick} className={cn(
        "w-[31vw] h-[100px] rounded-2xl overflow-hidden shadow-md transition-shadow hover:shadow-lg  cursor-pointer text-center",
        className
      )}>
        <div className={cn("px-3 py-2", styles[type])}>
          <h2 className="text-sm font-semibold">{titles[type]}</h2>
        </div>
        <div className="bg-white px-3 py-2 ">
          <div className="flex items-baseline ">
            <span className="text-l font-bold">{duration}</span>
            <span className="text-xs ml-1 text-gray-600">{distance}</span>
          </div>
          <p className="mt-1 text-[8px] text-gray-500 line-clamp-2">{description}</p>
        </div>
      </div>
    );
  }