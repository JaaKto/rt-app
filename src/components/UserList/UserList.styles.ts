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

  span {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: green;
    display: inline-block;
    margin: 6px;
    vertical-align: middle;
  }
`
