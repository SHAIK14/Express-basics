const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(express.urlencoded({ extended: true }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).send("<p>page not found</P>");
});

app.listen(4000);
