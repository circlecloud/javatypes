declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <code>DocumentFilter</code>, as the name implies, is a filter for the
             * <code>Document</code> mutation methods. When a <code>Document</code>
             * containing a <code>DocumentFilter</code> is modified (either through
             * <code>insert</code> or <code>remove</code>), it forwards the appropriate
             * method invocation to the <code>DocumentFilter</code>. The
             * default implementation allows the modification to
             * occur. Subclasses can filter the modifications by conditionally invoking
             * methods on the superclass, or invoking the necessary methods on
             * the passed in <code>FilterBypass</code>. Subclasses should NOT call back
             * into the Document for the modification
             * instead call into the superclass or the <code>FilterBypass</code>.
             * <p>
             * When <code>remove</code> or <code>insertString</code> is invoked
             * on the <code>DocumentFilter</code>, the <code>DocumentFilter</code>
             * may callback into the
             * <code>FilterBypass</code> multiple times, or for different regions, but
             * it should not callback into the <code>FilterBypass</code> after returning
             * from the <code>remove</code> or <code>insertString</code> method.
             * <p>
             * By default, text related document mutation methods such as
             * <code>insertString</code>, <code>replace</code> and <code>remove</code>
             * in <code>AbstractDocument</code> use <code>DocumentFilter</code> when
             * available, and <code>Element</code> related mutation methods such as
             * <code>create</code>, <code>insert</code> and <code>removeElement</code> in
             * <code>DefaultStyledDocument</code> do not use <code>DocumentFilter</code>.
             * If a method doesn't follow these defaults, this must be explicitly stated
             * in the method documentation.
             * @see javax.swing.text.Document
             * @see javax.swing.text.AbstractDocument
             * @see javax.swing.text.DefaultStyledDocument
             * @since 1.4
             */
            // @ts-ignore
            class DocumentFilter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Invoked prior to removal of the specified region in the
                 * specified Document. Subclasses that want to conditionally allow
                 * removal should override this and only call supers implementation as
                 * necessary, or call directly into the <code>FilterBypass</code> as
                 * necessary.
                 * @param fb FilterBypass that can be used to mutate Document
                 * @param offset the offset from the beginning &gt;= 0
                 * @param length the number of characters to remove &gt;= 0
                 * @exception BadLocationException  some portion of the removal range
                 *    was not a valid part of the document.  The location in the exception
                 *    is the first bad position encountered.
                 */
                // @ts-ignore
                remove(fb: javax.swing.text.DocumentFilter.FilterBypass, offset: number /*int*/, length: number /*int*/): void
                /**
                 * Invoked prior to insertion of text into the
                 * specified Document. Subclasses that want to conditionally allow
                 * insertion should override this and only call supers implementation as
                 * necessary, or call directly into the FilterBypass.
                 * @param fb FilterBypass that can be used to mutate Document
                 * @param offset  the offset into the document to insert the content &gt;= 0.
                 *     All positions that track change at or after the given location
                 *     will move.
                 * @param string the string to insert
                 * @param attr      the attributes to associate with the inserted
                 *    content.  This may be null if there are no attributes.
                 * @exception BadLocationException  the given insert position is not a
                 *    valid position within the document
                 */
                // @ts-ignore
                insertString(fb: javax.swing.text.DocumentFilter.FilterBypass, offset: number /*int*/, string: string, attr: javax.swing.text.AttributeSet): void
                /**
                 * Invoked prior to replacing a region of text in the
                 * specified Document. Subclasses that want to conditionally allow
                 * replace should override this and only call supers implementation as
                 * necessary, or call directly into the FilterBypass.
                 * @param fb FilterBypass that can be used to mutate Document
                 * @param offset Location in Document
                 * @param length Length of text to delete
                 * @param text Text to insert, null indicates no text to insert
                 * @param attrs AttributeSet indicating attributes of inserted text,
                 *               null is legal.
                 * @exception BadLocationException  the given insert position is not a
                 *    valid position within the document
                 */
                // @ts-ignore
                replace(fb: javax.swing.text.DocumentFilter.FilterBypass, offset: number /*int*/, length: number /*int*/, text: string, attrs: javax.swing.text.AttributeSet): void
            }
        }
    }
}