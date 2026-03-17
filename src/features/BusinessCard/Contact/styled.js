import styled from "styled-components";

export const Section = styled.footer`
  padding: clamp(24px, 3vw, 36px) clamp(20px, 3vw, 40px);
  background: ${({ theme }) => theme.color.backgroundAlt};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid rgba(184, 134, 11, 0.2);
  box-shadow: 0 4px 20px ${({ theme }) => theme.color.shadow};
  width: 100%;
`;

export const Title = styled.h2`
  font-size: clamp(18px, 2vw, 22px);
  margin-bottom: clamp(16px, 2.5vw, 24px);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${({ theme }) => theme.color.secondary};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 2vw, 20px);
  width: 100%;
  max-width: 100%;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: clamp(24px, 4vw, 48px);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 1.2vw, 14px);
  flex: 1;
  min-width: 0;
  max-width: 100%;
  align-items: center;

  @media (min-width: 640px) {
    flex: 0 1 auto;
    align-items: flex-start;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(184, 134, 11, 0.2);

  @media (min-width: 640px) {
    width: 1px;
    height: auto;
    min-height: 70px;
    align-self: stretch;
  }
 `;

export const Item = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  text-align: left;
  width: 100%;
`;

export const Icon = styled.span`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(184, 134, 11, 0.1);
  border-radius: 10px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 18px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  min-width: 0;
`;

export const Label = styled.span`
  font-size: clamp(9px, 1vw, 11px);
  color: ${({ theme }) => theme.color.textMuted};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Address = styled.span`
  font-size: clamp(12px, 1.2vw, 14px);
  line-height: 1.5;
  font-weight: 500;
  color: ${({ theme }) => theme.color.text};
`;

export const Small = styled.span`
  font-size: clamp(10px, 1vw, 12px);
  color: ${({ theme }) => theme.color.textMuted};
  margin-top: 2px;
  display: block;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.secondary};
  text-decoration: none;
  font-size: clamp(12px, 1.2vw, 14px);
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const Value = styled.span`
  font-size: clamp(12px, 1.2vw, 14px);
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.text};
`;

export const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: clamp(20px, 2.5vw, 28px);
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid rgba(184, 134, 11, 0.25);
  border-radius: 10px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 16px;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(139, 105, 20, 0.08);

  &:hover {
    background: ${({ theme }) => theme.color.primary};
    color: white;
    border-color: ${({ theme }) => theme.color.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(184, 134, 11, 0.3);
  }
`;

export const Copyright = styled.p`
  font-size: clamp(10px, 1vw, 12px);
  color: ${({ theme }) => theme.color.textMuted};
  margin: clamp(16px, 2vw, 24px) 0 0;
  text-align: center;
`;