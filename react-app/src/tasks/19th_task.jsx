import React from 'react';
import Editor from '@toast-ui/editor';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.selectRef = React.createRef()
  }

  componentDidMount() {
    const editor = new Editor({
      el: this.selectRef.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      this.props.onContentChange(content)
    });
  }

  render() {
    return (
      <div ref={this.selectRef}></div>
    )
  }
}

export default MarkdownEditor