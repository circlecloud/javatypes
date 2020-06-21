declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Represents a parsed expression.
                 * @author Paul Speed
                 */
                // @ts-ignore
                class ExpressionParseTree extends java.lang.Object {
                    /**
                     * Creates a new parse tree for the specified expression.
                     * @param expr The expression string
                     * @param ssiMediator Used to evaluated the expressions
                     * @throws ParseException a parsing error occurred
                     */
                    // @ts-ignore
                    constructor(expr: java.lang.String | string, ssiMediator: org.apache.catalina.ssi.SSIMediator)
                    /**
                     * Evaluates the tree and returns true or false. The specified SSIMediator
                     * is used to resolve variable references.
                     * @return the evaluation result
                     */
                    // @ts-ignore
                    public evaluateTree(): boolean
                }
            }
        }
    }
}
