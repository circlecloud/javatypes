declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * Establishes the set of things needed by a text component
             * to be a reasonably functioning editor for some <em>type</em>
             * of text content.  The EditorKit acts as a factory for some
             * kind of policy.  For example, an implementation
             * of html and rtf can be provided that is replaceable
             * with other implementations.
             * <p>
             * A kit can safely store editing state as an instance
             * of the kit will be dedicated to a text component.
             * New kits will normally be created by cloning a
             * prototype kit.  The kit will have it's
             * <code>setComponent</code> method called to establish
             * it's relationship with a JTextComponent.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            abstract class EditorKit extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
                /**
                 * Construct an EditorKit.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a copy of the editor kit.  This is implemented
                 * to use <code>Object.clone()</code>.  If the kit cannot be cloned,
                 * null is returned.
                 * @return the copy
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Called when the kit is being installed into the
                 * a JEditorPane.
                 * @param c the JEditorPane
                 */
                // @ts-ignore
                public install(c: javax.swing.JEditorPane): void
                /**
                 * Called when the kit is being removed from the
                 * JEditorPane.  This is used to unregister any
                 * listeners that were attached.
                 * @param c the JEditorPane
                 */
                // @ts-ignore
                public deinstall(c: javax.swing.JEditorPane): void
                /**
                 * Gets the MIME type of the data that this
                 * kit represents support for.
                 * @return the type
                 */
                // @ts-ignore
                public abstract getContentType(): string
                /**
                 * Fetches a factory that is suitable for producing
                 * views of any models that are produced by this
                 * kit.
                 * @return the factory
                 */
                // @ts-ignore
                public abstract getViewFactory(): javax.swing.text.ViewFactory
                /**
                 * Fetches the set of commands that can be used
                 * on a text component that is using a model and
                 * view produced by this kit.
                 * @return the set of actions
                 */
                // @ts-ignore
                public abstract getActions(): javax.swing.Action[]
                /**
                 * Fetches a caret that can navigate through views
                 * produced by the associated ViewFactory.
                 * @return the caret
                 */
                // @ts-ignore
                public abstract createCaret(): javax.swing.text.Caret
                /**
                 * Creates an uninitialized text storage model
                 * that is appropriate for this type of editor.
                 * @return the model
                 */
                // @ts-ignore
                public abstract createDefaultDocument(): javax.swing.text.Document
                /**
                 * Inserts content from the given stream which is expected
                 * to be in a format appropriate for this kind of content
                 * handler.
                 * @param in  The stream to read from
                 * @param doc The destination for the insertion.
                 * @param pos The location in the document to place the
                 *    content &gt;= 0.
                 * @exception IOException on any I/O error
                 * @exception BadLocationException if pos represents an invalid
                 *    location within the document.
                 */
                // @ts-ignore
                public abstract read(input: java.io.InputStream, doc: javax.swing.text.Document, pos: number /*int*/): void
                /**
                 * Writes content from a document to the given stream
                 * in a format appropriate for this kind of content handler.
                 * @param out  The stream to write to
                 * @param doc The source for the write.
                 * @param pos The location in the document to fetch the
                 *    content from &gt;= 0.
                 * @param len The amount to write out &gt;= 0.
                 * @exception IOException on any I/O error
                 * @exception BadLocationException if pos represents an invalid
                 *    location within the document.
                 */
                // @ts-ignore
                public abstract write(out: java.io.OutputStream, doc: javax.swing.text.Document, pos: number /*int*/, len: number /*int*/): void
                /**
                 * Inserts content from the given stream which is expected
                 * to be in a format appropriate for this kind of content
                 * handler.
                 * <p>
                 * Since actual text editing is unicode based, this would
                 * generally be the preferred way to read in the data.
                 * Some types of content are stored in an 8-bit form however,
                 * and will favor the InputStream.
                 * @param in  The stream to read from
                 * @param doc The destination for the insertion.
                 * @param pos The location in the document to place the
                 *    content &gt;= 0.
                 * @exception IOException on any I/O error
                 * @exception BadLocationException if pos represents an invalid
                 *    location within the document.
                 */
                // @ts-ignore
                public abstract read(input: java.io.Reader, doc: javax.swing.text.Document, pos: number /*int*/): void
                /**
                 * Writes content from a document to the given stream
                 * in a format appropriate for this kind of content handler.
                 * <p>
                 * Since actual text editing is unicode based, this would
                 * generally be the preferred way to write the data.
                 * Some types of content are stored in an 8-bit form however,
                 * and will favor the OutputStream.
                 * @param out  The stream to write to
                 * @param doc The source for the write.
                 * @param pos The location in the document to fetch the
                 *    content &gt;= 0.
                 * @param len The amount to write out &gt;= 0.
                 * @exception IOException on any I/O error
                 * @exception BadLocationException if pos represents an invalid
                 *    location within the document.
                 */
                // @ts-ignore
                public abstract write(out: java.io.Writer, doc: javax.swing.text.Document, pos: number /*int*/, len: number /*int*/): void
            }
        }
    }
}
