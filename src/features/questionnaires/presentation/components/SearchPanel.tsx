import { Button, Input, Space } from 'antd';
import React, { useState } from 'react';

type SearchPanelProps = {
  initialSearchTerm?: string;
  handleSearchSubmit: (searchTerm?: string) => void;
  loading: boolean;
}

export const SearchPanel = ({ initialSearchTerm, handleSearchSubmit, loading }: SearchPanelProps) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const handleSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target.value);
  };

  return <Space>
    <Input
      placeholder="Questionnaire"
      value={searchTerm}
      onChange={handleSearchChange}
      onPressEnter={() => handleSearchSubmit(searchTerm)}
      disabled={loading}
    />
    <Button type="primary" onClick={() => handleSearchSubmit(searchTerm)} disabled={loading}>
      Search
    </Button>
  </Space>;
};