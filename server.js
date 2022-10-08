const fallback = require('express-history-api-fallback');
const express = require('express');
const app = express();
const path = require('path');
const root = path.resolve(__dirname, 'dist');
app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

const PORT = 3000;
process.env.PORT || PORT;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
