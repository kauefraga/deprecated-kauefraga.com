import { NextApiRequest, NextApiResponse } from 'next'


function CelsiusToKelvin (
  request: NextApiRequest,
  response: NextApiResponse
): void {

  const getCelsiusFromRequest = request.query.celsius || request.body.celsius

  const KelvinConverter = (Celsius: number) => {
    return Celsius + 273.15
  }

  const Kelvin: number = KelvinConverter(Number(getCelsiusFromRequest))

  return response.json({
    message: 'Thanks for the request!',
    answer: Kelvin
  })
}


export default CelsiusToKelvin
