/** @param {NS} ns */
<<<<<<< HEAD
export async function main(ns) {
	var init_scan = ns.scan();
	for (var i of init_scan){
		try{
		await ns.wget("https://github.com/SamuelKuld/bihhj/raw/main/takeover.js", "junk.js", i);
		ns.exec("junk.js", i);}
		finally{}
	}
}
=======
init_scan = ns.scan();
export async function main(ns) {
	for (i of init_scan){
		ns.exec("junk.js");
		ns.wget();
	}
}
>>>>>>> cc9705542b7df50a44bd0ffc9b0360e8e88ce5ff
