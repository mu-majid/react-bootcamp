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


