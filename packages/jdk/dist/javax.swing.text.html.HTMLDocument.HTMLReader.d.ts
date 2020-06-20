declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLDocument {
                    /**
                     * An HTML reader to load an HTML document with an HTML
                     * element structure.  This is a set of callbacks from
                     * the parser, implemented to create a set of elements
                     * tagged with attributes.  The parse builds up tokens
                     * (ElementSpec) that describe the element subtree desired,
                     * and burst it into the document under the protection of
                     * a write lock using the insert method on the document
                     * outer class.
                     * <p>
                     * The reader can be configured by registering actions
                     * (of type <code>HTMLDocument.HTMLReader.TagAction</code>)
                     * that describe how to handle the action.  The idea behind
                     * the actions provided is that the most natural text editing
                     * operations can be provided if the element structure boils
                     * down to paragraphs with runs of some kind of style
                     * in them.  Some things are more naturally specified
                     * structurally, so arbitrary structure should be allowed
                     * above the paragraphs, but will need to be edited with structural
                     * actions.  The implication of this is that some of the
                     * HTML elements specified in the stream being parsed will
                     * be collapsed into attributes, and in some cases paragraphs
                     * will be synthesized.  When HTML elements have been
                     * converted to attributes, the attribute key will be of
                     * type HTML.Tag, and the value will be of type AttributeSet
                     * so that no information is lost.  This enables many of the
                     * existing actions to work so that the user can type input,
                     * hit the return key, backspace, delete, etc and have a
                     * reasonable result.  Selections can be created, and attributes
                     * applied or removed, etc.  With this in mind, the work done
                     * by the reader can be categorized into the following kinds
                     * of tasks:
                     * <dl>
                     * <dt>Block
                     * <dd>Build the structure like it's specified in the stream.
                     * This produces elements that contain other elements.
                     * <dt>Paragraph
                     * <dd>Like block except that it's expected that the element
                     * will be used with a paragraph view so a paragraph element
                     * won't need to be synthesized.
                     * <dt>Character
                     * <dd>Contribute the element as an attribute that will start
                     * and stop at arbitrary text locations.  This will ultimately
                     * be mixed into a run of text, with all of the currently
                     * flattened HTML character elements.
                     * <dt>Special
                     * <dd>Produce an embedded graphical element.
                     * <dt>Form
                     * <dd>Produce an element that is like the embedded graphical
                     * element, except that it also has a component model associated
                     * with it.
                     * <dt>Hidden
                     * <dd>Create an element that is hidden from view when the
                     * document is being viewed read-only, and visible when the
                     * document is being edited.  This is useful to keep the
                     * model from losing information, and used to store things
                     * like comments and unrecognized tags.
                     * </dl>
                     * <p>
                     * Currently, &lt;APPLET&gt;, &lt;PARAM&gt;, &lt;MAP&gt;, &lt;AREA&gt;, &lt;LINK&gt;,
                     * &lt;SCRIPT&gt; and &lt;STYLE&gt; are unsupported.
                     * <p>
                     * The assignment of the actions described is shown in the
                     * following table for the tags defined in <code>HTML.Tag</code>.
                     * <table border=1 summary="HTML tags and assigned actions">
                     * <tr><th>Tag</th><th>Action</th></tr>
                     * <tr><td><code>HTML.Tag.A</code>         <td>CharacterAction
                     * <tr><td><code>HTML.Tag.ADDRESS</code>   <td>CharacterAction
                     * <tr><td><code>HTML.Tag.APPLET</code>    <td>HiddenAction
                     * <tr><td><code>HTML.Tag.AREA</code>      <td>AreaAction
                     * <tr><td><code>HTML.Tag.B</code>         <td>CharacterAction
                     * <tr><td><code>HTML.Tag.BASE</code>      <td>BaseAction
                     * <tr><td><code>HTML.Tag.BASEFONT</code>  <td>CharacterAction
                     * <tr><td><code>HTML.Tag.BIG</code>       <td>CharacterAction
                     * <tr><td><code>HTML.Tag.BLOCKQUOTE</code><td>BlockAction
                     * <tr><td><code>HTML.Tag.BODY</code>      <td>BlockAction
                     * <tr><td><code>HTML.Tag.BR</code>        <td>SpecialAction
                     * <tr><td><code>HTML.Tag.CAPTION</code>   <td>BlockAction
                     * <tr><td><code>HTML.Tag.CENTER</code>    <td>BlockAction
                     * <tr><td><code>HTML.Tag.CITE</code>      <td>CharacterAction
                     * <tr><td><code>HTML.Tag.CODE</code>      <td>CharacterAction
                     * <tr><td><code>HTML.Tag.DD</code>        <td>BlockAction
                     * <tr><td><code>HTML.Tag.DFN</code>       <td>CharacterAction
                     * <tr><td><code>HTML.Tag.DIR</code>       <td>BlockAction
                     * <tr><td><code>HTML.Tag.DIV</code>       <td>BlockAction
                     * <tr><td><code>HTML.Tag.DL</code>        <td>BlockAction
                     * <tr><td><code>HTML.Tag.DT</code>        <td>ParagraphAction
                     * <tr><td><code>HTML.Tag.EM</code>        <td>CharacterAction
                     * <tr><td><code>HTML.Tag.FONT</code>      <td>CharacterAction
                     * <tr><td><code>HTML.Tag.FORM</code>      <td>As of 1.4 a BlockAction
                     * <tr><td><code>HTML.Tag.FRAME</code>     <td>SpecialAction
                     * <tr><td><code>HTML.Tag.FRAMESET</code>  <td>BlockAction
                     * <tr><td><code>HTML.Tag.H1</code>        <td>ParagraphAction
                     * <tr><td><code>HTML.Tag.H2</code>        <td>ParagraphAction
                     * <tr><td><code>HTML.Tag.H3</code>        <td>ParagraphAction
                     * <tr><td><code>HTML.Tag.H4</code>        <td>ParagraphAction
                     * <tr><td><code>HTML.Tag.H5</code>        <td>ParagraphAction
                     * <tr><td><code>HTML.Tag.H6</code>        <td>ParagraphAction
                     * <tr><td><code>HTML.Tag.HEAD</code>      <td>HeadAction
                     * <tr><td><code>HTML.Tag.HR</code>        <td>SpecialAction
                     * <tr><td><code>HTML.Tag.HTML</code>      <td>BlockAction
                     * <tr><td><code>HTML.Tag.I</code>         <td>CharacterAction
                     * <tr><td><code>HTML.Tag.IMG</code>       <td>SpecialAction
                     * <tr><td><code>HTML.Tag.INPUT</code>     <td>FormAction
                     * <tr><td><code>HTML.Tag.ISINDEX</code>   <td>IsndexAction
                     * <tr><td><code>HTML.Tag.KBD</code>       <td>CharacterAction
                     * <tr><td><code>HTML.Tag.LI</code>        <td>BlockAction
                     * <tr><td><code>HTML.Tag.LINK</code>      <td>LinkAction
                     * <tr><td><code>HTML.Tag.MAP</code>       <td>MapAction
                     * <tr><td><code>HTML.Tag.MENU</code>      <td>BlockAction
                     * <tr><td><code>HTML.Tag.META</code>      <td>MetaAction
                     * <tr><td><code>HTML.Tag.NOFRAMES</code>  <td>BlockAction
                     * <tr><td><code>HTML.Tag.OBJECT</code>    <td>SpecialAction
                     * <tr><td><code>HTML.Tag.OL</code>        <td>BlockAction
                     * <tr><td><code>HTML.Tag.OPTION</code>    <td>FormAction
                     * <tr><td><code>HTML.Tag.P</code>         <td>ParagraphAction
                     * <tr><td><code>HTML.Tag.PARAM</code>     <td>HiddenAction
                     * <tr><td><code>HTML.Tag.PRE</code>       <td>PreAction
                     * <tr><td><code>HTML.Tag.SAMP</code>      <td>CharacterAction
                     * <tr><td><code>HTML.Tag.SCRIPT</code>    <td>HiddenAction
                     * <tr><td><code>HTML.Tag.SELECT</code>    <td>FormAction
                     * <tr><td><code>HTML.Tag.SMALL</code>     <td>CharacterAction
                     * <tr><td><code>HTML.Tag.STRIKE</code>    <td>CharacterAction
                     * <tr><td><code>HTML.Tag.S</code>         <td>CharacterAction
                     * <tr><td><code>HTML.Tag.STRONG</code>    <td>CharacterAction
                     * <tr><td><code>HTML.Tag.STYLE</code>     <td>StyleAction
                     * <tr><td><code>HTML.Tag.SUB</code>       <td>CharacterAction
                     * <tr><td><code>HTML.Tag.SUP</code>       <td>CharacterAction
                     * <tr><td><code>HTML.Tag.TABLE</code>     <td>BlockAction
                     * <tr><td><code>HTML.Tag.TD</code>        <td>BlockAction
                     * <tr><td><code>HTML.Tag.TEXTAREA</code>  <td>FormAction
                     * <tr><td><code>HTML.Tag.TH</code>        <td>BlockAction
                     * <tr><td><code>HTML.Tag.TITLE</code>     <td>TitleAction
                     * <tr><td><code>HTML.Tag.TR</code>        <td>BlockAction
                     * <tr><td><code>HTML.Tag.TT</code>        <td>CharacterAction
                     * <tr><td><code>HTML.Tag.U</code>         <td>CharacterAction
                     * <tr><td><code>HTML.Tag.UL</code>        <td>BlockAction
                     * <tr><td><code>HTML.Tag.VAR</code>       <td>CharacterAction
                     * </table>
                     * <p>
                     * Once &lt;/html&gt; is encountered, the Actions are no longer notified.
                     */
                    // @ts-ignore
                    class HTMLReader extends javax.swing.text.html.HTMLEditorKit.ParserCallback {
                        // @ts-ignore
                        constructor(offset: number /*int*/)
                        // @ts-ignore
                        constructor(offset: number /*int*/, popDepth: number /*int*/, pushDepth: number /*int*/, insertTag: javax.swing.text.html.HTML.Tag)
                        // @ts-ignore
                        parseBuffer: java.util.Vector<javax.swing.text.DefaultStyledDocument.ElementSpec>
                        // @ts-ignore
                        charAttr: javax.swing.text.MutableAttributeSet
                        /**
                         * The last method called on the reader.  It allows
                         * any pending changes to be flushed into the document.
                         * Since this is currently loading synchronously, the entire
                         * set of changes are pushed in at this point.
                         */
                        // @ts-ignore
                        flush(): void
                        /**
                         * Called by the parser to indicate a block of text was
                         * encountered.
                         */
                        // @ts-ignore
                        handleText(data: string[], pos: number /*int*/): void
                        /**
                         * Callback from the parser.  Route to the appropriate
                         * handler for the tag.
                         */
                        // @ts-ignore
                        handleStartTag(t: javax.swing.text.html.HTML.Tag, a: javax.swing.text.MutableAttributeSet, pos: number /*int*/): void
                        // @ts-ignore
                        handleComment(data: string[], pos: number /*int*/): void
                        /**
                         * Callback from the parser.  Route to the appropriate
                         * handler for the tag.
                         */
                        // @ts-ignore
                        handleEndTag(t: javax.swing.text.html.HTML.Tag, pos: number /*int*/): void
                        /**
                         * Callback from the parser.  Route to the appropriate
                         * handler for the tag.
                         */
                        // @ts-ignore
                        handleSimpleTag(t: javax.swing.text.html.HTML.Tag, a: javax.swing.text.MutableAttributeSet, pos: number /*int*/): void
                        /**
                         * This is invoked after the stream has been parsed, but before
                         * <code>flush</code>. <code>eol</code> will be one of \n, \r
                         * or \r\n, which ever is encountered the most in parsing the
                         * stream.
                         * @since 1.3
                         */
                        // @ts-ignore
                        handleEndOfLineString(eol: string): void
                        /**
                         * Registers a handler for the given tag.  By default
                         * all of the well-known tags will have been registered.
                         * This can be used to change the handling of a particular
                         * tag or to add support for custom tags.
                         */
                        // @ts-ignore
                        registerTag(t: javax.swing.text.html.HTML.Tag, a: javax.swing.text.html.HTMLDocument.HTMLReader.TagAction): void
                        /**
                         * Pushes the current character style on a stack in preparation
                         * for forming a new nested character style.
                         */
                        // @ts-ignore
                        pushCharacterStyle(): void
                        /**
                         * Pops a previously pushed character style off the stack
                         * to return to a previous style.
                         */
                        // @ts-ignore
                        popCharacterStyle(): void
                        /**
                         * Adds the given content to the textarea document.
                         * This method gets called when we are in a textarea
                         * context.  Therefore all text that is seen belongs
                         * to the text area and is hence added to the
                         * TextAreaDocument associated with the text area.
                         */
                        // @ts-ignore
                        textAreaContent(data: string[]): void
                        /**
                         * Adds the given content that was encountered in a
                         * PRE element.  This synthesizes lines to hold the
                         * runs of text, and makes calls to addContent to
                         * actually add the text.
                         */
                        // @ts-ignore
                        preContent(data: string[]): void
                        /**
                         * Adds an instruction to the parse buffer to create a
                         * block element with the given attributes.
                         */
                        // @ts-ignore
                        blockOpen(t: javax.swing.text.html.HTML.Tag, attr: javax.swing.text.MutableAttributeSet): void
                        /**
                         * Adds an instruction to the parse buffer to close out
                         * a block element of the given type.
                         */
                        // @ts-ignore
                        blockClose(t: javax.swing.text.html.HTML.Tag): void
                        /**
                         * Adds some text with the current character attributes.
                         * @param data the content to add
                         * @param offs the initial offset
                         * @param length the length
                         */
                        // @ts-ignore
                        addContent(data: string[], offs: number /*int*/, length: number /*int*/): void
                        /**
                         * Adds some text with the current character attributes.
                         * @param data the content to add
                         * @param offs the initial offset
                         * @param length the length
                         * @param generateImpliedPIfNecessary whether to generate implied
                         *  paragraphs
                         */
                        // @ts-ignore
                        addContent(data: string[], offs: number /*int*/, length: number /*int*/, generateImpliedPIfNecessary: boolean): void
                        /**
                         * Adds content that is basically specified entirely
                         * in the attribute set.
                         */
                        // @ts-ignore
                        addSpecialElement(t: javax.swing.text.html.HTML.Tag, a: javax.swing.text.MutableAttributeSet): void
                    }
                }
            }
        }
    }
}
