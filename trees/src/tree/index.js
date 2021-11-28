import "./index.css";
import tree from "./data.json"

function TreeNode({ value, childNodes = [], path = '' }) {
  return (
    <div class="node">
      <div class="value">{path} {value}</div>
      {childNodes.map(({
        value, children: childNodes
      }, index) => <div class="children"><TreeNode value={value} childNodes={childNodes} path={`${path}.${index + 1}`}></TreeNode></div>)}
    </div>
  );
}

export default function Tree() {
  return (
    <div className="tree">
      <TreeNode value={tree.value} childNodes={tree.children} path='1'></TreeNode>
    </div>
  );
}
