import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  const markdownRef = useRef(null)

  useEffect(() => {
    const editor = new Editor({
      el: markdownRef.current,
      hideModeSwitch: true,
    });
     
    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content)
    });
  })

  return (
    <div ref={markdownRef}></div>
  )
};

export default MarkdownEditor;
