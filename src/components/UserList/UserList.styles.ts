import styled from "styled-components"

export const User = styled.div`
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive && "#24292e"};
  &:hover {
    background-color: #3d434d;
  }
`
