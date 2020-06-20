declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * This is a writer for HTMLDocuments.
                 * @author Sunita Mani
                 */
                // @ts-ignore
                class HTMLWriter extends javax.swing.text.AbstractWriter {
                    /**
                     * Creates a new HTMLWriter.
                     * @param w   a Writer
                     * @param doc  an HTMLDocument
                     */
                    // @ts-ignore
                    constructor(w: java.io.Writer, doc: javax.swing.text.html.HTMLDocument)
                    /**
                     * Creates a new HTMLWriter.
                     * @param w  a Writer
                     * @param doc an HTMLDocument
                     * @param pos the document location from which to fetch the content
                     * @param len the amount to write out
                     */
                    // @ts-ignore
                    constructor(w: java.io.Writer, doc: javax.swing.text.html.HTMLDocument, pos: number /*int*/, len: number /*int*/)
                    /**
                     * Iterates over the
                     * Element tree and controls the writing out of
                     * all the tags and its attributes.
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *             location within the document.
                     */
                    // @ts-ignore
                    write(): void
                    /**
                     * Writes out the attribute set.  Ignores all
                     * attributes with a key of type HTML.Tag,
                     * attributes with a key of type StyleConstants,
                     * and attributes with a key of type
                     * HTML.Attribute.ENDTAG.
                     * @param attr   an AttributeSet
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeAttributes(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Writes out all empty elements (all tags that have no
                     * corresponding end tag).
                     * @param elem   an Element
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *             location within the document.
                     */
                    // @ts-ignore
                    emptyTag(elem: javax.swing.text.Element): void
                    /**
                     * Determines if the HTML.Tag associated with the
                     * element is a block tag.
                     * @param attr  an AttributeSet
                     * @return true if tag is block tag, false otherwise.
                     */
                    // @ts-ignore
                    isBlockTag(attr: javax.swing.text.AttributeSet): boolean
                    /**
                     * Writes out a start tag for the element.
                     * Ignores all synthesized elements.
                     * @param elem   an Element
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    startTag(elem: javax.swing.text.Element): void
                    /**
                     * Writes out text that is contained in a TEXTAREA form
                     * element.
                     * @param attr  an AttributeSet
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *             location within the document.
                     */
                    // @ts-ignore
                    textAreaContent(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Writes out text.  If a range is specified when the constructor
                     * is invoked, then only the appropriate range of text is written
                     * out.
                     * @param elem   an Element
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *             location within the document.
                     */
                    // @ts-ignore
                    text(elem: javax.swing.text.Element): void
                    /**
                     * Writes out the content of the SELECT form element.
                     * @param attr the AttributeSet associated with the form element
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    selectContent(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Writes out the content of the Option form element.
                     * @param option  an Option
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeOption(option: javax.swing.text.html.Option): void
                    /**
                     * Writes out an end tag for the element.
                     * @param elem    an Element
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    endTag(elem: javax.swing.text.Element): void
                    /**
                     * Writes out comments.
                     * @param elem    an Element
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *             location within the document.
                     */
                    // @ts-ignore
                    comment(elem: javax.swing.text.Element): void
                    /**
                     * Returns true if the element is a
                     * synthesized element.  Currently we are only testing
                     * for the p-implied tag.
                     */
                    // @ts-ignore
                    synthesizedElement(elem: javax.swing.text.Element): boolean
                    /**
                     * Returns true if the StyleConstants.NameAttribute is
                     * equal to the tag that is passed in as a parameter.
                     */
                    // @ts-ignore
                    matchNameAttribute(attr: javax.swing.text.AttributeSet, tag: javax.swing.text.html.HTML.Tag): boolean
                    /**
                     * Searches for embedded tags in the AttributeSet
                     * and writes them out.  It also stores these tags in a vector
                     * so that when appropriate the corresponding end tags can be
                     * written out.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeEmbeddedTags(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Searches the attribute set and for each tag
                     * that is stored in the tag vector.  If the tag is not found,
                     * then the tag is removed from the vector and a corresponding
                     * end tag is written out.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    closeOutUnwantedEmbeddedTags(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Writes the line separator. This is overriden to make sure we don't
                     * replace the newline content in case it is outside normal ascii.
                     * @since 1.3
                     */
                    // @ts-ignore
                    writeLineSeparator(): void
                    /**
                     * This method is overriden to map any character entities, such as
                     * &lt; to &amp;lt;. <code>super.output</code> will be invoked to
                     * write the content.
                     * @since 1.3
                     */
                    // @ts-ignore
                    output(chars: string[], start: number /*int*/, length: number /*int*/): void
                }
            }
        }
    }
}
