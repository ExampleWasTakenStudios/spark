import { ReactNode } from 'react';

interface LargeTextProps {
  children: ReactNode;
}

export const LargeText = ({ children }: LargeTextProps) => {
  return <div className="text-lg font-semibold">{children}</div>;
};
