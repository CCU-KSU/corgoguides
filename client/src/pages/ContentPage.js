import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleFromBackend } from '../api';

const STATIC_CONTENT = {
  phone: {
    title:'Phone - How to use',
    body:`Phone app lets you call, view recent calls and manage contacts.

1) Open Phone app
2) Use dial pad to type number
3) Tap Call to start
4) Go to Contacts to add or edit contacts
`
  },
  message: {
    title:'Message - How to use',
    body:`Send and receive messages.

1) Open Messages app
2) Tap New message to compose
3) Choose contact, type message, send`,
  },
  camera: {
    title:'Camera - How to use',
    body:`Camera lets you take photos and videos.

1) Open Camera
2) Choose Photo / Video mode
3) Tap shutter to capture`,
  },
  calculator: {
    title:'Calculator - How to use',
    body:`Calculator for arithmetic.

1) Open Calculator
2) Use keypad to enter numbers and operators`,
  }
};

export default function ContentPage(){
  const { appId } = useParams();
  const [content, setContent] = useState(() => STATIC_CONTENT[appId] || { title:'Not found', body:'No content available' });
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    let mounted = true;
    setLoading(true);
    fetchArticleFromBackend(appId)
      .then(data=>{
        if(!mounted) return;
        if(data && (data.title || data.name || data.content || data.body)) {
          setContent({
            title: data.title || data.name || ('App: ' + appId),
            body: data.content || data.body || data.description || ''
          });
          setNote('Loaded from backend');
        } else {
          setNote('Backend returned no data — using local content');
        }
      })
      .catch(err=>{
        console.warn('Content fetch failed:', err.message);
        setNote('Backend unreachable — using local content');
      })
      .finally(()=> setLoading(false));
    // mark learned when user opens content
    try{
      const raw = localStorage.getItem('cg_checklist');
      const arr = raw ? JSON.parse(raw) : [];
      if(!arr.includes(appId) && ['phone','message','camera','calculator'].includes(appId)){
        arr.push(appId);
        localStorage.setItem('cg_checklist', JSON.stringify(arr));
      }
    }catch(e){}
    return ()=> mounted = false;
  }, [appId]);

  return (
    <div>
      <div className="header"><div className="brand">{content.title}</div></div>
      <div className="card">
        {loading && <div className="small">Loading content...</div>}
        {note && <div className="small">{note}</div>}
        <div className="content-body" style={{marginTop:10}}>
          {content.body}
        </div>
      </div>
    </div>
  );
}
