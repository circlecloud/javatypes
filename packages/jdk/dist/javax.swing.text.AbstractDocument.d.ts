declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * An implementation of the document interface to serve as a
             * basis for implementing various kinds of documents.  At this
             * level there is very little policy, so there is a corresponding
             * increase in difficulty of use.
             * <p>
             * This class implements a locking mechanism for the document.  It
             * allows multiple readers or one writer, and writers must wait until
             * all observers of the document have been notified of a previous
             * change before beginning another mutation to the document.  The
             * read lock is acquired and released using the <code>render</code>
             * method.  A write lock is acquired by the methods that mutate the
             * document, and are held for the duration of the method call.
             * Notification is done on the thread that produced the mutation,
             * and the thread has full read access to the document for the
             * duration of the notification, but other readers are kept out
             * until the notification has finished.  The notification is a
             * beans event notification which does not allow any further
             * mutations until all listeners have been notified.
             * <p>
             * Any models subclassed from this class and used in conjunction
             * with a text component that has a look and feel implementation
             * that is derived from BasicTextUI may be safely updated
             * asynchronously, because all access to the View hierarchy
             * is serialized by BasicTextUI if the document is of type
             * <code>AbstractDocument</code>.  The locking assumes that an
             * independent thread will access the View hierarchy only from
             * the DocumentListener methods, and that there will be only
             * one event thread active at a time.
             * <p>
             * If concurrency support is desired, there are the following
             * additional implications.  The code path for any DocumentListener
             * implementation and any UndoListener implementation must be threadsafe,
             * and not access the component lock if trying to be safe from deadlocks.
             * The <code>repaint</code> and <code>revalidate</code> methods
             * on JComponent are safe.
             * <p>
             * AbstractDocument models an implied break at the end of the document.
             * Among other things this allows you to position the caret after the last
             * character. As a result of this, <code>getLength</code> returns one less
             * than the length of the Content. If you create your own Content, be
             * sure and initialize it to have an additional character. Refer to
             * StringContent and GapContent for examples of this. Another implication
             * of this is that Elements that model the implied end character will have
             * an endOffset == (getLength() + 1). For example, in DefaultStyledDocument
             * <code>getParagraphElement(getLength()).getEndOffset() == getLength() + 1
             * </code>.
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
             */
            // @ts-ignore
            class AbstractDocument extends java.lang.Object implements javax.swing.text.Document, java.io.Serializable {
                /**
                 * Constructs a new <code>AbstractDocument</code>, wrapped around some
                 * specified content storage mechanism.
                 * @param data the content
                 */
                // @ts-ignore
                constructor(data: javax.swing.text.AbstractDocument.Content)
                /**
                 * Constructs a new <code>AbstractDocument</code>, wrapped around some
                 * specified content storage mechanism.
                 * @param data the content
                 * @param context the attribute context
                 */
                // @ts-ignore
                constructor(data: javax.swing.text.AbstractDocument.Content, context: javax.swing.text.AbstractDocument.AttributeContext)
                /**
                 * The event listener list for the document.
                 */
                // @ts-ignore
                listenerList: javax.swing.event.EventListenerList
                /**
                 * Error message to indicate a bad location.
                 */
                // @ts-ignore
                readonly BAD_LOCATION: string
                /**
                 * Name of elements used to represent paragraphs
                 */
                // @ts-ignore
                readonly ParagraphElementName: string
                /**
                 * Name of elements used to represent content
                 */
                // @ts-ignore
                readonly ContentElementName: string
                /**
                 * Name of elements used to hold sections (lines/paragraphs).
                 */
                // @ts-ignore
                readonly SectionElementName: string
                /**
                 * Name of elements used to hold a unidirectional run
                 */
                // @ts-ignore
                readonly BidiElementName: string
                /**
                 * Name of the attribute used to specify element
                 * names.
                 */
                // @ts-ignore
                readonly ElementNameAttribute: string
                /**
                 * Supports managing a set of properties. Callers
                 * can use the <code>documentProperties</code> dictionary
                 * to annotate the document with document-wide properties.
                 * @return a non-<code>null</code> <code>Dictionary</code>
                 * @see #setDocumentProperties
                 */
                // @ts-ignore
                getDocumentProperties(): java.util.Dictionary<java.lang.Object, java.lang.Object>
                /**
                 * Replaces the document properties dictionary for this document.
                 * @param x the new dictionary
                 * @see #getDocumentProperties
                 */
                // @ts-ignore
                setDocumentProperties(x: java.util.Dictionary<java.lang.Object, java.lang.Object>): void
                /**
                 * Notifies all listeners that have registered interest for
                 * notification on this event type.  The event instance
                 * is lazily created using the parameters passed into
                 * the fire method.
                 * @param e the event
                 * @see EventListenerList
                 */
                // @ts-ignore
                fireInsertUpdate(e: javax.swing.event.DocumentEvent): void
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
                fireRemoveUpdate(e: javax.swing.event.DocumentEvent): void
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
                /**
                 * Returns an array of all the objects currently registered
                 * as <code><em>Foo</em>Listener</code>s
                 * upon this document.
                 * <code><em>Foo</em>Listener</code>s are registered using the
                 * <code>add<em>Foo</em>Listener</code> method.
                 * <p>
                 * You can specify the <code>listenerType</code> argument
                 * with a class literal, such as
                 * <code><em>Foo</em>Listener.class</code>.
                 * For example, you can query a
                 * document <code>d</code>
                 * for its document listeners with the following code:
                 * <pre>DocumentListener[] mls = (DocumentListener[])(d.getListeners(DocumentListener.class));</pre>
                 * If no such listeners exist, this method returns an empty array.
                 * @param listenerType the type of listeners requested; this parameter
                 *           should specify an interface that descends from
                 *           <code>java.util.EventListener</code>
                 * @return an array of all objects registered as
                 *           <code><em>Foo</em>Listener</code>s on this component,
                 *           or an empty array if no such
                 *           listeners have been added
                 * @exception ClassCastException if <code>listenerType</code>
                 *           doesn't specify a class or interface that implements
                 *           <code>java.util.EventListener</code>
                 * @see #getDocumentListeners
                 * @see #getUndoableEditListeners
                 * @since 1.3
                 */
                // @ts-ignore
                getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
                /**
                 * Gets the asynchronous loading priority.  If less than zero,
                 * the document should not be loaded asynchronously.
                 * @return the asynchronous loading priority, or <code>-1</code>
                 *    if the document should not be loaded asynchronously
                 */
                // @ts-ignore
                getAsynchronousLoadPriority(): int
                /**
                 * Sets the asynchronous loading priority.
                 * @param p the new asynchronous loading priority; a value
                 *    less than zero indicates that the document should not be
                 *    loaded asynchronously
                 */
                // @ts-ignore
                setAsynchronousLoadPriority(p: number /*int*/): void
                /**
                 * Sets the <code>DocumentFilter</code>. The <code>DocumentFilter</code>
                 * is passed <code>insert</code> and <code>remove</code> to conditionally
                 * allow inserting/deleting of the text.  A <code>null</code> value
                 * indicates that no filtering will occur.
                 * @param filter the <code>DocumentFilter</code> used to constrain text
                 * @see #getDocumentFilter
                 * @since 1.4
                 */
                // @ts-ignore
                setDocumentFilter(filter: javax.swing.text.DocumentFilter): void
                /**
                 * Returns the <code>DocumentFilter</code> that is responsible for
                 * filtering of insertion/removal. A <code>null</code> return value
                 * implies no filtering is to occur.
                 * @since 1.4
                 * @see #setDocumentFilter
                 * @return the DocumentFilter
                 */
                // @ts-ignore
                getDocumentFilter(): javax.swing.text.DocumentFilter
                /**
                 * This allows the model to be safely rendered in the presence
                 * of currency, if the model supports being updated asynchronously.
                 * The given runnable will be executed in a way that allows it
                 * to safely read the model with no changes while the runnable
                 * is being executed.  The runnable itself may <em>not</em>
                 * make any mutations.
                 * <p>
                 * This is implemented to acquire a read lock for the duration
                 * of the runnables execution.  There may be multiple runnables
                 * executing at the same time, and all writers will be blocked
                 * while there are active rendering runnables.  If the runnable
                 * throws an exception, its lock will be safely released.
                 * There is no protection against a runnable that never exits,
                 * which will effectively leave the document locked for it's
                 * lifetime.
                 * <p>
                 * If the given runnable attempts to make any mutations in
                 * this implementation, a deadlock will occur.  There is
                 * no tracking of individual rendering threads to enable
                 * detecting this situation, but a subclass could incur
                 * the overhead of tracking them and throwing an error.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param r the renderer to execute
                 */
                // @ts-ignore
                render(r: java.lang.Runnable): void
                /**
                 * Returns the length of the data.  This is the number of
                 * characters of content that represents the users data.
                 * @return the length &gt;= 0
                 * @see Document#getLength
                 */
                // @ts-ignore
                getLength(): int
                /**
                 * Adds a document listener for notification of any changes.
                 * @param listener the <code>DocumentListener</code> to add
                 * @see Document#addDocumentListener
                 */
                // @ts-ignore
                addDocumentListener(listener: javax.swing.event.DocumentListener): void
                /**
                 * Removes a document listener.
                 * @param listener the <code>DocumentListener</code> to remove
                 * @see Document#removeDocumentListener
                 */
                // @ts-ignore
                removeDocumentListener(listener: javax.swing.event.DocumentListener): void
                /**
                 * Returns an array of all the document listeners
                 * registered on this document.
                 * @return all of this document's <code>DocumentListener</code>s
                 *          or an empty array if no document listeners are
                 *          currently registered
                 * @see #addDocumentListener
                 * @see #removeDocumentListener
                 * @since 1.4
                 */
                // @ts-ignore
                getDocumentListeners(): javax.swing.event.DocumentListener[]
                /**
                 * Adds an undo listener for notification of any changes.
                 * Undo/Redo operations performed on the <code>UndoableEdit</code>
                 * will cause the appropriate DocumentEvent to be fired to keep
                 * the view(s) in sync with the model.
                 * @param listener the <code>UndoableEditListener</code> to add
                 * @see Document#addUndoableEditListener
                 */
                // @ts-ignore
                addUndoableEditListener(listener: javax.swing.event.UndoableEditListener): void
                /**
                 * Removes an undo listener.
                 * @param listener the <code>UndoableEditListener</code> to remove
                 * @see Document#removeDocumentListener
                 */
                // @ts-ignore
                removeUndoableEditListener(listener: javax.swing.event.UndoableEditListener): void
                /**
                 * Returns an array of all the undoable edit listeners
                 * registered on this document.
                 * @return all of this document's <code>UndoableEditListener</code>s
                 *          or an empty array if no undoable edit listeners are
                 *          currently registered
                 * @see #addUndoableEditListener
                 * @see #removeUndoableEditListener
                 * @since 1.4
                 */
                // @ts-ignore
                getUndoableEditListeners(): javax.swing.event.UndoableEditListener[]
                /**
                 * A convenience method for looking up a property value. It is
                 * equivalent to:
                 * <pre>
                 * getDocumentProperties().get(key);
                 * </pre>
                 * @param key the non-<code>null</code> property key
                 * @return the value of this property or <code>null</code>
                 * @see #getDocumentProperties
                 */
                // @ts-ignore
                getProperty(key: any): java.lang.Object
                /**
                 * A convenience method for storing up a property value.  It is
                 * equivalent to:
                 * <pre>
                 * getDocumentProperties().put(key, value);
                 * </pre>
                 * If <code>value</code> is <code>null</code> this method will
                 * remove the property.
                 * @param key the non-<code>null</code> key
                 * @param value the property value
                 * @see #getDocumentProperties
                 */
                // @ts-ignore
                putProperty(key: any, value: any): void
                /**
                 * Removes some content from the document.
                 * Removing content causes a write lock to be held while the
                 * actual changes are taking place.  Observers are notified
                 * of the change on the thread that called this method.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param offs the starting offset &gt;= 0
                 * @param len the number of characters to remove &gt;= 0
                 * @exception BadLocationException  the given remove position is not a valid
                 *    position within the document
                 * @see Document#remove
                 */
                // @ts-ignore
                remove(offs: number /*int*/, len: number /*int*/): void
                /**
                 * Deletes the region of text from <code>offset</code> to
                 * <code>offset + length</code>, and replaces it with <code>text</code>.
                 * It is up to the implementation as to how this is implemented, some
                 * implementations may treat this as two distinct operations: a remove
                 * followed by an insert, others may treat the replace as one atomic
                 * operation.
                 * @param offset index of child element
                 * @param length length of text to delete, may be 0 indicating don't
                 *                delete anything
                 * @param text text to insert, <code>null</code> indicates no text to insert
                 * @param attrs AttributeSet indicating attributes of inserted text,
                 *               <code>null</code>
                 *               is legal, and typically treated as an empty attributeset,
                 *               but exact interpretation is left to the subclass
                 * @exception BadLocationException the given position is not a valid
                 *             position within the document
                 * @since 1.4
                 */
                // @ts-ignore
                replace(offset: number /*int*/, length: number /*int*/, text: string, attrs: javax.swing.text.AttributeSet): void
                /**
                 * Inserts some content into the document.
                 * Inserting content causes a write lock to be held while the
                 * actual changes are taking place, followed by notification
                 * to the observers on the thread that grabbed the write lock.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param offs the starting offset &gt;= 0
                 * @param str the string to insert; does nothing with null/empty strings
                 * @param a the attributes for the inserted content
                 * @exception BadLocationException  the given insert position is not a valid
                 *    position within the document
                 * @see Document#insertString
                 */
                // @ts-ignore
                insertString(offs: number /*int*/, str: string, a: javax.swing.text.AttributeSet): void
                /**
                 * Gets a sequence of text from the document.
                 * @param offset the starting offset &gt;= 0
                 * @param length the number of characters to retrieve &gt;= 0
                 * @return the text
                 * @exception BadLocationException  the range given includes a position
                 *    that is not a valid position within the document
                 * @see Document#getText
                 */
                // @ts-ignore
                getText(offset: number /*int*/, length: number /*int*/): java.lang.String
                /**
                 * Fetches the text contained within the given portion
                 * of the document.
                 * <p>
                 * If the partialReturn property on the txt parameter is false, the
                 * data returned in the Segment will be the entire length requested and
                 * may or may not be a copy depending upon how the data was stored.
                 * If the partialReturn property is true, only the amount of text that
                 * can be returned without creating a copy is returned.  Using partial
                 * returns will give better performance for situations where large
                 * parts of the document are being scanned.  The following is an example
                 * of using the partial return to access the entire document:
                 * <pre>
                 * &nbsp; int nleft = doc.getDocumentLength();
                 * &nbsp; Segment text = new Segment();
                 * &nbsp; int offs = 0;
                 * &nbsp; text.setPartialReturn(true);
                 * &nbsp; while (nleft &gt; 0) {
                 * &nbsp;     doc.getText(offs, nleft, text);
                 * &nbsp;     // do something with text
                 * &nbsp;     nleft -= text.count;
                 * &nbsp;     offs += text.count;
                 * &nbsp; }
                 * </pre>
                 * @param offset the starting offset &gt;= 0
                 * @param length the number of characters to retrieve &gt;= 0
                 * @param txt the Segment object to retrieve the text into
                 * @exception BadLocationException  the range given includes a position
                 *    that is not a valid position within the document
                 */
                // @ts-ignore
                getText(offset: number /*int*/, length: number /*int*/, txt: javax.swing.text.Segment): void
                /**
                 * Returns a position that will track change as the document
                 * is altered.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param offs the position in the model &gt;= 0
                 * @return the position
                 * @exception BadLocationException  if the given position does not
                 *    represent a valid location in the associated document
                 * @see Document#createPosition
                 */
                // @ts-ignore
                createPosition(offs: number /*int*/): javax.swing.text.Position
                /**
                 * Returns a position that represents the start of the document.  The
                 * position returned can be counted on to track change and stay
                 * located at the beginning of the document.
                 * @return the position
                 */
                // @ts-ignore
                getStartPosition(): javax.swing.text.Position
                /**
                 * Returns a position that represents the end of the document.  The
                 * position returned can be counted on to track change and stay
                 * located at the end of the document.
                 * @return the position
                 */
                // @ts-ignore
                getEndPosition(): javax.swing.text.Position
                /**
                 * Gets all root elements defined.  Typically, there
                 * will only be one so the default implementation
                 * is to return the default root element.
                 * @return the root element
                 */
                // @ts-ignore
                getRootElements(): javax.swing.text.Element[]
                /**
                 * Returns the root element that views should be based upon
                 * unless some other mechanism for assigning views to element
                 * structures is provided.
                 * @return the root element
                 * @see Document#getDefaultRootElement
                 */
                // @ts-ignore
                abstract getDefaultRootElement(): javax.swing.text.Element
                /**
                 * Returns the root element of the bidirectional structure for this
                 * document.  Its children represent character runs with a given
                 * Unicode bidi level.
                 */
                // @ts-ignore
                getBidiRootElement(): javax.swing.text.Element
                /**
                 * Get the paragraph element containing the given position.  Sub-classes
                 * must define for themselves what exactly constitutes a paragraph.  They
                 * should keep in mind however that a paragraph should at least be the
                 * unit of text over which to run the Unicode bidirectional algorithm.
                 * @param pos the starting offset &gt;= 0
                 * @return the element
                 */
                // @ts-ignore
                abstract getParagraphElement(pos: number /*int*/): javax.swing.text.Element
                /**
                 * Fetches the context for managing attributes.  This
                 * method effectively establishes the strategy used
                 * for compressing AttributeSet information.
                 * @return the context
                 */
                // @ts-ignore
                getAttributeContext(): javax.swing.text.AbstractDocument.AttributeContext
                /**
                 * Updates document structure as a result of text insertion.  This
                 * will happen within a write lock.  If a subclass of
                 * this class reimplements this method, it should delegate to the
                 * superclass as well.
                 * @param chng a description of the change
                 * @param attr the attributes for the change
                 */
                // @ts-ignore
                insertUpdate(chng: javax.swing.text.AbstractDocument.DefaultDocumentEvent, attr: javax.swing.text.AttributeSet): void
                /**
                 * Updates any document structure as a result of text removal.  This
                 * method is called before the text is actually removed from the Content.
                 * This will happen within a write lock. If a subclass
                 * of this class reimplements this method, it should delegate to the
                 * superclass as well.
                 * @param chng a description of the change
                 */
                // @ts-ignore
                removeUpdate(chng: javax.swing.text.AbstractDocument.DefaultDocumentEvent): void
                /**
                 * Updates any document structure as a result of text removal.  This
                 * method is called after the text has been removed from the Content.
                 * This will happen within a write lock. If a subclass
                 * of this class reimplements this method, it should delegate to the
                 * superclass as well.
                 * @param chng a description of the change
                 */
                // @ts-ignore
                postRemoveUpdate(chng: javax.swing.text.AbstractDocument.DefaultDocumentEvent): void
                /**
                 * Gives a diagnostic dump.
                 * @param out the output stream
                 */
                // @ts-ignore
                dump(out: java.io.PrintStream): void
                /**
                 * Gets the content for the document.
                 * @return the content
                 */
                // @ts-ignore
                getContent(): javax.swing.text.AbstractDocument.Content
                /**
                 * Creates a document leaf element.
                 * Hook through which elements are created to represent the
                 * document structure.  Because this implementation keeps
                 * structure and content separate, elements grow automatically
                 * when content is extended so splits of existing elements
                 * follow.  The document itself gets to decide how to generate
                 * elements to give flexibility in the type of elements used.
                 * @param parent the parent element
                 * @param a the attributes for the element
                 * @param p0 the beginning of the range &gt;= 0
                 * @param p1 the end of the range &gt;= p0
                 * @return the new element
                 */
                // @ts-ignore
                createLeafElement(parent: javax.swing.text.Element, a: javax.swing.text.AttributeSet, p0: number /*int*/, p1: number /*int*/): javax.swing.text.Element
                /**
                 * Creates a document branch element, that can contain other elements.
                 * @param parent the parent element
                 * @param a the attributes
                 * @return the element
                 */
                // @ts-ignore
                createBranchElement(parent: javax.swing.text.Element, a: javax.swing.text.AttributeSet): javax.swing.text.Element
                /**
                 * Fetches the current writing thread if there is one.
                 * This can be used to distinguish whether a method is
                 * being called as part of an existing modification or
                 * if a lock needs to be acquired and a new transaction
                 * started.
                 * @return the thread actively modifying the document
                 *   or <code>null</code> if there are no modifications in progress
                 */
                // @ts-ignore
                getCurrentWriter(): java.lang.Thread
                /**
                 * Acquires a lock to begin mutating the document this lock
                 * protects.  There can be no writing, notification of changes, or
                 * reading going on in order to gain the lock.  Additionally a thread is
                 * allowed to gain more than one <code>writeLock</code>,
                 * as long as it doesn't attempt to gain additional <code>writeLock</code>s
                 * from within document notification.  Attempting to gain a
                 * <code>writeLock</code> from within a DocumentListener notification will
                 * result in an <code>IllegalStateException</code>.  The ability
                 * to obtain more than one <code>writeLock</code> per thread allows
                 * subclasses to gain a writeLock, perform a number of operations, then
                 * release the lock.
                 * <p>
                 * Calls to <code>writeLock</code>
                 * must be balanced with calls to <code>writeUnlock</code>, else the
                 * <code>Document</code> will be left in a locked state so that no
                 * reading or writing can be done.
                 * @exception IllegalStateException thrown on illegal lock
                 *   attempt.  If the document is implemented properly, this can
                 *   only happen if a document listener attempts to mutate the
                 *   document.  This situation violates the bean event model
                 *   where order of delivery is not guaranteed and all listeners
                 *   should be notified before further mutations are allowed.
                 */
                // @ts-ignore
                writeLock(): void
                /**
                 * Releases a write lock previously obtained via <code>writeLock</code>.
                 * After decrementing the lock count if there are no outstanding locks
                 * this will allow a new writer, or readers.
                 * @see #writeLock
                 */
                // @ts-ignore
                writeUnlock(): void
                /**
                 * Acquires a lock to begin reading some state from the
                 * document.  There can be multiple readers at the same time.
                 * Writing blocks the readers until notification of the change
                 * to the listeners has been completed.  This method should
                 * be used very carefully to avoid unintended compromise
                 * of the document.  It should always be balanced with a
                 * <code>readUnlock</code>.
                 * @see #readUnlock
                 */
                // @ts-ignore
                readLock(): void
                /**
                 * Does a read unlock.  This signals that one
                 * of the readers is done.  If there are no more readers
                 * then writing can begin again.  This should be balanced
                 * with a readLock, and should occur in a finally statement
                 * so that the balance is guaranteed.  The following is an
                 * example.
                 * <pre><code>
                 * &nbsp;   readLock();
                 * &nbsp;   try {
                 * &nbsp;       // do something
                 * &nbsp;   } finally {
                 * &nbsp;       readUnlock();
                 * &nbsp;   }
                 * </code></pre>
                 * @see #readLock
                 */
                // @ts-ignore
                readUnlock(): void
            }
        }
    }
}
