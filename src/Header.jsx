import PropTypes from "prop-types";

Header.propTypes = {
  listSize: PropTypes.number.isRequired,
  deleteCheckedTodos: PropTypes.func.isRequired,
};

export default function Header({ listSize, deleteCheckedTodos }) {
  return (
    <div className="header">
      <h1>To do list</h1>
      {listSize !== 0 && (
        <div className="btn-container">
          <button onClick={deleteCheckedTodos} className="btn btn-danger">
            Delete checked
          </button>
        </div>
      )}
    </div>
  );
}
