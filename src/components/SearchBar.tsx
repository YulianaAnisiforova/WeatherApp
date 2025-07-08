import { FC } from 'react'

import styles from './SearchBar.module.css'

type SearchBarpropsType = {
    searchValue: string,
    setSearchValue: (searchValue: string) => void,
}

const SearchBar: FC<SearchBarpropsType> = ({searchValue, setSearchValue}) => {

  return (
    <div className={styles.searchBox}>
        <input className={styles.input}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder='Search ...'
        />
    </div>
  )
}

export default SearchBar
