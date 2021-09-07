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
  const { name, children } = tree;
  const childElements =
    children
    .map(child => flattenTree(child, level + 1))
    .flat();
  return [ {name, level}, ...childElements ]
}

function cloneTree({name, children}) {
  const childClones = children.map(cloneTree);
  return Object.assign({}, {
    name, children: childClones
  });
}

function findElement(tree, name) {
  if (tree.name === name) {
    return tree;
  }
  for (const child of tree.children) {
    const found = findElement(child, name);
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
    console.log("render");
    const treeElements =
      flattenTree(this.state.tree)
      .map(this.nodeElement.bind(this));
    return (
      <div className="tree">
        {treeElements}
      </div>
    );
  }
  updateElement(name, event) {
    event.preventDefault();
    const newTree = cloneTree(this.state.tree);
    const nodeToUpdate = findElement(newTree, name);
    nodeToUpdate.name = event.target[0].value;
    this.setState({tree: newTree});
  }
  nodeElement({name, level}) {
    return (
      <div key={name}>
        <p style={indentStyle(level)} >
          {name}
        </p>
        <form onSubmit={this.updateElement.bind(this, name)}>
          <input type="text" style={indentStyle(level)} />
        </form>
      </div>
    );
  }

}
