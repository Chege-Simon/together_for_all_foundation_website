import React from 'react';
import type { SectionProps } from '../types';
import {
  HeroSection,
  AboutSection,
  OurWorkSection,
  EventsSection,
  GetInvolvedSection,
} from './sections';

// FIX: The properties `isCmsMode`, `onContentUpdate`, and `EditableTextComponent`
// do not exist on `SectionProps`. The `PageSectionsProps` interface has been
// updated to extend `SectionProps` and define these properties directly.
// This supports the apparent intent for a CMS/editing mode without modifying
// the core `SectionProps` type used throughout the application.
interface PageSectionsProps extends SectionProps {
    isCmsMode: boolean;
    onContentUpdate: (path: string, value: string) => void;
    EditableTextComponent: React.ComponentType<any>;
    // FIX: Added missing properties `onJoinMissionClick` and `onDonateClick` required by HeroSection and GetInvolvedSection respectively.
    onJoinMissionClick: () => void;
    onDonateClick: () => void;
}

export const PageSections: React.FC<PageSectionsProps> = (props) => {
    return (
        <main>
            <HeroSection {...props} />
            <AboutSection {...props} />
            <OurWorkSection {...props} />
            <EventsSection {...props} />
            <GetInvolvedSection {...props} />
        </main>
    );
};
