import { Skeleton } from '@/components/ui/skeleton';

function SkeletonDemo() {
  return (
    <div className='flex items-center'>
      <Skeleton className='h-[20px] w-[100px] rounded-full' />
    </div>
  );
}

export default SkeletonDemo;
