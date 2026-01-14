type GreetType = {
  name?: string;
};
export const Greet = (props: GreetType) => {
  return <h1>Hello {props.name}</h1>;
};
