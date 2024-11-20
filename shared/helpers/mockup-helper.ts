export class MockupHelper {
  public createArrayByLength<T>(
    length: number,
    callback: (index: number) => T
  ) {
    return Array.from({ length }, callback);
  }
}
