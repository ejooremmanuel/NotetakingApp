export default function List(props) {
  return (
    <li
      style={{
        display: "inline-block",
        width: "40%",
        padding: "30px",
        height: "40%",
        backgroundColor: "White",
        filter: "drop-shadow(8px 10px 8px grey)",
        margin: "20px"
      }}
    >
      {props.item}
    </li>
  );
}
