declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace json {
                    /**
                     * Token Manager.
                     */
                    // @ts-ignore
                    class JSONParserTokenManager extends java.lang.Object implements org.apache.tomcat.util.json.JSONParserConstants {
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(stream: org.apache.tomcat.util.json.JavaCharStream)
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(stream: org.apache.tomcat.util.json.JavaCharStream, lexState: number /*int*/)
                        /**
                         * Debug output.
                         */
                        // @ts-ignore
                        public debugStream: java.io.PrintStream
                        /**
                         * Token literal values.
                         */
                        // @ts-ignore
                        public static readonly jjstrLiteralImages: java.lang.String[] | string[]
                        /**
                         * Lexer state names.
                         */
                        // @ts-ignore
                        public static readonly lexStateNames: java.lang.String[] | string[]
                        /**
                         * Lex State array.
                         */
                        // @ts-ignore
                        public static readonly jjnewLexState: number /*int*/[]
                        // @ts-ignore
                        input_stream: org.apache.tomcat.util.json.JavaCharStream
                        // @ts-ignore
                        curChar: number /*int*/
                        /**
                         * Set debug output.
                         */
                        // @ts-ignore
                        public setDebugStream(ds: java.io.PrintStream): void
                        // @ts-ignore
                        jjFillToken(): org.apache.tomcat.util.json.Token
                        /**
                         * Get the next Token.
                         */
                        // @ts-ignore
                        public getNextToken(): org.apache.tomcat.util.json.Token
                        /**
                         * Reinitialise parser.
                         */
                        // @ts-ignore
                        public ReInit(stream: org.apache.tomcat.util.json.JavaCharStream): void
                        /**
                         * Reinitialise parser.
                         */
                        // @ts-ignore
                        public ReInit(stream: org.apache.tomcat.util.json.JavaCharStream, lexState: number /*int*/): void
                        /**
                         * Switch to specified lex state.
                         */
                        // @ts-ignore
                        public SwitchTo(lexState: number /*int*/): void
                    }
                }
            }
        }
    }
}
