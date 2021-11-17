import Cep from 'cep-promise'

export default async function getLocationByCep(cep: string | number) {
  const Location = Cep(cep)

  return Location
}
