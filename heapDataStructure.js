// For a heap, we use an array structure to store the data

// Finding Child Nodes
// Formula: 2n + 1, where N is the index of the parent

// Finding Parents Nodes
// Formula: Floor((n-1) / 2), where N is the index of the child

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.values[index] > this.values[parentIndex] && parentIndex !== -1) {
      const temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);

console.log(heap);