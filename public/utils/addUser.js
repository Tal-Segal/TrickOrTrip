async function addUser(form) {
    let formdata = new URLSearchParams(new FormData(form));
    await fetch("/management/add", { method: 'post', body: formdata }, true);
}