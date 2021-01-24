import React from "react";
import PropTypes from 'prop-types'

Task.propTypes ={
  /** Composition of the task */
  task: PropTypes.shape({
    /** Unique identifier of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired
  }),
      /** Event to change task to ARCHIVED */
      onArchiveTask:PropTypes.func,
        /** Event to change task to PINNED */
        onPinTask:PropTypes.func,
}

export default function Task({
  task: { id, title, state },
  onPinTask,
  onArchiveTask,
}) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
      </label>
      <input type="text" value={title} readOnly />
      <span className="checkbx-custom" onClick={() => onArchiveTask(id)}></span>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>
      <div className="actions" onClick={(e) => e.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}
