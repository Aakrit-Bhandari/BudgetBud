import { summaryHighlights } from '../../../landingPage/data/dailySummary';
import { Section } from '../../layout/Section/Section';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { SummaryHighlightItem } from './SummaryHighlightItem';
import { SummaryNotification } from './SummaryNotification';
import styles from './DailySummary.module.css';

export function DailySummary() {
  return (
    <Section id="daily-summary">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <SectionHeading
            accent="coral"
            eyebrow="Daily summary"
            title="Your day, wrapped up every evening."
            description="At the end of each day you get a short summary of what you spent and what is left. It is only sent when you have an active budget, so you never get noise."
          />
          <ul className={styles.highlightList}>
            {summaryHighlights.map((highlight) => (
              <SummaryHighlightItem key={highlight.id} highlight={highlight} />
            ))}
          </ul>
        </div>

        <div className={styles.preview}>
          <SummaryNotification />
        </div>
      </div>
    </Section>
  );
}
