import { BubbleBackground } from '@/components/ui/shadcn-io/bubble-background';
import { WritingText } from '@/components/ui/shadcn-io/writing-text';

export const Landingpage = () => {
  return (
    <BubbleBackground
      className="bg-background w-screen h-[calc(100vh-88px)] flex justify-center overflow-hidden"
      colors={{
        first: '0,0,221',
        second: '201,89,221',
        third: '255,46,84',
        fourth: '255,144,4',
        fifth: '255,144,4',
        sixth: '255,46,84',
      }}
    >
      <div className="relative z-10 w-full h-full bg-gradient-to-b from-background -from-10% to-background/40 to-25%">
        <div className="mt-52 px-32 flex flex-col items-center gap-10">
          <WritingText
            text="Discover. Explore. Enjoy."
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            inView
            className="select-none text-center text-7xl font-semibold tracking-tighter"
          />
          <h2 className="hidden md:block text-center select-none">
            Discover what’s on, what’s next, and where to watch.
          </h2>
        </div>
      </div>
    </BubbleBackground>
  );
};
