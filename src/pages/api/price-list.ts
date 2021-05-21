import { NextApiRequest, NextApiResponse } from 'next';

const priceList = [
  {
    src: '011',
    dst: '016',
    value: 1.9,
  },
  {
    src: '011',
    dst: '017',
    value: 1.7,
  },
  {
    src: '011',
    dst: '018',
    value: 0.9,
  },
  {
    src: '016',
    dst: '011',
    value: 2.9,
  },
  {
    src: '016',
    dst: '017',
    value: 1.6,
  },
  {
    src: '016',
    dst: '018',
    value: 0.9,
  },
  {
    src: '017',
    dst: '011',
    value: 2.7,
  },
  {
    src: '017',
    dst: '016',
    value: 1.7,
  },
  {
    src: '017',
    dst: '018',
    value: 2.7,
  },
  {
    src: '018',
    dst: '011',
    value: 1.9,
  },
  {
    src: '018',
    dst: '016',
    value: 0.9,
  },
  {
    src: '018',
    dst: '017',
    value: 1.9,
  },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.json(priceList);
  }
};
