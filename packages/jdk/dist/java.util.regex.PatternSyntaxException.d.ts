declare namespace java {
    namespace util {
        namespace regex {
            /**
             * Unchecked exception thrown to indicate a syntax error in a
             * regular-expression pattern.
             * @author unascribed
             * @since 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            class PatternSyntaxException extends java.lang.IllegalArgumentException {
                /**
                 * Constructs a new instance of this class.
                 * @param desc
                 *          A description of the error
                 * @param regex
                 *          The erroneous pattern
                 * @param index
                 *          The approximate index in the pattern of the error,
                 *          or <tt>-1</tt> if the index is not known
                 */
                // @ts-ignore
                constructor(desc: java.lang.String | string, regex: java.lang.String | string, index: number /*int*/)
                /**
                 * Retrieves the error index.
                 * @return The approximate index in the pattern of the error,
                 *          or <tt>-1</tt> if the index is not known
                 */
                // @ts-ignore
                getIndex(): number /*int*/
                /**
                 * Retrieves the description of the error.
                 * @return The description of the error
                 */
                // @ts-ignore
                getDescription(): string
                /**
                 * Retrieves the erroneous regular-expression pattern.
                 * @return The erroneous pattern
                 */
                // @ts-ignore
                getPattern(): string
                /**
                 * Returns a multi-line string containing the description of the syntax
                 * error and its index, the erroneous regular-expression pattern, and a
                 * visual indication of the error index within the pattern.
                 * @return The full detail message
                 */
                // @ts-ignore
                getMessage(): string
            }
        }
    }
}
