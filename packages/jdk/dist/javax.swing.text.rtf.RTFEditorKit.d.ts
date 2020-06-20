declare namespace javax {
    namespace swing {
        namespace text {
            namespace rtf {
                /**
                 * This is the default implementation of RTF editing
                 * functionality.  The RTF support was not written by the
                 * Swing team.  In the future we hope to improve the support
                 * provided.
                 * @author Timothy Prinzing (of this class, not the package!)
                 */
                // @ts-ignore
                class RTFEditorKit extends javax.swing.text.StyledEditorKit {
                    /**
                     * Constructs an RTFEditorKit.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Get the MIME type of the data that this
                     * kit represents support for.  This kit supports
                     * the type <code>text/rtf</code>.
                     * @return the type
                     */
                    // @ts-ignore
                    getContentType(): java.lang.String
                    /**
                     * Insert content from the given stream which is expected
                     * to be in a format appropriate for this kind of content
                     * handler.
                     * @param in  The stream to read from
                     * @param doc The destination for the insertion.
                     * @param pos The location in the document to place the
                     *    content.
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *    location within the document.
                     */
                    // @ts-ignore
                    read(input: java.io.InputStream, doc: javax.swing.text.Document, pos: number /*int*/): void
                    /**
                     * Write content from a document to the given stream
                     * in a format appropriate for this kind of content handler.
                     * @param out  The stream to write to
                     * @param doc The source for the write.
                     * @param pos The location in the document to fetch the
                     *    content.
                     * @param len The amount to write out.
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *    location within the document.
                     */
                    // @ts-ignore
                    write(out: java.io.OutputStream, doc: javax.swing.text.Document, pos: number /*int*/, len: number /*int*/): void
                    /**
                     * Insert content from the given stream, which will be
                     * treated as plain text.
                     * @param in  The stream to read from
                     * @param doc The destination for the insertion.
                     * @param pos The location in the document to place the
                     *    content.
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *    location within the document.
                     */
                    // @ts-ignore
                    read(input: java.io.Reader, doc: javax.swing.text.Document, pos: number /*int*/): void
                    /**
                     * Write content from a document to the given stream
                     * as plain text.
                     * @param out  The stream to write to
                     * @param doc The source for the write.
                     * @param pos The location in the document to fetch the
                     *    content.
                     * @param len The amount to write out.
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *    location within the document.
                     */
                    // @ts-ignore
                    write(out: java.io.Writer, doc: javax.swing.text.Document, pos: number /*int*/, len: number /*int*/): void
                }
            }
        }
    }
}
