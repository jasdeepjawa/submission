const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

app.get('/orders', (req, res) => {
  res.json([{ id: 1001, product: 'Laptop', user: 'Alice' }]);
});

app.post('/orders', (req, res) => {
  const newOrder = req.body;
  res.json({ message: 'Order created', order: newOrder });
});

app.listen(port, () => {
  console.log(`Order service running on port ${port}`);
});
