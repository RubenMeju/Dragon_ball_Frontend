export async function getCharacters(offset = '') {
  const URL_BASE = process.env.URL_BASE
  const res = await fetch(`${URL_BASE}/characters/?limit=15&offset=${offset}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
  if (!res.ok) {
    console.log('error:', res.status)
    return
  }
  const data = await res.json()
  console.log('respuestaaa:', data)

  return data
}
