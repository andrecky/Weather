import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    // align-items: center;
    flex-direction: column;
`;

export const H3 = styled.h3`
text-align: center;

`;
export const Input = styled.input`
border: none;
outline: none
 width: 90%;
 height:100%
 font-size: 15px;
`;

export const BlockName = styled.div`
flex-direction: row;
margin-top: 15px;
`;
export const RenderWeather = styled.div`
display:flex;
flex-direction: column;
    align-self: center;
    width: 30%;
    height: 100%;
`;

export const Span = styled.div`
padding: 5px 0px 5px 5px  ;
&:hover {
      opacity:0.5;
  }
`;
export const CityName = styled.span`
font-weight: bold ;
font-size: 25px;

`;
export const DescriptionWeather = styled.span`
color: #A0A1AB;

`;
export const WeatherData = styled.div`
font-size: 16px;
color: #A0A1AB;
display: flex;
flex-direction: column;
    margin-left: 60px;
    padding: 5px;
`;
export const Temp = styled.span`
text-align:center;
font-size: 40px;
display:flex;
margin-top: 20px;
`;
