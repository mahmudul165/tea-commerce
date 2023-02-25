const cusStyle = {
  backgroundColor: "#59330e",
  borderRadius: "5px",
  padding: "10px",
  color: "#fff",
};
function IconWithBackground({ children }) {
  return <div style={cusStyle}>{children}</div>;
}

export default IconWithBackground;
