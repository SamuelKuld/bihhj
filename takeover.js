/** @param {NS} ns */
var dont_check = [
	"Honeypot1","HoneyPot2","HoneyPot3","darkweb","home","",
]

async function get_children(j,ns){
	try{
	for (var i of await ns.scan(j)) {
		if (! dont_check.includes(i) && ns.getServerRequiredHackingLevel(i) > ns.getHackingLevel() && ! ns.hasRootAcces()){
				try{
					await ns.brutessh(i);
				}
				finally{ns}
				await ns.nuke(i);
				while (ns.getServerMinSecurityLevel(i) > ns.getServerMinSecurityLevel(i)){
					await ns.weaken(i);
				}
				await ns.hack(i);
				await ns.grow(i);
				if (ns.scan(i).length > 0){
					dont_check.push(i)
					await get_children(i, ns);
				}
				}}
}
finally{}
}
//**

export async function main(ns) {
	while (true) {
		await get_children("home",ns);	
	}
}

/**
 * 
 * TypeError: Cannot read properties of undefined (reading 'scan')
    at get_children (home/takeover.js:7:19)
    at get_children (home/takeover.js:19:12)
    at async Module.main (home/takeover.js:28:3)
 */
/** @param {NS} ns 
export async function main(ns) {
    // Defines the "target server", which is the server
    // that we're going to hack. In this case, it's "n00dles"
    const target = "n00dles";

    // Defines how much money a server should have before we hack it
    // In this case, it is set to the maximum amount of money.
    const moneyThresh = ns.getServerMaxMoney(target);

    // Defines the maximum security level the target server can
    // have. If the target's security level is higher than this,
    // we'll weaken it before doing anything else
    const securityThresh = ns.getServerMinSecurityLevel(target);

    // If we have the BruteSSH.exe program, use it to open the SSH Port
    // on the target server
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target);
    }

    // Get root access to target server
    ns.nuke(target);

    // Infinite loop that continously hacks/grows/weakens the target server
    while(true) {
        if (ns.getServerSecurityLevel(target) > securityThresh) {
            // If the server's security level is above our threshold, weaken it
            await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            // If the server's money is less than our threshold, grow it
            await ns.grow(target);
        } else {
            // Otherwise, hack it
            await ns.hack(target);
        }
    }
} **/