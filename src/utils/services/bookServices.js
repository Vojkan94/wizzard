export const createBook = async (data) => {
  return await fetch('https://example.com/', {
    method: 'post',
    body: JSON.stringify(data),
  })
}
