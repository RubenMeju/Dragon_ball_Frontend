export async function getCharacterName(name) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BASE}/characters/?name=${name}`,
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
  // console.log('respuestaaa:', data)

  return data
}
