/** @param {NS} ns */
init_scan = ns.scan();
export async function main(ns) {
	for (i of init_scan){
		ns.exec("junk.js");
		ns.wget();
	}
}
