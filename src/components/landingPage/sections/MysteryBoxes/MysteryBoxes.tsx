import { useState } from 'react';
import { upcomingFeatures } from '../../../landingPage/data/upcomingFeatures';
import { Section } from '../../layout/Section/Section';
import { Button } from '../../ui/Button/Button';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { MysteryBox } from './MysteryBox';
import styles from './MysteryBoxes.module.css';

export function MysteryBoxes() {
  const [openFeatureIds, setOpenFeatureIds] = useState<ReadonlySet<string>>(new Set());

  const toggleFeature = (featureId: string) => {
    setOpenFeatureIds((previous) => {
      const next = new Set(previous);
      if (next.has(featureId)) {
        next.delete(featureId);
      } else {
        next.add(featureId);
      }
      return next;
    });
  };

  return (
    <Section id="mystery-box" tone="raised">
      <SectionHeading
        accent="violet"
        eyebrow="Coming soon"
        title="Something is always in the box."
        description="More features are on the way. Tap a box to peek at what is coming next."
      />

      <div className={styles.grid}>
        {upcomingFeatures.map((feature, index) => (
          <div key={feature.id} className={styles.gridItem}>
            <MysteryBox
              feature={feature}
              position={index + 1}
              isOpen={openFeatureIds.has(feature.id)}
              onToggle={() => toggleFeature(feature.id)}
            />
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <span className={styles.openedCount}>
          {openFeatureIds.size} of {upcomingFeatures.length} boxes opened
        </span>
        <Button variant="outline" size="compact" onClick={() => setOpenFeatureIds(new Set())}>
          Close all boxes
        </Button>
      </div>
    </Section>
  );
}
