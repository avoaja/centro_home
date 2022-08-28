# Submission

### How to run the app
See the `README` file for how to run this app.

### Front end design
I used the following
- Zustand
- Axios
- Tailwind
- React Testing Library (unit testing)
- Cypress (e2e testing)
- React Hook Form (For clean forms)
- Yup (flexible form manipulation)
- React Hooks (useMemo)

### Design
I used small components with single responsibility. To make the app maintainable and scalable.
I created folders that have clear duties.
> The app wouldn't break if the back end is down

> I used React ErrorBoundary to gracefully handle **any** app error in production

The main folders are highlighted below.

- `frontend/Config`: This will handle app-wide settings. It contains environment values that are not 'secrets' like dev, staging and prod URLs. It also includes the base API function, so that I can achieve app-wide updates to how API calls are made.
- `frontend/Hooks`: For storing all the hooks, currently empty
- `frontend/Store`: For state management, for different pieces of state.
- `frontend/Utils`: It contains constants and helper functions to keep business logic  separate and for easy testing and following functional programming concepts.
- `frontend/Pages`: All pages, static or dynamic must be stored here (NextJS style).
- `frontend/Component`: Group of components like layout, forms, charts and common. Helps to keep the pages small, encourage reusability and hold more business logic.
- `frontend/__test__`: Unit tests - react testing library tests - running with docker compose. 
- `cypress/integration`: End-to-end - cypress (not running with docker compose)

### Testing strategy
100% coverage is ideal, but this is constrained by cost of developer time.

Therefore developer should apply a risk-based approach to testing by focusing on the high traffic/impact areas, golden paths, critical sections and sections that change frequently (to ensure the business rules still work after changes) before considering other areas of the application

I wrote unit tests for the functions that manipulate the data for the charts.

I wrote cypress tests to perform end-to-end testing to ensure that the login/logout and chart display flow are working. I deem this as sufficient for covering the individual react components.