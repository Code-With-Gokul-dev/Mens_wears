import "./src/utils/loadEnv.js"
import app from "./src/app.js";
import "./src/db/db.js";

const port = process.env.PORT || 8609;

// Server running
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
