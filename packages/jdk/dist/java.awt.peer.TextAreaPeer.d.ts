declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link TexTArea}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface TextAreaPeer extends java.awt.peer.TextComponentPeer {
                /**
                 * Inserts the specified text at the specified position in the document.
                 * @param text the text to insert
                 * @param pos the position to insert
                 * @see TextArea#insert(String, int)
                 */
                // @ts-ignore
                insert(text: string, pos: number /*int*/): void
                /**
                 * Replaces a range of text by the specified string.
                 * @param text the replacement string
                 * @param start the begin of the range to replace
                 * @param end the end of the range to replace
                 * @see TextArea#replaceRange(String, int, int)
                 */
                // @ts-ignore
                replaceRange(text: string, start: number /*int*/, end: number /*int*/): void
                /**
                 * Returns the preferred size of a textarea with the specified number of
                 * columns and rows.
                 * @param rows the number of rows
                 * @param columns the number of columns
                 * @return the preferred size of a textarea
                 * @see TextArea#getPreferredSize(int, int)
                 */
                // @ts-ignore
                getPreferredSize(rows: number /*int*/, columns: number /*int*/): java.awt.Dimension
                /**
                 * Returns the minimum size of a textarea with the specified number of
                 * columns and rows.
                 * @param rows the number of rows
                 * @param columns the number of columns
                 * @return the minimum size of a textarea
                 * @see TextArea#getMinimumSize(int, int)
                 */
                // @ts-ignore
                getMinimumSize(rows: number /*int*/, columns: number /*int*/): java.awt.Dimension
            }
        }
    }
}
