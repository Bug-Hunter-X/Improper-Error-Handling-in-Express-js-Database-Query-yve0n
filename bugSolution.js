const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM users WHERE id = $1', [userId], (err, result) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).json({ error: 'Failed to fetch user' }); //Improved error response
      return; // Crucial: Stop further execution
    } else if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(result.rows[0]);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});