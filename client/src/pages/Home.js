import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('cg_user') || '{}');

  function logout(){
    localStorage.removeItem('cg_user');
    window.location.href = '/';
  }

  return (
    <div>
      <div className="header">
        <div>
          <div className="brand">Hello, {user.name || 'User'}</div>
          <div className="small">Ready to learn?</div>
        </div>
        <div style={{textAlign:'right'}}>
          <button className="ghost" onClick={()=>navigate('/profile')}>Profile</button>
        </div>
      </div>

      <div className="card">
        <h3 className="small">Explore</h3>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:8}}>
          <button className="primary" onClick={()=>navigate('/apps')}>Apps list</button>
          <button className="primary" onClick={()=>navigate('/checklist')}>Check list</button>
        </div>

        <div style={{marginTop:14}} className="small">Quick open:</div>
        <div style={{display:'flex', gap:8, marginTop:8}}>
          <div className="list-item" style={{flex:1, justifyContent:'center'}} onClick={()=>navigate('/content/phone')}>Phone</div>
          <div className="list-item" style={{flex:1, justifyContent:'center'}} onClick={()=>navigate('/content/message')}>Message</div>
        </div>
        <div style={{display:'flex', gap:8, marginTop:8}}>
          <div className="list-item" style={{flex:1, justifyContent:'center'}} onClick={()=>navigate('/content/camera')}>Camera</div>
          <div className="list-item" style={{flex:1, justifyContent:'center'}} onClick={()=>navigate('/content/calculator')}>Calculator</div>
        </div>
      </div>

      <div style={{height:80}} />

      <div className="bottom-nav">
        <div className="nav-btn" onClick={()=>navigate('/home')}>Home</div>
        <div className="nav-btn" onClick={()=>navigate('/apps')}>Apps</div>
        <div className="nav-btn" onClick={()=>navigate('/checklist')}>Checklist</div>
        <div className="nav-btn" onClick={()=>logout()}>Logout</div>
      </div>
    </div>
  );
}
