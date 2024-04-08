/** @param {NS} ns */
export async function main(ns) {
	var init_scan = ns.scan();
	for (var i of init_scan) {
		try {
			ns.nuke(i);
			await ns.wget("https://github.com/SamuelKuld/bihhj/raw/main/takeover.js", "junk.js", i);
			ns.exec("junk.js", i);
		}
		finally { }
	}
}