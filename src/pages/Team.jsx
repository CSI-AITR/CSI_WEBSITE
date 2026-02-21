import React from 'react';
import { Background } from '../components/teamPage/Background';
import { FacultyAdvisor, prTeam, creativeTeam, eventTeam, softwareTeam, Lead } from "../data/teamPageData";
import { TeamSection } from '../components/teamPage/TeamSection';

export const Team = () => {
  return (
    <div>
      <Background />
      <TeamSection title="Our Advisors" data={FacultyAdvisor} />
      <TeamSection title="Leads" data={Lead} />
      <TeamSection title="Software Development Team" data={softwareTeam} />
      <TeamSection title="Creative Team" data={creativeTeam} />
      <TeamSection title="Event Team" data={eventTeam} />
      <TeamSection title="Public Relation Team" data={prTeam} />
    </div>
  );
};



