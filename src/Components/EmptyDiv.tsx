import styled from "styled-components";

const EmptyContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.container};
`;

export default function EmptyDiv() {
  return <EmptyContainer />;
}
