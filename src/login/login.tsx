import { CSSProperties } from "react";

function Login() {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // 수평 중앙 정렬
    justifyContent: "center", // 수직 중앙 정렬
    width: "500px",
    margin: "0 auto", // 수평 중앙 정렬
    height: "100vh", // 화면 전체 높이
  };
  return (
    <form style={style}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Login;
