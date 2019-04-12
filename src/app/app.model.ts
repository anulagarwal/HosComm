export interface Visit {
    id?:            any;
    userId:        any;
    goceryStoreId: any;
    residanceId:   any;
    timeOfVisit:   Date; // can be number
  }

  export interface GroceryStore {
    id:      any;
    cityId:  any;
    name:    String;
    address: String;
  }

  export interface Residance {
    id:      any;
    cityId:  any;
    name:    String;
    address: String;
  }

  export interface City {
    id:   any;
    name: String;
  }

  export interface User {
    id?: any;
    email: String;
    password: String;
    fullName: String;
    cityId?: any;
    residanceId?: any;
    totalEarnings?: Number; // Euro 1.55  will be saved 155
  }

  export interface Chat {
    id?:      any;
    visitId: any;
    message: string;
    sender:  string; //id or email of user who sends the message.
    pair:    string; //id(s) or email(s) => (visits.userID && users.userID)
    time:    number;
  }