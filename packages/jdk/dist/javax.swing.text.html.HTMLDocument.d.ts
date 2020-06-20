declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * A document that models HTML.  The purpose of this model is to
                 * support both browsing and editing.  As a result, the structure
                 * described by an HTML document is not exactly replicated by default.
                 * The element structure that is modeled by default, is built by the
                 * class <code>HTMLDocument.HTMLReader</code>, which implements the
                 * <code>HTMLEditorKit.ParserCallback</code> protocol that the parser
                 * expects.  To change the structure one can subclass
                 * <code>HTMLReader</code>, and reimplement the method {@link
                 * #getReader(int)} to return the new reader implementation.  The
                 * documentation for <code>HTMLReader</code> should be consulted for
                 * the details of the default structure created.  The intent is that
                 * the document be non-lossy (although reproducing the HTML format may
                 * result in a different format).
                 * <p>The document models only HTML, and makes no attempt to store
                 * view attributes in it.  The elements are identified by the
                 * <code>StyleContext.NameAttribute</code> attribute, which should
                 * always have a value of type <code>HTML.Tag</code> that identifies
                 * the kind of element.  Some of the elements (such as comments) are
                 * synthesized.  The <code>HTMLFactory</code> uses this attribute to
                 * determine what kind of view to build.</p>
                 * <p>This document supports incremental loading.  The
                 * <code>TokenThreshold</code> property controls how much of the parse
                 * is buffered before trying to update the element structure of the
                 * document.  This property is set by the <code>EditorKit</code> so
                 * that subclasses can disable it.</p>
                 * <p>The <code>Base</code> property determines the URL against which
                 * relative URLs are resolved.  By default, this will be the
                 * <code>Document.StreamDescriptionProperty</code> if the value of the
                 * property is a URL.  If a &lt;BASE&gt; tag is encountered, the base
                 * will become the URL specified by that tag.  Because the base URL is
                 * a property, it can of course be set directly.</p>
                 * <p>The default content storage mechanism for this document is a gap
                 * buffer (<code>GapContent</code>).  Alternatives can be supplied by
                 * using the constructor that takes a <code>Content</code>
                 * implementation.</p>
                 * <h2>Modifying HTMLDocument</h2>
                 * <p>In addition to the methods provided by Document and
                 * StyledDocument for mutating an HTMLDocument, HTMLDocument provides
                 * a number of convenience methods.  The following methods can be used
                 * to insert HTML content into an existing document.</p>
                 * <ul>
                 * <li>{@link #setInnerHTML(Element, String)}</li>
                 * <li>{@link #setOuterHTML(Element, String)}</li>
                 * <li>{@link #insertBeforeStart(Element, String)}</li>
                 * <li>{@link #insertAfterStart(Element, String)}</li>
                 * <li>{@link #insertBeforeEnd(Element, String)}</li>
                 * <li>{@link #insertAfterEnd(Element, String)}</li>
                 * </ul>
                 * <p>The following examples illustrate using these methods.  Each
                 * example assumes the HTML document is initialized in the following
                 * way:</p>
                 * <pre>
                 * JEditorPane p = new JEditorPane();
                 * p.setContentType("text/html");
                 * p.setText("..."); // Document text is provided below.
                 * HTMLDocument d = (HTMLDocument) p.getDocument();
                 * </pre>
                 * <p>With the following HTML content:</p>
                 * <pre>
                 * &lt;html&gt;
                 * &lt;head&gt;
                 * &lt;title&gt;An example HTMLDocument&lt;/title&gt;
                 * &lt;style type="text/css"&gt;
                 * div { background-color: silver; }
                 * ul { color: red; }
                 * &lt;/style&gt;
                 * &lt;/head&gt;
                 * &lt;body&gt;
                 * &lt;div id="BOX"&gt;
                 * &lt;p&gt;Paragraph 1&lt;/p&gt;
                 * &lt;p&gt;Paragraph 2&lt;/p&gt;
                 * &lt;/div&gt;
                 * &lt;/body&gt;
                 * &lt;/html&gt;
                 * </pre>
                 * <p>All the methods for modifying an HTML document require an {@link
                 * Element}.  Elements can be obtained from an HTML document by using
                 * the method {@link #getElement(Element e, Object attribute, Object
                 * value)}.  It returns the first descendant element that contains the
                 * specified attribute with the given value, in depth-first order.
                 * For example, <code>d.getElement(d.getDefaultRootElement(),
                 * StyleConstants.NameAttribute, HTML.Tag.P)</code> returns the first
                 * paragraph element.</p>
                 * <p>A convenient shortcut for locating elements is the method {@link
                 * #getElement(String)}; returns an element whose <code>ID</code>
                 * attribute matches the specified value.  For example,
                 * <code>d.getElement("BOX")</code> returns the <code>DIV</code>
                 * element.</p>
                 * <p>The {@link #getIterator(HTML.Tag t)} method can also be used for
                 * finding all occurrences of the specified HTML tag in the
                 * document.</p>
                 * <h3>Inserting elements</h3>
                 * <p>Elements can be inserted before or after the existing children
                 * of any non-leaf element by using the methods
                 * <code>insertAfterStart</code> and <code>insertBeforeEnd</code>.
                 * For example, if <code>e</code> is the <code>DIV</code> element,
                 * <code>d.insertAfterStart(e, "&lt;ul&gt;&lt;li&gt;List
                 * Item&lt;/li&gt;&lt;/ul&gt;")</code> inserts the list before the first
                 * paragraph, and <code>d.insertBeforeEnd(e, "&lt;ul&gt;&lt;li&gt;List
                 * Item&lt;/li&gt;&lt;/ul&gt;")</code> inserts the list after the last
                 * paragraph.  The <code>DIV</code> block becomes the parent of the
                 * newly inserted elements.</p>
                 * <p>Sibling elements can be inserted before or after any element by
                 * using the methods <code>insertBeforeStart</code> and
                 * <code>insertAfterEnd</code>.  For example, if <code>e</code> is the
                 * <code>DIV</code> element, <code>d.insertBeforeStart(e,
                 * "&lt;ul&gt;&lt;li&gt;List Item&lt;/li&gt;&lt;/ul&gt;")</code> inserts the list
                 * before the <code>DIV</code> element, and <code>d.insertAfterEnd(e,
                 * "&lt;ul&gt;&lt;li&gt;List Item&lt;/li&gt;&lt;/ul&gt;")</code> inserts the list
                 * after the <code>DIV</code> element.  The newly inserted elements
                 * become siblings of the <code>DIV</code> element.</p>
                 * <h3>Replacing elements</h3>
                 * <p>Elements and all their descendants can be replaced by using the
                 * methods <code>setInnerHTML</code> and <code>setOuterHTML</code>.
                 * For example, if <code>e</code> is the <code>DIV</code> element,
                 * <code>d.setInnerHTML(e, "&lt;ul&gt;&lt;li&gt;List
                 * Item&lt;/li&gt;&lt;/ul&gt;")</code> replaces all children paragraphs with
                 * the list, and <code>d.setOuterHTML(e, "&lt;ul&gt;&lt;li&gt;List
                 * Item&lt;/li&gt;&lt;/ul&gt;")</code> replaces the <code>DIV</code> element
                 * itself.  In latter case the parent of the list is the
                 * <code>BODY</code> element.
                 * <h3>Summary</h3>
                 * <p>The following table shows the example document and the results
                 * of various methods described above.</p>
                 * <table border=1 cellspacing=0>
                 * <tr>
                 * <th>Example</th>
                 * <th><code>insertAfterStart</code></th>
                 * <th><code>insertBeforeEnd</code></th>
                 * <th><code>insertBeforeStart</code></th>
                 * <th><code>insertAfterEnd</code></th>
                 * <th><code>setInnerHTML</code></th>
                 * <th><code>setOuterHTML</code></th>
                 * </tr>
                 * <tr valign="top">
                 * <td style="white-space:nowrap">
                 * <div style="background-color: silver;">
                 * <p>Paragraph 1</p>
                 * <p>Paragraph 2</p>
                 * </div>
                 * </td>
                 * <!--insertAfterStart-->
                 * <td style="white-space:nowrap">
                 * <div style="background-color: silver;">
                 * <ul style="color: red;">
                 * <li>List Item</li>
                 * </ul>
                 * <p>Paragraph 1</p>
                 * <p>Paragraph 2</p>
                 * </div>
                 * </td>
                 * <!--insertBeforeEnd-->
                 * <td style="white-space:nowrap">
                 * <div style="background-color: silver;">
                 * <p>Paragraph 1</p>
                 * <p>Paragraph 2</p>
                 * <ul style="color: red;">
                 * <li>List Item</li>
                 * </ul>
                 * </div>
                 * </td>
                 * <!--insertBeforeStart-->
                 * <td style="white-space:nowrap">
                 * <ul style="color: red;">
                 * <li>List Item</li>
                 * </ul>
                 * <div style="background-color: silver;">
                 * <p>Paragraph 1</p>
                 * <p>Paragraph 2</p>
                 * </div>
                 * </td>
                 * <!--insertAfterEnd-->
                 * <td style="white-space:nowrap">
                 * <div style="background-color: silver;">
                 * <p>Paragraph 1</p>
                 * <p>Paragraph 2</p>
                 * </div>
                 * <ul style="color: red;">
                 * <li>List Item</li>
                 * </ul>
                 * </td>
                 * <!--setInnerHTML-->
                 * <td style="white-space:nowrap">
                 * <div style="background-color: silver;">
                 * <ul style="color: red;">
                 * <li>List Item</li>
                 * </ul>
                 * </div>
                 * </td>
                 * <!--setOuterHTML-->
                 * <td style="white-space:nowrap">
                 * <ul style="color: red;">
                 * <li>List Item</li>
                 * </ul>
                 * </td>
                 * </tr>
                 * </table>
                 * <p><strong>Warning:</strong> Serialized objects of this class will
                 * not be compatible with future Swing releases. The current
                 * serialization support is appropriate for short term storage or RMI
                 * between applications running the same version of Swing.  As of 1.4,
                 * support for long term storage of all JavaBeans&trade;
                 * has been added to the
                 * <code>java.beans</code> package.  Please see {@link
                 * java.beans.XMLEncoder}.</p>
                 * @author Timothy Prinzing
                 * @author Scott Violet
                 * @author Sunita Mani
                 */
                // @ts-ignore
                class HTMLDocument extends javax.swing.text.DefaultStyledDocument {
                    /**
                     * Constructs an HTML document using the default buffer size
                     * and a default <code>StyleSheet</code>.  This is a convenience
                     * method for the constructor
                     * <code>HTMLDocument(Content, StyleSheet)</code>.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs an HTML document with the default content
                     * storage implementation and the specified style/attribute
                     * storage mechanism.  This is a convenience method for the
                     * constructor
                     * <code>HTMLDocument(Content, StyleSheet)</code>.
                     * @param styles  the styles
                     */
                    // @ts-ignore
                    constructor(styles: javax.swing.text.html.StyleSheet)
                    /**
                     * Constructs an HTML document with the given content
                     * storage implementation and the given style/attribute
                     * storage mechanism.
                     * @param c  the container for the content
                     * @param styles the styles
                     */
                    // @ts-ignore
                    constructor(c: javax.swing.text.AbstractDocument.Content, styles: javax.swing.text.html.StyleSheet)
                    /**
                     * Document property key value. The value for the key will be a Vector
                     * of Strings that are comments not found in the body.
                     */
                    // @ts-ignore
                    readonly AdditionalComments: string
                    /**
                     * Fetches the reader for the parser to use when loading the document
                     * with HTML.  This is implemented to return an instance of
                     * <code>HTMLDocument.HTMLReader</code>.
                     * Subclasses can reimplement this
                     * method to change how the document gets structured if desired.
                     * (For example, to handle custom tags, or structurally represent character
                     * style elements.)
                     * @param pos the starting position
                     * @return the reader used by the parser to load the document
                     */
                    // @ts-ignore
                    getReader(pos: number /*int*/): javax.swing.text.html.HTMLEditorKit.ParserCallback
                    /**
                     * Returns the reader for the parser to use to load the document
                     * with HTML.  This is implemented to return an instance of
                     * <code>HTMLDocument.HTMLReader</code>.
                     * Subclasses can reimplement this
                     * method to change how the document gets structured if desired.
                     * (For example, to handle custom tags, or structurally represent character
                     * style elements.)
                     * <p>This is a convenience method for
                     * <code>getReader(int, int, int, HTML.Tag, TRUE)</code>.
                     * @param popDepth   the number of <code>ElementSpec.EndTagTypes</code>
                     *           to generate before inserting
                     * @param pushDepth  the number of <code>ElementSpec.StartTagTypes</code>
                     *           with a direction of <code>ElementSpec.JoinNextDirection</code>
                     *           that should be generated before inserting,
                     *           but after the end tags have been generated
                     * @param insertTag  the first tag to start inserting into document
                     * @return the reader used by the parser to load the document
                     */
                    // @ts-ignore
                    getReader(pos: number /*int*/, popDepth: number /*int*/, pushDepth: number /*int*/, insertTag: javax.swing.text.html.HTML.Tag): javax.swing.text.html.HTMLEditorKit.ParserCallback
                    /**
                     * Returns the location to resolve relative URLs against.  By
                     * default this will be the document's URL if the document
                     * was loaded from a URL.  If a base tag is found and
                     * can be parsed, it will be used as the base location.
                     * @return the base location
                     */
                    // @ts-ignore
                    getBase(): java.net.URL
                    /**
                     * Sets the location to resolve relative URLs against.  By
                     * default this will be the document's URL if the document
                     * was loaded from a URL.  If a base tag is found and
                     * can be parsed, it will be used as the base location.
                     * <p>This also sets the base of the <code>StyleSheet</code>
                     * to be <code>u</code> as well as the base of the document.
                     * @param u  the desired base URL
                     */
                    // @ts-ignore
                    setBase(u: java.net.URL): void
                    /**
                     * Inserts new elements in bulk.  This is how elements get created
                     * in the document.  The parsing determines what structure is needed
                     * and creates the specification as a set of tokens that describe the
                     * edit while leaving the document free of a write-lock.  This method
                     * can then be called in bursts by the reader to acquire a write-lock
                     * for a shorter duration (i.e. while the document is actually being
                     * altered).
                     * @param offset the starting offset
                     * @param data the element data
                     * @exception BadLocationException  if the given position does not
                     *    represent a valid location in the associated document.
                     */
                    // @ts-ignore
                    insert(offset: number /*int*/, data: javax.swing.text.DefaultStyledDocument.ElementSpec[]): void
                    /**
                     * Updates document structure as a result of text insertion.  This
                     * will happen within a write lock.  This implementation simply
                     * parses the inserted content for line breaks and builds up a set
                     * of instructions for the element buffer.
                     * @param chng a description of the document change
                     * @param attr the attributes
                     */
                    // @ts-ignore
                    insertUpdate(chng: javax.swing.text.AbstractDocument.DefaultDocumentEvent, attr: javax.swing.text.AttributeSet): void
                    /**
                     * Replaces the contents of the document with the given
                     * element specifications.  This is called before insert if
                     * the loading is done in bursts.  This is the only method called
                     * if loading the document entirely in one burst.
                     * @param data  the new contents of the document
                     */
                    // @ts-ignore
                    create(data: javax.swing.text.DefaultStyledDocument.ElementSpec[]): void
                    /**
                     * Sets attributes for a paragraph.
                     * <p>
                     * This method is thread safe, although most Swing methods
                     * are not. Please see
                     * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                     * in Swing</A> for more information.
                     * @param offset the offset into the paragraph (must be at least 0)
                     * @param length the number of characters affected (must be at least 0)
                     * @param s the attributes
                     * @param replace whether to replace existing attributes, or merge them
                     */
                    // @ts-ignore
                    setParagraphAttributes(offset: number /*int*/, length: number /*int*/, s: javax.swing.text.AttributeSet, replace: boolean): void
                    /**
                     * Fetches the <code>StyleSheet</code> with the document-specific display
                     * rules (CSS) that were specified in the HTML document itself.
                     * @return the <code>StyleSheet</code>
                     */
                    // @ts-ignore
                    getStyleSheet(): javax.swing.text.html.StyleSheet
                    /**
                     * Fetches an iterator for the specified HTML tag.
                     * This can be used for things like iterating over the
                     * set of anchors contained, or iterating over the input
                     * elements.
                     * @param t the requested <code>HTML.Tag</code>
                     * @return the <code>Iterator</code> for the given HTML tag
                     * @see javax.swing.text.html.HTML.Tag
                     */
                    // @ts-ignore
                    getIterator(t: javax.swing.text.html.HTML.Tag): javax.swing.text.html.HTMLDocument.Iterator
                    /**
                     * Creates a document leaf element that directly represents
                     * text (doesn't have any children).  This is implemented
                     * to return an element of type
                     * <code>HTMLDocument.RunElement</code>.
                     * @param parent the parent element
                     * @param a the attributes for the element
                     * @param p0 the beginning of the range (must be at least 0)
                     * @param p1 the end of the range (must be at least p0)
                     * @return the new element
                     */
                    // @ts-ignore
                    createLeafElement(parent: javax.swing.text.Element, a: javax.swing.text.AttributeSet, p0: number /*int*/, p1: number /*int*/): javax.swing.text.Element
                    /**
                     * Creates a document branch element, that can contain other elements.
                     * This is implemented to return an element of type
                     * <code>HTMLDocument.BlockElement</code>.
                     * @param parent the parent element
                     * @param a the attributes
                     * @return the element
                     */
                    // @ts-ignore
                    createBranchElement(parent: javax.swing.text.Element, a: javax.swing.text.AttributeSet): javax.swing.text.Element
                    /**
                     * Creates the root element to be used to represent the
                     * default document structure.
                     * @return the element base
                     */
                    // @ts-ignore
                    createDefaultRoot(): javax.swing.text.AbstractDocument.AbstractElement
                    /**
                     * Sets the number of tokens to buffer before trying to update
                     * the documents element structure.
                     * @param n  the number of tokens to buffer
                     */
                    // @ts-ignore
                    setTokenThreshold(n: number /*int*/): void
                    /**
                     * Gets the number of tokens to buffer before trying to update
                     * the documents element structure.  The default value is
                     * <code>Integer.MAX_VALUE</code>.
                     * @return the number of tokens to buffer
                     */
                    // @ts-ignore
                    getTokenThreshold(): int
                    /**
                     * Determines how unknown tags are handled by the parser.
                     * If set to true, unknown
                     * tags are put in the model, otherwise they are dropped.
                     * @param preservesTags  true if unknown tags should be
                     *           saved in the model, otherwise tags are dropped
                     * @see javax.swing.text.html.HTML.Tag
                     */
                    // @ts-ignore
                    setPreservesUnknownTags(preservesTags: boolean): void
                    /**
                     * Returns the behavior the parser observes when encountering
                     * unknown tags.
                     * @see javax.swing.text.html.HTML.Tag
                     * @return true if unknown tags are to be preserved when parsing
                     */
                    // @ts-ignore
                    getPreservesUnknownTags(): boolean
                    /**
                     * Processes <code>HyperlinkEvents</code> that
                     * are generated by documents in an HTML frame.
                     * The <code>HyperlinkEvent</code> type, as the parameter suggests,
                     * is <code>HTMLFrameHyperlinkEvent</code>.
                     * In addition to the typical information contained in a
                     * <code>HyperlinkEvent</code>,
                     * this event contains the element that corresponds to the frame in
                     * which the click happened (the source element) and the
                     * target name.  The target name has 4 possible values:
                     * <ul>
                     * <li>  _self
                     * <li>  _parent
                     * <li>  _top
                     * <li>  a named frame
                     * </ul>
                     * If target is _self, the action is to change the value of the
                     * <code>HTML.Attribute.SRC</code> attribute and fires a
                     * <code>ChangedUpdate</code> event.
                     * <p>
                     * If the target is _parent, then it deletes the parent element,
                     * which is a &lt;FRAMESET&gt; element, and inserts a new &lt;FRAME&gt;
                     * element, and sets its <code>HTML.Attribute.SRC</code> attribute
                     * to have a value equal to the destination URL and fire a
                     * <code>RemovedUpdate</code> and <code>InsertUpdate</code>.
                     * <p>
                     * If the target is _top, this method does nothing. In the implementation
                     * of the view for a frame, namely the <code>FrameView</code>,
                     * the processing of _top is handled.  Given that _top implies
                     * replacing the entire document, it made sense to handle this outside
                     * of the document that it will replace.
                     * <p>
                     * If the target is a named frame, then the element hierarchy is searched
                     * for an element with a name equal to the target, its
                     * <code>HTML.Attribute.SRC</code> attribute is updated and a
                     * <code>ChangedUpdate</code> event is fired.
                     * @param e the event
                     */
                    // @ts-ignore
                    processHTMLFrameHyperlinkEvent(e: javax.swing.text.html.HTMLFrameHyperlinkEvent): void
                    /**
                     * Sets the parser that is used by the methods that insert html
                     * into the existing document, such as <code>setInnerHTML</code>,
                     * and <code>setOuterHTML</code>.
                     * <p>
                     * <code>HTMLEditorKit.createDefaultDocument</code> will set the parser
                     * for you. If you create an <code>HTMLDocument</code> by hand,
                     * be sure and set the parser accordingly.
                     * @param parser the parser to be used for text insertion
                     * @since 1.3
                     */
                    // @ts-ignore
                    setParser(parser: javax.swing.text.html.HTMLEditorKit.Parser): void
                    /**
                     * Returns the parser that is used when inserting HTML into the existing
                     * document.
                     * @return the parser used for text insertion
                     * @since 1.3
                     */
                    // @ts-ignore
                    getParser(): javax.swing.text.html.HTMLEditorKit.Parser
                    /**
                     * Replaces the children of the given element with the contents
                     * specified as an HTML string.
                     * <p>This will be seen as at least two events, n inserts followed by
                     * a remove.</p>
                     * <p>Consider the following structure (the <code>elem</code>
                     * parameter is <b>in bold</b>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * |
                     * <b>&lt;div&gt;</b>
                     * /  \
                     * &lt;p&gt;   &lt;p&gt;
                     * </pre>
                     * <p>Invoking <code>setInnerHTML(elem, "&lt;ul&gt;&lt;li&gt;")</code>
                     * results in the following structure (new elements are <font
                     * color="red">in red</font>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * |
                     * <b>&lt;div&gt;</b>
                     * \
                     * <font color="red">&lt;ul&gt;</font>
                     * \
                     * <font color="red">&lt;li&gt;</font>
                     * </pre>
                     * <p>Parameter <code>elem</code> must not be a leaf element,
                     * otherwise an <code>IllegalArgumentException</code> is thrown.
                     * If either <code>elem</code> or <code>htmlText</code> parameter
                     * is <code>null</code>, no changes are made to the document.</p>
                     * <p>For this to work correctly, the document must have an
                     * <code>HTMLEditorKit.Parser</code> set. This will be the case
                     * if the document was created from an HTMLEditorKit via the
                     * <code>createDefaultDocument</code> method.</p>
                     * @param elem the branch element whose children will be replaced
                     * @param htmlText the string to be parsed and assigned to <code>elem</code>
                     * @throws IllegalArgumentException if <code>elem</code> is a leaf
                     * @throws IllegalStateException if an <code>HTMLEditorKit.Parser</code>
                     *          has not been defined
                     * @since 1.3
                     */
                    // @ts-ignore
                    setInnerHTML(elem: javax.swing.text.Element, htmlText: string): void
                    /**
                     * Replaces the given element in the parent with the contents
                     * specified as an HTML string.
                     * <p>This will be seen as at least two events, n inserts followed by
                     * a remove.</p>
                     * <p>When replacing a leaf this will attempt to make sure there is
                     * a newline present if one is needed. This may result in an additional
                     * element being inserted. Consider, if you were to replace a character
                     * element that contained a newline with &lt;img&gt; this would create
                     * two elements, one for the image, and one for the newline.</p>
                     * <p>If you try to replace the element at length you will most
                     * likely end up with two elements, eg
                     * <code>setOuterHTML(getCharacterElement (getLength()),
                     * "blah")</code> will result in two leaf elements at the end, one
                     * representing 'blah', and the other representing the end
                     * element.</p>
                     * <p>Consider the following structure (the <code>elem</code>
                     * parameter is <b>in bold</b>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * |
                     * <b>&lt;div&gt;</b>
                     * /  \
                     * &lt;p&gt;   &lt;p&gt;
                     * </pre>
                     * <p>Invoking <code>setOuterHTML(elem, "&lt;ul&gt;&lt;li&gt;")</code>
                     * results in the following structure (new elements are <font
                     * color="red">in red</font>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * |
                     * <font color="red">&lt;ul&gt;</font>
                     * \
                     * <font color="red">&lt;li&gt;</font>
                     * </pre>
                     * <p>If either <code>elem</code> or <code>htmlText</code>
                     * parameter is <code>null</code>, no changes are made to the
                     * document.</p>
                     * <p>For this to work correctly, the document must have an
                     * HTMLEditorKit.Parser set. This will be the case if the document
                     * was created from an HTMLEditorKit via the
                     * <code>createDefaultDocument</code> method.</p>
                     * @param elem the element to replace
                     * @param htmlText the string to be parsed and inserted in place of <code>elem</code>
                     * @throws IllegalStateException if an HTMLEditorKit.Parser has not
                     *          been set
                     * @since 1.3
                     */
                    // @ts-ignore
                    setOuterHTML(elem: javax.swing.text.Element, htmlText: string): void
                    /**
                     * Inserts the HTML specified as a string at the start
                     * of the element.
                     * <p>Consider the following structure (the <code>elem</code>
                     * parameter is <b>in bold</b>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * |
                     * <b>&lt;div&gt;</b>
                     * /  \
                     * &lt;p&gt;   &lt;p&gt;
                     * </pre>
                     * <p>Invoking <code>insertAfterStart(elem,
                     * "&lt;ul&gt;&lt;li&gt;")</code> results in the following structure
                     * (new elements are <font color="red">in red</font>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * |
                     * <b>&lt;div&gt;</b>
                     * /  |  \
                     * <font color="red">&lt;ul&gt;</font> &lt;p&gt; &lt;p&gt;
                     * /
                     * <font color="red">&lt;li&gt;</font>
                     * </pre>
                     * <p>Unlike the <code>insertBeforeStart</code> method, new
                     * elements become <em>children</em> of the specified element,
                     * not siblings.</p>
                     * <p>Parameter <code>elem</code> must not be a leaf element,
                     * otherwise an <code>IllegalArgumentException</code> is thrown.
                     * If either <code>elem</code> or <code>htmlText</code> parameter
                     * is <code>null</code>, no changes are made to the document.</p>
                     * <p>For this to work correctly, the document must have an
                     * <code>HTMLEditorKit.Parser</code> set. This will be the case
                     * if the document was created from an HTMLEditorKit via the
                     * <code>createDefaultDocument</code> method.</p>
                     * @param elem the branch element to be the root for the new text
                     * @param htmlText the string to be parsed and assigned to <code>elem</code>
                     * @throws IllegalArgumentException if <code>elem</code> is a leaf
                     * @throws IllegalStateException if an HTMLEditorKit.Parser has not
                     *          been set on the document
                     * @since 1.3
                     */
                    // @ts-ignore
                    insertAfterStart(elem: javax.swing.text.Element, htmlText: string): void
                    /**
                     * Inserts the HTML specified as a string at the end of
                     * the element.
                     * <p> If <code>elem</code>'s children are leaves, and the
                     * character at a <code>elem.getEndOffset() - 1</code> is a newline,
                     * this will insert before the newline so that there isn't text after
                     * the newline.</p>
                     * <p>Consider the following structure (the <code>elem</code>
                     * parameter is <b>in bold</b>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * |
                     * <b>&lt;div&gt;</b>
                     * /  \
                     * &lt;p&gt;   &lt;p&gt;
                     * </pre>
                     * <p>Invoking <code>insertBeforeEnd(elem, "&lt;ul&gt;&lt;li&gt;")</code>
                     * results in the following structure (new elements are <font
                     * color="red">in red</font>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * |
                     * <b>&lt;div&gt;</b>
                     * /  |  \
                     * &lt;p&gt; &lt;p&gt; <font color="red">&lt;ul&gt;</font>
                     * \
                     * <font color="red">&lt;li&gt;</font>
                     * </pre>
                     * <p>Unlike the <code>insertAfterEnd</code> method, new elements
                     * become <em>children</em> of the specified element, not
                     * siblings.</p>
                     * <p>Parameter <code>elem</code> must not be a leaf element,
                     * otherwise an <code>IllegalArgumentException</code> is thrown.
                     * If either <code>elem</code> or <code>htmlText</code> parameter
                     * is <code>null</code>, no changes are made to the document.</p>
                     * <p>For this to work correctly, the document must have an
                     * <code>HTMLEditorKit.Parser</code> set. This will be the case
                     * if the document was created from an HTMLEditorKit via the
                     * <code>createDefaultDocument</code> method.</p>
                     * @param elem the element to be the root for the new text
                     * @param htmlText the string to be parsed and assigned to <code>elem</code>
                     * @throws IllegalArgumentException if <code>elem</code> is a leaf
                     * @throws IllegalStateException if an HTMLEditorKit.Parser has not
                     *          been set on the document
                     * @since 1.3
                     */
                    // @ts-ignore
                    insertBeforeEnd(elem: javax.swing.text.Element, htmlText: string): void
                    /**
                     * Inserts the HTML specified as a string before the start of
                     * the given element.
                     * <p>Consider the following structure (the <code>elem</code>
                     * parameter is <b>in bold</b>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * |
                     * <b>&lt;div&gt;</b>
                     * /  \
                     * &lt;p&gt;   &lt;p&gt;
                     * </pre>
                     * <p>Invoking <code>insertBeforeStart(elem,
                     * "&lt;ul&gt;&lt;li&gt;")</code> results in the following structure
                     * (new elements are <font color="red">in red</font>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * /  \
                     * <font color="red">&lt;ul&gt;</font> <b>&lt;div&gt;</b>
                     * /    /  \
                     * <font color="red">&lt;li&gt;</font> &lt;p&gt;  &lt;p&gt;
                     * </pre>
                     * <p>Unlike the <code>insertAfterStart</code> method, new
                     * elements become <em>siblings</em> of the specified element, not
                     * children.</p>
                     * <p>If either <code>elem</code> or <code>htmlText</code>
                     * parameter is <code>null</code>, no changes are made to the
                     * document.</p>
                     * <p>For this to work correctly, the document must have an
                     * <code>HTMLEditorKit.Parser</code> set. This will be the case
                     * if the document was created from an HTMLEditorKit via the
                     * <code>createDefaultDocument</code> method.</p>
                     * @param elem the element the content is inserted before
                     * @param htmlText the string to be parsed and inserted before <code>elem</code>
                     * @throws IllegalStateException if an HTMLEditorKit.Parser has not
                     *          been set on the document
                     * @since 1.3
                     */
                    // @ts-ignore
                    insertBeforeStart(elem: javax.swing.text.Element, htmlText: string): void
                    /**
                     * Inserts the HTML specified as a string after the the end of the
                     * given element.
                     * <p>Consider the following structure (the <code>elem</code>
                     * parameter is <b>in bold</b>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * |
                     * <b>&lt;div&gt;</b>
                     * /  \
                     * &lt;p&gt;   &lt;p&gt;
                     * </pre>
                     * <p>Invoking <code>insertAfterEnd(elem, "&lt;ul&gt;&lt;li&gt;")</code>
                     * results in the following structure (new elements are <font
                     * color="red">in red</font>).</p>
                     * <pre>
                     * &lt;body&gt;
                     * /  \
                     * <b>&lt;div&gt;</b> <font color="red">&lt;ul&gt;</font>
                     * / \    \
                     * &lt;p&gt; &lt;p&gt;  <font color="red">&lt;li&gt;</font>
                     * </pre>
                     * <p>Unlike the <code>insertBeforeEnd</code> method, new elements
                     * become <em>siblings</em> of the specified element, not
                     * children.</p>
                     * <p>If either <code>elem</code> or <code>htmlText</code>
                     * parameter is <code>null</code>, no changes are made to the
                     * document.</p>
                     * <p>For this to work correctly, the document must have an
                     * <code>HTMLEditorKit.Parser</code> set. This will be the case
                     * if the document was created from an HTMLEditorKit via the
                     * <code>createDefaultDocument</code> method.</p>
                     * @param elem the element the content is inserted after
                     * @param htmlText the string to be parsed and inserted after <code>elem</code>
                     * @throws IllegalStateException if an HTMLEditorKit.Parser has not
                     *          been set on the document
                     * @since 1.3
                     */
                    // @ts-ignore
                    insertAfterEnd(elem: javax.swing.text.Element, htmlText: string): void
                    /**
                     * Returns the element that has the given id <code>Attribute</code>.
                     * If the element can't be found, <code>null</code> is returned.
                     * Note that this method works on an <code>Attribute</code>,
                     * <i>not</i> a character tag.  In the following HTML snippet:
                     * <code>&lt;a id="HelloThere"&gt;</code> the attribute is
                     * 'id' and the character tag is 'a'.
                     * This is a convenience method for
                     * <code>getElement(RootElement, HTML.Attribute.id, id)</code>.
                     * This is not thread-safe.
                     * @param id  the string representing the desired <code>Attribute</code>
                     * @return the element with the specified <code>Attribute</code>
                     *           or <code>null</code> if it can't be found,
                     *           or <code>null</code> if <code>id</code> is <code>null</code>
                     * @see javax.swing.text.html.HTML.Attribute
                     * @since 1.3
                     */
                    // @ts-ignore
                    getElement(id: string): javax.swing.text.Element
                    /**
                     * Returns the child element of <code>e</code> that contains the
                     * attribute, <code>attribute</code> with value <code>value</code>, or
                     * <code>null</code> if one isn't found. This is not thread-safe.
                     * @param e the root element where the search begins
                     * @param attribute the desired <code>Attribute</code>
                     * @param value the values for the specified <code>Attribute</code>
                     * @return the element with the specified <code>Attribute</code>
                     *           and the specified <code>value</code>, or <code>null</code>
                     *           if it can't be found
                     * @see javax.swing.text.html.HTML.Attribute
                     * @since 1.3
                     */
                    // @ts-ignore
                    getElement(e: javax.swing.text.Element, attribute: any, value: any): javax.swing.text.Element
                    /**
                     * Notifies all listeners that have registered interest for
                     * notification on this event type.  The event instance
                     * is lazily created using the parameters passed into
                     * the fire method.
                     * @param e the event
                     * @see EventListenerList
                     */
                    // @ts-ignore
                    fireChangedUpdate(e: javax.swing.event.DocumentEvent): void
                    /**
                     * Notifies all listeners that have registered interest for
                     * notification on this event type.  The event instance
                     * is lazily created using the parameters passed into
                     * the fire method.
                     * @param e the event
                     * @see EventListenerList
                     */
                    // @ts-ignore
                    fireUndoableEditUpdate(e: javax.swing.event.UndoableEditEvent): void
                }
            }
        }
    }
}
