import React, {useState, useEffect} from 'react';

const DEFAULT = ['phone','message','camera','calculator'];

const APP_LABELS = {
  phone:'Phone', message:'Message', camera:'Camera', calculator:'Calculator'
}

export default function Checklist(){
  const [done, setDone] = useState(() => {
    try{
      const raw = localStorage.getItem('cg_checklist');
      return raw ? JSON.parse(raw) : [];
    }catch(e){return []}
  });

  useEffect(()=>{
    localStorage.setItem('cg_checklist', JSON.stringify(done));
  }, [done]);

  function toggle(app){
    if(done.includes(app)) setDone(done.filter(x=>x!==app));
    else setDone([...done, app]);
  }

  return (
    <div>
      <div className="header"><div className="brand">Checklist</div></div>
      <div className="card">
        <div className="small">Tap to mark an app as learned</div>
        <div style={{marginTop:12}}>
          {DEFAULT.map(a=>(
            <div key={a} className="list-item" onClick={()=>toggle(a)} style={{justifyContent:'space-between'}}>
              <div className="row">
                <div className="avatar">{APP_LABELS[a].slice(0,2).toUpperCase()}</div>
                <div>
                  <div style={{fontWeight:700}}>{APP_LABELS[a]}</div>
                  <div className="small">{done.includes(a) ? 'Completed' : 'Not yet'}</div>
                </div>
              </div>
              <div style={{fontWeight:800}}>{done.includes(a) ? '✅' : '◻️'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
