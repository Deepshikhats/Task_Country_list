interface TCountryList {
  name: string;
  region: string;
  flag: string;
  independent: boolean;
}

type TFilterOptions = 'All' | 'Asia' | 'Europe';
interface TUserCred {
  userName: string;
  password: string;
  keepMeSignIn: boolean;
}
