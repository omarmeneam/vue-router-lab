# LAB WEEK 09 - VUE ROUTER NOTES

## Single Page Application (SPA)
A Single Page Application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.

## Vue Router
Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. It allows mapping components to routes, passing parameters, and managing navigation history.

## Testing Checklist
- [x] URL changes when clicking menu - Pass
- [x] No full page reload - Pass
- [x] Sidebar navigation works - Pass
- [x] Correct view is displayed - Pass
- [x] Only one view is shown at a time - Pass
- [x] Browser Back button works - Pass
- [x] Browser Forward button works - Pass
- [x] Refreshing /list still loads Person List page - Pass

## Final Reflection Answers

**1. What is the difference between a traditional multi-page website and a SPA?**
A traditional website reloads the entire page every time you click a link and requests a new HTML file from the server. A SPA only loads one single HTML page at the start, and then uses JavaScript to swap out components dynamically without refreshing the whole browser tab.

**2. Why is Vue Router needed?**
Vue Router is needed to manage the URL and navigation in a Vue SPA. It allows us to connect different URLs (like `/list` or `/add`) to specific Vue components, making the app feel like it has multiple pages while remaining a single-page app.

**3. What is the purpose of router-view?**
The `<router-view>` tag acts as a placeholder or window. It tells Vue exactly where to display the component that matches the current URL route.

**4. What is the purpose of router-link?**
The `<router-link>` tag is a replacement for the traditional HTML `<a>` tag. It allows users to navigate between routes without triggering a full page reload.

**5. What happens when a user clicks a router-link?**
When clicked, Vue Router intercepts the click, updates the browser URL and history, and tells `<router-view>` to swap out the old component with the new one matching the updated route, all without contacting the server for a new page.

**6. Why does SPA navigation feel faster?**
It feels faster because the browser doesn't have to download the full HTML structure, CSS, and reload scripts again. It only changes the part of the DOM that actually needs updating, making it instant and seamless.

**7. Why should each route display only one main view?**
Each route corresponds to a specific "page" in the user's mind. Displaying only one main view keeps the layout predictable and aligns with how URLs typically represent distinct content or actions.

**8. Why is views/ useful when using Vue Router?**
The `views/` folder helps organize components. Components in `views/` are typically full "page" components that are directly tied to routes in the router, whereas the `components/` folder holds smaller, reusable pieces (like buttons, cards, or headers) that make up those views.

**9. Why is the current App.vue still responsible for storing persons?**
Because the `persons` array is shared state needed by multiple views (Add Person, Last Person, Person List). In a simple app without state management like Pinia, storing it in the root component `App.vue` and passing it down via props/events is the easiest way to share it.

**10. In a bigger application, what problem might happen if many views need the same data?**
In a big application, passing props and emitting events up and down deep component trees becomes very messy and hard to maintain (called "prop drilling"). We would normally use a state management library like Pinia or Vuex to solve this.
