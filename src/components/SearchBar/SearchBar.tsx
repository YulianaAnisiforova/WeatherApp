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
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder='Search ...'
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
