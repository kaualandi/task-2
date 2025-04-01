class Knot<T> {
  data: T;
  next: Knot<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class Stack<T> {
  private top: Knot<T> | null;
  private _size: number;

  constructor() {
    this.top = null;
    this._size = 0;
  }

  push(data: T): void {
    const newKnot = new Knot(data);
    newKnot.next = this.top;
    this.top = newKnot;
    this._size++;
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const removedKnot = this.top!;
    this.top = this.top!.next;
    this._size--;
    return removedKnot.data;
  }

  peek(): T | null {
    return this.isEmpty() ? null : this.top!.data;
  }

  isEmpty(): boolean {
    return this.top === null;
  }

  size(): number {
    return this._size;
  }
}
