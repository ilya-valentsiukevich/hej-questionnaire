import { Table, Space } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks.ts';
import { DEFAULT_PAGE_SIZE, DEFAULT_SIZES } from '../../../../shared/constants.ts';
import { fetchQuestionnaires, updateFilter } from '../../store/questionnairesSlice.ts';
import { SearchPanel } from '../components/SearchPanel.tsx';

import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';

export const QuestionnairesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, total, filter, loading } = useAppSelector(
    (state) => state.questionnaires,
  );

  useEffect(() => {
    void dispatch(fetchQuestionnaires(filter));
  }, [dispatch, filter]);


  const handleSearchSubmit = (searchTerm?: string) => {
    dispatch(updateFilter({ searchTerm: searchTerm, page: 1 }));
  };

  const handleTableChange = (pagination: TablePaginationConfig) => {
    const page = pagination.current || 1;
    const pageSize = pagination.pageSize || DEFAULT_PAGE_SIZE;
    dispatch(updateFilter({ page, pageSize }));
  };

  const columns: ColumnsType<typeof items[number]> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <Link to={`/questionnaire/${record.id}`}>{text}</Link>
      ),
    },
  ];

  return (
    <div>
      <Space style={{ marginBottom: '1rem' }}>
        <SearchPanel initialSearchTerm={filter.searchTerm} handleSearchSubmit={handleSearchSubmit}
                     loading={loading} />
      </Space>

      <Table
        rowKey="id"
        dataSource={items}
        columns={columns}
        loading={loading}
        pagination={{
          current: filter.page,
          pageSize: filter.pageSize,
          total: total,
          showSizeChanger: true,
          pageSizeOptions: DEFAULT_SIZES,
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};