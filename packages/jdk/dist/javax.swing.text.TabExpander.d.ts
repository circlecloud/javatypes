declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * Simple interface to allow for different types of
             * implementations of tab expansion.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            interface TabExpander {
                /**
                 * Returns the next tab stop position given a reference
                 * position.  Values are expressed in points.
                 * @param x the position in points &gt;= 0
                 * @param tabOffset the position within the text stream
                 *    that the tab occurred at &gt;= 0.
                 * @return the next tab stop &gt;= 0
                 */
                // @ts-ignore
                nextTabStop(x: number /*float*/, tabOffset: number /*int*/): float
            }
        }
    }
}
