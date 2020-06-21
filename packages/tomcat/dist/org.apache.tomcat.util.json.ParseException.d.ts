declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace json {
                    /**
                     * This exception is thrown when parse errors are encountered.
                     * You can explicitly create objects of this exception type by
                     * calling the method generateParseException in the generated
                     * parser.
                     * You can modify this class to customize your error reporting
                     * mechanisms so long as you retain the public fields.
                     */
                    // @ts-ignore
                    class ParseException extends java.lang.Exception {
                        /**
                         * This constructor is used by the method "generateParseException"
                         * in the generated parser.  Calling this constructor generates
                         * a new object of this type with the fields "currentToken",
                         * "expectedTokenSequences", and "tokenImage" set.
                         */
                        // @ts-ignore
                        constructor(currentTokenVal: org.apache.tomcat.util.json.Token, expectedTokenSequencesVal: number /*int*/[][], tokenImageVal: java.lang.String[] | string[])
                        /**
                         * The following constructors are for use by you for whatever
                         * purpose you can think of.  Constructing the exception in this
                         * manner makes the exception behave in the normal way - i.e., as
                         * documented in the class "Throwable".  The fields "errorToken",
                         * "expectedTokenSequences", and "tokenImage" do not contain
                         * relevant information.  The JavaCC generated code does not use
                         * these constructors.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructor with message.
                         */
                        // @ts-ignore
                        constructor(message: java.lang.String | string)
                        /**
                         * The end of line string for this machine.
                         */
                        // @ts-ignore
                        EOL: java.lang.String | string
                        /**
                         * This is the last token that has been consumed successfully.  If
                         * this object has been created due to a parse error, the token
                         * followng this token will (therefore) be the first error token.
                         */
                        // @ts-ignore
                        currentToken: org.apache.tomcat.util.json.Token
                        /**
                         * Each entry in this array is an array of integers.  Each array
                         * of integers represents a sequence of tokens (by their ordinal
                         * values) that is expected at this point of the parse.
                         */
                        // @ts-ignore
                        expectedTokenSequences: number /*int*/[][]
                        /**
                         * This is a reference to the "tokenImage" array of the generated
                         * parser within which the parse error occurred.  This array is
                         * defined in the generated ...Constants interface.
                         */
                        // @ts-ignore
                        tokenImage: java.lang.String[] | string[]
                    }
                }
            }
        }
    }
}
