import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { app } from "firebase";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")

);

//middlewares
app.use(cors({origin:true}));
app.use(express.json());

// API routes
app.get("/", request,response) => response.status(200).send("hello world"));

app.post("payments/create", async(request,response) => {
  const total = request.query.total;
  console.log("Payment request Recieved BOOM!!! for this amount >>>",total);

  const paymentIntent = await 
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
