import React, { useEffect, useRef } from 'react';

const UtterancesComments = () => {
  const commentBox = useRef(null);

  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl['repo'] = 'TamakiControl/tamaki-charts-docs';
    scriptEl['issue-term'] = 'title';
    scriptEl['theme'] = 'preferred-color-scheme';
    scriptEl.crossOrigin = 'anonymous';
    scriptEl.async = true;
    if (commentBox.current) {
      // Remove any old script if re-navigating
      commentBox.current.innerHTML = '';
      commentBox.current.appendChild(scriptEl);
    }
  }, []);

  return <div ref={commentBox} />;
};

export default UtterancesComments;