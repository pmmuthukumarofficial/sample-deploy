import { createElement } from 'react';

export default function Greeting() {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello'
  );
}