declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace json {
                    /**
                     * Describes the input token stream.
                     */
                    // @ts-ignore
                    class Token extends java.lang.Object implements java.io.Serializable {
                        /**
                         * No-argument constructor
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructs a new token for the specified Image.
                         */
                        // @ts-ignore
                        constructor(kind: number /*int*/)
                        /**
                         * Constructs a new token for the specified Image and Kind.
                         */
                        // @ts-ignore
                        constructor(kind: number /*int*/, image: java.lang.String | string)
                        /**
                         * An integer that describes the kind of this token.  This numbering
                         * system is determined by JavaCCParser, and a table of these numbers is
                         * stored in the file ...Constants.java.
                         */
                        // @ts-ignore
                        public kind: number /*int*/
                        /**
                         * The line number of the first character of this Token.
                         */
                        // @ts-ignore
                        public beginLine: number /*int*/
                        /**
                         * The column number of the first character of this Token.
                         */
                        // @ts-ignore
                        public beginColumn: number /*int*/
                        /**
                         * The line number of the last character of this Token.
                         */
                        // @ts-ignore
                        public endLine: number /*int*/
                        /**
                         * The column number of the last character of this Token.
                         */
                        // @ts-ignore
                        public endColumn: number /*int*/
                        /**
                         * The string image of the token.
                         */
                        // @ts-ignore
                        public image: java.lang.String | string
                        /**
                         * A reference to the next regular (non-special) token from the input
                         * stream.  If this is the last token from the input stream, or if the
                         * token manager has not read tokens beyond this one, this field is
                         * set to null.  This is true only if this token is also a regular
                         * token.  Otherwise, see below for a description of the contents of
                         * this field.
                         */
                        // @ts-ignore
                        public next: org.apache.tomcat.util.json.Token
                        /**
                         * This field is used to access special tokens that occur prior to this
                         * token, but after the immediately preceding regular (non-special) token.
                         * If there are no such special tokens, this field is set to null.
                         * When there are more than one such special token, this field refers
                         * to the last of these special tokens, which in turn refers to the next
                         * previous special token through its specialToken field, and so on
                         * until the first special token (whose specialToken field is null).
                         * The next fields of special tokens refer to other special tokens that
                         * immediately follow it (without an intervening regular token).  If there
                         * is no such token, this field is null.
                         */
                        // @ts-ignore
                        public specialToken: org.apache.tomcat.util.json.Token
                        /**
                         * An optional attribute value of the Token.
                         * Tokens which are not used as syntactic sugar will often contain
                         * meaningful values that will be used later on by the compiler or
                         * interpreter. This attribute value is often different from the image.
                         * Any subclass of Token that actually wants to return a non-null value can
                         * override this method as appropriate.
                         */
                        // @ts-ignore
                        public getValue(): any
                        /**
                         * Returns the image.
                         */
                        // @ts-ignore
                        public toString(): string
                        /**
                         * Returns a new Token object, by default. However, if you want, you
                         * can create and return subclass objects based on the value of ofKind.
                         * Simply add the cases to the switch for all those special cases.
                         * For example, if you have a subclass of Token called IDToken that
                         * you want to create if ofKind is ID, simply add something like :
                         * case MyParserConstants.ID : return new IDToken(ofKind, image);
                         * to the following switch statement. Then you can cast matchedToken
                         * variable to the appropriate type and use sit in your lexical actions.
                         */
                        // @ts-ignore
                        public static newToken(ofKind: number /*int*/, image: java.lang.String | string): org.apache.tomcat.util.json.Token
                        // @ts-ignore
                        public static newToken(ofKind: number /*int*/): org.apache.tomcat.util.json.Token
                    }
                }
            }
        }
    }
}
