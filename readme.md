# React 🦓

Change the background color of every other element.

This is most useful in React Native where you cannot use the `:nth-child` psuedo-class.

## Installation

```sh
npm install --save react-zebra
```

## Usage

```js
const Zebra = require('react-zebra')

const React = require('react')
const { render } = require('react-dom')

const Example = () => (
  <Zebra even='#fff' odd='#ccc'>
    <div>
      White background 1
    </div>

    <div>
      Gray background 1
    </div>

    <div>
      White background 2
    </div>
  </Zebra>
)

render(<Example />)
```

## Props

### `even`

- optional
- type: `string`

The background color to apply to even elements.

### `odd`

- optional
- type: `string`

The background color to apply to odd elements.
