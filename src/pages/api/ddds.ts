import { NextApiRequest, NextApiResponse } from 'next';

const ddds = [
  {
    ddd: '011',
    uf: 'SP',
  },
  {
    ddd: '016',
    uf: 'GO',
  },
  {
    ddd: '017',
    uf: 'SP',
  },
  {
    ddd: '018',
    uf: 'SP',
  },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.json(ddds);
  }
};
