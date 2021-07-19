import styled from "styled-components";
import { size } from '../devices/devices';

const Title = styled.h2`
    grid-area: title;
    text-align: left;
    margin-left: 50px;
    margin-top: 50px;
    font-size: 4rem;
    font-weight: 600;

    @media screen and (max-width: ${size.laptop}){
        text-align: center;
        margin-left: 0;
    }
`;

export default Title;