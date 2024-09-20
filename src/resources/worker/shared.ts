type Hash = string;

interface BaseWorker {
  id: string;
  current: boolean;
  starts: Date;
  ends: Date;
}

export interface Role extends BaseWorker {
  title: string;
  responsibilities: string;
  level: number;
}

export interface Reporting extends BaseWorker {
  department: string;
  manager: Hash;
}

export interface Location {
  id: string;
  type: "office" | "home" | unknown;
  name: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  timestamp: string;
}

export interface Classification extends BaseWorker {
  status: "full-time" | "part-time" | "temporary" | "seasonal";
  type: "salaried" | "hourly" | "commission-only";
  term: "at-will" | "fixed" | "indefinite";
  exempt: boolean;
  overtime: string;
}

export interface Compensation extends BaseWorker {
  status: "pending" | "accepted" | "cancelled";
  amount: string;
  currency: string;
  unit: "hour" | "day" | "week" | "month" | "year" | "other";
  unit_description: string;
  frequency:
    | "weekly"
    | "biweekly"
    | "twice_monthly"
    | "monthly"
    | "thirteen_monthly"
    | "fourteen_mounthly";
  stock: string;
  other: string;
  reason: string;
  worker: Worker;
}

export interface Employment extends BaseWorker {
  status:
    | "pending"
    | "active"
    | "terminated"
    | "cancelled"
    | "paused"
    | undefined;
  type: "employee" | "contractor" | "vendor";
  primary: boolean;
  employer: Hash;
  classification: Classification;
  compensation: Compensation;
  role: Role;
  location: Location;
  reporting: Reporting;
  consent: {
    w2: boolean;
    1099: boolean;
  };
}

// todo
export interface Worker extends BaseWorker {}
