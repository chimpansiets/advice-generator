import React from 'react';
import ReactDOM from 'react-dom';
import { Label } from './Components/Atoms/Label/LabelAtom';

ReactDOM.render(
  <React.StrictMode>
    <Label type="">Hello</Label>
  </React.StrictMode>,
  document.getElementById('root')
);