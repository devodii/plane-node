export type OverrideProps<Base, Extend> = Omit<Base, keyof Extend>;
export type Headers = Record<string, string | null | undefined>;

export const makeQueryParams = (dto: Record<string, string>) => {
  const params = new URLSearchParams();
  return Object.keys(dto)
    .map((key) => params.append(key, dto[key]))
    .toString();
};
