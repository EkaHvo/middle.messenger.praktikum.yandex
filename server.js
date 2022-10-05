const express = require("express");
const app = express();
const PORT = 3000;
process.env.PORT || PORT;

const root = `${__dirname}/dist`
app.use(express.static(root));
app.use(fallback('index.html', { root }))

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
