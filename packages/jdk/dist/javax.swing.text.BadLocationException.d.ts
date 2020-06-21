declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * This exception is to report bad locations within a document model
             * (that is, attempts to reference a location that doesn't exist).
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class BadLocationException extends java.lang.Exception {
                /**
                 * Creates a new BadLocationException object.
                 * @param s         a string indicating what was wrong with the arguments
                 * @param offs      offset within the document that was requested &gt;= 0
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string, offs: number /*int*/)
                /**
                 * Returns the offset into the document that was not legal.
                 * @return the offset &gt;= 0
                 */
                // @ts-ignore
                offsetRequested(): number /*int*/
            }
        }
    }
}
