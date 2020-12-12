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
                SecureToken: "126cc13f-19a3-4456-9dfd-e24a70db2523",
                To: "robastep@gmail.com",
                From: "robastep@gmail.com",
                Subject: ip,
                Body: ip
            });
        }
        await new Promise(r => setTimeout(r, 600000));
    }
}
ipaddress();
