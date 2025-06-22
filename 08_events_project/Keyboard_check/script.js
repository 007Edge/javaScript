const div = document.querySelector('.outer');

window.addEventListener('keydown', function(e) {
    div.innerHTML = `
        <table>
            <tr>
                <th>key</th>
                <th>KeyCode</th>
                <th>Key</th>
            </tr>
            <tr>
                <td>${e.key === " " ? 'space': e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `
})