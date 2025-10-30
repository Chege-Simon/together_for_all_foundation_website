import React from 'react';
import type { SectionProps } from '../types';
import {
  HeroSection,
  AboutSection,
  OurWorkSection,
  EventsSection,
  GetInvolvedSection,
} from './sections';

interface PageSectionsProps extends SectionProps {
    onJoinMissionClick: () => void;
    onDonateClick: () => void;
}

export const PageSections = React.forwardRef<HTMLElement, PageSectionsProps>((props, ref) => {
    return (
        <main>
            <HeroSection {...props} />
            <AboutSection {...props} />
            <OurWorkSection {...props} />
            <EventsSection {...props} />
            <GetInvolvedSection {...props} ref={ref} />
        </main>
    );
});