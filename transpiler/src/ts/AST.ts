// AST types
export interface ASTNode {
  type: string;
}

export interface RootNode extends ASTNode {
  type: 'RootNode';
  members: MemberDeclarationNode[];
}

export interface NamespaceImportNode {
  type: 'NamespaceImportNode';
  alias: string; // e.g., 'React'
  source: string; // e.g., 'react'
}

export type MemberDeclarationNode =
  | NamespaceImportNode
  | VariableDeclarationNode
  | FunctionDeclarationNode
  | FunctionInvocationNode
  | ReturnStatementNode
  | FunctionVarAssignmentNode
  | JsxNode;

export interface VariableDeclarationNode extends ASTNode {
  type: 'VariableDeclarationNode';
  varType: VarType;
  variableName: IdentifierNode;
  value: LiteralNode | IdentifierNode | FunctionInvocationNode;
}

export type functionCall = {
  functionName: string;
  arguments: (LiteralNode | string)[];
};

export type VarType = 'var' | 'let' | 'const';
export type returnType = 'string' | 'number' | 'boolean';

export interface FunctionVarAssignmentNode extends ASTNode {
  type: 'FunctionVarAssignmentNode';
  variableName: string;
  expression: string | LiteralNode | ExpressionNode;
}

export interface ObjectPropertyAccessNode extends ASTNode {
  type: 'ObjectPropertyAccessNode';
  properties: string[];
}

export interface IdentifierNode extends ASTNode {
  type: 'IdentifierNode';
  value: string;
}

export type ExpressionNode =
  | LiteralNode
  | FunctionInvocationNode
  | JsxNode
  | ObjectPropertyAccessNode
  | IdentifierNode
  | ExpressionGroupNode;

export interface ExpressionGroupNode {
  type: 'ExpressionGroupNode';
  child: ExpressionNode;
}

export interface FunctionDeclarationNode extends ASTNode {
  type: 'FunctionDeclarationNode';
  functionName: string;
  parameters: ParameterNode[];
  body: MemberDeclarationNode[];
}

export interface FunctionInvocationNode extends ASTNode {
  type: 'FunctionInvocationNode';
  functionName: string;
  arguments: (LiteralNode | IdentifierNode)[];
}

export interface ReturnStatementNode extends ASTNode {
  type: 'ReturnStatementNode';
  expression: ExpressionNode | FunctionInvocationNode | string;
}

export interface ParameterNode extends ASTNode {
  type: 'ParameterNode';
  parameterName: string;
  returnType: returnType;
}

export interface JsxNode extends ASTNode {
  type: 'JsxNode';
  openingElement: JsxOpeningElementNode;
  closingElement: JsxClosingElementNode;
  tagName: string;
  children: (LiteralNode | JsxNode | string)[];
}

export type JsxOpeningElementNode = {
  type: 'JsxOpeningElementNode';
  tagName: string;
};

export type JsxClosingElementNode = {
  type: 'JsxClosingElementNode';
  tagName: string;
};

export type LiteralNode = {
  type: 'string' | 'number' | 'boolean';
  value: string | number | boolean;
};
