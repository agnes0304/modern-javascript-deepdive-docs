// leetcode finbonacci generator
/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let [prev, curr] = [0,1]
    yield prev;
    yield curr;
    while (true) {
        [prev, curr] = [curr, prev+curr];
        yield curr;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */