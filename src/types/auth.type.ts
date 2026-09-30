export interface LoginPayload {
  email: string;
  password: string;
}

export interface googleLoginPayload {
  idToken: string;
}

export interface registerPayload {
  name: string;
  email: string;
  phone?: string;
  address: string;
  password: string;
}
