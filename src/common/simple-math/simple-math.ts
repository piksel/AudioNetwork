import { ISimpleMath } from './simple-math.interface';

class SimpleMath implements ISimpleMath {
  public getPi(): number {
    return Math.PI;
  }

  public sin(x: number): number {
    return Math.sin(x);
  }

  public cos(x: number): number {
    return Math.cos(x);
  }

  public asin(x: number): number {
    return Math.asin(x);
  }

  public pow(x: number, exponent: number): number {
    return Math.pow(x, exponent);
  }

  public sqrt(x: number): number {
    return Math.sqrt(x);
  }

  public random(): number {
    return Math.random();
  }
}

export default SimpleMath;
