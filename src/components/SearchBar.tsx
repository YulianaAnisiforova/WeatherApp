import { FC } from 'react'

import styles from './SearchBar.module.css'

type SearchBarpropsType = {
    searchValue: string,
    setSearchValue: (searchValue: string) => void,
}

const SearchBar: FC<SearchBarpropsType> = ({searchValue, setSearchValue}) => {

  return (
    <div className={styles.searchBox}>
        <input className={styles.searchInput}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder='Search ...'
        />
        <button className={styles.searchBtn}
            disabled={searchValue === ''}
            >→</button>
    </div>
  )
}

export default SearchBar
