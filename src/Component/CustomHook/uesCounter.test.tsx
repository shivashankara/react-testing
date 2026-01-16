import { renderHook, screen } from "@testing-library/react";
import useCounter from "./useCounter";

describe("Counter", () => {
  test("counter render properly", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });

    expect(result.current.count).toBe(10);
  });
});
