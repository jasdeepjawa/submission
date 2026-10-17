const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/products', (req, res) => {
  res.json([{ id: 101, name: 'Laptop' }, { id: 102, name: 'Phone' }]);
});

app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});
