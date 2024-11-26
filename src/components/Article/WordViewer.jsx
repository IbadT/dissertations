import React, { useState, useEffect } from 'react';
import mammoth from 'mammoth';
import filePath from './Article.docx'

const WordViewer = () => {
  const [content, setContent] = useState('');

  useEffect(() => { 
    const loadFile = async () => { 
        const response = await fetch(filePath); 
        const arrayBuffer = await response.arrayBuffer(); 
        const result = await mammoth.convertToHtml({ arrayBuffer }); 
        setContent(result.value); // Устанавливаем HTML-содержимое 
    }; 
    loadFile();
    }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default WordViewer;
