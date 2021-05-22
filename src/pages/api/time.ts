import { NextApiRequest, NextApiResponse } from 'next';

const time = [
  {
    id: '1',
    time: '10',
  },
  {
    id: '2',
    time: '20',
  },
  {
    id: '3',
    time: '30',
  },
  {
    id: '4',
    time: '40',
  },
  {
    id: '5',
    time: '50',
  },
  {
    id: '6',
    time: '60',
  },
  {
    id: '7',
    time: '90',
  },
  {
    id: '8',
    time: '120',
  },
  {
    id: '9',
    time: '180',
  },
  {
    id: '10',
    time: '240',
  },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.json(time);
  }
};
