import { Select } from 'antd';

import { DEFAULT_SIZES } from '../../../../shared/constants.ts';


type ItemsPerPageSelectProps = {
  pageSize: number,
  handlePageSizeChange: (pageSize: number) => void;
}

export const ItemsPerPageSelect = ({ pageSize, handlePageSizeChange }: ItemsPerPageSelectProps) => {
  return <div style={{ marginBottom: '1rem' }}>
    Show per page:{' '}
    <Select
      value={pageSize}
      onChange={(value) => handlePageSizeChange(value)}
    >
      {DEFAULT_SIZES.map(size => <Select.Option value={size} key={size}>{size}</Select.Option>)}
    </Select>
  </div>;
};