export const fetchData = (url) => {
  // simulating the fetch to last 3 seconds
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data.response.data))
        .catch((error) => reject(error))
    }, 3000)
  })
}
