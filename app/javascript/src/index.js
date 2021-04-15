export default function index() {
    fetch('/posts', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => console.log(data))
}