import React, { useState, useEffect } from 'react';
import mammoth from 'mammoth';
import filePath from './Диссертация.docx'

const WordViewer = () => {
  const [content, setContent] = useState('');

  useEffect(() => { 
    const loadFile = async () => { 
        const response = await fetch(filePath); 
        // const response = await fetch('/Диссертация.docx');
        const arrayBuffer = await response.arrayBuffer(); 
        const result = await mammoth.convertToHtml({ arrayBuffer }); 
        setContent(result.value); // Устанавливаем HTML-содержимое 
    }; 
    loadFile();
    }, []);

  return (
    <div>
      {/* <input type="file" accept=".docx" onChange={handleFileUpload} /> Изменено accept */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default WordViewer;
