import styled from 'styled-components';

// export const Paragraph = styled.p`
//   font-size: large;
//   color: black;

//   &:hover {
//     background-color: wheat;
//     font-style: italic;
//   }
// `;

// export const Span = styled.span`
//   color: brown;
//   font-style: italic;

//   ${Paragraph}:hover & {
//     background-color: violet;
//   }
// `;

export const Span = styled.span`
  color: ${({ isRed }) => (isRed ? 'brown' : 'green')};
  font-style: italic;
  background-color: ${({ online }) => (online === 'yes' ? 'tomato' : 'white')};
`;

export const Paragraph = styled.p`
  font-size: large;
  color: black;

  &:hover {
    background-color: wheat;
    font-style: italic;
    ${Span} {
      background-color: violet;
    }
  }
`;
