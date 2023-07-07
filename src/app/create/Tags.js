'use client'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export default function Example() {
  const [selectedPerson, setSelectedPerson] = useState([people[0]])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })
// create a js function to take string as input and split the string into array of strings around this ',' also convert to  lowercase while trimming any whitespace
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.toLowerCase().split(separator);
  return arrayOfStrings;
}

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(person) => (person.map(item=>item.name))}
      />
      <Combobox.Options>
        {query.length > 0 && (
          <Combobox.Option value={{ id: null, name: query }}>
          Create {`${query}`}
          </Combobox.Option>
        )}
        {filteredPeople.map((person) => (
          <Combobox.Option key={person.id} value={person}>
            {person.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}