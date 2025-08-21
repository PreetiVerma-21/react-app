

import { useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { message } from 'antd';
import AnimatedBackground from './AnimatedBackground';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <AnimatedBackground />
      
      <div className="login-form-container">
  {/* Home button will be placed beside Login button below */}
        <div className="login-avatar">
          <span className="login-avatar-gradient">
            <UserOutlined style={{ fontSize: '3.2rem', color: 'inherit', fontWeight: 900 }} />
          </span>
        </div>
        <h2>Sign In</h2>
        <form onSubmit={e => {
          e.preventDefault();
           navigate('/dashboard');
          message.success('Login successful!');
        }}>
          <div className="form-group">
            <label htmlFor="email">
              <MailOutlined style={{ fontSize: '1.2rem', color: '#43cea2', marginRight: 8 }} />
              Email
            </label>
            <input type="email" id="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <LockOutlined style={{ fontSize: '1.2rem', color: '#185a9d', marginRight: 8 }} />
              Password
            </label>
            <input type="password" id="password" required placeholder="Enter your password" />
          </div>
          {/* <div className="login-links">
            <a href="#" style={{ color: '#185a9d', float: 'right', fontSize: '0.95rem' }}>Forgot password?</a>
          </div> */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button type="submit" className="login-btn">Login</button>
            <button
              className="login-home-btn"
              type="button"
              onClick={() => navigate('/')}
              style={{
                background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px #43cea255',
                cursor: 'pointer',
                zIndex: 2,
                marginLeft: 0,
              }}
              title="Home"
            >
              <HomeOutlined style={{ fontSize: 22, color: '#fff' }} />
            </button>
          </div>
        </form>
        <div className="login-links">
          Don't have an account?
          <a href="#" style={{ color: '#43cea2', marginLeft: 4 }}>Sign up</a>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
