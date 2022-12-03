import express from 'express';

const router = express.Router();

router.get('/api/stats/users-taking-test', (req, res) => {
  console.log('in server');
  res.status(200).send(200);
});

export { router as testTakerRouter };
