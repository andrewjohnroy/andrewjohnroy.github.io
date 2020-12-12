let ip = "";
let oldIp = "";

async function ipaddress() {
    while (true) {
        oldIp = ip;
        await $.getJSON("https://api.ipify.org?format=json", data => {
            ip = data['ip'];
        });
        if (ip != oldIp) {
            Email.send({
                SecureToken: "1797f231-4073-4c41-87de-ce52aa635cda",
                To: "andrewjohnroy@gmail.com",
                From: "andrewjohnroy@gmail.com",
                Subject: ip,
                Body: ip
            });
        }
        await new Promise(r => setTimeout(r, 600000));
    }
}
ipaddress();
