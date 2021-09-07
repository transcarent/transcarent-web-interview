import "./index.css";

export default function Tree() {
  return (
    <div className="tree">
      <p>root</p>
      <p className="indent1">ant</p>
      <p className="indent1">bear</p>
      <p className="indent2">cat</p>
      <p className="indent3">dog</p>
      <p className="indent3">elephant</p>
      <p className="indent1">frog</p>
    </div>
  );
}
