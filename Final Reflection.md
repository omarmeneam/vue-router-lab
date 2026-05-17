# Final Reflection

**1. What is the difference between a traditional multi-page website and a Single Page Application?**  
A traditional website reloads the whole browser page when you click a link and fetches new HTML from the server. A Single Page App (SPA) only loads the HTML once. When you click a link, JavaScript just changes the content on the screen without reloading the browser tab.

**2. Why is Vue Router needed?**  
Vue Router is needed to create multiple "pages" in our Vue app. Since it's an SPA, there's actually only one real HTML page, so Vue Router helps us change the URL and show different components based on what URL the user visits.

**3. What is the purpose of router-view?**  
It's like a window or a placeholder. When we go to a specific URL, Vue Router looks at our routes and displays the correct component exactly where we placed the `<router-view>` tag.

**4. What is the purpose of router-link?**  
It replaces normal `<a>` tags. If we use normal links, the browser will try to reload the page. By using `<router-link>`, we can navigate between our routes smoothly without page reloads.

**5. What happens when a user clicks a router-link?**  
Vue intercepts the click so the page doesn't reload. It changes the URL in the browser, and then the `<router-view>` updates to show the component that belongs to that new URL.

**6. Why does SPA navigation feel faster?**  
It feels faster because we don't have to wait for the server to send us a whole new HTML page and all the CSS and images again. We only update the parts of the page that actually changed.

**7. Why should each route display only one main view?**  
It makes the app easier to understand and manage. Each route is supposed to act like a single page. If we show too many main views, the code gets messy and the layout becomes confusing.

**8. Why is views/ useful when using Vue Router?**  
It helps keep the project organized. We put the main page components (like Home or About) in the `views/` folder, and the smaller reusable pieces (like buttons or cards) in the `components/` folder.

**9. Why is the current App.vue still responsible for storing persons?**  
Because the `persons` array is shared between different views (like Add Person and Person List). Storing it in the main `App.vue` and passing it down is the simplest way to let all views access the same data without using advanced tools.

**10. In a bigger application, what problem might happen if many views need the same data?**  
If the app grows, passing data up and down through many components (called prop drilling) becomes really confusing and hard to maintain. That's why bigger apps use state management tools like Pinia or Vuex to handle shared data easily.
