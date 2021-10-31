'use strict';

module.exports = {
  files: 'src/**/*.component.html',
  from: /{{([^\S\n])*(.*?)([^\S\n])*}}/g,
  to: '{{ $2 }}'
};
