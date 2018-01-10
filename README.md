# Medium clone with React & Redux
*Follow realworld app tutorial from [thinkster.io](https://thinkster.io/)*

## Notes
### 1. Scaffolding app with React & Redux

### 2. Performing HTTP Requests with Custom Middleware
  * Setup `superagent` for sending requests
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