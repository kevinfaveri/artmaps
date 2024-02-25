
/**
 * @fileoverview This code is part of the ArtMaps project, which aims to generate unique, blockchain-inspired art pieces.
 * It serves as the core library for handling Bitcoin-related Bitmaps randomization operations within the ArtMaps ecosystem.
 * It is a fork of Prando, a pseudo-random number generator: https://github.com/zeh/prando
 * @author Kevin Faveri <kevin@faveri.dev>
 */


function getParamValue(paramName) {
  var url = window.location.search.substring(1); //get rid of "?" in querystring
  var qArray = url.split('&'); //get key-value pairs
  for (var i = 0; i < qArray.length; i++) {
    var pArr = qArray[i].split('='); //split key and value
    if (pArr[0] == paramName)
      return pArr[1]; //return value
  }
}

class BitMapsRandomizerV1 {
  static MIN = -2147483648; // Int32 min
  static MAX = 2147483647; // Int32 max

  constructor(inscriptionId) {
    this._inscription_id = inscriptionId;
    this._seed = undefined;
    this._value = undefined;
  }

  async init() {
    const isDev = getParamValue('dev') === 'true';
    this.validateInscriptiptionIdFormat(this._inscription_id);
    const url = isDev ? `https://ordinals.com/content/${this._inscription_id}` : `/content/${this._inscription_id}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch data');
      const text = await response.text();
      this.validateBTCFormat(text);
      this._seed = this.hashCode(text);
      this.reset();
      return this._seed;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  validateInscriptiptionIdFormat(inscriptionId) {
    const pattern = /^[0-9a-f]{64}i[0-9]+$/;
    if (!pattern.test(inscriptionId)) {
      throw new Error('inscriptionId does not match the required format.');
    }
  }

  validateBTCFormat(text) {
    const btcPattern = /^[0-9]+\.bitmap$/i;
    if (!btcPattern.test(text)) {
      throw new Error('Fetched content does not match the BTC format.');
    }
  }

  next(min = 0, pseudoMax = 1) {
    this.recalculate();
    return this.map(this._value, BitMapsRandomizerV1.MIN, BitMapsRandomizerV1.MAX, min, pseudoMax);
  }

  nextInt(min = 10, max = 100) {
    this.recalculate();
    return Math.floor(this.map(this._value, BitMapsRandomizerV1.MIN, BitMapsRandomizerV1.MAX, min, max + 1));
  }

  nextString(length = 16, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    let str = "";
    while (str.length < length) {
      str += this.nextChar(chars);
    }
    return str;
  }

  nextChar(chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    return chars.substr(this.nextInt(0, chars.length - 1), 1);
  }

  nextArrayItem(array) {
    return array[this.nextInt(0, array.length - 1)];
  }

  nextBoolean() {
    this.recalculate();
    return this._value > 0.5;
  }

  skip(iterations = 1) {
    while (iterations-- > 0) {
      this.recalculate();
    }
  }

  reset() {
    this._value = this._seed;
  }

  recalculate() {
    this._value = this.xorshift(this._value);
  }

  xorshift(value) {
    value ^= value << 13;
    value ^= value >> 17;
    value ^= value << 5;
    return value;
  }

  map(val, minFrom, maxFrom, minTo, maxTo) {
    return ((val - minFrom) / (maxFrom - minFrom)) * (maxTo - minTo) + minTo;
  }

  hashCode(str) {
    let hash = 0;
    if (str) {
      const l = str.length;
      for (let i = 0; i < l; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
        hash = this.xorshift(hash);
      }
    }
    return this.getSafeSeed(hash);
  }

  getSafeSeed(seed) {
    if (seed === 0) return 1;
    return seed;
  }
}


