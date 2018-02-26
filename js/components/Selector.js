import React from 'react';
import Select from '@react/react-spectrum/Select';
import Textarea from '@react/react-spectrum/Textarea';
import postcss from 'postcss';
import TopcoatNaming from 'postcss-topcoat-naming';

const startValue = `/* topdoc
name: Button
description: a simple button
markup: |
  {{#state}}<button class="{{ blockName }}"/>
  {{/state}}
*/
@block Button {
  color: #333;
  @state :disabled {
    opacity: 0.1;
  }
  /* topdoc
  name: Secondary Button
  description: a secondary button
  */
  @modifier secondary {
    color: #666;
  }
}`;
function process (cssString, opts = {}) {
  return postcss([
    TopcoatNaming(opts),
  ]).process(cssString).css
}


export default class Selector extends React.Component {
  render() {
    return <div>
    <Textarea placeholder="React">{startValue}</Textarea>
    <Select options={[
      { label: "Button", value: "button" }
    ]}/>
    <pre>{process(startValue)}</pre>
    </div>;
  }
}
