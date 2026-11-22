import { BudgetSummaryCard } from '../../components/landingPage/budget/BudgetSummaryCard/BudgetSummaryCard';
import { BudgetTabs } from '../../components/landingPage/budget/BudgetTabs/BudgetTabs';
import { TransactionList } from '../../components/landingPage/budget/TransactionList/TransactionList';
import { budgets } from '../../components/landingPage/data/budgets';
import { budgetsPageContent } from '../../components/landingPage/data/budgetsPage';
import { Icon } from '../../components/landingPage/icons/Icon';
import { Container } from '../../components/landingPage/layout/Container/Container';
import { PageHeader } from '../../components/landingPage/layout/PageHeader/PageHeader';
import { Logo } from '../../components/landingPage/ui/Logo/Logo';
import { useBudgetSelection } from '../../hooks/useBudgetSelection';
import { getCategoryShare } from '../../utils/budgetMath';
import { classNames } from '../../utils/classNames';

import styles from './BudgetsPage.module.css';

/** The signed-in budget tracker: pick a budget, tap a category, see its transactions. Uses the glass theme. */
export function BudgetsPage() {
  const {
    budget,
    category,
    budgetIndex,
    categoryIndex,
    selectBudget,
    selectCategory,
  } = useBudgetSelection(budgets);

  return (
    <div className={classNames('theme-glass', styles.page)}>
      <Container className={styles.topBar}>
        <Logo />
      </Container>

      <Container className={styles.content}>
        <PageHeader
          icon={<Icon name="chart" size={26} />}
          eyebrow={budgetsPageContent.eyebrow}
          title={budgetsPageContent.title}
          description={budgetsPageContent.description}
          chips={[
            budgetsPageContent.budgetCountLabel(budgets.length),
            budgetsPageContent.hint,
          ]}
        />

        <div className={styles.tabsBar}>
          <BudgetTabs
            budgetNames={budgets.map((item) => item.name)}
            selectedIndex={budgetIndex}
            onSelect={selectBudget}
          />
        </div>

        <div className={styles.panels}>
          <BudgetSummaryCard
            budget={budget}
            selectedCategoryIndex={categoryIndex}
            onSelectCategory={selectCategory}
          />
          <TransactionList
            categoryName={category.name}
            transactions={category.transactions}
            sharePercent={getCategoryShare(category, budget)}
          />
        </div>
      </Container>
    </div>
  );
}
