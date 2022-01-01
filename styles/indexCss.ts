import styled from 'styled-components';

export const DivBox = styled.div`
  padding: 45px 0;
  @media(max-width: 800px) {
    padding-top: 20px;
  }
`;

export const FooterRodape = styled.footer`
  text-align: center;
  position: absolute;
  bottom: 0;
  background-color: rgb(52, 41, 128);
  width: 100%;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const DivRight = styled.div`
  width: 400px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  @media(max-width: 800px) {
    margin: 20px auto;
  }
  @media(max-width: 400px) {
    margin: 20px auto;
    width: 75%;
  }
`;

export const DivLeft = styled.div`
  text-align: center;
  margin-right: 20px;
  @media(max-width: 800px) {
    margin: 0 auto;
    padding: 10px;
  }
`;
