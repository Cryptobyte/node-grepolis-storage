const Town = require('../Models/Town');
const Island = require('../Models/Island');
const Conquer = require('../Models/Conquer');
const Alliance = require('../Models/Alliance');
const Player = require('../Models/Player');
const Kill = require('../Models/Kill');

/**
 * Serializes Town data into a Mongo object
 * @param {*} data Town data to serialize, from API object
 */
function town(data) {
  return Town({
    townId: data.id,
    playerId: data.playerId,
    name: data.name,
    islandX: data.islandX,
    islandY: data.islandY,
    numberOnIsland: data.numberOnIsland,
    points: data.points
  });
}

/**
 * Serializes Island data into a Mongo object
 * @param {*} data Island data to serialize, from API object
 */
function island(data) {
  return Island({
    islandId: data.id,
    x: data.x,
    y: data.y,
    islandType: data.islandType,
    availableTowns: data.availableTowns,
    resourcePlus: data.resourcePlus,
    resourceMinus: data.resourceMinus
  });
}

/**
 * Serializes Conquer data into a Mongo object
 * @param {*} data Conquer data to serialize, from API object
 */
function conquer(data) {
  return Conquer({
    townId: data.townId,
    time: data.time,
    newPlayerId: data.newPlayerId,
    oldPlayerId: data.oldPlayerId,
    newAllyId: data.newAllyId,
    oldAllyId: data.oldAllyId,
    points: data.points
  });
}

/**
 * Serializes Alliance data into a Mongo object
 * @param {*} data Alliance data to serialize, from API object
 */
function alliance(data) {
  return Alliance({
    allianceId: data.id,
    name: data.name,
    points: data.points,
    towns: data.towns,
    members: data.members,
    rank: data.rank
  });
}

/**
 * Serializes Player data into a Mongo object
 * @param {*} data Player data to serialize, from API object
 */
function player(data) {
  return Player({
    playerId: data.id,
    name: data.name,
    allianceId: data.allianceId,
    points: data.points,
    rank: data.rank,
    towns: data.towns
  });
}

/**
 * Serializes Kill data into a Mongo object
 * @param {*} type Object describing the type and subtype of the kill data
 * @param {*} data Kill data to serialize, from API object
 */
function kill(type, data) {
  return Kill({
    rank: data.rank,
    killId: data.id,
    points: data.points,
    type: type.type,
    subType: type.subType
  });
}

module.exports = { town, island, conquer, alliance, player, kill };