const oldEnvs = { ...process.env };

export const overrideEnvs = (overrides: Record<string, string>) => {
  process.env = { ...oldEnvs, ...overrides };
};

export const restoreEnvs = () => {
  process.env = oldEnvs;
};
