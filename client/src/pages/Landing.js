import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing(){
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <div className="brand">PhoneTutor</div>
      </div>

      <div className="card">
        <h2>Welcome to PhoneTutor</h2>
        <p className="small">Learn mobile apps quickly with step-by-step theory and a checklist.</p>

        <div style={{marginTop:16}}>
          <button className="primary" onClick={()=>navigate('/signup')}>Create an account</button>
          <div style={{height:10}} />
          <button className="ghost" onClick={()=>navigate('/login')}>Sign in</button>
        </div>
      </div>

      <div className="card small">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        </div>
      </div>
    </div>
  );
}
