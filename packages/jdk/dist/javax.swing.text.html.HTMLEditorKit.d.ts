declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * The Swing JEditorPane text component supports different kinds
                 * of content via a plug-in mechanism called an EditorKit.  Because
                 * HTML is a very popular format of content, some support is provided
                 * by default.  The default support is provided by this class, which
                 * supports HTML version 3.2 (with some extensions), and is migrating
                 * toward version 4.0.
                 * The &lt;applet&gt; tag is not supported, but some support is provided
                 * for the &lt;object&gt; tag.
                 * <p>
                 * There are several goals of the HTML EditorKit provided, that have
                 * an effect upon the way that HTML is modeled.  These
                 * have influenced its design in a substantial way.
                 * <dl>
                 * <dt>
                 * Support editing
                 * <dd>
                 * It might seem fairly obvious that a plug-in for JEditorPane
                 * should provide editing support, but that fact has several
                 * design considerations.  There are a substantial number of HTML
                 * documents that don't properly conform to an HTML specification.
                 * These must be normalized somewhat into a correct form if one
                 * is to edit them.  Additionally, users don't like to be presented
                 * with an excessive amount of structure editing, so using traditional
                 * text editing gestures is preferred over using the HTML structure
                 * exactly as defined in the HTML document.
                 * <p>
                 * The modeling of HTML is provided by the class <code>HTMLDocument</code>.
                 * Its documentation describes the details of how the HTML is modeled.
                 * The editing support leverages heavily off of the text package.
                 * <dt>
                 * Extendable/Scalable
                 * <dd>
                 * To maximize the usefulness of this kit, a great deal of effort
                 * has gone into making it extendable.  These are some of the
                 * features.
                 * <ol>
                 * <li>
                 * The parser is replaceable.  The default parser is the Hot Java
                 * parser which is DTD based.  A different DTD can be used, or an
                 * entirely different parser can be used.  To change the parser,
                 * reimplement the getParser method.  The default parser is
                 * dynamically loaded when first asked for, so the class files
                 * will never be loaded if an alternative parser is used.  The
                 * default parser is in a separate package called parser below
                 * this package.
                 * <li>
                 * The parser drives the ParserCallback, which is provided by
                 * HTMLDocument.  To change the callback, subclass HTMLDocument
                 * and reimplement the createDefaultDocument method to return
                 * document that produces a different reader.  The reader controls
                 * how the document is structured.  Although the Document provides
                 * HTML support by default, there is nothing preventing support of
                 * non-HTML tags that result in alternative element structures.
                 * <li>
                 * The default view of the models are provided as a hierarchy of
                 * View implementations, so one can easily customize how a particular
                 * element is displayed or add capabilities for new kinds of elements
                 * by providing new View implementations.  The default set of views
                 * are provided by the <code>HTMLFactory</code> class.  This can
                 * be easily changed by subclassing or replacing the HTMLFactory
                 * and reimplementing the getViewFactory method to return the alternative
                 * factory.
                 * <li>
                 * The View implementations work primarily off of CSS attributes,
                 * which are kept in the views.  This makes it possible to have
                 * multiple views mapped over the same model that appear substantially
                 * different.  This can be especially useful for printing.  For
                 * most HTML attributes, the HTML attributes are converted to CSS
                 * attributes for display.  This helps make the View implementations
                 * more general purpose
                 * </ol>
                 * <dt>
                 * Asynchronous Loading
                 * <dd>
                 * Larger documents involve a lot of parsing and take some time
                 * to load.  By default, this kit produces documents that will be
                 * loaded asynchronously if loaded using <code>JEditorPane.setPage</code>.
                 * This is controlled by a property on the document.  The method
                 * {@link #createDefaultDocument createDefaultDocument} can
                 * be overriden to change this.  The batching of work is done
                 * by the <code>HTMLDocument.HTMLReader</code> class.  The actual
                 * work is done by the <code>DefaultStyledDocument</code> and
                 * <code>AbstractDocument</code> classes in the text package.
                 * <dt>
                 * Customization from current LAF
                 * <dd>
                 * HTML provides a well known set of features without exactly
                 * specifying the display characteristics.  Swing has a theme
                 * mechanism for its look-and-feel implementations.  It is desirable
                 * for the look-and-feel to feed display characteristics into the
                 * HTML views.  An user with poor vision for example would want
                 * high contrast and larger than typical fonts.
                 * <p>
                 * The support for this is provided by the <code>StyleSheet</code>
                 * class.  The presentation of the HTML can be heavily influenced
                 * by the setting of the StyleSheet property on the EditorKit.
                 * <dt>
                 * Not lossy
                 * <dd>
                 * An EditorKit has the ability to be read and save documents.
                 * It is generally the most pleasing to users if there is no loss
                 * of data between the two operation.  The policy of the HTMLEditorKit
                 * will be to store things not recognized or not necessarily visible
                 * so they can be subsequently written out.  The model of the HTML document
                 * should therefore contain all information discovered while reading the
                 * document.  This is constrained in some ways by the need to support
                 * editing (i.e. incorrect documents sometimes must be normalized).
                 * The guiding principle is that information shouldn't be lost, but
                 * some might be synthesized to produce a more correct model or it might
                 * be rearranged.
                 * </dl>
                 * @author Timothy Prinzing
                 */
                // @ts-ignore
                class HTMLEditorKit extends javax.swing.text.StyledEditorKit implements javax.accessibility.Accessible {
                    /**
                     * Constructs an HTMLEditorKit, creates a StyleContext,
                     * and loads the style sheet.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Default Cascading Style Sheet file that sets
                     * up the tag views.
                     */
                    // @ts-ignore
                    readonly DEFAULT_CSS: string
                    /**
                     * The bold action identifier
                     */
                    // @ts-ignore
                    readonly BOLD_ACTION: string
                    /**
                     * The italic action identifier
                     */
                    // @ts-ignore
                    readonly ITALIC_ACTION: string
                    /**
                     * The paragraph left indent action identifier
                     */
                    // @ts-ignore
                    readonly PARA_INDENT_LEFT: string
                    /**
                     * The paragraph right indent action identifier
                     */
                    // @ts-ignore
                    readonly PARA_INDENT_RIGHT: string
                    /**
                     * The  font size increase to next value action identifier
                     */
                    // @ts-ignore
                    readonly FONT_CHANGE_BIGGER: string
                    /**
                     * The font size decrease to next value action identifier
                     */
                    // @ts-ignore
                    readonly FONT_CHANGE_SMALLER: string
                    /**
                     * The Color choice action identifier
                     * The color is passed as an argument
                     */
                    // @ts-ignore
                    readonly COLOR_ACTION: string
                    /**
                     * The logical style choice action identifier
                     * The logical style is passed in as an argument
                     */
                    // @ts-ignore
                    readonly LOGICAL_STYLE_ACTION: string
                    /**
                     * Align images at the top.
                     */
                    // @ts-ignore
                    readonly IMG_ALIGN_TOP: string
                    /**
                     * Align images in the middle.
                     */
                    // @ts-ignore
                    readonly IMG_ALIGN_MIDDLE: string
                    /**
                     * Align images at the bottom.
                     */
                    // @ts-ignore
                    readonly IMG_ALIGN_BOTTOM: string
                    /**
                     * Align images at the border.
                     */
                    // @ts-ignore
                    readonly IMG_BORDER: string
                    /**
                     * Get the MIME type of the data that this
                     * kit represents support for.  This kit supports
                     * the type <code>text/html</code>.
                     * @return the type
                     */
                    // @ts-ignore
                    getContentType(): java.lang.String
                    /**
                     * Fetch a factory that is suitable for producing
                     * views of any models that are produced by this
                     * kit.
                     * @return the factory
                     */
                    // @ts-ignore
                    getViewFactory(): javax.swing.text.ViewFactory
                    /**
                     * Create an uninitialized text storage model
                     * that is appropriate for this type of editor.
                     * @return the model
                     */
                    // @ts-ignore
                    createDefaultDocument(): javax.swing.text.Document
                    /**
                     * Inserts content from the given stream. If <code>doc</code> is
                     * an instance of HTMLDocument, this will read
                     * HTML 3.2 text. Inserting HTML into a non-empty document must be inside
                     * the body Element, if you do not insert into the body an exception will
                     * be thrown. When inserting into a non-empty document all tags outside
                     * of the body (head, title) will be dropped.
                     * @param in  the stream to read from
                     * @param doc the destination for the insertion
                     * @param pos the location in the document to place the
                     *    content
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *    location within the document
                     * @exception RuntimeException (will eventually be a BadLocationException)
                     *             if pos is invalid
                     */
                    // @ts-ignore
                    read(input: java.io.Reader, doc: javax.swing.text.Document, pos: number /*int*/): void
                    /**
                     * Inserts HTML into an existing document.
                     * @param doc       the document to insert into
                     * @param offset    the offset to insert HTML at
                     * @param popDepth  the number of ElementSpec.EndTagTypes to generate before
                     *         inserting
                     * @param pushDepth the number of ElementSpec.StartTagTypes with a direction
                     *         of ElementSpec.JoinNextDirection that should be generated
                     *         before inserting, but after the end tags have been generated
                     * @param insertTag the first tag to start inserting into document
                     * @exception RuntimeException (will eventually be a BadLocationException)
                     *             if pos is invalid
                     */
                    // @ts-ignore
                    insertHTML(doc: javax.swing.text.html.HTMLDocument, offset: number /*int*/, html: string, popDepth: number /*int*/, pushDepth: number /*int*/, insertTag: javax.swing.text.html.HTML.Tag): void
                    /**
                     * Write content from a document to the given stream
                     * in a format appropriate for this kind of content handler.
                     * @param out  the stream to write to
                     * @param doc  the source for the write
                     * @param pos  the location in the document to fetch the
                     *    content
                     * @param len  the amount to write out
                     * @exception IOException on any I/O error
                     * @exception BadLocationException if pos represents an invalid
                     *    location within the document
                     */
                    // @ts-ignore
                    write(out: java.io.Writer, doc: javax.swing.text.Document, pos: number /*int*/, len: number /*int*/): void
                    /**
                     * Called when the kit is being installed into the
                     * a JEditorPane.
                     * @param c the JEditorPane
                     */
                    // @ts-ignore
                    install(c: javax.swing.JEditorPane): void
                    /**
                     * Called when the kit is being removed from the
                     * JEditorPane.  This is used to unregister any
                     * listeners that were attached.
                     * @param c the JEditorPane
                     */
                    // @ts-ignore
                    deinstall(c: javax.swing.JEditorPane): void
                    /**
                     * Set the set of styles to be used to render the various
                     * HTML elements.  These styles are specified in terms of
                     * CSS specifications.  Each document produced by the kit
                     * will have a copy of the sheet which it can add the
                     * document specific styles to.  By default, the StyleSheet
                     * specified is shared by all HTMLEditorKit instances.
                     * This should be reimplemented to provide a finer granularity
                     * if desired.
                     */
                    // @ts-ignore
                    setStyleSheet(s: javax.swing.text.html.StyleSheet): void
                    /**
                     * Get the set of styles currently being used to render the
                     * HTML elements.  By default the resource specified by
                     * DEFAULT_CSS gets loaded, and is shared by all HTMLEditorKit
                     * instances.
                     */
                    // @ts-ignore
                    getStyleSheet(): javax.swing.text.html.StyleSheet
                    /**
                     * Fetches the command list for the editor.  This is
                     * the list of commands supported by the superclass
                     * augmented by the collection of commands defined
                     * locally for style operations.
                     * @return the command list
                     */
                    // @ts-ignore
                    getActions(): javax.swing.Action[]
                    /**
                     * Copies the key/values in <code>element</code>s AttributeSet into
                     * <code>set</code>. This does not copy component, icon, or element
                     * names attributes. Subclasses may wish to refine what is and what
                     * isn't copied here. But be sure to first remove all the attributes that
                     * are in <code>set</code>.<p>
                     * This is called anytime the caret moves over a different location.
                     */
                    // @ts-ignore
                    createInputAttributes(element: javax.swing.text.Element, set: javax.swing.text.MutableAttributeSet): void
                    /**
                     * Gets the input attributes used for the styled
                     * editing actions.
                     * @return the attribute set
                     */
                    // @ts-ignore
                    getInputAttributes(): javax.swing.text.MutableAttributeSet
                    /**
                     * Sets the default cursor.
                     * @since 1.3
                     */
                    // @ts-ignore
                    setDefaultCursor(cursor: java.awt.Cursor): void
                    /**
                     * Returns the default cursor.
                     * @since 1.3
                     */
                    // @ts-ignore
                    getDefaultCursor(): java.awt.Cursor
                    /**
                     * Sets the cursor to use over links.
                     * @since 1.3
                     */
                    // @ts-ignore
                    setLinkCursor(cursor: java.awt.Cursor): void
                    /**
                     * Returns the cursor to use over hyper links.
                     * @since 1.3
                     */
                    // @ts-ignore
                    getLinkCursor(): java.awt.Cursor
                    /**
                     * Indicates whether an html form submission is processed automatically
                     * or only <code>FormSubmitEvent</code> is fired.
                     * @return true  if html form submission is processed automatically,
                     *          false otherwise.
                     * @see #setAutoFormSubmission
                     * @since 1.5
                     */
                    // @ts-ignore
                    isAutoFormSubmission(): boolean
                    /**
                     * Specifies if an html form submission is processed
                     * automatically or only <code>FormSubmitEvent</code> is fired.
                     * By default it is set to true.
                     * @see #isAutoFormSubmission()
                     * @see FormSubmitEvent
                     * @since 1.5
                     */
                    // @ts-ignore
                    setAutoFormSubmission(isAuto: boolean): void
                    /**
                     * Creates a copy of the editor kit.
                     * @return the copy
                     */
                    // @ts-ignore
                    clone(): java.lang.Object
                    /**
                     * Fetch the parser to use for reading HTML streams.
                     * This can be reimplemented to provide a different
                     * parser.  The default implementation is loaded dynamically
                     * to avoid the overhead of loading the default parser if
                     * it's not used.  The default parser is the HotJava parser
                     * using an HTML 3.2 DTD.
                     */
                    // @ts-ignore
                    getParser(): javax.swing.text.html.HTMLEditorKit.Parser
                    /**
                     * returns the AccessibleContext associated with this editor kit
                     * @return the AccessibleContext associated with this editor kit
                     * @since 1.4
                     */
                    // @ts-ignore
                    getAccessibleContext(): javax.accessibility.AccessibleContext
                }
            }
        }
    }
}
