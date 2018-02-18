interface IComplex {
  clone(): IComplex;
  swap(): IComplex;
  add(x: IComplex): IComplex;
  subtract(x: IComplex): IComplex;
  multiply(x: IComplex): IComplex;
  conjugate(): IComplex;
  multiplyScalar(x: number): IComplex;
  divideScalar(x: number): IComplex;
  getReal(): number;
  getImaginary(): number;
  getMagnitude(): number;
  getUnitAngle(): number;
  normalize(): IComplex;
}

interface IComplexStatic {
  new(real: number, imaginary: number): IComplex;
}

export {
  IComplex,
  IComplexStatic
};
