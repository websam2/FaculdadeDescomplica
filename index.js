import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js";

const app = express();
const { json, urlendcoded } = pkg;

app.use(json());
app.use(urlendcoded({ extended: true }));

app.listen(300, function () {
    console.log("Listening from http://localhost:300");
});

app.use("/", router);