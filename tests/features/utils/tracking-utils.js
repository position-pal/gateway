/**
 * The location of the University of Bologna, Cesena Campus (Italy).
 * @type {{latitude: number, longitude: number}}
 */
const cesenaCampusLocation = {
  latitude: 44.147843982335836,
  longitude: 12.23510261898422,
};

/**
 * The location of Piazza del Popolo in Cesena (Italy).
 * @type {{latitude: number, longitude: number}}
 */
const piazzaDelPopoloLocation = {
  latitude: 44.13734012989611,
  longitude: 12.243828352831988,
};

/**
 * A testable path for location updates, starting from {@link piazzaDelPopoloLocation} and ending at {@link cesenaCampusLocation  }.
 * @returns {[{latitude: number, longitude: number},{latitude: number, longitude: number},{latitude: number, longitude: number},{latitude: number, longitude: number},{latitude: number, longitude: number},null,null,null,null,null]}
 */
function testablePath() {
  return [
    piazzaDelPopoloLocation,
    { latitude: 44.138017476200716, longitude: 12.243344846276443 },
    { latitude: 44.13765039628027, longitude: 12.245009358944937 },
    { latitude: 44.13964872372436, longitude: 12.246433745126328 },
    { latitude: 44.14176154018782, longitude: 12.242786540498049 },
    { latitude: 44.14192095254784, longitude: 12.24027836844145 },
    { latitude: 44.14212467001738, longitude: 12.238297335920198 },
    { latitude: 44.14372253536823, longitude: 12.235647290979074 },
    { latitude: 44.146491259882225, longitude: 12.2349564549283 },
    cesenaCampusLocation,
  ];
}

function testableLocationUpdates(userId, groupId) {
  const path = testablePath();
  return path.map((location, i) =>
    sample(new Date(Date.now() + i * 10000), userId, groupId, location),
  );
}

function sample(timestamp, userId, groupId, location) {
  return {
    SampledLocation: {
      timestamp: timestamp.toISOString(),
      user: userId,
      group: groupId,
      position: location,
    },
  };
}

module.exports = {
  cesenaCampusLocation,
  piazzaDelPopoloLocation,
  sample,
  testableLocationUpdates,
};
