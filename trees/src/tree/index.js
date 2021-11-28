import "./index.css";
import tree from "./data.json"

function TreeNode({ value, childNodes = [] }) {
  return (
    <div class="node">
      <div class="value">{value}</div>
      {childNodes.map(({
        value, children: childNodes
      }) => <div class="children"><TreeNode value={value} childNodes={childNodes}></TreeNode></div>)}
    </div>
  );
}

export default function Tree() {
  return (
    <div className="tree">
      <TreeNode value={tree.value} childNodes={tree.children}></TreeNode>
    </div>
  );
}
