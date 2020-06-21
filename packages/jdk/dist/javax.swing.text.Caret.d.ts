declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A place within a document view that represents where
             * things can be inserted into the document model.  A caret
             * has a position in the document referred to as a dot.
             * The dot is where the caret is currently located in the
             * model.  There is
             * a second position maintained by the caret that represents
             * the other end of a selection called mark.  If there is
             * no selection the dot and mark will be equal.  If a selection
             * exists, the two values will be different.
             * <p>
             * The dot can be placed by either calling
             * <code>setDot</code> or <code>moveDot</code>.  Setting
             * the dot has the effect of removing any selection that may
             * have previously existed.  The dot and mark will be equal.
             * Moving the dot has the effect of creating a selection as
             * the mark is left at whatever position it previously had.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            interface Caret {
                /**
                 * Called when the UI is being installed into the
                 * interface of a JTextComponent.  This can be used
                 * to gain access to the model that is being navigated
                 * by the implementation of this interface.
                 * @param c the JTextComponent
                 */
                // @ts-ignore
                install(c: javax.swing.text.JTextComponent): void
                /**
                 * Called when the UI is being removed from the
                 * interface of a JTextComponent.  This is used to
                 * unregister any listeners that were attached.
                 * @param c the JTextComponent
                 */
                // @ts-ignore
                deinstall(c: javax.swing.text.JTextComponent): void
                /**
                 * Renders the caret. This method is called by UI classes.
                 * @param g the graphics context
                 */
                // @ts-ignore
                paint(g: java.awt.Graphics): void
                /**
                 * Adds a listener to track whenever the caret position
                 * has been changed.
                 * @param l the change listener
                 */
                // @ts-ignore
                addChangeListener(l: javax.swing.event.ChangeListener): void
                /**
                 * Removes a listener that was tracking caret position changes.
                 * @param l the change listener
                 */
                // @ts-ignore
                removeChangeListener(l: javax.swing.event.ChangeListener): void
                /**
                 * Determines if the caret is currently visible.
                 * @return true if the caret is visible else false
                 */
                // @ts-ignore
                isVisible(): boolean
                /**
                 * Sets the visibility of the caret.
                 * @param v  true if the caret should be shown,
                 *   and false if the caret should be hidden
                 */
                // @ts-ignore
                setVisible(v: boolean): void
                /**
                 * Determines if the selection is currently visible.
                 * @return true if the caret is visible else false
                 */
                // @ts-ignore
                isSelectionVisible(): boolean
                /**
                 * Sets the visibility of the selection
                 * @param v  true if the caret should be shown,
                 *   and false if the caret should be hidden
                 */
                // @ts-ignore
                setSelectionVisible(v: boolean): void
                /**
                 * Set the current caret visual location.  This can be used when
                 * moving between lines that have uneven end positions (such as
                 * when caret up or down actions occur).  If text flows
                 * left-to-right or right-to-left the x-coordinate will indicate
                 * the desired navigation location for vertical movement.  If
                 * the text flow is top-to-bottom, the y-coordinate will indicate
                 * the desired navigation location for horizontal movement.
                 * @param p  the Point to use for the saved position.  This
                 *    can be null to indicate there is no visual location.
                 */
                // @ts-ignore
                setMagicCaretPosition(p: java.awt.Point): void
                /**
                 * Gets the current caret visual location.
                 * @return the visual position.
                 * @see #setMagicCaretPosition
                 */
                // @ts-ignore
                getMagicCaretPosition(): java.awt.Point
                /**
                 * Sets the blink rate of the caret.  This determines if
                 * and how fast the caret blinks, commonly used as one
                 * way to attract attention to the caret.
                 * @param rate  the delay in milliseconds &gt;=0.  If this is
                 *   zero the caret will not blink.
                 */
                // @ts-ignore
                setBlinkRate(rate: number /*int*/): void
                /**
                 * Gets the blink rate of the caret.  This determines if
                 * and how fast the caret blinks, commonly used as one
                 * way to attract attention to the caret.
                 * @return the delay in milliseconds &gt;=0.  If this is
                 *   zero the caret will not blink.
                 */
                // @ts-ignore
                getBlinkRate(): number /*int*/
                /**
                 * Fetches the current position of the caret.
                 * @return the position &gt;=0
                 */
                // @ts-ignore
                getDot(): number /*int*/
                /**
                 * Fetches the current position of the mark.  If there
                 * is a selection, the mark will not be the same as
                 * the dot.
                 * @return the position &gt;=0
                 */
                // @ts-ignore
                getMark(): number /*int*/
                /**
                 * Sets the caret position to some position.  This
                 * causes the mark to become the same as the dot,
                 * effectively setting the selection range to zero.
                 * <p>
                 * If the parameter is negative or beyond the length of the document,
                 * the caret is placed at the beginning or at the end, respectively.
                 * @param dot  the new position to set the caret to
                 */
                // @ts-ignore
                setDot(dot: number /*int*/): void
                /**
                 * Moves the caret position (dot) to some other position,
                 * leaving behind the mark.  This is useful for
                 * making selections.
                 * @param dot  the new position to move the caret to &gt;=0
                 */
                // @ts-ignore
                moveDot(dot: number /*int*/): void
            }
        }
    }
}
