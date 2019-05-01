import React from 'react';
import { Select } from 'semantic-ui-react';

// Data
import Data2018 from './data/2018_ASLG_results.json';
import Data2017 from './data/2017_ASLG_results.json';
import Data2016 from './data/2016_ASLG_results.json';

const options = [
  { key: 2018, text: '2018 Season', value: Data2018 },
  { key: 2017, text: '2017 Season', value: Data2017 },
  { key: 2016, text: '2016 Season', value: Data2016 },
];

const YearSelect = props => 
  <Select placeholder='Select Season' options={options} {...props} />

export default YearSelect;
