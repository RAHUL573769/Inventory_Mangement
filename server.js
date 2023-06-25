const connectDb = require("./config/dbConnect");
const app = require("./index");
const secret = require("./secret");

const PORT = secret.PORT;
app.listen(PORT, async (req, res) => {
  console.log(`Server is Running at ${PORT}`);
  await connectDb();
});
