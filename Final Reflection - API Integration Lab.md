# 13. Final Reflection

**33. Why is a static JSON file not enough for CRUD?**
A static JSON file is just a plain text file that stores data. By itself, it cannot handle incoming HTTP requests (like POST or DELETE) or process logic to update the data automatically. We need a backend server running to actually receive requests, process the CRUD operations, and rewrite the file accordingly so the changes are saved.

**34. What is the role of JSON Server in this lab?**
JSON Server acts as a fake backend API for our development environment. It takes our simple `db.json` file and automatically creates full REST API endpoints for it. This allows our Vue frontend to make real HTTP requests (GET, POST, DELETE) without us needing to build a complex backend from scratch using Node.js or PHP.

**35. Why should API endpoints be tested independently before frontend integration?**
Testing endpoints independently using tools like the browser or Thunder Client ensures that the backend is actually working and returning the correct data format. If we connect the frontend right away and something breaks, it is hard to tell if the error is from our Vue code or if the backend API itself is failing. 

**36. What is asynchronous communication?**
Asynchronous communication means our application can send a request to the server and continue running other code without freezing the whole page while waiting for the response. When the server finally replies, the application uses Promises (`.then()`) to handle the data in the background, keeping the UI smooth and responsive.

**37. What is the difference between Fetch API and Axios?**
The Fetch API is built directly into modern browsers, so it doesn't require installing any extra packages, but it requires manually converting responses using `.json()`. Axios is an external library that we install via npm. It automatically converts JSON responses, handles errors more cleanly, and is generally easier to use for complex requests.

**38. Why is frontend-backend separation important?**
Separating the frontend and backend makes the system more modular and scalable. It allows frontend developers to focus solely on the UI and Vue components, while backend developers manage the database and server logic. It also means multiple different frontends (like a mobile app and a web app) can connect to the same single backend API.
