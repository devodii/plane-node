type Hash = string;

interface Base {
  id: string;
  current: boolean;
  starts: Date;
  ends: Date;
}

/** Role */
export interface Role extends Base {
  title: string;
  responsibilities: string;
  level: number;
}

/** Reporting */
export interface Reporting extends Base {
  department: string;
  manager: Hash;
}

/** Location */
export type LocationType = "office" | "home" | unknown;

export interface LocationAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface Location {
  id: string;
  type: LocationType;
  name: string;
  address: LocationAddress;
  timestamp: string;
}

/** Classification */

export type ClassificationStatus =
  | "full-time"
  | "part-time"
  | "temporary"
  | "seasonal";

export type ClassificationType = "salaried" | "hourly" | "commission-only";

export type ClassificationTerm = "at-will" | "fixed" | "indefinite";

export interface Classification extends Base {
  status: ClassificationStatus;
  type: ClassificationType;
  term: ClassificationTerm;
  exempt: boolean;
  overtime: string;
}

/** Compensation */

export type CompensationStatus = "pending" | "accepted" | "cancelled";

export type CompensationUnit =
  | "hour"
  | "day"
  | "week"
  | "month"
  | "year"
  | "other";

export type CompensationFrequency =
  | "weekly"
  | "biweekly"
  | "twice_monthly"
  | "monthly"
  | "thirteen_monthly"
  | "fourteen_mounthly";

export interface Compensation extends Base {
  status: CompensationStatus;
  amount: string;
  currency: string;
  unit: CompensationUnit;
  unit_description: string;
  frequency: CompensationFrequency;
  stock: string;
  other: string;
  reason: string;
  worker: Worker;
}

/** Employment */

export type EmploymentStatus =
  | "pending"
  | "active"
  | "terminated"
  | "cancelled"
  | "paused"
  | undefined;

export type EmploymentType = "employee" | "contractor" | "vendor";

export interface Employment extends Base {
  status: EmploymentStatus;
  type: EmploymentType;
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

/** Worker */
export interface Worker extends Base {
  id: string;
  type: Employment;
  number: string | null;
  name: {
    first: string;
    last: string;
    business: string;
  };
  email: string;
  title: string;
}

export type ListWorkersParameters = Partial<{
  limit: string;
  starting_after: string;
  ending_before: string;
}>;
