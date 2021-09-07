import "./index.css";
import tree from "./data.json";

function indentStyle(indentLevel) {
  return {
    "text-indent": `${4*indentLevel}ch`
  }
}

// flatten to Array<{name: string; level:number;}>
function flattenTree(tree, level=0) {
  const { name, children } = tree;
  const childElements =
    children
    .map(child => flattenTree(child, level + 1))
    .flat();
  return [ {name, level}, ...childElements ]
}

function nodeElement({name, level}) {
  return <p style={indentStyle(level)}>{name}</p>;
}

export default function Tree() {
  const treeElements = flattenTree(tree).map(nodeElement);
  return (
    <div className="tree">
      {treeElements}
    </div>
  );
}
