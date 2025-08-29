import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from './App.tsx'

test('Should the interface contains the welcome message', () => {
  render(<App />);
  expect(screen.getByText('Give a start to the project')).toBeTruthy();
})