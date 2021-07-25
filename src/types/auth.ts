export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IRegisterDTO {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface IUserRegister {
  token: string;
  user: IUser;
}

export interface IAuthContextData {
  user: IUser;
  isLogged: boolean;
  isLoading: boolean;
  login: (data: ILoginDTO) => void;
  register: (data: IRegisterDTO) => void;
  logout: () => void;
}
