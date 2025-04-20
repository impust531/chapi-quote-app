import React, { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState('読み込み中...');

  useEffect(() => {
    fetch('https://notion-quote-api.vercel.app/api/quote', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setQuote(data.quote))
      .catch((err) => {
        console.error('名言取得失敗:', err);
        setQuote('名言の取得に失敗しました');
      });
  }, []); 

  return (
    <div style={{
      padding: '2rem',
      fontFamily: '"Meiryo", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      backgroundColor: '#fffaf0',
      color: '#333',
      borderRadius: '1rem',
      maxWidth: '600px',
      margin: '5rem auto',
      whiteSpace: 'pre-wrap'
    }}>
      <h1 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>🕯️今日のちゃぴのひとこと</h1>
      <p>{quote}</p>
    </div>
  );
}

export default App;
