function getIPAddress() {
    var domain = document.getElementById('search-input').value;
    fetch(`https://ipapi.co/json/`)
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            document.getElementById('ip-address').innerText = ipAddress;
            const region = data.region;
            document.getElementById('region').innerText = region;
            const timezone = data.timezone;
            document.getElementById('timezone').innerText = timezone;
            const org = data.org;
            document.getElementById('org').innerText = org;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
