declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A document that can be marked up with character and paragraph
             * styles in a manner similar to the Rich Text Format.  The element
             * structure for this document represents style crossings for
             * style runs.  These style runs are mapped into a paragraph element
             * structure (which may reside in some other structure).  The
             * style runs break at paragraph boundaries since logical styles are
             * assigned to paragraph boundaries.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Timothy Prinzing
             * @see Document
             * @see AbstractDocument
             */
            // @ts-ignore
            class DefaultStyledDocument extends javax.swing.text.AbstractDocument implements javax.swing.text.StyledDocument {
                /**
                 * Constructs a styled document.
                 * @param c  the container for the content
                 * @param styles resources and style definitions which may
                 *   be shared across documents
                 */
                // @ts-ignore
                constructor(c: javax.swing.text.AbstractDocument.Content, styles: javax.swing.text.StyleContext)
                /**
                 * Constructs a styled document with the default content
                 * storage implementation and a shared set of styles.
                 * @param styles the styles
                 */
                // @ts-ignore
                constructor(styles: javax.swing.text.StyleContext)
                /**
                 * Constructs a default styled document.  This buffers
                 * input content by a size of <em>BUFFER_SIZE_DEFAULT</em>
                 * and has a style context that is scoped by the lifetime
                 * of the document and is not shared with other documents.
                 */
                // @ts-ignore
                constructor()
                /**
                 * The default size of the initial content buffer.
                 */
                // @ts-ignore
                public static readonly BUFFER_SIZE_DEFAULT: number /*int*/
                // @ts-ignore
                buffer: javax.swing.text.DefaultStyledDocument.ElementBuffer
                /**
                 * Gets the default root element.
                 * @return the root
                 * @see Document#getDefaultRootElement
                 */
                // @ts-ignore
                public getDefaultRootElement(): javax.swing.text.Element
                /**
                 * Initialize the document to reflect the given element
                 * structure (i.e. the structure reported by the
                 * <code>getDefaultRootElement</code> method.  If the
                 * document contained any data it will first be removed.
                 */
                // @ts-ignore
                create(data: javax.swing.text.DefaultStyledDocument.ElementSpec[]): void
                /**
                 * Inserts new elements in bulk.  This is useful to allow
                 * parsing with the document in an unlocked state and
                 * prepare an element structure modification.  This method
                 * takes an array of tokens that describe how to update an
                 * element structure so the time within a write lock can
                 * be greatly reduced in an asynchronous update situation.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param offset the starting offset &gt;= 0
                 * @param data the element data
                 * @exception BadLocationException for an invalid starting offset
                 */
                // @ts-ignore
                insert(offset: number /*int*/, data: javax.swing.text.DefaultStyledDocument.ElementSpec[]): void
                /**
                 * Removes an element from this document.
                 * <p>The element is removed from its parent element, as well as
                 * the text in the range identified by the element.  If the
                 * element isn't associated with the document, {@code
                 * IllegalArgumentException} is thrown.</p>
                 * <p>As empty branch elements are not allowed in the document, if the
                 * element is the sole child, its parent element is removed as well,
                 * recursively.  This means that when replacing all the children of a
                 * particular element, new children should be added <em>before</em>
                 * removing old children.
                 * <p>Element removal results in two events being fired, the
                 * {@code DocumentEvent} for changes in element structure and {@code
                 * UndoableEditEvent} for changes in document content.</p>
                 * <p>If the element contains end-of-content mark (the last {@code
                 * "\n"} character in document), this character is not removed;
                 * instead, preceding leaf element is extended to cover the
                 * character.  If the last leaf already ends with {@code "\n",} it is
                 * included in content removal.</p>
                 * <p>If the element is {@code null,} {@code NullPointerException} is
                 * thrown.  If the element structure would become invalid after the removal,
                 * for example if the element is the document root element, {@code
                 * IllegalArgumentException} is thrown.  If the current element structure is
                 * invalid, {@code IllegalStateException} is thrown.</p>
                 * @param elem                      the element to remove
                 * @throws NullPointerException      if the element is {#code null}
                 * @throws IllegalArgumentException  if the element could not be removed
                 * @throws IllegalStateException     if the element structure is invalid
                 * @since 1.7
                 */
                // @ts-ignore
                public removeElement(elem: javax.swing.text.Element): void
                /**
                 * Adds a new style into the logical style hierarchy.  Style attributes
                 * resolve from bottom up so an attribute specified in a child
                 * will override an attribute specified in the parent.
                 * @param nm   the name of the style (must be unique within the
                 *    collection of named styles).  The name may be null if the style
                 *    is unnamed, but the caller is responsible
                 *    for managing the reference returned as an unnamed style can't
                 *    be fetched by name.  An unnamed style may be useful for things
                 *    like character attribute overrides such as found in a style
                 *    run.
                 * @param parent the parent style.  This may be null if unspecified
                 *    attributes need not be resolved in some other style.
                 * @return the style
                 */
                // @ts-ignore
                public addStyle(nm: java.lang.String | string, parent: javax.swing.text.Style): javax.swing.text.Style
                /**
                 * Removes a named style previously added to the document.
                 * @param nm  the name of the style to remove
                 */
                // @ts-ignore
                public removeStyle(nm: java.lang.String | string): void
                /**
                 * Fetches a named style previously added.
                 * @param nm  the name of the style
                 * @return the style
                 */
                // @ts-ignore
                public getStyle(nm: java.lang.String | string): javax.swing.text.Style
                /**
                 * Fetches the list of of style names.
                 * @return all the style names
                 */
                // @ts-ignore
                public getStyleNames(): java.util.Enumeration<any>
                /**
                 * Sets the logical style to use for the paragraph at the
                 * given position.  If attributes aren't explicitly set
                 * for character and paragraph attributes they will resolve
                 * through the logical style assigned to the paragraph, which
                 * in turn may resolve through some hierarchy completely
                 * independent of the element hierarchy in the document.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param pos the offset from the start of the document &gt;= 0
                 * @param s  the logical style to assign to the paragraph, null if none
                 */
                // @ts-ignore
                public setLogicalStyle(pos: number /*int*/, s: javax.swing.text.Style): void
                /**
                 * Fetches the logical style assigned to the paragraph
                 * represented by the given position.
                 * @param p the location to translate to a paragraph
                 *   and determine the logical style assigned &gt;= 0.  This
                 *   is an offset from the start of the document.
                 * @return the style, null if none
                 */
                // @ts-ignore
                public getLogicalStyle(p: number /*int*/): javax.swing.text.Style
                /**
                 * Sets attributes for some part of the document.
                 * A write lock is held by this operation while changes
                 * are being made, and a DocumentEvent is sent to the listeners
                 * after the change has been successfully completed.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param offset the offset in the document &gt;= 0
                 * @param length the length &gt;= 0
                 * @param s the attributes
                 * @param replace true if the previous attributes should be replaced
                 *   before setting the new attributes
                 */
                // @ts-ignore
                public setCharacterAttributes(offset: number /*int*/, length: number /*int*/, s: javax.swing.text.AttributeSet, replace: boolean): void
                /**
                 * Sets attributes for a paragraph.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param offset the offset into the paragraph &gt;= 0
                 * @param length the number of characters affected &gt;= 0
                 * @param s the attributes
                 * @param replace whether to replace existing attributes, or merge them
                 */
                // @ts-ignore
                public setParagraphAttributes(offset: number /*int*/, length: number /*int*/, s: javax.swing.text.AttributeSet, replace: boolean): void
                /**
                 * Gets the paragraph element at the offset <code>pos</code>.
                 * A paragraph consists of at least one child Element, which is usually
                 * a leaf.
                 * @param pos the starting offset &gt;= 0
                 * @return the element
                 */
                // @ts-ignore
                public getParagraphElement(pos: number /*int*/): javax.swing.text.Element
                /**
                 * Gets a character element based on a position.
                 * @param pos the position in the document &gt;= 0
                 * @return the element
                 */
                // @ts-ignore
                public getCharacterElement(pos: number /*int*/): javax.swing.text.Element
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
                 * Updates document structure as a result of text removal.
                 * @param chng a description of the document change
                 */
                // @ts-ignore
                removeUpdate(chng: javax.swing.text.AbstractDocument.DefaultDocumentEvent): void
                /**
                 * Creates the root element to be used to represent the
                 * default document structure.
                 * @return the element base
                 */
                // @ts-ignore
                createDefaultRoot(): javax.swing.text.AbstractDocument.AbstractElement
                /**
                 * Gets the foreground color from an attribute set.
                 * @param attr the attribute set
                 * @return the color
                 */
                // @ts-ignore
                public getForeground(attr: javax.swing.text.AttributeSet): java.awt.Color
                /**
                 * Gets the background color from an attribute set.
                 * @param attr the attribute set
                 * @return the color
                 */
                // @ts-ignore
                public getBackground(attr: javax.swing.text.AttributeSet): java.awt.Color
                /**
                 * Gets the font from an attribute set.
                 * @param attr the attribute set
                 * @return the font
                 */
                // @ts-ignore
                public getFont(attr: javax.swing.text.AttributeSet): java.awt.Font
                /**
                 * Called when any of this document's styles have changed.
                 * Subclasses may wish to be intelligent about what gets damaged.
                 * @param style The Style that has changed.
                 */
                // @ts-ignore
                styleChanged(style: javax.swing.text.Style): void
                /**
                 * Adds a document listener for notification of any changes.
                 * @param listener the listener
                 * @see Document#addDocumentListener
                 */
                // @ts-ignore
                public addDocumentListener(listener: javax.swing.event.DocumentListener): void
                /**
                 * Removes a document listener.
                 * @param listener the listener
                 * @see Document#removeDocumentListener
                 */
                // @ts-ignore
                public removeDocumentListener(listener: javax.swing.event.DocumentListener): void
            }
        }
    }
}
