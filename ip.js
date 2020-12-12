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
                SecureToken: "0874bfcd-dcbc-4e07-934a-4a23f6da8d2a",
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
