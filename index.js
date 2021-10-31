import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  // console.log(data);
  res.send("Hello from Homepage");
});
// process.env.PORT
// PORT
app.listen(process.env.PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
