import React, { Component } from 'react';
import { Marked } from 'marked';
import './App.scss';

const marked = new Marked({ "gfm": true, "breaks": true });

const Editor = ({ input, handleChange }) => {
  return (
    <div className='container'>
        <div className='mt-5 mx-auto d-flex align-items-center justify-content-center' style={{width: "600px", height: "30px", backgroundColor: "pink"}}><strong>Editor</strong></div>
        <textarea id="editor" className='p-1 mb-4 mx-auto d-block' style={{width: "600px", height: "200px"}} value={input} onChange={handleChange}></textarea>
        <div className='mt-5 mx-auto d-flex align-items-center justify-content-center' style={{width: "680px", height: "30px", backgroundColor: "pink"}}><strong>Preview</strong></div>
        <div id="preview" className='mx-auto card p-3' style={{width: "680px"}}></div>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# Markdown Previewer\n## This is a subheading\n[link](https://meetthepete.com)\n\nInline code: `<div></div>`\n\n// this is multi-line code:\n```\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n- List item\n  - Next level\n    - Another next level\n      - More next levels\n\n> Block Quote!\n\n**Bold Text**\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    this.updatePreview();
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    }, () => {
      this.updatePreview();
    })
  }

  updatePreview() {
    document.getElementById('preview').innerHTML = marked.parse(this.state.input);
  }

  render() {
    return (
      <Editor input={this.state.input} handleChange={this.handleChange}/>
    );
  }
}
 
export default App;