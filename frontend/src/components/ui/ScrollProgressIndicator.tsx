import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setProgress(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-[200px] w-2 pointer-events-none">
      <div className="relative h-full w-full">
        {/* Track */}
        <div className="absolute inset-0 bg-white/10 rounded-full"></div>

        {/* Progress indicator */}
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-amber-400 via-yellow-300 to-transparent"
             style={{ clipPath: `inset(${(1 - progress) * 100}% 0 0 0)` }}></div>

        {/* Dot indicators for sections */}
        <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none">
          {[0, 0.2, 0.4, 0.6, 0.8, 1].map((position, index) => (
            <div key={index} className="flex w-2 items-center justify-center">
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${progress > position ? 'bg-amber-300' : 'bg-white/20'}`}
                style={{ transform: `scale(${progress > position ? 1.2 : 1})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressIndicator;