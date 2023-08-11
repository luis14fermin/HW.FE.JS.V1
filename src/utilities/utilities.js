export const filterListDuplicates = (data) => {
  const filteredData = data.filter((obj, index, array) => {
    return array.findIndex(item => item.id === obj.id) === index
  })

  return filteredData
}
