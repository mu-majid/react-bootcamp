## Project's Notes:

  * A page is a component that is not going to be used more than once, but a component is a reusable one.
  * Our files structure will account for that difference by having two folders, onr for components and the other for pages.

  * For having a background image that scales on hover:
    - [Stackoverflow](https://stackoverflow.com/questions/35939859/how-do-i-animate-background-image-size-on-hover-smoothly-in-css)
    - [CSS-Tricks](https://css-tricks.com/zooming-background-images/)

    - The key takeaway: Always wrap the div with bg-img inside a wrapper, and give that div a height and width of 100%.

---

### Routing In React:

  *Showing a specific page based on what URL in address bar*

  * Browsers are built around the idea of clicking a link and getting an HTML page with resources (js and css) for that page.
  * React on the other hand is built around javascript manipulating the DOM. And there is no extra pages fetching.
  * A major problem with SPA was the back button in browsers, as mentioned above, SPA libraries and frameworks did not have the idea of links.
  * But this was solved when the browsers introduced the History API, it is what React uses to hijack or mimic urls.

  * Using the `react-router-dom` library is considered a standard right now.
  * And the most used type of routers is `BrowserRouter`:
  ```javascript
  // Wrap the App with the router
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );

  // Then inside the App:
  function APP () {
    return (<div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="pageOne" component={pageOneComponent} />
      <Route exact path="pageTwo" component={pageTwoComponent}/>
    </div>)
  }

  // Another Component worth mentioning is the `Switch` component
  // And is used by wrapping Route components.
  // The <Switch /> component will only render the first route that matches/includes the path. Once it finds the first route that matches the path, it will not look for any other matches. Not only that, it allows for nested routes to work properly, which is something that <Router /> will not be able to handle.
  function APP () {
    return (<div>
    <Switch>
    <!-- exact now is only used on the root "/" route -->
      <Route exact path="/" component={Homepage} /> 
      <Route path="pageOne" component={pageOneComponent} />
      <Route path="pageTwo" component={pageTwoComponent}/>
    </Switch>
    </div>)
  }
  ```

  * when a component is rendered by `<Route>` component, three props are passed along with the props object of the component rendered.
  * These three attributes are: 
    - `match`: contains the `url` matched and caused the component to be rendered. And any url parameters. `url` is used for building dynamic routing with <Link> component (match.url + someId)
    - `location`: tells us where we are now, using `pathname` property.
    - `history`: the main thing here to focus on is `push`, this push is used instead of (and equivalent to) the <Link> component.

  * When navigating we use `<Link>` react-router component or history.push as mentioned above.
  ``` xml
  <Link to="/another-resource">Click Here</Link>
  ```
  The idea here is that we're not re-rendering the app, but manipulating the DOM to hide and show components based on the url.
  * if an anchor tag is used, this would cause the entire app to re-render. 

  * There is a **BAD PRACTICE** called *prop tunneling/drilling*, which means passing props from parent to children deep in the tree.
  * This could occur when passing `history` object from a Homepage down to Directory, then to MenuItems components (like in our app)
      ```text
      <Homepage> Rendered when "/" is visited => pass the history,location,match down to <Directory> => pass them again down to <MenuItem>
      ```
  * A solution to this is using `withRouter()` HOC. that gives us access to history, location, and match objects.

  * Pay close attention to anonymous function calls like `map`, `filter`,...etc. inside our apps, because they are run every time the components gets rendered.

---

### Authentication:

  * In this App, Firebase was used for storing data(firestore), and also their authentication server, that allows Oauth (like sign in with google) and regular email/password login.

  * The main pattern used in authentication in the app is event based. Whether we login (w/ email/password or google) or sign up, we subscribed to firebase `onAuthChange` method to send us back any change in the app's  `componentDidMount` lifecycle method.

  * Firebase keeps auth users in their auth server, but we need to save them in our datastore (firestore). So there is a function called `createUserProfileDocument` that checks if the user causing the event to be triggered (login/signup) is in our DB or not (if not save him).

  * We rely on firebase's user session persistence.