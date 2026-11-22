import { useState } from 'react';
import { budgets } from '../../data/budgets';
import { useBudgetSelection } from '../../../../hooks/useBudgetSelection';
import { BudgetSummaryCard } from '../../budget/BudgetSummaryCard/BudgetSummaryCard';
import { BudgetTabs } from '../../budget/BudgetTabs/BudgetTabs';
import { TransactionList } from '../../budget/TransactionList/TransactionList';
import { PiggyBankScene } from '../../illustrations/PiggyBankScene/PiggyBankScene';
import { Section } from '../../layout/Section/Section';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import styles from './BudgetExplorer.module.css';

interface BurstState {
  id: number;
  originY: number;
}

const NO_BURST: BurstState = { id: 0, originY: 0 };

/** Interactive demo: pick a budget, tap a category, see its transactions and a burst of icons. */
export function BudgetExplorer() {
  const { budget, category, budgetIndex, categoryIndex, selectBudget, selectCategory } =
    useBudgetSelection(budgets);
  const [burst, setBurst] = useState<BurstState>(NO_BURST);

  const handleSelectBudget = (index: number) => {
    selectBudget(index);
    setBurst(NO_BURST);
  };

  const handleSelectCategory = (index: number, originY: number) => {
    selectCategory(index);
    setBurst((previous) => ({ id: previous.id + 1, originY }));
  };

  return (
    <Section id="budgets" tone="raised" backdrop={<PiggyBankScene />}>
      <SectionHeading
        eyebrow="Budgets and categories"
        title="Every budget. Every category. Every transaction."
        description="Make as many budgets as you need. Each one holds its own categories, and each category keeps the full list of transactions behind it. Try it below."
      />

      <div className={styles.tabsWrapper}>
        <BudgetTabs
          budgetNames={budgets.map((item) => item.name)}
          selectedIndex={budgetIndex}
          onSelect={handleSelectBudget}
        />
      </div>

      <div className={styles.panels}>
        <BudgetSummaryCard
          budget={budget}
          selectedCategoryIndex={categoryIndex}
          onSelectCategory={handleSelectCategory}
          burstIcons={category.burstIcons}
          burstId={burst.id}
          burstOriginY={burst.originY}
        />
        <TransactionList categoryName={category.name} transactions={category.transactions} />
      </div>
    </Section>
  );
}
