import axios from 'axios'

export default async function searchUserInfoInGithub(username: string) {
  const user = await axios.get(`https://api.github.com/users/${username}`)

  return user.data
}
