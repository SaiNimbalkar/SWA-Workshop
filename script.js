function sendData() {
    const name = document.getElementById("name").value;

    fetch(`/api/message?name=${name}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").innerText = data.message;
        });
}