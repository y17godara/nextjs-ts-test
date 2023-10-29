import { Skeleton } from '@/components/ui/skeleton';

function SkeletonDemo() {
  return (
    <div className='flex items-center'>
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  );
}

export default SkeletonDemo;
