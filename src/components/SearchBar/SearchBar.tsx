import { FC, useState } from 'react'

import styles from './SearchBar.module.css'

type SearchBarPropsType = {
    setCity: (city: string) => void,
}

const SearchBar: FC<SearchBarPropsType> = ({setCity}) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className={styles.searchBox}>
        <input className={styles.searchInput}
            placeholder='Search ...'
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setCity(searchValue)
                setSearchValue('')
              }
            }}
        />
        <button className={styles.searchBtn}
            disabled={searchValue === ''}
            onClick={() => {
              setCity(searchValue)
              setSearchValue('')
            }}
            >→</button>
    </div>
  )
}

export default SearchBar
