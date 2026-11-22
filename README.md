# Tally

Tally is a budget tracker that keeps you in the know. Create budgets, split them into categories, see every transaction behind them, and get a short summary at the end of each day.

This repository is the **frontend**, built with React and TypeScript in an [Nx](https://nx.dev) workspace.

> **Status:** early build. All budgets, categories and transactions are sample data, and there is no back end yet. The login page validates the form but does not sign anyone in.

## What it does

- **Budgets and categories.** Make as many budgets as you need (for example Monthly Home, Goa Trip, Side Hustle). Each budget holds its own categories, and each category has its own limit and progress bar.
- **Transactions.** Tap a category to see the transactions behind it, plus how much of the budget that category takes up.
- **Status at a glance.** Every bar shows one of three states: *On track*, *Close to the limit* (80% and above) or *Limit reached* (100%).
- **Daily summary.** A short recap of each day: what you spent, what is left in your budget, and where most of it went. It is only sent when you have an active budget, so there is no noise.
- **Login.** A login page with name, email and password fields, with inline validation.
- **Mystery boxes.** A teaser section for features that are on the way.

## Pages

| Page | What it shows |
| --- | --- |
| Landing page | What Tally does, a live budget demo, the daily summary and the upcoming features |
| Login | The sign-in form, inside a round piggy bank with coins and notes falling into it |
| Budget tracker | Your budgets, categories and transactions in a dark glass theme |

## Run it

```sh
npm install
npx nx serve frontend      # start the dev server
npx nx build frontend      # create a production bundle
npx nx show project frontend   # list every available target
```

## Roadmap

Nothing in this section is built yet. It is what comes next.

### 1. AI budget suggestions

Tally will look at your past spending and suggest a better budget, so you do not have to guess your limits.

- **Suggested limits.** Propose a limit for each category based on what you actually spend.
- **Rebalancing.** Point out when one category keeps running over while another sits unused, and suggest moving money between them.
- **Unusual spending.** Flag a transaction or a day that is far outside your normal pattern.
- **Plain explanations.** Every suggestion says why it was made, and you decide whether to accept it. Nothing changes without your approval.
- **Privacy.** AI features will be opt-in. Only the data needed for a suggestion is used, and it is not shared outside the service that produces it.

What it needs: a back end that stores real transaction history, an AI service behind that back end (never called straight from the browser), and a place in the budget tracker to show and accept suggestions.

### 2. Email alerts for low budget in a category

Tally will email you when a category is running low, so you hear about it before the money is gone.

- **Alert levels.** One email when a category passes *Close to the limit* (80%) and another when it reaches *Limit reached* (100%).
- **Your thresholds.** Choose the percentage and which categories you want alerts for.
- **No spam.** Each alert is sent once per category per budget period, and the daily summary keeps its own rule of only being sent when you have an active budget.
- **Control.** Every email has a one-click way to change or stop alerts.

What it needs: accounts and saved budgets on a back end, a scheduled job that checks category usage, an email provider, and a notification settings screen.

### 3. Features behind the mystery boxes

- Split with friends: share a bill or trip budget and see who owes what.
- Savings goals: set a target and watch the progress build day by day.
- Bill reminders: a nudge before rent, subscriptions and EMIs are due.
- Spending forecast: see where your month is heading before it gets there.
- Smart nudges: friendly taps when a category is running hot.

### 4. Foundations for all of the above

- Real sign-in and saved data (accounts, budgets, categories, transactions).
- A back end API and a shared data model between front end and back end.
- Automated tests for the budget maths and the forms.

## Contributing

Run `npx nx serve frontend`, make your change, and check it with `npx nx build frontend` before you open a pull request.

## Licence
