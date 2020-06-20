declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * This interface describes a source position: filename, line number,
             * and column number.
             * @since 1.4
             * @author Neal M Gafter
             */
            // @ts-ignore
            interface SourcePosition {
                /**
                 * The source file. Returns null if no file information is
                 * available.
                 */
                // @ts-ignore
                file(): java.io.File
                /**
                 * The line in the source file. The first line is numbered 1;
                 * 0 means no line number information is available.
                 */
                // @ts-ignore
                line(): int
                /**
                 * The column in the source file. The first column is
                 * numbered 1; 0 means no column information is available.
                 * Columns count characters in the input stream; a tab
                 * advances the column number to the next 8-column tab stop.
                 */
                // @ts-ignore
                column(): int
                /**
                 * Convert the source position to the form "Filename:line".
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
