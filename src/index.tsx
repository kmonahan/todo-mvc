import React from 'react';
import { render } from 'react-dom';
import { TodoApp } from './TodoApp';

import './sass/styles.scss';

import './polyfills';

render(
  // Your app here
  <TodoApp />,
  document.getElementById('root'),
);
