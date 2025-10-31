import React from 'react';
import type { Content } from '../types';
import { 
    HeroSection, 
    AboutSection, 
    OurWorkSection,
    EventsSection,
    GetInvolvedSection,
    ContactSection
} from './sections';

interface PageSectionsProps {
    content: Content;
    scrollY: number;
    onJoinMissionClick: () => void;
}

export const PageSections = React.forwardRef<HTMLElement, PageSectionsProps>(({ content, scrollY, onJoinMissionClick }, ref) => {
    return (
        <main>
            <HeroSection content={content} scrollY={scrollY} onJoinMissionClick={onJoinMissionClick} />
            <AboutSection content={content} scrollY={scrollY} />
            <OurWorkSection content={content} scrollY={scrollY} />
            <EventsSection content={content} scrollY={scrollY} />
            <GetInvolvedSection content={content} scrollY={scrollY} ref={ref} />
            <ContactSection content={content} scrollY={scrollY} />
        </main>
    );
});
