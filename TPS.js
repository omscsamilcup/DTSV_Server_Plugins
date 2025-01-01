let eventCount = 0
let startTime = new Date()
const SAMPLE_SIZE = 20
let lastTps = ' '

function getElapsedMilliseconds() {
    const now = new Date()
    return now - startTime
}

function calculateTps() {
    const elapsedMilliseconds = getElapsedMilliseconds()
    if (elapsedMilliseconds > 0) {
        const elapsedSeconds = elapsedMilliseconds / 1000
        const tps = Math.min(SAMPLE_SIZE / elapsedSeconds, 20).toFixed(2)
        return tps
    }
    return '20.00'
}

function updateTpsInfo() {
    eventCount++;
    if (eventCount >= SAMPLE_SIZE) {
        lastTps = calculateTps()
        eventCount = 0
        startTime = new Date()
    }
}

function getTpsInfo() {
    return lastTps
}

function onTick() {
    updateTpsInfo()
    return false
}

mc.listen("onTick", onTick)

function tps() {
    const tpsinfo = getTpsInfo()
    tpsinfo
}

ll.exports(tps(), 'TPS', 'TPS')