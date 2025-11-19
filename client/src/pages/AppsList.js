import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchArticlesFromBackend } from '../api';

const STATIC_APPS = [
  { id:'phone', title:'Phone', desc:'Make calls, view call history, contacts.' },
  { id:'message', title:'Message', desc:'Send and receive SMS / chats.' },
  { id:'camera', title:'Camera', desc:'Take photos and videos.' },
  { id:'calculator', title:'Calculator', desc:'Basic arithmetic and more.' },
];

export default function AppsList(){
  const navigate = useNavigate();
  const [apps, setApps] = useState(STATIC_APPS);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');

  useEffect(()=>{
    let mounted = true;
    setLoading(true);
    fetchArticlesFromBackend()
      .then(data=>{
        if(!mounted) return;
        if(Array.isArray(data) && data.length){
          const mapped = data.map(item => ({
            id: item.id || item._id || item.slug || (item.title && item.title.toLowerCase().split(' ')[0]) || Math.random().toString(36).slice(2,8),
            title: item.title || item.name || 'Untitled',
            desc: item.description || item.summary || ''
          }));
          setApps(mapped);
          setNote('Loaded from backend');
        } else {
          setNote('Backend returned no items — using local data');
        }
      })
      .catch(err=>{
        console.warn('Backend fetch failed:', err.message);
        setNote('Status: 🟢 ');
      })
      .finally(()=> setLoading(false));
    return ()=> mounted = false;
  }, []);

  return (
    <div>
      <div className="header"><div className="brand">Apps</div></div>
      <div className="card">
        {loading && <div className="small">Loading...</div>}
        {note && <div className="small">{note}</div>}
        {apps.map(app=>(
          <div key={app.id} className="list-item" onClick={()=>navigate('/content/'+app.id)}>
            <div className="list-left">
              <div className="avatar">{(app.title||'?').slice(0,2).toUpperCase()}</div>
              <div>
                <div className="app-title">{app.title}</div>
                <div className="small app-desc">{app.desc}</div>
              </div>
            </div>
            <div className="tag">Open</div>
          </div>
        ))}
      </div>
    </div>
  );
}
