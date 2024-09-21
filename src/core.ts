export type OverrideProps<Base, Extend> = Omit<Base, keyof Extend>;
export type Headers = Record<string, string | null | undefined>;
