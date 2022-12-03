import express from 'express';

const router = express.Router();

router.get('/api/stats/users-taking-test', (req, res) => {
  res.status(200).send({
    testTakers: 200
  });
});

export { router as testTakerRouter };
