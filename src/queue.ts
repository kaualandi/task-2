class Knot<T> {
  data: T;
  next: Knot<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class Queue<T> {
  private start: Knot<T> | null;
  private end: Knot<T> | null;
  private size: number;

  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(data: T): void {
    const newKnot = new Knot(data);
    if (this.end) {
      this.end.next = newKnot;
    }
    this.end = newKnot;
    if (!this.start) {
      this.start = newKnot;
    }
    this.size++;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const removedData = this.start!.data;
    this.start = this.start!.next;
    if (!this.start) {
      this.end = null;
    }
    this.size--;
    return removedData;
  }

  peek(): T | null {
    return this.start ? this.start.data : null;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  length(): number {
    return this.size;
  }
}
