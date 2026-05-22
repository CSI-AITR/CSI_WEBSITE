import React, { useState, useEffect } from 'react';
import { Background } from '../components/teamPage/Background';
import { FacultyAdvisor, SeniorCouncil, prTeam, creativeTeam, eventTeam, softwareTeam, Lead } from "../data/teamPageData";
import { TeamSection } from '../components/teamPage/TeamSection';

export const Team = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Combine all arrays
    const allMembers = [
      ...FacultyAdvisor,
      ...SeniorCouncil,
      ...Lead,
      ...softwareTeam,
      ...creativeTeam,
      ...eventTeam,
      ...prTeam
    ];

    // Extract non-empty image URLs
    const imageUrls = allMembers
      .map(member => member.imageURL)
      .filter(url => url && url.trim() !== "");

    if (imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      setProgress(Math.round((loadedImages / imageUrls.length) * 100));
      if (loadedImages === imageUrls.length) {
        // Small delay for smooth transition even if cached
        setTimeout(() => setIsLoading(false), 400);
      }
    };

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Continue even if an image fails
    });
  }, []);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#000814]">
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-b-cyan-400 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-l-blue-500 border-r-blue-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
          <div className="absolute inset-4 bg-cyan-500 rounded-full animate-pulse opacity-50 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        </div>
        <h2 className="text-white text-2xl font-bold font-outfit tracking-[0.2em] uppercase">
          Loading Team
        </h2>
        <div className="w-64 h-1.5 bg-white/10 rounded-full mt-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-cyan-200/70 mt-3 font-mono text-sm">{progress}% Complete</p>
      </div>
    );
  }

  return (
    <div className="animate-[fadeIn_0.8s_ease-out] relative bg-backG min-h-screen overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-amber-500/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[60%] w-[30vw] h-[30vw] bg-cyan-400/10 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Main Content */}
      <div className="relative z-10 pb-20">
        <Background />
        <div className="flex flex-col gap-8 md:gap-16">
          <TeamSection title="Our Advisors" data={FacultyAdvisor} />
          <TeamSection title="Senior Council" data={SeniorCouncil} />
          <TeamSection title="Leads" data={Lead} />
          <TeamSection title="Software Development Team" data={softwareTeam} />
          <TeamSection title="Creative Team" data={creativeTeam} />
          <TeamSection title="Event Team" data={eventTeam} />
          <TeamSection title="Public Relation Team" data={prTeam} />
        </div>
      </div>
    </div>
  );
};
