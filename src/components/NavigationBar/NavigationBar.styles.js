import styled from "styled-components"

export const List = styled.ul`
  margin: 0 10px 15px;
  list-style-type: none;
  display: flex;
  justify-content: center;
`

export const ListItem = styled.li`
  font-size: 22px;
  padding: 10px 15px;
  a {
    text-decoration: none;
    color: ${({ isActive }) => (isActive ? "#318435" : "white")};
    &:hover {
      color: #318435;
    }
  }
`
