import styled from 'styled-components';
import { Marathon } from '../types/marathon';
import MarathonCard from './MarathonCard';
import { theme } from '../styles/theme';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 20px 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface MarathonListProps {
  marathons: Marathon[];
}

const MarathonList = ({ marathons }: MarathonListProps) => {
  if (marathons.length === 0) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>검색 결과가 없습니다.</div>;
  }

  return (
    <ListContainer>
      {marathons.map((marathon) => (
        <MarathonCard key={marathon.id} marathon={marathon} />
      ))}
    </ListContainer>
  );
};

export default MarathonList;
