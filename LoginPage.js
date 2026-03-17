const handleLogin = async () => {
    try {
        const response = await fetch(`${urlConfig.backendUrl}/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',  // content-type
                'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}` // Authorization
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('name', json.userName);
            sessionStorage.setItem('email', json.userEmail);
            setIsLoggedIn(true);
            navigate('/app');
        } else if (json.error) {
            setShowerr(json.error);
        }
    } catch (e) {
        console.log('Login error:', e.message);
    }
};
