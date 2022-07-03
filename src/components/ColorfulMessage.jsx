import React from "react";

export const ColorfulMessage = (props) => {
  const { color, message } = props; //propsの分割代入
  const contentStyle = {
    color, //colorに対してcolorを用いる場合は、「,」以降は省略できる。
    fontSize: "18px"
  };
  return <p style={contentStyle}>{props.children}</p>;
};
