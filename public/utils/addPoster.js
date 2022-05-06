async function addPoster(form) {
    let formdata = new URLSearchParams(new FormData(form));
    await fetch("/gallery/add", { method: 'post', body: formdata }, true);
}