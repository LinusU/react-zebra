'use strict'

var React = require('react')

module.exports = function Zebra (props) {
  var children = React.Children.toArray(props.children)

  for (var i = 0; i < children.length; i++) {
    var color = [props.even, props.odd][i % 2]

    if (color != null) {
      children[i] = React.cloneElement(children[i], { style: { backgroundColor: color } })
    }
  }

  return children
}
