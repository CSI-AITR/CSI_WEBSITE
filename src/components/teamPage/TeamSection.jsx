import { useEffect, useState } from "react";
import { Card } from "./Card";

export const TeamSection = ({ title, data }) => {
    const isSmallGrid = ["Event Team", "Public Relation Team", "Engagement Team"].includes(title);
    const gridCols = isSmallGrid ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center"  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center";
  
    // Progressive rendering to prevent UI lag when loading many heavy cards
    const [visibleItems, setVisibleItems] = useState(0);

    useEffect(() => {
      // Mount cards in chunks to free up the main thread
      const interval = setInterval(() => {
        setVisibleItems((prev) => {
          if (prev >= data.length) {
            clearInterval(interval);
            return data.length;
          }
          return prev + 2;
        });
      }, 40);

      return () => clearInterval(interval);
    }, [data.length]);

    return (
      <div className='flex flex-col items-center justify-evenly mt-12 w-full'>
        <h2 className='text-white font-bold text-3xl text-center mb-8'>{title}</h2>
        <div className={`grid ${gridCols} items-center gap-1 w-full max-w-7xl mx-auto px-4 min-h-[400px]`}>
          {data.slice(0, visibleItems).map((member, index) => (
            <Card key={index} data={member} />
          ))}
        </div>
      </div>
    );
};