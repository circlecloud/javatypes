declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * This interface provides error, warning and notice printing.
             * @since 1.2
             * @author Robert Field
             */
            // @ts-ignore
            interface DocErrorReporter {
                /**
                 * Print error message and increment error count.
                 * @param msg message to print
                 */
                // @ts-ignore
                printError(msg: string): void
                /**
                 * Print an error message and increment error count.
                 * @param pos the position item where the error occurs
                 * @param msg message to print
                 * @since 1.4
                 */
                // @ts-ignore
                printError(pos: com.sun.javadoc.SourcePosition, msg: string): void
                /**
                 * Print warning message and increment warning count.
                 * @param msg message to print
                 */
                // @ts-ignore
                printWarning(msg: string): void
                /**
                 * Print warning message and increment warning count.
                 * @param pos the position item where the warning occurs
                 * @param msg message to print
                 * @since 1.4
                 */
                // @ts-ignore
                printWarning(pos: com.sun.javadoc.SourcePosition, msg: string): void
                /**
                 * Print a message.
                 * @param msg message to print
                 */
                // @ts-ignore
                printNotice(msg: string): void
                /**
                 * Print a message.
                 * @param pos the position item where the message occurs
                 * @param msg message to print
                 * @since 1.4
                 */
                // @ts-ignore
                printNotice(pos: com.sun.javadoc.SourcePosition, msg: string): void
            }
        }
    }
}
