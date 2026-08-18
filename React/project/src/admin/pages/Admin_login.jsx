import React from 'react'

function Admin_login() {
  const [formValue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const changeHandel = (e) => {
    setFormvalue({ ...formValue, [e.target.name]: e.target.value });
    console.log(formValue);
  }

  const redirect = useNavigate(); // for any page redirect
  const submitHandel = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:3000/admin?email=${formValue.email}`,);
    //console.log(res.data);
    if (res.data.length > 0) {

      if (res.data[0].password == formValue.password) {
        sessionStorage.setItem('uid', res.data[0].id);
        sessionStorage.setItem('uname', res.data[0].name);

        alert('Login Success !');
        return redirect('/');
      }
      else {
        setFormvalue({ ...formValue, email: "", password: "" });
        alert('Login Failed ! Password Missmatch !');
        return false;
      }
    }
    else {
      setFormvalue({ ...formValue, email: "", password: "" });
      alert('Login Failed ! Email dose not exits !');
      return false;
    }
  }
  return (
    <div className="auth-body">
      <button className="icon-button theme-toggle auth-theme-toggle" type="button" data-theme-toggle aria-label="Switch color theme" title="Switch color theme">
        <i className="bi bi-moon-stars" data-theme-icon aria-hidden="true" />
      </button>
      <main className="auth-page">
        <section className="auth-card">
          <a className="auth-brand" href="index.html"><span className="brand-icon"><i className="bi bi-grid-1x2-fill" aria-hidden="true" /></span><span><strong>adminHMD</strong><small>Sign in to your admin workspace.</small></span></a>
          <form className="needs-validation" noValidate>
            <div className="mb-4">
              <p className="eyebrow mb-1">Secure Access</p>
              <h1 className="h3 mb-1">Login</h1>
              <p className="text-muted mb-0">Sign in to your admin workspace.</p>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="loginEmail">Email address</label>
              <input className="form-control" id="loginEmail" type="email" required />
              <div className="invalid-feedback">Enter a valid email.</div>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between"><label className="form-label" htmlFor="loginPassword">Password</label>
                <a className="small fw-semibold" href="forgot-password.html">Forgot?</a>
              </div>
              <input className="form-control" id="loginPassword" type="password" minLength={6} required />
              <div className="invalid-feedback">Password must be at least 6 characters.</div>
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button className="btn btn-primary w-100" type="submit"><i className="bi bi-box-arrow-in-right" aria-hidden="true" /> Sign In</button>
          </form>
          <div className="auth-footer">New here? <a href="register.html">Create an account</a></div>
        </section>
      </main>
    </div>

  )
}

export default Admin_login