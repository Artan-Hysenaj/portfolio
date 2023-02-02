import { useState } from 'react';
import styles from './Search.module.scss';

export type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.search}>
      <input
        type="text"
        value={searchTerm}
        onChange={onChangeHandler}
        placeholder="Search"
      />
      <div>
        <button type="submit" className="mr-1">
          Google Search
        </button>
        <button type="submit">I&apos;m Feeling lucky</button>
      </div>
    </form>
  );
};

export default Search;
