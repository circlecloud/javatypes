declare namespace javax {
    namespace swing {
        /**
         * A text component to edit various kinds of content.
         * You can find how-to information and examples of using editor panes in
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/text.html">Using Text Components</a>,
         * a section in <em>The Java Tutorial.</em>
         * <p>
         * This component uses implementations of the
         * <code>EditorKit</code> to accomplish its behavior. It effectively
         * morphs into the proper kind of text editor for the kind
         * of content it is given.  The content type that editor is bound
         * to at any given time is determined by the <code>EditorKit</code> currently
         * installed.  If the content is set to a new URL, its type is used
         * to determine the <code>EditorKit</code> that should be used to
         * load the content.
         * <p>
         * By default, the following types of content are known:
         * <dl>
         * <dt><b>text/plain</b>
         * <dd>Plain text, which is the default the type given isn't
         * recognized.  The kit used in this case is an extension of
         * <code>DefaultEditorKit</code> that produces a wrapped plain text view.
         * <dt><b>text/html</b>
         * <dd>HTML text.  The kit used in this case is the class
         * <code>javax.swing.text.html.HTMLEditorKit</code>
         * which provides HTML 3.2 support.
         * <dt><b>text/rtf</b>
         * <dd>RTF text.  The kit used in this case is the class
         * <code>javax.swing.text.rtf.RTFEditorKit</code>
         * which provides a limited support of the Rich Text Format.
         * </dl>
         * <p>
         * There are several ways to load content into this component.
         * <ol>
         * <li>
         * The {@link #setText setText} method can be used to initialize
         * the component from a string.  In this case the current
         * <code>EditorKit</code> will be used, and the content type will be
         * expected to be of this type.
         * <li>
         * The {@link #read read} method can be used to initialize the
         * component from a <code>Reader</code>.  Note that if the content type is HTML,
         * relative references (e.g. for things like images) can't be resolved
         * unless the &lt;base&gt; tag is used or the <em>Base</em> property
         * on <code>HTMLDocument</code> is set.
         * In this case the current <code>EditorKit</code> will be used,
         * and the content type will be expected to be of this type.
         * <li>
         * The {@link #setPage setPage} method can be used to initialize
         * the component from a URL.  In this case, the content type will be
         * determined from the URL, and the registered <code>EditorKit</code>
         * for that content type will be set.
         * </ol>
         * <p>
         * Some kinds of content may provide hyperlink support by generating
         * hyperlink events.  The HTML <code>EditorKit</code> will generate
         * hyperlink events if the <code>JEditorPane</code> is <em>not editable</em>
         * (<code>JEditorPane.setEditable(false);</code> has been called).
         * If HTML frames are embedded in the document, the typical response would be
         * to change a portion of the current document.  The following code
         * fragment is a possible hyperlink listener implementation, that treats
         * HTML frame events specially, and simply displays any other activated
         * hyperlinks.
         * <pre>
         * &nbsp;    class Hyperactive implements HyperlinkListener {
         * &nbsp;
         * &nbsp;        public void hyperlinkUpdate(HyperlinkEvent e) {
         * &nbsp;            if (e.getEventType() == HyperlinkEvent.EventType.ACTIVATED) {
         * &nbsp;                JEditorPane pane = (JEditorPane) e.getSource();
         * &nbsp;                if (e instanceof HTMLFrameHyperlinkEvent) {
         * &nbsp;                    HTMLFrameHyperlinkEvent  evt = (HTMLFrameHyperlinkEvent)e;
         * &nbsp;                    HTMLDocument doc = (HTMLDocument)pane.getDocument();
         * &nbsp;                    doc.processHTMLFrameHyperlinkEvent(evt);
         * &nbsp;                } else {
         * &nbsp;                    try {
         * &nbsp;                        pane.setPage(e.getURL());
         * &nbsp;                    } catch (Throwable t) {
         * &nbsp;                        t.printStackTrace();
         * &nbsp;                    }
         * &nbsp;                }
         * &nbsp;            }
         * &nbsp;        }
         * &nbsp;    }
         * </pre>
         * <p>
         * For information on customizing how <b>text/html</b> is rendered please see
         * {@link #W3C_LENGTH_UNITS} and {@link #HONOR_DISPLAY_PROPERTIES}
         * <p>
         * Culturally dependent information in some documents is handled through
         * a mechanism called character encoding.  Character encoding is an
         * unambiguous mapping of the members of a character set (letters, ideographs,
         * digits, symbols, or control functions) to specific numeric code values. It
         * represents the way the file is stored. Example character encodings are
         * ISO-8859-1, ISO-8859-5, Shift-jis, Euc-jp, and UTF-8. When the file is
         * passed to an user agent (<code>JEditorPane</code>) it is converted to
         * the document character set (ISO-10646 aka Unicode).
         * <p>
         * There are multiple ways to get a character set mapping to happen
         * with <code>JEditorPane</code>.
         * <ol>
         * <li>
         * One way is to specify the character set as a parameter of the MIME
         * type.  This will be established by a call to the
         * {@link #setContentType setContentType} method.  If the content
         * is loaded by the {@link #setPage setPage} method the content
         * type will have been set according to the specification of the URL.
         * It the file is loaded directly, the content type would be expected to
         * have been set prior to loading.
         * <li>
         * Another way the character set can be specified is in the document itself.
         * This requires reading the document prior to determining the character set
         * that is desired.  To handle this, it is expected that the
         * <code>EditorKit</code>.read operation throw a
         * <code>ChangedCharSetException</code> which will
         * be caught.  The read is then restarted with a new Reader that uses
         * the character set specified in the <code>ChangedCharSetException</code>
         * (which is an <code>IOException</code>).
         * </ol>
         * <p>
         * <dl>
         * <dt><b><font size=+1>Newlines</font></b>
         * <dd>
         * For a discussion on how newlines are handled, see
         * <a href="text/DefaultEditorKit.html">DefaultEditorKit</a>.
         * </dl>
         * <p>
         * <strong>Warning:</strong> Swing is not thread safe. For more
         * information see <a
         * href="package-summary.html#threading">Swing's Threading
         * Policy</a>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @beaninfo attribute: isContainer false
         *  description: A text component to edit various types of content.
         * @author Timothy Prinzing
         */
        // @ts-ignore
        class JEditorPane extends javax.swing.text.JTextComponent {
            /**
             * Creates a new <code>JEditorPane</code>.
             * The document model is set to <code>null</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a <code>JEditorPane</code> based on a specified URL for input.
             * @param initialPage the URL
             * @exception IOException if the URL is <code>null</code>
             *           or cannot be accessed
             */
            // @ts-ignore
            constructor(initialPage: java.net.URL)
            /**
             * Creates a <code>JEditorPane</code> based on a string containing
             * a URL specification.
             * @param url the URL
             * @exception IOException if the URL is <code>null</code> or
             *           cannot be accessed
             */
            // @ts-ignore
            constructor(url: java.lang.String | string)
            /**
             * Creates a <code>JEditorPane</code> that has been initialized
             * to the given text.  This is a convenience constructor that calls the
             * <code>setContentType</code> and <code>setText</code> methods.
             * @param type mime type of the given text
             * @param text the text to initialize with; may be <code>null</code>
             * @exception NullPointerException if the <code>type</code> parameter
             *           is <code>null</code>
             */
            // @ts-ignore
            constructor(type: java.lang.String | string, text: java.lang.String | string)
            /**
             * Key for a client property used to indicate whether
             * <a href="http://www.w3.org/TR/CSS21/syndata.html#length-units">
             * w3c compliant</a> length units are used for html rendering.
             * <p>
             * By default this is not enabled; to enable
             * it set the client {@link #putClientProperty property} with this name
             * to <code>Boolean.TRUE</code>.
             * @since 1.5
             */
            // @ts-ignore
            public static readonly W3C_LENGTH_UNITS: java.lang.String | string
            /**
             * Key for a client property used to indicate whether
             * the default font and foreground color from the component are
             * used if a font or foreground color is not specified in the styled
             * text.
             * <p>
             * The default varies based on the look and feel;
             * to enable it set the client {@link #putClientProperty property} with
             * this name to <code>Boolean.TRUE</code>.
             * @since 1.5
             */
            // @ts-ignore
            public static readonly HONOR_DISPLAY_PROPERTIES: java.lang.String | string
            /**
             * Adds a hyperlink listener for notification of any changes, for example
             * when a link is selected and entered.
             * @param listener the listener
             */
            // @ts-ignore
            public addHyperlinkListener(listener: javax.swing.event.HyperlinkListener): void
            /**
             * Removes a hyperlink listener.
             * @param listener the listener
             */
            // @ts-ignore
            public removeHyperlinkListener(listener: javax.swing.event.HyperlinkListener): void
            /**
             * Returns an array of all the <code>HyperLinkListener</code>s added
             * to this JEditorPane with addHyperlinkListener().
             * @return all of the <code>HyperLinkListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            public getHyperlinkListeners(): javax.swing.event.HyperlinkListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  This is normally called
             * by the currently installed <code>EditorKit</code> if a content type
             * that supports hyperlinks is currently active and there
             * was activity with a link.  The listener list is processed
             * last to first.
             * @param e the event
             * @see EventListenerList
             */
            // @ts-ignore
            public fireHyperlinkUpdate(e: javax.swing.event.HyperlinkEvent): void
            /**
             * Sets the current URL being displayed.  The content type of the
             * pane is set, and if the editor kit for the pane is
             * non-<code>null</code>, then
             * a new default document is created and the URL is read into it.
             * If the URL contains and reference location, the location will
             * be scrolled to by calling the <code>scrollToReference</code>
             * method. If the desired URL is the one currently being displayed,
             * the document will not be reloaded. To force a document
             * reload it is necessary to clear the stream description property
             * of the document. The following code shows how this can be done:
             * <pre>
             * Document doc = jEditorPane.getDocument();
             * doc.putProperty(Document.StreamDescriptionProperty, null);
             * </pre>
             * If the desired URL is not the one currently being
             * displayed, the <code>getStream</code> method is called to
             * give subclasses control over the stream provided.
             * <p>
             * This may load either synchronously or asynchronously
             * depending upon the document returned by the <code>EditorKit</code>.
             * If the <code>Document</code> is of type
             * <code>AbstractDocument</code> and has a value returned by
             * <code>AbstractDocument.getAsynchronousLoadPriority</code>
             * that is greater than or equal to zero, the page will be
             * loaded on a separate thread using that priority.
             * <p>
             * If the document is loaded synchronously, it will be
             * filled in with the stream prior to being installed into
             * the editor with a call to <code>setDocument</code>, which
             * is bound and will fire a property change event.  If an
             * <code>IOException</code> is thrown the partially loaded
             * document will
             * be discarded and neither the document or page property
             * change events will be fired.  If the document is
             * successfully loaded and installed, a view will be
             * built for it by the UI which will then be scrolled if
             * necessary, and then the page property change event
             * will be fired.
             * <p>
             * If the document is loaded asynchronously, the document
             * will be installed into the editor immediately using a
             * call to <code>setDocument</code> which will fire a
             * document property change event, then a thread will be
             * created which will begin doing the actual loading.
             * In this case, the page property change event will not be
             * fired by the call to this method directly, but rather will be
             * fired when the thread doing the loading has finished.
             * It will also be fired on the event-dispatch thread.
             * Since the calling thread can not throw an <code>IOException</code>
             * in the event of failure on the other thread, the page
             * property change event will be fired when the other
             * thread is done whether the load was successful or not.
             * @param page the URL of the page
             * @exception IOException for a <code>null</code> or invalid
             *           page specification, or exception from the stream being read
             * @see #getPage
             * @beaninfo description: the URL used to set content
             *         bound: true
             *        expert: true
             */
            // @ts-ignore
            public setPage(page: java.net.URL): void
            /**
             * This method initializes from a stream.  If the kit is
             * set to be of type <code>HTMLEditorKit</code>, and the
             * <code>desc</code> parameter is an <code>HTMLDocument</code>,
             * then it invokes the <code>HTMLEditorKit</code> to initiate
             * the read. Otherwise it calls the superclass
             * method which loads the model as plain text.
             * @param in the stream from which to read
             * @param desc an object describing the stream
             * @exception IOException as thrown by the stream being
             *           used to initialize
             * @see JTextComponent#read
             * @see #setDocument
             */
            // @ts-ignore
            public read(input: java.io.InputStream, desc: java.lang.Object | any): void
            /**
             * Fetches a stream for the given URL, which is about to
             * be loaded by the <code>setPage</code> method.  By
             * default, this simply opens the URL and returns the
             * stream.  This can be reimplemented to do useful things
             * like fetch the stream from a cache, monitor the progress
             * of the stream, etc.
             * <p>
             * This method is expected to have the the side effect of
             * establishing the content type, and therefore setting the
             * appropriate <code>EditorKit</code> to use for loading the stream.
             * <p>
             * If this the stream was an http connection, redirects
             * will be followed and the resulting URL will be set as
             * the <code>Document.StreamDescriptionProperty</code> so that relative
             * URL's can be properly resolved.
             * @param page  the URL of the page
             */
            // @ts-ignore
            getStream(page: java.net.URL): java.io.InputStream
            /**
             * Scrolls the view to the given reference location
             * (that is, the value returned by the <code>UL.getRef</code>
             * method for the URL being displayed).  By default, this
             * method only knows how to locate a reference in an
             * HTMLDocument.  The implementation calls the
             * <code>scrollRectToVisible</code> method to
             * accomplish the actual scrolling.  If scrolling to a
             * reference location is needed for document types other
             * than HTML, this method should be reimplemented.
             * This method will have no effect if the component
             * is not visible.
             * @param reference the named location to scroll to
             */
            // @ts-ignore
            public scrollToReference(reference: java.lang.String | string): void
            /**
             * Gets the current URL being displayed.  If a URL was
             * not specified in the creation of the document, this
             * will return <code>null</code>, and relative URL's will not be
             * resolved.
             * @return the URL, or <code>null</code> if none
             */
            // @ts-ignore
            public getPage(): java.net.URL
            /**
             * Sets the current URL being displayed.
             * @param url the URL for display
             * @exception IOException for a <code>null</code> or invalid URL
             *           specification
             */
            // @ts-ignore
            public setPage(url: java.lang.String | string): void
            /**
             * Gets the class ID for the UI.
             * @return the string "EditorPaneUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Creates the default editor kit (<code>PlainEditorKit</code>) for when
             * the component is first created.
             * @return the editor kit
             */
            // @ts-ignore
            createDefaultEditorKit(): javax.swing.text.EditorKit
            /**
             * Fetches the currently installed kit for handling content.
             * <code>createDefaultEditorKit</code> is called to set up a default
             * if necessary.
             * @return the editor kit
             */
            // @ts-ignore
            public getEditorKit(): javax.swing.text.EditorKit
            /**
             * Gets the type of content that this editor
             * is currently set to deal with.  This is
             * defined to be the type associated with the
             * currently installed <code>EditorKit</code>.
             * @return the content type, <code>null</code> if no editor kit set
             */
            // @ts-ignore
            public getContentType(): string
            /**
             * Sets the type of content that this editor
             * handles.  This calls <code>getEditorKitForContentType</code>,
             * and then <code>setEditorKit</code> if an editor kit can
             * be successfully located.  This is mostly convenience method
             * that can be used as an alternative to calling
             * <code>setEditorKit</code> directly.
             * <p>
             * If there is a charset definition specified as a parameter
             * of the content type specification, it will be used when
             * loading input streams using the associated <code>EditorKit</code>.
             * For example if the type is specified as
             * <code>text/html; charset=EUC-JP</code> the content
             * will be loaded using the <code>EditorKit</code> registered for
             * <code>text/html</code> and the Reader provided to
             * the <code>EditorKit</code> to load unicode into the document will
             * use the <code>EUC-JP</code> charset for translating
             * to unicode.  If the type is not recognized, the content
             * will be loaded using the <code>EditorKit</code> registered
             * for plain text, <code>text/plain</code>.
             * @param type the non-<code>null</code> mime type for the content editing
             *    support
             * @see #getContentType
             * @beaninfo description: the type of content
             * @throws NullPointerException if the <code>type</code> parameter
             *           is <code>null</code>
             */
            // @ts-ignore
            public setContentType(type: java.lang.String | string): void
            /**
             * Sets the currently installed kit for handling
             * content.  This is the bound property that
             * establishes the content type of the editor.
             * Any old kit is first deinstalled, then if kit is
             * non-<code>null</code>,
             * the new kit is installed, and a default document created for it.
             * A <code>PropertyChange</code> event ("editorKit") is always fired when
             * <code>setEditorKit</code> is called.
             * <p>
             * <em>NOTE: This has the side effect of changing the model,
             * because the <code>EditorKit</code> is the source of how a
             * particular type
             * of content is modeled.  This method will cause <code>setDocument</code>
             * to be called on behalf of the caller to ensure integrity
             * of the internal state.</em>
             * @param kit the desired editor behavior
             * @see #getEditorKit
             * @beaninfo description: the currently installed kit for handling content
             *         bound: true
             *        expert: true
             */
            // @ts-ignore
            public setEditorKit(kit: javax.swing.text.EditorKit): void
            /**
             * Fetches the editor kit to use for the given type
             * of content.  This is called when a type is requested
             * that doesn't match the currently installed type.
             * If the component doesn't have an <code>EditorKit</code> registered
             * for the given type, it will try to create an
             * <code>EditorKit</code> from the default <code>EditorKit</code> registry.
             * If that fails, a <code>PlainEditorKit</code> is used on the
             * assumption that all text documents can be represented
             * as plain text.
             * <p>
             * This method can be reimplemented to use some
             * other kind of type registry.  This can
             * be reimplemented to use the Java Activation
             * Framework, for example.
             * @param type the non-<code>null</code> content type
             * @return the editor kit
             */
            // @ts-ignore
            public getEditorKitForContentType(type: java.lang.String | string): javax.swing.text.EditorKit
            /**
             * Directly sets the editor kit to use for the given type.  A
             * look-and-feel implementation might use this in conjunction
             * with <code>createEditorKitForContentType</code> to install handlers for
             * content types with a look-and-feel bias.
             * @param type the non-<code>null</code> content type
             * @param k the editor kit to be set
             */
            // @ts-ignore
            public setEditorKitForContentType(type: java.lang.String | string, k: javax.swing.text.EditorKit): void
            /**
             * Replaces the currently selected content with new content
             * represented by the given string.  If there is no selection
             * this amounts to an insert of the given text.  If there
             * is no replacement text (i.e. the content string is empty
             * or <code>null</code>) this amounts to a removal of the
             * current selection.  The replacement text will have the
             * attributes currently defined for input.  If the component is not
             * editable, beep and return.
             * @param content  the content to replace the selection with.  This
             *    value can be <code>null</code>
             */
            // @ts-ignore
            public replaceSelection(content: java.lang.String | string): void
            /**
             * Creates a handler for the given type from the default registry
             * of editor kits.  The registry is created if necessary.  If the
             * registered class has not yet been loaded, an attempt
             * is made to dynamically load the prototype of the kit for the
             * given type.  If the type was registered with a <code>ClassLoader</code>,
             * that <code>ClassLoader</code> will be used to load the prototype.
             * If there was no registered <code>ClassLoader</code>,
             * <code>Class.forName</code> will be used to load the prototype.
             * <p>
             * Once a prototype <code>EditorKit</code> instance is successfully
             * located, it is cloned and the clone is returned.
             * @param type the content type
             * @return the editor kit, or <code>null</code> if there is nothing
             *    registered for the given type
             */
            // @ts-ignore
            public static createEditorKitForContentType(type: java.lang.String | string): javax.swing.text.EditorKit
            /**
             * Establishes the default bindings of <code>type</code> to
             * <code>classname</code>.
             * The class will be dynamically loaded later when actually
             * needed, and can be safely changed before attempted uses
             * to avoid loading unwanted classes.  The prototype
             * <code>EditorKit</code> will be loaded with <code>Class.forName</code>
             * when registered with this method.
             * @param type the non-<code>null</code> content type
             * @param classname the class to load later
             */
            // @ts-ignore
            public static registerEditorKitForContentType(type: java.lang.String | string, classname: java.lang.String | string): void
            /**
             * Establishes the default bindings of <code>type</code> to
             * <code>classname</code>.
             * The class will be dynamically loaded later when actually
             * needed using the given <code>ClassLoader</code>,
             * and can be safely changed
             * before attempted uses to avoid loading unwanted classes.
             * @param type the non-<code>null</code> content type
             * @param classname the class to load later
             * @param loader the <code>ClassLoader</code> to use to load the name
             */
            // @ts-ignore
            public static registerEditorKitForContentType(type: java.lang.String | string, classname: java.lang.String | string, loader: java.lang.ClassLoader): void
            /**
             * Returns the currently registered <code>EditorKit</code>
             * class name for the type <code>type</code>.
             * @param type  the non-<code>null</code> content type
             * @since 1.3
             */
            // @ts-ignore
            public static getEditorKitClassNameForContentType(type: java.lang.String | string): string
            /**
             * Returns the preferred size for the <code>JEditorPane</code>.
             * The preferred size for <code>JEditorPane</code> is slightly altered
             * from the preferred size of the superclass.  If the size
             * of the viewport has become smaller than the minimum size
             * of the component, the scrollable definition for tracking
             * width or height will turn to false.  The default viewport
             * layout will give the preferred size, and that is not desired
             * in the case where the scrollable is tracking.  In that case
             * the <em>normal</em> preferred size is adjusted to the
             * minimum size.  This allows things like HTML tables to
             * shrink down to their minimum size and then be laid out at
             * their minimum size, refusing to shrink any further.
             * @return a <code>Dimension</code> containing the preferred size
             */
            // @ts-ignore
            public getPreferredSize(): java.awt.Dimension
            /**
             * Sets the text of this <code>TextComponent</code> to the specified
             * content,
             * which is expected to be in the format of the content type of
             * this editor.  For example, if the type is set to <code>text/html</code>
             * the string should be specified in terms of HTML.
             * <p>
             * This is implemented to remove the contents of the current document,
             * and replace them by parsing the given string using the current
             * <code>EditorKit</code>.  This gives the semantics of the
             * superclass by not changing
             * out the model, while supporting the content type currently set on
             * this component.  The assumption is that the previous content is
             * relatively
             * small, and that the previous content doesn't have side effects.
             * Both of those assumptions can be violated and cause undesirable results.
             * To avoid this, create a new document,
             * <code>getEditorKit().createDefaultDocument()</code>, and replace the
             * existing <code>Document</code> with the new one. You are then assured the
             * previous <code>Document</code> won't have any lingering state.
             * <ol>
             * <li>
             * Leaving the existing model in place means that the old view will be
             * torn down, and a new view created, where replacing the document would
             * avoid the tear down of the old view.
             * <li>
             * Some formats (such as HTML) can install things into the document that
             * can influence future contents.  HTML can have style information embedded
             * that would influence the next content installed unexpectedly.
             * </ol>
             * <p>
             * An alternative way to load this component with a string would be to
             * create a StringReader and call the read method.  In this case the model
             * would be replaced after it was initialized with the contents of the
             * string.
             * @param t the new text to be set; if <code>null</code> the old
             *     text will be deleted
             * @see #getText
             * @beaninfo description: the text of this component
             */
            // @ts-ignore
            public setText(t: java.lang.String | string): void
            /**
             * Returns the text contained in this <code>TextComponent</code>
             * in terms of the
             * content type of this editor.  If an exception is thrown while
             * attempting to retrieve the text, <code>null</code> will be returned.
             * This is implemented to call <code>JTextComponent.write</code> with
             * a <code>StringWriter</code>.
             * @return the text
             * @see #setText
             */
            // @ts-ignore
            public getText(): string
            /**
             * Returns true if a viewport should always force the width of this
             * <code>Scrollable</code> to match the width of the viewport.
             * @return true if a viewport should force the Scrollables width to
             *  match its own, false otherwise
             */
            // @ts-ignore
            public getScrollableTracksViewportWidth(): boolean
            /**
             * Returns true if a viewport should always force the height of this
             * <code>Scrollable</code> to match the height of the viewport.
             * @return true if a viewport should force the
             *           <code>Scrollable</code>'s height to match its own,
             *           false otherwise
             */
            // @ts-ignore
            public getScrollableTracksViewportHeight(): boolean
            /**
             * Returns a string representation of this <code>JEditorPane</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JEditorPane</code>
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JEditorPane.
             * For editor panes, the AccessibleContext takes the form of an
             * AccessibleJEditorPane.
             * A new AccessibleJEditorPane instance is created if necessary.
             * @return an AccessibleJEditorPane that serves as the
             *          AccessibleContext of this JEditorPane
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
