import { Wrapper } from "./index.styles";

export default function Layout(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}
