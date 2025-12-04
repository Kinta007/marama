import styled from 'styled-components';
import { Marathon } from '../types/marathon';
import { theme } from '../styles/theme';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${theme.colors.cardShadow};
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.colors.hoverShadow};
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${theme.colors.text};
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Price = styled.div`
  margin-top: 16px;
  font-weight: 700;
  color: ${theme.colors.primary};
  font-size: 1.1rem;
  text-align: right;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 12px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: ${theme.colors.background};
  color: ${theme.colors.textSecondary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
`;

interface MarathonCardProps {
  marathon: Marathon;
}

const MarathonCard = ({ marathon }: MarathonCardProps) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={marathon.imageUrl} alt={marathon.title} />
      </ImageContainer>
      <Content>
        <Title>{marathon.title}</Title>
        <InfoRow>
          <FaCalendarAlt /> {marathon.date}
        </InfoRow>
        <InfoRow>
          <FaMapMarkerAlt /> {marathon.location}
        </InfoRow>
        <TagContainer>
          {marathon.distances.map((dist) => (
            <Tag key={dist}>{dist}</Tag>
          ))}
        </TagContainer>
        <Price>{marathon.price}</Price>
      </Content>
    </Card>
  );
};

export default MarathonCard;
