import {
    ExpressionNode,
    functionCall,
    FunctionDeclarationNode,
    FunctionInvocationNode,
    FunctionVarAssignmentNode,
    IdentifierNode,
    JsxNode,
    LiteralNode,
    MemberDeclarationNode,
    NamespaceImportNode,
    ParameterNode,
    ReturnStatementNode,
    RootNode,
    VariableDeclarationNode
} from './AST'
import { parseSourceCode } from './index'

export function compiler(input: string): string {
    // const returnString = ''
    const ast = parseSourceCode(input) as RootNode
    const generatedCode = generateCode(ast.members)
    console.log(generatedCode)
    return generatedCode
}

function generateCode(members: MemberDeclarationNode[]): string {
    return members.map(generateMemberCode).join('\n')
}

function generateMemberCode(member: MemberDeclarationNode): string {
    switch (member.type) {
        case 'NamespaceImportNode':
            return generateImportStatementCode(member)
        case 'VariableDeclarationNode':
            return generateVariableDeclarationCode(member)
        case 'FunctionDeclarationNode':
            return generateFunctionDeclarationCode(member)
        case 'FunctionInvocationNode':
            return generateFunctionInvocationCode(member)
        case 'JsxNode':
            return generateJsxCode(member)
        case 'ReturnStatementNode':
            return generateReturnStatementCode(member)
        case 'FunctionVarAssignmentNode':
            return generateFunctionVarAssignmentCode(member)
        default:
            throw new Error(`Unsupported member type: ${member}`)
    }
}

// VARIABLE DECLARATION
function generateVariableDeclarationCode(
    variableDeclaration: VariableDeclarationNode,
): string {
    const varType = variableDeclaration.varType
    const variableName = variableDeclaration.variableName.value
    const value = generateValueCode(variableDeclaration.value)

    return `${varType} ${variableName} = ${value};`
}

function generateValueCode(
    value: LiteralNode | IdentifierNode | functionCall | string | ExpressionNode,
): string {
    if (typeof value === 'string') {
        return value
    } else if ('type' in value && 'value' in value) {
        switch (value.type) {
            case 'number':
            case 'string':
            case 'boolean':
                return JSON.stringify(value.value)
            case 'IdentifierNode':
                return value.value
                // Add more cases here as you implement more node types
            default:
                throw new Error(`Unsupported value type: ${(value as any).type}`)
        }
    } else if ('functionName' in value && 'arguments' in value) {
        const args = value.arguments
            .map((arg) => generateValueCode(arg))
            .join(', ')
        return `${value.functionName}(${args})`
    } else if ('child' in value) {
    // Handle ExpressionNode type here
    } else {
        throw new Error('Unsupported value type')
    }
}

// VARIABLE DECLARATION
function generateFunctionDeclarationCode(
    member: FunctionDeclarationNode,
): string {
    const functionName = member.functionName
    const parameters = generateParameterListCode(member.parameters)
    const body = generateCode(member.body)

    return `function ${functionName}(${parameters}) {\n${body}\n}`
}

function generateParameterListCode(parameters: ParameterNode[]): string {
    return parameters.map(generateParameterCode).join(', ')
}

function generateParameterCode(parameter: ParameterNode): string {
    const { parameterName, returnType } = parameter
    return `${parameterName}: ${returnType}`
}

function generateFunctionInvocationCode(
    functionInvocation: FunctionInvocationNode,
): string {
    const { functionName, arguments: args } = functionInvocation
    const argumentsList = args
        .map((arg) => {
            if (typeof arg === 'string') {
                // If the argument is a string, it's an identifier, so don't add quotes
                return arg
            } else {
                // Otherwise, generate the code for the argument
                return generateValueCode(arg)
            }
        })
        .join(', ')

    return `${functionName}(${argumentsList});`
}

function generateReturnStatementCode(member: ReturnStatementNode): string {
    const { expression } = member

    if (typeof expression === 'string') {
    // Handle return statement with a plain identifier
        return `return ${expression};`
    } else {
    // Handle return statement with an expression (including JSX)
        const expressionCode = generateExpressionCode(expression)
        return `return ${expressionCode};`
    }
}

function generateExpressionCode(
    expression: ExpressionNode | FunctionInvocationNode | string,
): string {
    if (typeof expression === 'string') {
        return expression
    } else if (expression.type === 'FunctionInvocationNode') {
        return generateFunctionInvocationCode(expression)
    } else if (expression.type === 'JsxNode') {
        return generateJsxCode(expression)
    } else if (expression.type === 'ExpressionGroupNode') {
        return `(${generateExpressionCode(expression.child)})`
    } else {
    // Handle other types of expressions
        return generateValueCode(expression)
    }
}

function generateImportStatementCode(node: NamespaceImportNode): string {
    return `import * as ${node.alias} from "${node.source}";`
}

function generateJsxCode(member: JsxNode): string {
    const { tagName, children } = member

    const childrenCode = children
        .map((child) => {
            if (typeof child === 'string') {
                // Plain text
                return JSON.stringify(child)
            } else if (child.type === 'JsxNode') {
                // Nested JSX element
                return generateJsxCode(child)
            } else {
                // Other types of children (like expressions)
                return generateExpressionCode(child)
            }
        })
        .join(', ')

    // Return the React.createElement call
    return `React.createElement("${tagName}", null, ${childrenCode})`
}

function generateFunctionVarAssignmentCode(
    member: FunctionVarAssignmentNode,
): string {
    const { variableName, expression } = member
    const expressionCode = generateValueCode(expression)

    return `${variableName} = ${expressionCode};`
}
