import { memo } from "react";
const Child = (props) => {
  const { incrementCount } = props;
  console.log("reloading child");
  return <button onClick={() => incrementCount()}>Generate Random Fact</button>;
};

export default memo(Child);
