export function fetchItem (id) {
  return new Promise((resolve, reject) => {
    const item = {
      title: `i am fetchItem from ${id}`
    }
    setTimeout(() => {
      resolve(item)
    }, 300)
  })
}
