export interface Car {
  id?: string;
  plate: string;
  manufacture: string;
  image: string;
  model: string;
  type: string;
  description: string;
  transmission: string;
  capacity: number;
  rentPerDay: number;
  availableAt: Date;
  available: boolean;
  driver: boolean;
  year: number;
  options: string;
  specs: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  created_by: number;
  updated_by: number;
  deleted_by: number;
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
