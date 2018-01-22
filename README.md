# Medium clone with React & Redux
*Follow realworld app tutorial from [thinkster.io](https://thinkster.io/)*

## Notes
### 1. Scaffolding app with React & Redux

### 2. Performing HTTP Requests with Custom Middleware
  * Setup `superagent` in `agent.js` for sending requests
  * Call the function to get articles in `Home` component
    - Integrate the agent with Home component
  * Displaying retrieved data in components
    - Create `ArticlePreview` component for single article preview
    - Use `ArticlePreview` in `ArticleList` with the article data passed in

### 3. Add `react-router`
  * Refactor code: move all the redux store to new file `store.js`
  * Set up routing structure:
    - Build initial router setup with `Router`, `hashHistory`, `Route` and `IndexRoute`
    - Removed hard-coded `Home` component from `App` component
    - Component to be rendered is represented by `props.children` and `App.contextTypes` snippet tells react-router to attach the `children` property to this component's props
  * Create `Login` component to display on a Route
  * Add navbar to header by using `Link` from react-router

### 4. JWT Authentication with React&Redux
  * Breakup reducer to smaller chunks 
    - Put all reducers into `src/reducers/`
    - `home.js` reducer
    - `common.js` reducer for app name
    - `auth.js` reducer contains auth-specific logic 
    - Use `combineProducers()` to build in `store.js`
    - Modify `mapStateToProps` function for all components that use combined reducers  

  * Wiring up the Login Form
    - Add `post` function to API request agent and use it to create `Auth.login` function in `agent.js`
    - Hook `Login` component to Redux
      - Pull in state from `auth` reducer in `mapStateToProps()`
      - Add `mapDispatchToProps` function for `Login` component to dispatch different events: update field, submit
    - Create new `ListErrors` component to show error messages, used by login form

  * Wiring the Authentication Reducer
    - Handle actions: `LOGIN`, `UPDATE_FIELD_AUTH`, `ASYNC_START`
    - Update the `auth` reducer to handle the above actions
    - Update the `promiseMiddleware` to dispatch an `ASYNC_START` action when an async action start -> to disable the submit button while submission
  
  * Local Storage Middleware & Redirects
    - Update `common` reducer to get the token after user login and redirect user
    - `common` reducer takes some new actions:
      - `APP_LOAD`: setup app state with token & currentUser (if any)
      - `REDIRECT`: 
      - `LOGIN`: update state when user logged in
    - Dispatch `REDIRECT` in `App.js`
      - Using `componentWillReceiveProps` lifecycle method
    - Setup `localStorageMiddleware` to store the user token (So it won't be lost if the user closes the browser window)
      - JWT token is stored at `window.localStorage`
    - Update `App` component to pull the token from `window.localStorage`
    - Update `agent.js` to use the user token on every requests