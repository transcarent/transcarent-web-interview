import "./index.css";

function indentStyle(indentLevel) {
  return {
    "text-indent": `${4*indentLevel}ch`
  }
}

export default function Tree() {
  return (
    <div className="tree">
      <p style={indentStyle(0)}>root</p>
      <p style={indentStyle(1)}>ant</p>
      <p style={indentStyle(1)}>bear</p>
      <p style={indentStyle(2)}>cat</p>
      <p style={indentStyle(3)}>dog</p>
      <p style={indentStyle(3)}>elephant</p>
      <p style={indentStyle(1)}>frog</p>
    </div>
  );
}
