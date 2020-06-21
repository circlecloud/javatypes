declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * MinimalHTMLWriter is a fallback writer used by the
                 * HTMLEditorKit to write out HTML for a document that
                 * is a not produced by the EditorKit.
                 * The format for the document is:
                 * <pre>
                 * &lt;html&gt;
                 * &lt;head&gt;
                 * &lt;style&gt;
                 * &lt;!-- list of named styles
                 * p.normal {
                 * font-family: SansSerif;
                 * margin-height: 0;
                 * font-size: 14
                 * }
                 * --&gt;
                 * &lt;/style&gt;
                 * &lt;/head&gt;
                 * &lt;body&gt;
                 * &lt;p style=normal&gt;
                 * <b>Bold, italic, and underline attributes
                 * of the run are emitted as HTML tags.
                 * The remaining attributes are emitted as
                 * part of the style attribute of a &lt;span&gt; tag.
                 * The syntax is similar to inline styles.</b>
                 * &lt;/p&gt;
                 * &lt;/body&gt;
                 * &lt;/html&gt;
                 * </pre>
                 * @author Sunita Mani
                 */
                // @ts-ignore
                class MinimalHTMLWriter extends javax.swing.text.AbstractWriter {
                    /**
                     * Creates a new MinimalHTMLWriter.
                     * @param w  Writer
                     * @param doc StyledDocument
                     */
                    // @ts-ignore
                    constructor(w: java.io.Writer, doc: javax.swing.text.StyledDocument)
                    /**
                     * Creates a new MinimalHTMLWriter.
                     * @param w  Writer
                     * @param doc StyledDocument
                     * @param pos The location in the document to fetch the
                     *    content.
                     * @param len The amount to write out.
                     */
                    // @ts-ignore
                    constructor(w: java.io.Writer, doc: javax.swing.text.StyledDocument, pos: number /*int*/, len: number /*int*/)
                    /**
                     * Generates HTML output
                     * from a StyledDocument.
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *             location within the document.
                     */
                    // @ts-ignore
                    public write(): void
                    /**
                     * Writes out all the attributes for the
                     * following types:
                     * StyleConstants.ParagraphConstants,
                     * StyleConstants.CharacterConstants,
                     * StyleConstants.FontConstants,
                     * StyleConstants.ColorConstants.
                     * The attribute name and value are separated by a colon.
                     * Each pair is separated by a semicolon.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeAttributes(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Writes out text.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    text(elem: javax.swing.text.Element): void
                    /**
                     * Writes out a start tag appropriately
                     * indented.  Also increments the indent level.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeStartTag(tag: java.lang.String | string): void
                    /**
                     * Writes out an end tag appropriately
                     * indented.  Also decrements the indent level.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeEndTag(endTag: java.lang.String | string): void
                    /**
                     * Writes out the &lt;head&gt; and &lt;style&gt;
                     * tags, and then invokes writeStyles() to write
                     * out all the named styles as the content of the
                     * &lt;style&gt; tag.  The content is surrounded by
                     * valid HTML comment markers to ensure that the
                     * document is viewable in applications/browsers
                     * that do not support the tag.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeHeader(): void
                    /**
                     * Writes out all the named styles as the
                     * content of the &lt;style&gt; tag.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeStyles(): void
                    /**
                     * Iterates over the elements in the document
                     * and processes elements based on whether they are
                     * branch elements or leaf elements.  This method specially handles
                     * leaf elements that are text.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeBody(): void
                    /**
                     * Emits an end tag for a &lt;p&gt;
                     * tag.  Before writing out the tag, this method ensures
                     * that all other tags that have been opened are
                     * appropriately closed off.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeEndParagraph(): void
                    /**
                     * Emits the start tag for a paragraph. If
                     * the paragraph has a named style associated with it,
                     * then this method also generates a class attribute for the
                     * &lt;p&gt; tag and sets its value to be the name of the
                     * style.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeStartParagraph(elem: javax.swing.text.Element): void
                    /**
                     * Responsible for writing out other non-text leaf
                     * elements.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeLeaf(elem: javax.swing.text.Element): void
                    /**
                     * Responsible for handling Icon Elements;
                     * deliberately unimplemented.  How to implement this method is
                     * an issue of policy.  For example, if you're generating
                     * an &lt;img&gt; tag, how should you
                     * represent the src attribute (the location of the image)?
                     * In certain cases it could be a URL, in others it could
                     * be read from a stream.
                     * @param elem element of type StyleConstants.IconElementName
                     */
                    // @ts-ignore
                    writeImage(elem: javax.swing.text.Element): void
                    /**
                     * Responsible for handling Component Elements;
                     * deliberately unimplemented.
                     * How this method is implemented is a matter of policy.
                     */
                    // @ts-ignore
                    writeComponent(elem: javax.swing.text.Element): void
                    /**
                     * Returns true if the element is a text element.
                     */
                    // @ts-ignore
                    isText(elem: javax.swing.text.Element): boolean
                    /**
                     * Writes out the attribute set
                     * in an HTML-compliant manner.
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *             location within the document.
                     */
                    // @ts-ignore
                    writeContent(elem: javax.swing.text.Element, needsIndenting: boolean): void
                    /**
                     * Generates
                     * bold &lt;b&gt;, italic &lt;i&gt;, and &lt;u&gt; tags for the
                     * text based on its attribute settings.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeHTMLTags(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Writes out the remaining
                     * character-level attributes (attributes other than bold,
                     * italic, and underline) in an HTML-compliant way.  Given that
                     * attributes such as font family and font size have no direct
                     * mapping to HTML tags, a &lt;span&gt; tag is generated and its
                     * style attribute is set to contain the list of remaining
                     * attributes just like inline styles.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    writeNonHTMLAttributes(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Returns true if we are currently in a &lt;font&gt; tag.
                     */
                    // @ts-ignore
                    inFontTag(): boolean
                    /**
                     * This is no longer used, instead &lt;span&gt; will be written out.
                     * <p>
                     * Writes out an end tag for the &lt;font&gt; tag.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    endFontTag(): void
                    /**
                     * This is no longer used, instead &lt;span&gt; will be written out.
                     * <p>
                     * Writes out a start tag for the &lt;font&gt; tag.
                     * Because font tags cannot be nested,
                     * this method closes out
                     * any enclosing font tag before writing out a
                     * new start tag.
                     * @exception IOException on any I/O error
                     */
                    // @ts-ignore
                    startFontTag(style: java.lang.String | string): void
                }
            }
        }
    }
}
