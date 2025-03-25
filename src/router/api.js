import express from 'express';

const router = express.Router();

router.get('/' ,(req,res) => {
    res.json({message : "Hello World!"});
});

router.get('/users',(req,res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ]);
});

router.post('/users', (req, res) => {
    const user = req.body;
    // In a real app, you would save to a database
    res.status(201).json({ message: 'User created', user });
});

export default router

