declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace json {
                    /**
                     * Token Manager Error.
                     */
                    // @ts-ignore
                    class TokenMgrError extends java.lang.Error {
                        /**
                         * No arg constructor.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructor with message and reason.
                         */
                        // @ts-ignore
                        constructor(message: java.lang.String | string, reason: number /*int*/)
                        /**
                         * Full Constructor.
                         */
                        // @ts-ignore
                        constructor(EOFSeen: boolean, lexState: number /*int*/, errorLine: number /*int*/, errorColumn: number /*int*/, errorAfter: java.lang.String | string, curChar: number /*int*/, reason: number /*int*/)
                        /**
                         * Lexical error occurred.
                         */
                        // @ts-ignore
                        readonly LEXICAL_ERROR: number /*int*/
                        /**
                         * An attempt was made to create a second instance of a static token manager.
                         */
                        // @ts-ignore
                        readonly STATIC_LEXER_ERROR: number /*int*/
                        /**
                         * Tried to change to an invalid lexical state.
                         */
                        // @ts-ignore
                        readonly INVALID_LEXICAL_STATE: number /*int*/
                        /**
                         * Detected (and bailed out of) an infinite loop in the token manager.
                         */
                        // @ts-ignore
                        readonly LOOP_DETECTED: number /*int*/
                        /**
                         * Replaces unprintable characters by their escaped (or unicode escaped)
                         * equivalents in the given string
                         */
                        // @ts-ignore
                        addEscapes(str: java.lang.String | string): string
                        /**
                         * Returns a detailed message for the Error when it is thrown by the
                         * token manager to indicate a lexical error.
                         * Parameters :
                         * EOFSeen     : indicates if EOF caused the lexical error
                         * curLexState : lexical state in which this error occurred
                         * errorLine   : line number when the error occurred
                         * errorColumn : column number when the error occurred
                         * errorAfter  : prefix that was seen before this error occurred
                         * curchar     : the offending character
                         * Note: You can customize the lexical error message by modifying this method.
                         */
                        // @ts-ignore
                        LexicalErr(EOFSeen: boolean, lexState: number /*int*/, errorLine: number /*int*/, errorColumn: number /*int*/, errorAfter: java.lang.String | string, curChar: number /*int*/): string
                        /**
                         * You can also modify the body of this method to customize your error messages.
                         * For example, cases like LOOP_DETECTED and INVALID_LEXICAL_STATE are not
                         * of end-users concern, so you can return something like :
                         * "Internal Error : Please file a bug report .... "
                         * from this method for such cases in the release version of your parser.
                         */
                        // @ts-ignore
                        getMessage(): string
                    }
                }
            }
        }
    }
}
