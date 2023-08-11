import { formatDate } from './formatServices'

export const handleFilteredPeople = (searchInput, people) => {
  // check if search bar is empty
  if (searchInput.value.trim() === '') {
    return people.value
  }

  // sanitize user query
  const query = searchInput.value.trim().toLowerCase()

  // return filtered array
  return people.value.filter((person) => handleQueryComparison(person, query))
}

const handleQueryComparison = (person, query) => {
  // format date for person so users can search for it how they see it in the table
  const formattedPerson = { ...person, dob: formatDate(person.dob) }

  // join all person object values so users can filter their search by any value
  const personJoinedValues = Object.values(formattedPerson).join('').toLowerCase()

  // compare with query
  return personJoinedValues.includes(query)
}
