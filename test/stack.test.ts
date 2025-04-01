import { beforeEach, describe, expect } from '@jest/globals';

import { Stack } from '../src/stack';

describe('Pilha', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('deve iniciar vazio', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test('deve adicionar elementos na pilha', () => {
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(10);

    stack.push(20);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(20);
  });

  test('deve remover um elemento da pilha', () => {
    stack.push(10);
    stack.push(20);

    const poppedValue = stack.pop();
    expect(poppedValue).toBe(20);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(10);

    const poppedValue2 = stack.pop();
    expect(poppedValue2).toBe(10);
    expect(stack.isEmpty()).toBe(true);
  });

  test('deve retornar nulo se remover um elemento com a pilha vazia', () => {
    expect(stack.pop()).toBeNull();
  });

  test('deve pegar o elemento do topo sem remover', () => {
    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);
    expect(stack.size()).toBe(2);
  });

  test('deve retornar nulo ao pegar o elemento do topo de uma fila vazia', () => {
    expect(stack.peek()).toBeNull();
  });

  test('deve tratar multiplas operações de inserções e remoções', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.size()).toBe(3);
    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
    expect(stack.isEmpty()).toBe(true);
  });
});
