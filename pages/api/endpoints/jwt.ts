import { getToken } from "next-auth/jwt"

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req })

  if (token) {
    return res.send({
      content: token,
    })
  }

  return res.send({
    content: 'Please log in.',
  })
}
