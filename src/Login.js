import React from 'react';
import LogoEQI from './assets/logoEQI.png'

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
            <img src={LogoEQI} alt="EQI Investimentos" />
            <h1>SIMULADOR K</h1>
                <label>E-mail</label>

                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Senha</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button className="btnCdt" onClick={handleSignup}>Cadastrar</button>
                        <p>Já tem uma conta? <span onClick={() => setHasAccount(!hasAccount)}>Entrar</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleLogin}>Entrar</button>
                        <p>Não tem uma conta? <span onClick={() => setHasAccount(!hasAccount)}>Cadastrar</span></p>
                        </>
                    )}
                </div>

            </div>
        </section>
    )
}

export default Login;