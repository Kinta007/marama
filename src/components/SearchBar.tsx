import styled from 'styled-components';
import { Input, Select } from 'antd';
import { theme } from '../styles/theme';

const SearchContainer = styled.div`
  background: ${theme.colors.white};
  padding: 20px;
  border-radius: 12px;
  box-shadow: ${theme.colors.cardShadow};
  margin-bottom: 30px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const StyledInput = styled(Input)`
  flex: 1;
  height: 48px;
  border-radius: 8px;
  
  &:hover, &:focus {
    border-color: ${theme.colors.primary};
  }
`;

const StyledSelect = styled(Select<string>)`
  width: 150px;
  height: 48px;

  .ant-select-selector {
    border-radius: 8px !important;
    height: 48px !important;
    display: flex !important;
    align-items: center !important;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

interface SearchBarProps {
  onSearch: (value: string) => void;
  onFilterLocation: (value: string) => void;
}

const SearchBar = ({ onSearch, onFilterLocation }: SearchBarProps) => {
  return (
    <SearchContainer>
      <StyledInput 
        placeholder="마라톤 대회명 검색" 
        onChange={(e) => onSearch(e.target.value)}
        allowClear
      />
      <StyledSelect
        defaultValue="all"
        onChange={(value) => onFilterLocation(value as string)}
        options={[
          { value: 'all', label: '전체 지역' },
          { value: '서울', label: '서울' },
          { value: '부산', label: '부산' },
          { value: '경주', label: '경주' },
          { value: '제주', label: '제주' },
          { value: '춘천', label: '춘천' },
        ]}
      />
    </SearchContainer>
  );
};

export default SearchBar;
