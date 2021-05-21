import { NextApiRequest, NextApiResponse } from 'next';

const plans = [
  {
    name: 'FalaMais 30',
    bonus: 30,
  },
  {
    name: 'FalaMais 60',
    bonus: 60,
  },
  {
    name: 'FalaMais 120',
    bonus: 120,
  },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.json(plans);
  }
};
