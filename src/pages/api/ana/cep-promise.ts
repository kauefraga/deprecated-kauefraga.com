import { NextApiRequest, NextApiResponse } from 'next'
import Cep from 'cep-promise'

interface ICep {
  cep: number | string
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { cep }: ICep = request.body
  const userCep = await Cep(cep)

  if (!cep) return response.status(404).json({ error: "Cep inválido" })

  if (userCep) return response.status(200).json(userCep)
}
