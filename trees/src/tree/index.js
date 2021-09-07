import "./index.css";
import data from "./data.json";
import React from "react";

function indentStyle(indentLevel) {
  return {
    textIndent: `${4*indentLevel}ch`
  }
}

// flatten to Array<{name: string; level:number;}>
function flattenTree(tree, level=0) {
  const { name, nodeId, children } = tree;
  const childElements =
    children
    .map(child => flattenTree(child, level + 1))
    .flat();
  return [ {name, nodeId, level}, ...childElements ]
}

function cloneTree({name, children, nodeId}) {
  const childClones = children.map(cloneTree);
  return Object.assign({}, {
    name, nodeId, children: childClones
  });
}

function findElement(node, predicate) {
  if (predicate(node)) {
    return node;
  }
  for (const child of node.children) {
    const found = findElement(child, predicate);
    if (found) {
      return found;
    }
  }
  return null;
}

export default class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tree: data };
  }
  render() {
    const treeElements =
      flattenTree(this.state.tree)
      .map(this.nodeElement.bind(this));
    return (
      <div className="tree">
        {treeElements}
      </div>
    );
  }
  updateElement(nodeId, event) {
    event.preventDefault();
    const newTree = cloneTree(this.state.tree);
    const newName = event.target[0].value;
    const nodeToUpdate = findElement(newTree, (node) => node.nodeId === nodeId);
    nodeToUpdate.name = newName;
    this.setState({tree: newTree});
  }
  nodeElement({name, nodeId, level}) {
    return (
      <div key={nodeId}>
        <p style={indentStyle(level)} >
          {name}
        </p>
        <form onSubmit={this.updateElement.bind(this, nodeId)}>
          <input type="text" style={indentStyle(level)} />
        </form>
      </div>
    );
  }

}
