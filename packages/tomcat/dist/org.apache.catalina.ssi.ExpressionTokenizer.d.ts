declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Parses an expression string to return the individual tokens. This is
                 * patterned similar to the StreamTokenizer in the JDK but customized for SSI
                 * conditional expression parsing.
                 * @author Paul Speed
                 */
                // @ts-ignore
                class ExpressionTokenizer extends java.lang.Object {
                    /**
                     * Creates a new parser for the specified expression.
                     * @param expr The expression
                     */
                    // @ts-ignore
                    constructor(expr: java.lang.String | string)
                    // @ts-ignore
                    public static readonly TOKEN_STRING: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_AND: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_OR: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_NOT: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_EQ: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_NOT_EQ: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_RBRACE: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_LBRACE: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_GE: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_LE: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_GT: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_LT: number /*int*/
                    // @ts-ignore
                    public static readonly TOKEN_END: number /*int*/
                    /**
                     * @return <code>true</code> if there are more tokens.
                     */
                    // @ts-ignore
                    public hasMoreTokens(): boolean
                    /**
                     * @return the current index for error reporting purposes.
                     */
                    // @ts-ignore
                    public getIndex(): number /*int*/
                    // @ts-ignore
                    isMetaChar(c: string): boolean
                    /**
                     * @return the next token type and initializes any state variables
                     *  accordingly.
                     */
                    // @ts-ignore
                    public nextToken(): number /*int*/
                    /**
                     * @return the String value of the token if it was type TOKEN_STRING.
                     *  Otherwise null is returned.
                     */
                    // @ts-ignore
                    public getTokenValue(): string
                }
            }
        }
    }
}
