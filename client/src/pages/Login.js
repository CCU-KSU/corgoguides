import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Icon({name}) {
  const icons = { mail: '✉️', lock: '🔒' };
  return <div className="icon" aria-hidden>{icons[name] || '•'}</div>;
}

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    setError('');
    const stored = localStorage.getItem('cg_user');
    if(!stored){ setError('No user found. Please sign up first.'); return; }
    const user = JSON.parse(stored);
    if(user.email !== email){ setError('Email mismatch. Use the email you signed up with.'); return; }
    navigate('/home', { replace: true });
  }

  return (
    <div>
      <div className="header"><div className="brand">Sign in</div></div>
      <div className="card">
        {error && <div className="notice" role="alert">{error}</div>}
        <form onSubmit={handleLogin} noValidate>
          <div className="field">
            <Icon name="mail" />
            <input placeholder=" " value={email} onChange={e=>setEmail(e.target.value)} />
            <label>Email address</label>
          </div>

          <div className="field">
            <Icon name="lock" />
            <input placeholder=" " type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            <label>Password</label>
          </div>

          <div style={{height:8}} />
          <button className="primary" type="submit">Continue</button>
        </form>

        <div style={{marginTop:12}} className="small">Don't have an account? <a className="link-like" href="/signup">Create one</a></div>
      </div>
    </div>
  );
}
