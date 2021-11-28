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
      <div className="old-tree">
        <p>root</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;ant</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;bear</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;frog</p>
      </div>
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
