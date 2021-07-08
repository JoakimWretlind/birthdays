import styled from 'styled-components';

/** APP.JS **/
export const MainContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-35deg, #971132, #47001C);
`;

export const PeopleSection = styled.div`
    width: 90vw;
    max-width: 45rem;
    padding: 3rem;
    background: linear-gradient(-35deg, #E4E7EB, #9AA5B1);
    border-radius: .4rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
`;

export const MainH3 = styled.h3`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: .1rem;
  font-size: 1.6rem;
  @media screen and (min-width: 450px){
    font-size: 2rem;
  }
`;

export const ClearButton = styled.button`
  display: block;
  background: #333;
  color: #f1f1f1;
  width: 100%;
  border: none;
  margin: 2rem auto 0 auto;
  text-transform: capitalize;
  letter-spacing: .1rem;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  cursor: pointer;
  border-radius: .4rem;
  transition: .2s ease-out;

  &:hover{
    background: linear-gradient(-35deg, #971132, #47001C);
    letter-spacing: .2rem;
  }
`;

/** LIST.JS **/
export const Article = styled.div`
    display: grid;    
    grid-template-columns: auto 1fr;
    margin: 1.2rem 0;
    align-items: center;
`;

export const PersonImg = styled.img`
  width: 8rem;
  height: 8rem;
  margin-right: 2rem;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: .3s ease-out;

  &:hover {
    transform: scale(2.2);
  }

  @media screen and (min-width: 450px){
    width: 10rem;
    height: 10rem;
  }
`;

export const PersonH4 = styled.h4`
  font-weight: normal;
  text-transform: capitalize;
  margin-bottom: 1rem;
  letter-spacing: .1rem;
  font-size: 1.2rem;
  @media screen and (min-width: 450px){
    font-size: 1.4rem;
  }
`;

export const PersonContainer = styled.div``;

export const PersonHr = styled.hr`
    margin: 0 auto;
    width: 100%;
`;