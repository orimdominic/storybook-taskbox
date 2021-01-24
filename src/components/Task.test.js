import React from "react";
import renderer from "react-test-renderer";
import { Default, Archived, Pinned } from "../stories/Task.stories";

describe("DefaultTask", () => {
  /*     id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0), */
  it("renders all properties properly", () => {
    const componentInstance = renderer.create(<Default {...Default.args} />);
    expect(
      componentInstance.root.findAllByType("input")[0].props.defaultChecked
    ).toEqual(false);
    expect(
      componentInstance.root.findAllByType("input")[1].props.value
    ).toEqual(Default.args.task.title);
  });
});

// TODO: Write other tests
