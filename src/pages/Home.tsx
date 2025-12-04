import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import MarathonList from '../components/MarathonList';
import { Marathon } from '../types/marathon';

const HomeContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 24px;
  text-align: center;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Home = () => {
  const [marathons, setMarathons] = useState<Marathon[]>([]);
  const [filteredMarathons, setFilteredMarathons] = useState<Marathon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL; // <-- Vite base 경로

    fetch(`${baseUrl}data/marathons.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load marathons: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMarathons(data);
        setFilteredMarathons(data);
      })
      .catch((err) => console.error('Failed to load marathons:', err));
  }, []);

  useEffect(() => {
    let result = marathons;

    if (searchTerm) {
      result = result.filter((m) =>
        m.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (locationFilter !== 'all') {
      result = result.filter((m) => m.location === locationFilter);
    }

    setFilteredMarathons(result);
  }, [searchTerm, locationFilter, marathons]);

  return (
    <HomeContainer>
      <Title>
        Find Your <span>Race</span>
      </Title>
      <SearchBar
        onSearch={setSearchTerm}
        onFilterLocation={setLocationFilter}
      />
      <MarathonList marathons={filteredMarathons} />
    </HomeContainer>
  );
};

export default Home;
