import { parseSourceCode } from "../src/ts";

test("parseSourceCode should work", (): void => {
  parseSourceCode(sourceCode);
});

const sourceCode = `
public class Hello {

}
`;
