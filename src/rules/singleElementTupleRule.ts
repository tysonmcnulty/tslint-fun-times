import * as Lint from "tslint";
import * as ts from "typescript";

class NoSingleElementTupleWalker extends Lint.RuleWalker {
  public visitTupleType(node: ts.TupleTypeNode) {
    if (node.elementTypes.length === 1) {
      this.addFailure(
        this.createFailure(
          node.getStart(),
          node.getWidth(),
          Rule.FAILURE_STRING,
        ),
      );
    }

    super.visitTupleType(node);
  }
}

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "Single-element tuples (e.g. [T]) are not allowed. Did you mean T[]?";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(
      new NoSingleElementTupleWalker(sourceFile, this.getOptions()),
    );
  }
}
