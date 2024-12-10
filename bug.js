const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.query('SELECT * FROM users WHERE id = $1', [userId], (err, result) => {
    if (err) {
      //This will not return error to the client. 
      console.error('Error fetching user:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result.rows);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});