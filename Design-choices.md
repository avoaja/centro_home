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

### Design
React is unopinionated about how to organise projects. Therefore, developers must ensure their apps are easily scalable and maintainable.

I went for a modular structure to take advantage of react components' independence and reusability by pursuing a single-use principle. I even created folders for files that are not yet available to demonstrate the complete picture of the design.

The main folders are highlighted below.

- `frontend/Config`: This will handle app-wide settings. It contains environment values that are not 'secrets' like dev, staging and prod URLs. It also includes an exported instance of axios that allows the developer to add app-wide settings to the API calls.
- `frontend/Hooks`: For storing all the hooks to be used in the future, currently empty
- `frontend/Store`: Stores all the code and functionality for the state management. In the future, it will contain multiple files for different pieces of state.
- `frontend/Utils`: It contains constants and helper functions abstracted from the business logic for easy testing and following functional programming concepts.
- `frontend/Pages`: This contains the app's pages, which will serve as a one-to-one mapping between all the pages on the UI. It is expected that only 'page' files should be placed in this file.
- `frontend/Component`: This will contain various classes of components like layout, forms, charts and common. I expect more categories in the future. It will hold most of the components that drive the app in the spirit of separating the business logic from the UI and encouraging reusability.
- `frontend/__test__`: This holds tests for the app, react testing library tests. 
- `cypress/integration`: This holds end-to-end tests written in cypress.

### Testing strategy
100% coverage is ideal for applications, but this is constrained by cost developer times. Therefore developers have to adopt a risk approach to testing by focusing on the high-traffic areas, golden paths, critical sections, and other areas with high impact only after these areas have been covered before they can move to test other areas.

As a result of the above, I wrote unit tests to test that the functions that manipulate the data for the charts are working as expected so that they can catch any unwanted change in a regression test.

I used cypress to perform end-to-end testing to ensure that the login and logout page is working accordingly. I also used it to ensure that the various charts were rendered.

###### Unfortunately, I could get the cypress to run along with the docker-compose-up. It has to do with the fact that it is running on a local. But it is working as expected in the right environment.  A properly configured live CI/CD pipeline will take care of that