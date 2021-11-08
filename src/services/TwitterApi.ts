import axios from 'axios'

export default async function searchUserInfoInTwitter(username: string, bearerToken: string) {
  const config = {
    headers: {
      authorization: `Bearer ${bearerToken}`
    }
  }
  const user = await axios.get(`https://api.twitter.com/2/users/by/username/${username}?user.fields=description,profile_image_url`, config)

  return user.data
}
