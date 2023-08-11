import dayjs from 'dayjs'

const formatText = (textArray, person) => {
  // accessing person text values using the column field array values as keys
  const formattedTextValues = textArray.map((key) => person[key] ?? '')

  // join text values together with space in-between to achieve final format
  return formattedTextValues.join(' ')
}

const formatDate = (date) => {
  // check if date's initial format is correct
  const regex = /^\d{4}-\d{2}-\d{2}$/
  if (!regex.test(date)) {
    return 'n/a'
  }

  // format the date as "MMM D"
  const formattedDate = dayjs(date).format('MMM D')

  return formattedDate
}

const formatList = (list) => {
  // check if list is null
  if (!list) {
    return 'None listed'
  }

  // converts proxy array to regular array
  return [...list].join(', ')
}

const formatAddress = (column, person) => {
  // create a copy of the column renderer object to remove the type value
  const columnRenderer = { ...column.properties.renderer }
  delete columnRenderer.type

  // create an array of address values in the column renderer to use as keys on the person object
  const addressKeys = Object.values(columnRenderer)
  // map the keys on to the person object to retrieve the person's address
  const addressArray = addressKeys.map((key) => person[key] ?? '')

  // deconstruct the person's address array
  const [street, city, region, postal, country] = addressArray

  // determine potential line breaks in the address
  const addressLines = [
    street,
    city || region || postal ? '<br>' : '',
    city && (region || postal) ? `${city}, ` : city,
    region,
    postal
  ]
    // filter empty strings and join everything under one string
    .filter(Boolean).join(' ')

  // combine the address lines with country, and checking for potential linebreak
  const formattedAddress = `${addressLines}${addressLines && country ? '<br>' : ''}${country}`

  // final address
  return formattedAddress
}

export {
  formatText,
  formatDate,
  formatList,
  formatAddress
}
