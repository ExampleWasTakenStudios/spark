import { ReactNode } from 'react';

interface SmallTextProps {
  children: ReactNode;
}

export const SmallText = ({ children }: SmallTextProps) => {
  return <small className="text-sm leading-none font-medium">{children}</small>;
};
