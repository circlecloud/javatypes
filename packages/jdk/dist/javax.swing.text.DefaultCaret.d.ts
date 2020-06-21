declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A default implementation of Caret.  The caret is rendered as
             * a vertical line in the color specified by the CaretColor property
             * of the associated JTextComponent.  It can blink at the rate specified
             * by the BlinkRate property.
             * <p>
             * This implementation expects two sources of asynchronous notification.
             * The timer thread fires asynchronously, and causes the caret to simply
             * repaint the most recent bounding box.  The caret also tracks change
             * as the document is modified.  Typically this will happen on the
             * event dispatch thread as a result of some mouse or keyboard event.
             * The caret behavior on both synchronous and asynchronous documents updates
             * is controlled by <code>UpdatePolicy</code> property. The repaint of the
             * new caret location will occur on the event thread in any case, as calls to
             * <code>modelToView</code> are only safe on the event thread.
             * <p>
             * The caret acts as a mouse and focus listener on the text component
             * it has been installed in, and defines the caret semantics based upon
             * those events.  The listener methods can be reimplemented to change the
             * semantics.
             * By default, the first mouse button will be used to set focus and caret
             * position.  Dragging the mouse pointer with the first mouse button will
             * sweep out a selection that is contiguous in the model.  If the associated
             * text component is editable, the caret will become visible when focus
             * is gained, and invisible when focus is lost.
             * <p>
             * The Highlighter bound to the associated text component is used to
             * render the selection by default.
             * Selection appearance can be customized by supplying a
             * painter to use for the highlights.  By default a painter is used that
             * will render a solid color as specified in the associated text component
             * in the <code>SelectionColor</code> property.  This can easily be changed
             * by reimplementing the
             * {@link #getSelectionPainter getSelectionPainter}
             * method.
             * <p>
             * A customized caret appearance can be achieved by reimplementing
             * the paint method.  If the paint method is changed, the damage method
             * should also be reimplemented to cause a repaint for the area needed
             * to render the caret.  The caret extends the Rectangle class which
             * is used to hold the bounding box for where the caret was last rendered.
             * This enables the caret to repaint in a thread-safe manner when the
             * caret moves without making a call to modelToView which is unstable
             * between model updates and view repair (i.e. the order of delivery
             * to DocumentListeners is not guaranteed).
             * <p>
             * The magic caret position is set to null when the caret position changes.
             * A timer is used to determine the new location (after the caret change).
             * When the timer fires, if the magic caret position is still null it is
             * reset to the current caret position. Any actions that change
             * the caret position and want the magic caret position to remain the
             * same, must remember the magic caret position, change the cursor, and
             * then set the magic caret position to its original value. This has the
             * benefit that only actions that want the magic caret position to persist
             * (such as open/down) need to know about it.
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
             * @see Caret
             */
            // @ts-ignore
            class DefaultCaret extends java.awt.Rectangle implements javax.swing.text.Caret, java.awt.event.FocusListener, java.awt.event.MouseListener, java.awt.event.MouseMotionListener {
                /**
                 * Constructs a default caret.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Indicates that the caret position is to be updated only when
                 * document changes are performed on the Event Dispatching Thread.
                 * @see #setUpdatePolicy
                 * @see #getUpdatePolicy
                 * @since 1.5
                 */
                // @ts-ignore
                public static readonly UPDATE_WHEN_ON_EDT: number /*int*/
                /**
                 * Indicates that the caret should remain at the same
                 * absolute position in the document regardless of any document
                 * updates, except when the document length becomes less than
                 * the current caret position due to removal. In that case the caret
                 * position is adjusted to the end of the document.
                 * @see #setUpdatePolicy
                 * @see #getUpdatePolicy
                 * @since 1.5
                 */
                // @ts-ignore
                public static readonly NEVER_UPDATE: number /*int*/
                /**
                 * Indicates that the caret position is to be <b>always</b>
                 * updated accordingly to the document changes regardless whether
                 * the document updates are performed on the Event Dispatching Thread
                 * or not.
                 * @see #setUpdatePolicy
                 * @see #getUpdatePolicy
                 * @since 1.5
                 */
                // @ts-ignore
                public static readonly ALWAYS_UPDATE: number /*int*/
                /**
                 * The event listener list.
                 */
                // @ts-ignore
                listenerList: javax.swing.event.EventListenerList
                /**
                 * The change event for the model.
                 * Only one ChangeEvent is needed per model instance since the
                 * event's only (read-only) state is the source property.  The source
                 * of events generated here is always "this".
                 */
                // @ts-ignore
                changeEvent: javax.swing.event.ChangeEvent
                /**
                 * Sets the caret movement policy on the document updates. Normally
                 * the caret updates its absolute position within the document on
                 * insertions occurred before or at the caret position and
                 * on removals before the caret position. 'Absolute position'
                 * means here the position relative to the start of the document.
                 * For example if
                 * a character is typed within editable text component it is inserted
                 * at the caret position and the caret moves to the next absolute
                 * position within the document due to insertion and if
                 * <code>BACKSPACE</code> is typed then caret decreases its absolute
                 * position due to removal of a character before it. Sometimes
                 * it may be useful to turn off the caret position updates so that
                 * the caret stays at the same absolute position within the
                 * document position regardless of any document updates.
                 * <p>
                 * The following update policies are allowed:
                 * <ul>
                 * <li><code>NEVER_UPDATE</code>: the caret stays at the same
                 * absolute position in the document regardless of any document
                 * updates, except when document length becomes less than
                 * the current caret position due to removal. In that case caret
                 * position is adjusted to the end of the document.
                 * The caret doesn't try to keep itself visible by scrolling
                 * the associated view when using this policy. </li>
                 * <li><code>ALWAYS_UPDATE</code>: the caret always tracks document
                 * changes. For regular changes it increases its position
                 * if an insertion occurs before or at its current position,
                 * and decreases position if a removal occurs before
                 * its current position. For undo/redo updates it is always
                 * moved to the position where update occurred. The caret
                 * also tries to keep itself visible by calling
                 * <code>adjustVisibility</code> method.</li>
                 * <li><code>UPDATE_WHEN_ON_EDT</code>: acts like <code>ALWAYS_UPDATE</code>
                 * if the document updates are performed on the Event Dispatching Thread
                 * and like <code>NEVER_UPDATE</code> if updates are performed on
                 * other thread. </li>
                 * </ul> <p>
                 * The default property value is <code>UPDATE_WHEN_ON_EDT</code>.
                 * @param policy one of the following values : <code>UPDATE_WHEN_ON_EDT</code>,
                 *  <code>NEVER_UPDATE</code>, <code>ALWAYS_UPDATE</code>
                 * @throws IllegalArgumentException if invalid value is passed
                 * @see #getUpdatePolicy
                 * @see #adjustVisibility
                 * @see #UPDATE_WHEN_ON_EDT
                 * @see #NEVER_UPDATE
                 * @see #ALWAYS_UPDATE
                 * @since 1.5
                 */
                // @ts-ignore
                public setUpdatePolicy(policy: number /*int*/): void
                /**
                 * Gets the caret movement policy on document updates.
                 * @return one of the following values : <code>UPDATE_WHEN_ON_EDT</code>,
                 *  <code>NEVER_UPDATE</code>, <code>ALWAYS_UPDATE</code>
                 * @see #setUpdatePolicy
                 * @see #UPDATE_WHEN_ON_EDT
                 * @see #NEVER_UPDATE
                 * @see #ALWAYS_UPDATE
                 * @since 1.5
                 */
                // @ts-ignore
                public getUpdatePolicy(): number /*int*/
                /**
                 * Gets the text editor component that this caret is
                 * is bound to.
                 * @return the component
                 */
                // @ts-ignore
                getComponent(): javax.swing.text.JTextComponent
                /**
                 * Cause the caret to be painted.  The repaint
                 * area is the bounding box of the caret (i.e.
                 * the caret rectangle or <em>this</em>).
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 */
                // @ts-ignore
                repaint(): void
                /**
                 * Damages the area surrounding the caret to cause
                 * it to be repainted in a new location.  If paint()
                 * is reimplemented, this method should also be
                 * reimplemented.  This method should update the
                 * caret bounds (x, y, width, and height).
                 * @param r  the current location of the caret
                 * @see #paint
                 */
                // @ts-ignore
                damage(r: java.awt.Rectangle): void
                /**
                 * Scrolls the associated view (if necessary) to make
                 * the caret visible.  Since how this should be done
                 * is somewhat of a policy, this method can be
                 * reimplemented to change the behavior.  By default
                 * the scrollRectToVisible method is called on the
                 * associated component.
                 * @param nloc the new position to scroll to
                 */
                // @ts-ignore
                adjustVisibility(nloc: java.awt.Rectangle): void
                /**
                 * Gets the painter for the Highlighter.
                 * @return the painter
                 */
                // @ts-ignore
                getSelectionPainter(): javax.swing.text.Highlighter.HighlightPainter
                /**
                 * Tries to set the position of the caret from
                 * the coordinates of a mouse event, using viewToModel().
                 * @param e the mouse event
                 */
                // @ts-ignore
                positionCaret(e: java.awt.event.MouseEvent): void
                /**
                 * Tries to move the position of the caret from
                 * the coordinates of a mouse event, using viewToModel().
                 * This will cause a selection if the dot and mark
                 * are different.
                 * @param e the mouse event
                 */
                // @ts-ignore
                moveCaret(e: java.awt.event.MouseEvent): void
                /**
                 * Called when the component containing the caret gains
                 * focus.  This is implemented to set the caret to visible
                 * if the component is editable.
                 * @param e the focus event
                 * @see FocusListener#focusGained
                 */
                // @ts-ignore
                public focusGained(e: java.awt.event.FocusEvent): void
                /**
                 * Called when the component containing the caret loses
                 * focus.  This is implemented to set the caret to visibility
                 * to false.
                 * @param e the focus event
                 * @see FocusListener#focusLost
                 */
                // @ts-ignore
                public focusLost(e: java.awt.event.FocusEvent): void
                /**
                 * Called when the mouse is clicked.  If the click was generated
                 * from button1, a double click selects a word,
                 * and a triple click the current line.
                 * @param e the mouse event
                 * @see MouseListener#mouseClicked
                 */
                // @ts-ignore
                public mouseClicked(e: java.awt.event.MouseEvent): void
                /**
                 * If button 1 is pressed, this is implemented to
                 * request focus on the associated text component,
                 * and to set the caret position. If the shift key is held down,
                 * the caret will be moved, potentially resulting in a selection,
                 * otherwise the
                 * caret position will be set to the new location.  If the component
                 * is not enabled, there will be no request for focus.
                 * @param e the mouse event
                 * @see MouseListener#mousePressed
                 */
                // @ts-ignore
                public mousePressed(e: java.awt.event.MouseEvent): void
                /**
                 * Called when the mouse is released.
                 * @param e the mouse event
                 * @see MouseListener#mouseReleased
                 */
                // @ts-ignore
                public mouseReleased(e: java.awt.event.MouseEvent): void
                /**
                 * Called when the mouse enters a region.
                 * @param e the mouse event
                 * @see MouseListener#mouseEntered
                 */
                // @ts-ignore
                public mouseEntered(e: java.awt.event.MouseEvent): void
                /**
                 * Called when the mouse exits a region.
                 * @param e the mouse event
                 * @see MouseListener#mouseExited
                 */
                // @ts-ignore
                public mouseExited(e: java.awt.event.MouseEvent): void
                /**
                 * Moves the caret position
                 * according to the mouse pointer's current
                 * location.  This effectively extends the
                 * selection.  By default, this is only done
                 * for mouse button 1.
                 * @param e the mouse event
                 * @see MouseMotionListener#mouseDragged
                 */
                // @ts-ignore
                public mouseDragged(e: java.awt.event.MouseEvent): void
                /**
                 * Called when the mouse is moved.
                 * @param e the mouse event
                 * @see MouseMotionListener#mouseMoved
                 */
                // @ts-ignore
                public mouseMoved(e: java.awt.event.MouseEvent): void
                /**
                 * Renders the caret as a vertical line.  If this is reimplemented
                 * the damage method should also be reimplemented as it assumes the
                 * shape of the caret is a vertical line.  Sets the caret color to
                 * the value returned by getCaretColor().
                 * <p>
                 * If there are multiple text directions present in the associated
                 * document, a flag indicating the caret bias will be rendered.
                 * This will occur only if the associated document is a subclass
                 * of AbstractDocument and there are multiple bidi levels present
                 * in the bidi element structure (i.e. the text has multiple
                 * directions associated with it).
                 * @param g the graphics context
                 * @see #damage
                 */
                // @ts-ignore
                public paint(g: java.awt.Graphics): void
                /**
                 * Called when the UI is being installed into the
                 * interface of a JTextComponent.  This can be used
                 * to gain access to the model that is being navigated
                 * by the implementation of this interface.  Sets the dot
                 * and mark to 0, and establishes document, property change,
                 * focus, mouse, and mouse motion listeners.
                 * @param c the component
                 * @see Caret#install
                 */
                // @ts-ignore
                public install(c: javax.swing.text.JTextComponent): void
                /**
                 * Called when the UI is being removed from the
                 * interface of a JTextComponent.  This is used to
                 * unregister any listeners that were attached.
                 * @param c the component
                 * @see Caret#deinstall
                 */
                // @ts-ignore
                public deinstall(c: javax.swing.text.JTextComponent): void
                /**
                 * Adds a listener to track whenever the caret position has
                 * been changed.
                 * @param l the listener
                 * @see Caret#addChangeListener
                 */
                // @ts-ignore
                public addChangeListener(l: javax.swing.event.ChangeListener): void
                /**
                 * Removes a listener that was tracking caret position changes.
                 * @param l the listener
                 * @see Caret#removeChangeListener
                 */
                // @ts-ignore
                public removeChangeListener(l: javax.swing.event.ChangeListener): void
                /**
                 * Returns an array of all the change listeners
                 * registered on this caret.
                 * @return all of this caret's <code>ChangeListener</code>s
                 *          or an empty
                 *          array if no change listeners are currently registered
                 * @see #addChangeListener
                 * @see #removeChangeListener
                 * @since 1.4
                 */
                // @ts-ignore
                public getChangeListeners(): javax.swing.event.ChangeListener[]
                /**
                 * Notifies all listeners that have registered interest for
                 * notification on this event type.  The event instance
                 * is lazily created using the parameters passed into
                 * the fire method.  The listener list is processed last to first.
                 * @see EventListenerList
                 */
                // @ts-ignore
                fireStateChanged(): void
                /**
                 * Returns an array of all the objects currently registered
                 * as <code><em>Foo</em>Listener</code>s
                 * upon this caret.
                 * <code><em>Foo</em>Listener</code>s are registered using the
                 * <code>add<em>Foo</em>Listener</code> method.
                 * <p>
                 * You can specify the <code>listenerType</code> argument
                 * with a class literal,
                 * such as
                 * <code><em>Foo</em>Listener.class</code>.
                 * For example, you can query a
                 * <code>DefaultCaret</code> <code>c</code>
                 * for its change listeners with the following code:
                 * <pre>ChangeListener[] cls = (ChangeListener[])(c.getListeners(ChangeListener.class));</pre>
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
                 * @see #getChangeListeners
                 * @since 1.3
                 */
                // @ts-ignore
                public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
                /**
                 * Changes the selection visibility.
                 * @param vis the new visibility
                 */
                // @ts-ignore
                public setSelectionVisible(vis: boolean): void
                /**
                 * Checks whether the current selection is visible.
                 * @return true if the selection is visible
                 */
                // @ts-ignore
                public isSelectionVisible(): boolean
                /**
                 * Determines if the caret is currently active.
                 * <p>
                 * This method returns whether or not the <code>Caret</code>
                 * is currently in a blinking state. It does not provide
                 * information as to whether it is currently blinked on or off.
                 * To determine if the caret is currently painted use the
                 * <code>isVisible</code> method.
                 * @return <code>true</code> if active else <code>false</code>
                 * @see #isVisible
                 * @since 1.5
                 */
                // @ts-ignore
                public isActive(): boolean
                /**
                 * Indicates whether or not the caret is currently visible. As the
                 * caret flashes on and off the return value of this will change
                 * between true, when the caret is painted, and false, when the
                 * caret is not painted. <code>isActive</code> indicates whether
                 * or not the caret is in a blinking state, such that it <b>can</b>
                 * be visible, and <code>isVisible</code> indicates whether or not
                 * the caret <b>is</b> actually visible.
                 * <p>
                 * Subclasses that wish to render a different flashing caret
                 * should override paint and only paint the caret if this method
                 * returns true.
                 * @return true if visible else false
                 * @see Caret#isVisible
                 * @see #isActive
                 */
                // @ts-ignore
                public isVisible(): boolean
                /**
                 * Sets the caret visibility, and repaints the caret.
                 * It is important to understand the relationship between this method,
                 * <code>isVisible</code> and <code>isActive</code>.
                 * Calling this method with a value of <code>true</code> activates the
                 * caret blinking. Setting it to <code>false</code> turns it completely off.
                 * To determine whether the blinking is active, you should call
                 * <code>isActive</code>. In effect, <code>isActive</code> is an
                 * appropriate corresponding "getter" method for this one.
                 * <code>isVisible</code> can be used to fetch the current
                 * visibility status of the caret, meaning whether or not it is currently
                 * painted. This status will change as the caret blinks on and off.
                 * <p>
                 * Here's a list showing the potential return values of both
                 * <code>isActive</code> and <code>isVisible</code>
                 * after calling this method:
                 * <p>
                 * <b><code>setVisible(true)</code></b>:
                 * <ul>
                 * <li>isActive(): true</li>
                 * <li>isVisible(): true or false depending on whether
                 * or not the caret is blinked on or off</li>
                 * </ul>
                 * <p>
                 * <b><code>setVisible(false)</code></b>:
                 * <ul>
                 * <li>isActive(): false</li>
                 * <li>isVisible(): false</li>
                 * </ul>
                 * @param e the visibility specifier
                 * @see #isActive
                 * @see Caret#setVisible
                 */
                // @ts-ignore
                public setVisible(e: boolean): void
                /**
                 * Sets the caret blink rate.
                 * @param rate the rate in milliseconds, 0 to stop blinking
                 * @see Caret#setBlinkRate
                 */
                // @ts-ignore
                public setBlinkRate(rate: number /*int*/): void
                /**
                 * Gets the caret blink rate.
                 * @return the delay in milliseconds.  If this is
                 *   zero the caret will not blink.
                 * @see Caret#getBlinkRate
                 */
                // @ts-ignore
                public getBlinkRate(): number /*int*/
                /**
                 * Fetches the current position of the caret.
                 * @return the position &gt;= 0
                 * @see Caret#getDot
                 */
                // @ts-ignore
                public getDot(): number /*int*/
                /**
                 * Fetches the current position of the mark.  If there is a selection,
                 * the dot and mark will not be the same.
                 * @return the position &gt;= 0
                 * @see Caret#getMark
                 */
                // @ts-ignore
                public getMark(): number /*int*/
                /**
                 * Sets the caret position and mark to the specified position,
                 * with a forward bias. This implicitly sets the
                 * selection range to zero.
                 * @param dot the position &gt;= 0
                 * @see #setDot(int, Position.Bias)
                 * @see Caret#setDot
                 */
                // @ts-ignore
                public setDot(dot: number /*int*/): void
                /**
                 * Moves the caret position to the specified position,
                 * with a forward bias.
                 * @param dot the position &gt;= 0
                 * @see #moveDot(int, javax.swing.text.Position.Bias)
                 * @see Caret#moveDot
                 */
                // @ts-ignore
                public moveDot(dot: number /*int*/): void
                /**
                 * Moves the caret position to the specified position, with the
                 * specified bias.
                 * @param dot the position &gt;= 0
                 * @param dotBias the bias for this position, not <code>null</code>
                 * @throws IllegalArgumentException if the bias is <code>null</code>
                 * @see Caret#moveDot
                 * @since 1.6
                 */
                // @ts-ignore
                public moveDot(dot: number /*int*/, dotBias: javax.swing.text.Position.Bias): void
                /**
                 * Sets the caret position and mark to the specified position, with the
                 * specified bias. This implicitly sets the selection range
                 * to zero.
                 * @param dot the position &gt;= 0
                 * @param dotBias the bias for this position, not <code>null</code>
                 * @throws IllegalArgumentException if the bias is <code>null</code>
                 * @see Caret#setDot
                 * @since 1.6
                 */
                // @ts-ignore
                public setDot(dot: number /*int*/, dotBias: javax.swing.text.Position.Bias): void
                /**
                 * Returns the bias of the caret position.
                 * @return the bias of the caret position
                 * @since 1.6
                 */
                // @ts-ignore
                public getDotBias(): javax.swing.text.Position.Bias
                /**
                 * Returns the bias of the mark.
                 * @return the bias of the mark
                 * @since 1.6
                 */
                // @ts-ignore
                public getMarkBias(): javax.swing.text.Position.Bias
                /**
                 * Saves the current caret position.  This is used when
                 * caret up/down actions occur, moving between lines
                 * that have uneven end positions.
                 * @param p the position
                 * @see #getMagicCaretPosition
                 */
                // @ts-ignore
                public setMagicCaretPosition(p: java.awt.Point): void
                /**
                 * Gets the saved caret position.
                 * @return the position
                 *  see #setMagicCaretPosition
                 */
                // @ts-ignore
                public getMagicCaretPosition(): java.awt.Point
                /**
                 * Compares this object to the specified object.
                 * The superclass behavior of comparing rectangles
                 * is not desired, so this is changed to the Object
                 * behavior.
                 * @param obj   the object to compare this font with
                 * @return <code>true</code> if the objects are equal;
                 *             <code>false</code> otherwise
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
