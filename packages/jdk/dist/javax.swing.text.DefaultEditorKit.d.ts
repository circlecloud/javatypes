declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * This is the set of things needed by a text component
             * to be a reasonably functioning editor for some <em>type</em>
             * of text document.  This implementation provides a default
             * implementation which treats text as plain text and
             * provides a minimal set of actions for a simple editor.
             * <dl>
             * <dt><b><font size=+1>Newlines</font></b>
             * <dd>
             * There are two properties which deal with newlines.  The
             * system property, <code>line.separator</code>, is defined to be
             * platform-dependent, either "\n", "\r", or "\r\n".  There is also
             * a property defined in <code>DefaultEditorKit</code>, called
             * <a href=#EndOfLineStringProperty><code>EndOfLineStringProperty</code></a>,
             * which is defined automatically when a document is loaded, to be
             * the first occurrence of any of the newline characters.
             * When a document is loaded, <code>EndOfLineStringProperty</code>
             * is set appropriately, and when the document is written back out, the
             * <code>EndOfLineStringProperty</code> is used.  But while the document
             * is in memory, the "\n" character is used to define a
             * newline, regardless of how the newline is defined when
             * the document is on disk.  Therefore, for searching purposes,
             * "\n" should always be used.  When a new document is created,
             * and the <code>EndOfLineStringProperty</code> has not been defined,
             * it will use the System property when writing out the
             * document.
             * <p>Note that <code>EndOfLineStringProperty</code> is set
             * on the <code>Document</code> using the <code>get/putProperty</code>
             * methods.  Subclasses may override this behavior.
             * </dl>
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class DefaultEditorKit extends javax.swing.text.EditorKit {
                /**
                 * default constructor for DefaultEditorKit
                 */
                // @ts-ignore
                constructor()
                /**
                 * When reading a document if a CRLF is encountered a property
                 * with this name is added and the value will be "\r\n".
                 */
                // @ts-ignore
                public static readonly EndOfLineStringProperty: java.lang.String | string
                /**
                 * Name of the action to place content into the associated
                 * document.  If there is a selection, it is removed before
                 * the new content is added.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly insertContentAction: java.lang.String | string
                /**
                 * Name of the action to place a line/paragraph break into
                 * the document.  If there is a selection, it is removed before
                 * the break is added.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly insertBreakAction: java.lang.String | string
                /**
                 * Name of the action to place a tab character into
                 * the document.  If there is a selection, it is removed before
                 * the tab is added.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly insertTabAction: java.lang.String | string
                /**
                 * Name of the action to delete the character of content that
                 * precedes the current caret position.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly deletePrevCharAction: java.lang.String | string
                /**
                 * Name of the action to delete the character of content that
                 * follows the current caret position.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly deleteNextCharAction: java.lang.String | string
                /**
                 * Name of the action to delete the word that
                 * follows the beginning of the selection.
                 * @see #getActions
                 * @see JTextComponent#getSelectionStart
                 * @since 1.6
                 */
                // @ts-ignore
                public static readonly deleteNextWordAction: java.lang.String | string
                /**
                 * Name of the action to delete the word that
                 * precedes the beginning of the selection.
                 * @see #getActions
                 * @see JTextComponent#getSelectionStart
                 * @since 1.6
                 */
                // @ts-ignore
                public static readonly deletePrevWordAction: java.lang.String | string
                /**
                 * Name of the action to set the editor into read-only
                 * mode.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly readOnlyAction: java.lang.String | string
                /**
                 * Name of the action to set the editor into writeable
                 * mode.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly writableAction: java.lang.String | string
                /**
                 * Name of the action to cut the selected region
                 * and place the contents into the system clipboard.
                 * @see JTextComponent#cut
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly cutAction: java.lang.String | string
                /**
                 * Name of the action to copy the selected region
                 * and place the contents into the system clipboard.
                 * @see JTextComponent#copy
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly copyAction: java.lang.String | string
                /**
                 * Name of the action to paste the contents of the
                 * system clipboard into the selected region, or before the
                 * caret if nothing is selected.
                 * @see JTextComponent#paste
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly pasteAction: java.lang.String | string
                /**
                 * Name of the action to create a beep.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly beepAction: java.lang.String | string
                /**
                 * Name of the action to page up vertically.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly pageUpAction: java.lang.String | string
                /**
                 * Name of the action to page down vertically.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly pageDownAction: java.lang.String | string
                /**
                 * Name of the Action for moving the caret
                 * logically forward one position.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly forwardAction: java.lang.String | string
                /**
                 * Name of the Action for moving the caret
                 * logically backward one position.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly backwardAction: java.lang.String | string
                /**
                 * Name of the Action for extending the selection
                 * by moving the caret logically forward one position.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionForwardAction: java.lang.String | string
                /**
                 * Name of the Action for extending the selection
                 * by moving the caret logically backward one position.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionBackwardAction: java.lang.String | string
                /**
                 * Name of the Action for moving the caret
                 * logically upward one position.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly upAction: java.lang.String | string
                /**
                 * Name of the Action for moving the caret
                 * logically downward one position.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly downAction: java.lang.String | string
                /**
                 * Name of the Action for moving the caret
                 * logically upward one position, extending the selection.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionUpAction: java.lang.String | string
                /**
                 * Name of the Action for moving the caret
                 * logically downward one position, extending the selection.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionDownAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the beginning of a word.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly beginWordAction: java.lang.String | string
                /**
                 * Name of the Action for moving the caret
                 * to the end of a word.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly endWordAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the beginning of a word, extending the selection.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionBeginWordAction: java.lang.String | string
                /**
                 * Name of the Action for moving the caret
                 * to the end of a word, extending the selection.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionEndWordAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret to the
                 * beginning of the previous word.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly previousWordAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret to the
                 * beginning of the next word.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly nextWordAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the selection to the
                 * beginning of the previous word, extending the selection.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionPreviousWordAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the selection to the
                 * beginning of the next word, extending the selection.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionNextWordAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the beginning of a line.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly beginLineAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the end of a line.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly endLineAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the beginning of a line, extending the selection.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionBeginLineAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the end of a line, extending the selection.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionEndLineAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the beginning of a paragraph.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly beginParagraphAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the end of a paragraph.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly endParagraphAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the beginning of a paragraph, extending the selection.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionBeginParagraphAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the end of a paragraph, extending the selection.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionEndParagraphAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the beginning of the document.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly beginAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the end of the document.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly endAction: java.lang.String | string
                /**
                 * Name of the <code>Action</code> for moving the caret
                 * to the beginning of the document.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionBeginAction: java.lang.String | string
                /**
                 * Name of the Action for moving the caret
                 * to the end of the document.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectionEndAction: java.lang.String | string
                /**
                 * Name of the Action for selecting a word around the caret.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectWordAction: java.lang.String | string
                /**
                 * Name of the Action for selecting a line around the caret.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectLineAction: java.lang.String | string
                /**
                 * Name of the Action for selecting a paragraph around the caret.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectParagraphAction: java.lang.String | string
                /**
                 * Name of the Action for selecting the entire document
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly selectAllAction: java.lang.String | string
                /**
                 * Name of the action that is executed by default if
                 * a <em>key typed event</em> is received and there
                 * is no keymap entry.
                 * @see #getActions
                 */
                // @ts-ignore
                public static readonly defaultKeyTypedAction: java.lang.String | string
                /**
                 * Gets the MIME type of the data that this
                 * kit represents support for.  The default
                 * is <code>text/plain</code>.
                 * @return the type
                 */
                // @ts-ignore
                public getContentType(): string
                /**
                 * Fetches a factory that is suitable for producing
                 * views of any models that are produced by this
                 * kit.  The default is to have the UI produce the
                 * factory, so this method has no implementation.
                 * @return the view factory
                 */
                // @ts-ignore
                public getViewFactory(): javax.swing.text.ViewFactory
                /**
                 * Fetches the set of commands that can be used
                 * on a text component that is using a model and
                 * view produced by this kit.
                 * @return the command list
                 */
                // @ts-ignore
                public getActions(): javax.swing.Action[]
                /**
                 * Fetches a caret that can navigate through views
                 * produced by the associated ViewFactory.
                 * @return the caret
                 */
                // @ts-ignore
                public createCaret(): javax.swing.text.Caret
                /**
                 * Creates an uninitialized text storage model (PlainDocument)
                 * that is appropriate for this type of editor.
                 * @return the model
                 */
                // @ts-ignore
                public createDefaultDocument(): javax.swing.text.Document
                /**
                 * Inserts content from the given stream which is expected
                 * to be in a format appropriate for this kind of content
                 * handler.
                 * @param in  The stream to read from
                 * @param doc The destination for the insertion.
                 * @param pos The location in the document to place the
                 *    content &gt;=0.
                 * @exception IOException on any I/O error
                 * @exception BadLocationException if pos represents an invalid
                 *    location within the document.
                 */
                // @ts-ignore
                public read(input: java.io.InputStream, doc: javax.swing.text.Document, pos: number /*int*/): void
                /**
                 * Writes content from a document to the given stream
                 * in a format appropriate for this kind of content handler.
                 * @param out The stream to write to
                 * @param doc The source for the write.
                 * @param pos The location in the document to fetch the
                 *    content &gt;=0.
                 * @param len The amount to write out &gt;=0.
                 * @exception IOException on any I/O error
                 * @exception BadLocationException if pos represents an invalid
                 *    location within the document.
                 */
                // @ts-ignore
                public write(out: java.io.OutputStream, doc: javax.swing.text.Document, pos: number /*int*/, len: number /*int*/): void
                /**
                 * Inserts content from the given stream, which will be
                 * treated as plain text.
                 * @param in  The stream to read from
                 * @param doc The destination for the insertion.
                 * @param pos The location in the document to place the
                 *    content &gt;=0.
                 * @exception IOException on any I/O error
                 * @exception BadLocationException if pos represents an invalid
                 *    location within the document.
                 */
                // @ts-ignore
                public read(input: java.io.Reader, doc: javax.swing.text.Document, pos: number /*int*/): void
                /**
                 * Writes content from a document to the given stream
                 * as plain text.
                 * @param out  The stream to write to
                 * @param doc The source for the write.
                 * @param pos The location in the document to fetch the
                 *    content from &gt;=0.
                 * @param len The amount to write out &gt;=0.
                 * @exception IOException on any I/O error
                 * @exception BadLocationException if pos is not within 0 and
                 *    the length of the document.
                 */
                // @ts-ignore
                public write(out: java.io.Writer, doc: javax.swing.text.Document, pos: number /*int*/, len: number /*int*/): void
            }
        }
    }
}
