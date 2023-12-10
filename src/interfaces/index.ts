export interface Car {
  id?: string;
  manufacture: string;
  image: string;
  model: string;
  year: number;
  type: string;
  transmission: string;
  capacity: number;
  rentPerDay: number;
  description?: string;
  // plate: string;
  // availableAt: Date;
  // available: boolean;
  // driver: boolean;
  // options: string;
  // specs: string;
  // created_at: Date;
  // updated_at: Date;
  // deleted_at: Date;
  // created_by: number;
  // updated_by: number;
  // deleted_by: number;
}

export interface EventTargetForm {
  elements: Record<string, { value: string | number }>;
}

export interface IFontSizing {
  typo?: string;
  fontSize?: number;
  weight?: string;
}

export interface IClassName {
  className?: string;
}
export interface IUser {
  username: string;
  email: string;
}
export type CarContextType = {
  cars: Car[];
  getCar: (id: string) => Car | undefined;
  saveCar: (car: Car) => Promise<Tfeedback>;
  updateCar: (car: Car) => Promise<Tfeedback>;
};
export type Tfeedback = {
  type: string;
  message: string;
};
