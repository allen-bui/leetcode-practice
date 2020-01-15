// For a heap, we use an array structure to store the data

// Finding Child Nodes
// Formula: 2n + 1, where N is the index of the parent

// Finding Parents Nodes
// Formula: Floor((n-1) / 2), where N is the index of the child

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {

    this.values.push(value);
    const index = this.values.length - 1;
    const parentIndex = Math.floor((index - 1) / 2);

    while (this.values[index] > this.values[parentIndex] && parentIndex !== -1) {
      const temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
    }

    // insert 100
    //
    //         50
    //       /    \
    //     17      35
    //    /  \    /  \
    //   10  15  20  34
    //
    // Array Form
    //
    // [50, 17, 35, 10, 15, 20, 34]

  }
}
