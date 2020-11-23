import React from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function Text(props: Props) {
  const { children, className } = props;
  return (
    <Typography 
      children={children}
      className={className}
    />
  );
}
