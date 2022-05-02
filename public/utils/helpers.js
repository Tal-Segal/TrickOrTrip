async function fetchUserData(url, options = {}) {
    let currentUser = localStorage.getItem('username');
    let response = await fetchWithTimeout(url + '?username=' + currentUser, options);
    if (response.ok) {
        return response;
    } else {
        throw error;
    }
}

async function fetchWithTimeout(resource, options = {}) {
    const controller = new AbortController();
    return await fetch(resource, {
        ...options,
        signal: controller.signal
    });
}