const handleRegister = async () => {
    const response = await fetch(`${urlConfig.backendUrl}/api/auth/register`, {
        method: 'POST', // <-- method attribute
        headers: {       // <-- headers attribute
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
    });

    const json = await response.json();
    if (json.authtoken) {
        sessionStorage.setItem('auth-token', json.authtoken);
        setIsLoggedIn(true);
        navigate('/app');
    } else if (json.error) {
        setShowerr(json.error);
    }
};
