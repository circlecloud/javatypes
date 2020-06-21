declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A plain document that maintains no character attributes.  The
             * default element structure for this document is a map of the lines in
             * the text.  The Element returned by getDefaultRootElement is
             * a map of the lines, and each child element represents a line.
             * This model does not maintain any character level attributes,
             * but each line can be tagged with an arbitrary set of attributes.
             * Line to offset, and offset to line translations can be quickly
             * performed using the default root element.  The structure information
             * of the DocumentEvent's fired by edits will indicate the line
             * structure changes.
             * <p>
             * The default content storage management is performed by a
             * gapped buffer implementation (GapContent).  It supports
             * editing reasonably large documents with good efficiency when
             * the edits are contiguous or clustered, as is typical.
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
             * @see Document
             * @see AbstractDocument
             */
            // @ts-ignore
            class PlainDocument extends javax.swing.text.AbstractDocument {
                /**
                 * Constructs a plain text document.  A default model using
                 * <code>GapContent</code> is constructed and set.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a plain text document.  A default root element is created,
                 * and the tab size set to 8.
                 * @param c  the container for the content
                 */
                // @ts-ignore
                constructor(c: javax.swing.text.AbstractDocument.Content)
                /**
                 * Name of the attribute that specifies the tab
                 * size for tabs contained in the content.  The
                 * type for the value is Integer.
                 */
                // @ts-ignore
                public static readonly tabSizeAttribute: java.lang.String | string
                /**
                 * Name of the attribute that specifies the maximum
                 * length of a line, if there is a maximum length.
                 * The type for the value is Integer.
                 */
                // @ts-ignore
                public static readonly lineLimitAttribute: java.lang.String | string
                /**
                 * Inserts some content into the document.
                 * Inserting content causes a write lock to be held while the
                 * actual changes are taking place, followed by notification
                 * to the observers on the thread that grabbed the write lock.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param offs the starting offset &gt;= 0
                 * @param str the string to insert; does nothing with null/empty strings
                 * @param a the attributes for the inserted content
                 * @exception BadLocationException  the given insert position is not a valid
                 *    position within the document
                 * @see Document#insertString
                 */
                // @ts-ignore
                public insertString(offs: number /*int*/, str: java.lang.String | string, a: javax.swing.text.AttributeSet): void
                /**
                 * Gets the default root element for the document model.
                 * @return the root
                 * @see Document#getDefaultRootElement
                 */
                // @ts-ignore
                public getDefaultRootElement(): javax.swing.text.Element
                /**
                 * Creates the root element to be used to represent the
                 * default document structure.
                 * @return the element base
                 */
                // @ts-ignore
                createDefaultRoot(): javax.swing.text.AbstractDocument.AbstractElement
                /**
                 * Get the paragraph element containing the given position.  Since this
                 * document only models lines, it returns the line instead.
                 */
                // @ts-ignore
                public getParagraphElement(pos: number /*int*/): javax.swing.text.Element
                /**
                 * Updates document structure as a result of text insertion.  This
                 * will happen within a write lock.  Since this document simply
                 * maps out lines, we refresh the line map.
                 * @param chng the change event describing the dit
                 * @param attr the set of attributes for the inserted text
                 */
                // @ts-ignore
                insertUpdate(chng: javax.swing.text.AbstractDocument.DefaultDocumentEvent, attr: javax.swing.text.AttributeSet): void
                /**
                 * Updates any document structure as a result of text removal.
                 * This will happen within a write lock. Since the structure
                 * represents a line map, this just checks to see if the
                 * removal spans lines.  If it does, the two lines outside
                 * of the removal area are joined together.
                 * @param chng the change event describing the edit
                 */
                // @ts-ignore
                removeUpdate(chng: javax.swing.text.AbstractDocument.DefaultDocumentEvent): void
            }
        }
    }
}
