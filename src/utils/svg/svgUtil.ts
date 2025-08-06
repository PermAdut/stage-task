import { optimize } from "svgo";
import parse from "html-react-parser";
import type { ReactElement } from "react";
import { isValidElement } from "react";

export async function svgStringToReactComponent(svgString: string): Promise<ReactElement> {
  const optimizedSvg = optimize(svgString).data;
  const reactElement = parse(optimizedSvg) as ReactElement;
  if (!isValidElement(reactElement)) {
    throw new Error("Failed to parse SVG into a valid React component");
  }

  return reactElement;
}
