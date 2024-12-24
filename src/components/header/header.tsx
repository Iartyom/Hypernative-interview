import { IHeaderProps } from '../../utils/interfaces'
import Select from 'react-dropdown-select';

import './header.css'

const Header: React.FC<IHeaderProps> = ({
  searchVideo,
  onSearchVideoChange,
  releaseYearsOptions,
  selectedYear,
  onYearChange,
  genreOptions,
  selectedGenres,
  onGenreChange }) => {

  // Handle changes in the genre multi-select


  return <div className='header'>
    <h1>Video Browser</h1>
    <div className='filters'>
      <input
        type='text'
        placeholder='Search Video...'
        value={searchVideo}
        onChange={(e) => onSearchVideoChange(e?.target?.value)} />

      <Select
        options={releaseYearsOptions}
        values={releaseYearsOptions.filter(option => option.value === selectedYear?.[0]?.value)}
        onChange={onYearChange}
        placeholder="Search By Year..."
        className="react-dropdown-select"
      />

      <Select
        multi
        options={genreOptions}
        values={genreOptions.filter(option => selectedGenres.includes(option))}
        onChange={onGenreChange}
        placeholder="Search By Genre..."
        className="react-dropdown-select"
        dropdownPosition='auto'
        backspaceDelete={true}
      />
    </div>
  </div>
}

export default Header