export async function getCharacters(offset = '') {
  const res = await fetch(
    `http://127.0.0.1:8000/characters/?limit=15&offset=${offset}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }
  )
  if (!res.ok) {
    console.log('error:', res.status)
    return
  }
  const data = await res.json()
  console.log('respuestaaa:', data)

  return data
}
