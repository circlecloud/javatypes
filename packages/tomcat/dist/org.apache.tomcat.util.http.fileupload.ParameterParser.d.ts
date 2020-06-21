declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * A simple parser intended to parse sequences of name/value pairs.
                         * Parameter values are expected to be enclosed in quotes if they
                         * contain unsafe characters, such as '=' characters or separators.
                         * Parameter values are optional and can be omitted.
                         * <p>
                         * <code>param1 = value; param2 = "anything goes; really"; param3</code>
                         * </p>
                         */
                        // @ts-ignore
                        class ParameterParser extends java.lang.Object {
                            /**
                             * Default ParameterParser constructor.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Returns {@code true} if parameter names are to be converted to lower
                             * case when name/value pairs are parsed.
                             * @return {#code true} if parameter names are to be
                             *  converted to lower case when name/value pairs are parsed.
                             *  Otherwise returns {@code false}
                             */
                            // @ts-ignore
                            public isLowerCaseNames(): boolean
                            /**
                             * Sets the flag if parameter names are to be converted to lower case when
                             * name/value pairs are parsed.
                             * @param b {#code true} if parameter names are to be
                             *  converted to lower case when name/value pairs are parsed.
                             *  {@code false} otherwise.
                             */
                            // @ts-ignore
                            public setLowerCaseNames(b: boolean): void
                            /**
                             * Extracts a map of name/value pairs from the given string. Names are
                             * expected to be unique. Multiple separators may be specified and
                             * the earliest found in the input string is used.
                             * @param str the string that contains a sequence of name/value pairs
                             * @param separators the name/value pairs separators
                             * @return a map of name/value pairs
                             */
                            // @ts-ignore
                            public parse(str: java.lang.String | string, separators: string[]): java.util.Map<java.lang.String | string, java.lang.String | string>
                            /**
                             * Extracts a map of name/value pairs from the given string. Names are
                             * expected to be unique.
                             * @param str the string that contains a sequence of name/value pairs
                             * @param separator the name/value pairs separator
                             * @return a map of name/value pairs
                             */
                            // @ts-ignore
                            public parse(str: java.lang.String | string, separator: string): java.util.Map<java.lang.String | string, java.lang.String | string>
                            /**
                             * Extracts a map of name/value pairs from the given array of
                             * characters. Names are expected to be unique.
                             * @param charArray the array of characters that contains a sequence of
                             *  name/value pairs
                             * @param separator the name/value pairs separator
                             * @return a map of name/value pairs
                             */
                            // @ts-ignore
                            public parse(charArray: string[], separator: string): java.util.Map<java.lang.String | string, java.lang.String | string>
                            /**
                             * Extracts a map of name/value pairs from the given array of
                             * characters. Names are expected to be unique.
                             * @param charArray the array of characters that contains a sequence of
                             *  name/value pairs
                             * @param offset - the initial offset.
                             * @param length - the length.
                             * @param separator the name/value pairs separator
                             * @return a map of name/value pairs
                             */
                            // @ts-ignore
                            public parse(charArray: string[], offset: number /*int*/, length: number /*int*/, separator: string): java.util.Map<java.lang.String | string, java.lang.String | string>
                        }
                    }
                }
            }
        }
    }
}
