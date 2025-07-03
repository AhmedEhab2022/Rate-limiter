const capacity = 10;
const refillRate = 1;

class TokenBucket {
  constructor() {
    this.capacity = capacity;
    this.refillRate = refillRate;
    this.tokens = capacity;
    this.lastRefill = Date.now();
  }

  consume() {
    this.refill();
    if (this.tokens > 0) {
      this.tokens -= 1;
      return true;
    } else {
      return false;
    }
  }

  refill() {
    const now = Date.now();
    const elapsed = now - this.lastRefill;
    const tokensToAdd = Math.floor(elapsed / 1000) * this.refillRate;
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }
};

module.exports = TokenBucket;
