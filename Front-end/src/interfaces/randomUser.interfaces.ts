export interface IRandomUser {
  id: string;
  name: { first: string; last: string };
  login: { username: string };
  dob: { age: number };
  email: string;
  cell: string;
  location: {
    street: { name: string; number: number };
    state: string;
    city: string;
    country: string;
  };
  picture: { thumbnail: string };
}

export interface IRandomUserList {
  users: IRandomUser[];
}

export type EditProps = {
  setIsEdit: (val: boolean) => void;
};
