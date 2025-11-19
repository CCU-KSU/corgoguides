import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile(){
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('cg_user') || '{}');
  function logout(){ localStorage.removeItem('cg_user'); window.location.href = '/'; }
  return (
    <div>
      <div className="header"><div className="brand">Profile</div></div>
      <div className="card">
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <div className="avatar">{(user.name||'U').slice(0,2).toUpperCase()}</div>
          <div>
            <div style={{fontWeight:800}}>{user.name || 'Unnamed'}</div>
            <div className="small">{user.email || 'No email set'}</div>
          </div>
        </div>

        <div style={{height:14}} />
        <button className="primary" onClick={()=>navigate('/home')}>Back home</button>
        <div style={{height:10}} />
        <button className="ghost" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
