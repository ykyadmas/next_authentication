import { Status } from '@prisma/client';
import React from 'react';

interface Props {
  status: Status;
}
const statusMap: Record< Status,{ label: string; color:'red'|'violet'|'green'}> = {
  APPROVED: { label: 'Approved', color: 'green' },
  IN_PROGRESS: { label: 'In Progress', color: 'violet' },
  CANCELLED: { label: 'Cancel', color: 'red' },
};

const ProposalStatus = ({ status }: Props) => {
  const divStyle = { color: statusMap[status].color };
  return <div style={divStyle}>{statusMap[status].label}</div>;
};
export default ProposalStatus;