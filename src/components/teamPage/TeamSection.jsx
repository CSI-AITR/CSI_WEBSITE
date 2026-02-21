import { Card } from "./Card";


export const TeamSection = ({ title, data }) => {
    const isSmallGrid = ["Event Team", "Public Relation Team", "Engagement Team"].includes(title);
    const gridCols = isSmallGrid ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  
    return (
      <div className='flex flex-col items-center justify-evenly mt-8'>
        <h2 className='text-white font-bold text-3xl text-center'>{title}</h2>
        <div className={`grid ${gridCols} items-center gap-6`}>
          {data.map((member, index) => (
            <Card key={index} data={member} />
          ))}
        </div>
      </div>
    );
  };