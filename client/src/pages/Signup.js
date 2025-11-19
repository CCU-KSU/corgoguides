import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Icon({name}) {
  const icons = {
    user: '👤', mail: '✉️', lock: '🔒'
  };
  return <div className="icon" aria-hidden>{icons[name] || '•'}</div>;
}

export default function Signup(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const navigate = useNavigate();

  function handleSignup(e){
    e.preventDefault();
    setError('');
    if(!name || !email || !password){ setError('All fields are required'); return; }
    const user = { name, email };
    localStorage.setItem('cg_user', JSON.stringify(user));
    localStorage.setItem('cg_checklist', JSON.stringify([]));
    navigate('/home', { replace: true });
  }

  return (
    <div>
      <div className="header"><div className="brand">Create account</div></div>
      <div className="card">
        {error && <div className="notice" role="alert">{error}</div>}
        <form onSubmit={handleSignup} noValidate>
          <div className="field">
            <Icon name="user" />
            <input placeholder=" " value={name} onChange={e=>setName(e.target.value)} />
            <label>Full name</label>
          </div>

          <div className="field">
            <Icon name="mail" />
            <input placeholder=" " value={email} onChange={e=>setEmail(e.target.value)} />
            <label>Email address</label>
          </div>

          <div className="field">
            <Icon name="lock" />
            <input placeholder=" " type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            <label>Create password</label>
          </div>

          <div style={{height:8}} />
          <button className="primary" type="submit">Sign up</button>
        </form>

        <div style={{marginTop:12}} className="small">Already have an account? <a className="link-like" href="/login">Sign in</a></div>
      </div>
    </div>
  );
}
