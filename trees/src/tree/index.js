import "./index.css";

function TreeNode({ value, children }) {
  return (
    <div class="node">
      <div class="value">{value}</div>
      <div class="children">{children}</div>
    </div>
  );
}

export default function Tree() {
  return (
    <div className="tree">
      <TreeNode value="root">
        <TreeNode value="ant" />
        <TreeNode value="bear">
          <TreeNode value="cat"></TreeNode>
          <TreeNode value="dog">
            <TreeNode value="elephant"></TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode value="frog" />
      </TreeNode>
    </div>
  );
}
