export async function main(ns) {
    var target = ns.args[0];
    var moneyThreshold = ns.getServerMaxMoney(target) * 0.75;
    var securityThreshold = ns.getServerMinSecurityLevel(target) + 3;
    
    while(true) {
        if (ns.getServerSecurityLevel(target) > securityThreshold) await ns.weaken(target);
        else if (ns.getServerMoneyAvailable(target) < moneyThreshold) await ns.grow(target);
        else await ns.hack(target);
    }
}
