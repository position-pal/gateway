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
 * An intermediate location between {@link piazzaDelPopoloLocation} and {@link cesenaCampusLocation
 * @type {{latitude: number, longitude: number}}
 */
const intermediateLocation = {
  latitude: 44.14176154018782,
  longitude: 12.242786540498049,
};

/**
 * A testable path for location updates, starting from {@link piazzaDelPopoloLocation} and ending at {@link cesenaCampusLocation  }.
 * @returns an array of debuggable and reproducible locations.
 */
function testablePath() {
  return [
    piazzaDelPopoloLocation,
    { latitude: 44.138017476200716, longitude: 12.243344846276443 },
    { latitude: 44.13765039628027, longitude: 12.245009358944937 },
    { latitude: 44.13964872372436, longitude: 12.246433745126328 },
    intermediateLocation,
    { latitude: 44.14192095254784, longitude: 12.24027836844145 },
    { latitude: 44.14212467001738, longitude: 12.238297335920198 },
    { latitude: 44.14372253536823, longitude: 12.235647290979074 },
    { latitude: 44.146491259882225, longitude: 12.2349564549283 },
    cesenaCampusLocation,
  ];
}

/**
 * A testable sequence of location updates (i.e. location service responses).
 * @param userId The user identifier.
 * @param groupId The group identifier
 * @returns an array of reproducible location updates.
 */
function testableLocationUpdates(userId, groupId) {
  const path = testablePath();
  return path.map((location, i) => sample(userId, groupId, location, new Date(Date.now() + i * 10_000)));
}

/**
 * A location sample.
 * @param userId The user identifier.
 * @param groupId The group identifier.
 * @param location The location.
 * @param timestamp The timestamp. Default is the current date and time.
 * @returns A location sample.
 */
function sample(userId, groupId, location, timestamp = new Date()) {
  return createEvent("SampledLocation", userId, groupId, { position: location }, timestamp);
}

/**
 * A sample event indicating the start of a route.
 * @param userId The user identifier.
 * @param groupId The group identifier.
 * @param location The location where the route starts.
 * @param destination The destination of the route.
 * @param eta The estimated time of arrival.
 * @param timestamp The timestamp. Default is the current date and time.
 * @returns A routing started event.
 */
function startRouteEvent(userId, groupId, location, destination, eta, timestamp = new Date()) {
  return createEvent(
    "RoutingStarted",
    userId,
    groupId,
    {
      position: location,
      mode: "Driving",
      destination: destination,
      expectedArrival: eta.toISOString(),
    },
    timestamp,
  );
}

/**
 * A sample event indicating the stop of a route.
 * @param userId The user identifier.
 * @param groupId The group identifier
 * @param timestamp The timestamp. Default is the current date and time.
 * @returns A routing stopped event.
 */
function stopRouteEvent(userId, groupId, timestamp = new Date()) {
  return createEvent("RoutingStopped", userId, groupId, {}, timestamp);
}

function createEvent(type, userId, groupId, additionalData = {}, timestamp = new Date()) {
  return {
    [type]: {
      timestamp: timestamp.toISOString(),
      user: userId,
      group: groupId,
      ...additionalData,
    },
  };
}

module.exports = {
  cesenaCampusLocation,
  intermediateLocation,
  piazzaDelPopoloLocation,
  sample,
  startRouteEvent,
  stopRouteEvent,
  testableLocationUpdates,
};
