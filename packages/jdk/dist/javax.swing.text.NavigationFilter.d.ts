declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <code>NavigationFilter</code> can be used to restrict where the cursor can
             * be positioned. When the default cursor positioning actions attempt to
             * reposition the cursor they will call into the
             * <code>NavigationFilter</code>, assuming
             * the <code>JTextComponent</code> has a non-null
             * <code>NavigationFilter</code> set. In this manner
             * the <code>NavigationFilter</code> can effectively restrict where the
             * cursor can be positioned. Similarly <code>DefaultCaret</code> will call
             * into the <code>NavigationFilter</code> when the user is changing the
             * selection to further restrict where the cursor can be positioned.
             * <p>
             * Subclasses can conditionally call into supers implementation to restrict
             * where the cursor can be placed, or call directly into the
             * <code>FilterBypass</code>.
             * @see javax.swing.text.Caret
             * @see javax.swing.text.DefaultCaret
             * @see javax.swing.text.View
             * @since 1.4
             */
            // @ts-ignore
            class NavigationFilter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Invoked prior to the Caret setting the dot. The default implementation
                 * calls directly into the <code>FilterBypass</code> with the passed
                 * in arguments. Subclasses may wish to conditionally
                 * call super with a different location, or invoke the necessary method
                 * on the <code>FilterBypass</code>
                 * @param fb FilterBypass that can be used to mutate caret position
                 * @param dot the position &gt;= 0
                 * @param bias Bias to place the dot at
                 */
                // @ts-ignore
                public setDot(fb: javax.swing.text.NavigationFilter.FilterBypass, dot: number /*int*/, bias: javax.swing.text.Position.Bias): void
                /**
                 * Invoked prior to the Caret moving the dot. The default implementation
                 * calls directly into the <code>FilterBypass</code> with the passed
                 * in arguments. Subclasses may wish to conditionally
                 * call super with a different location, or invoke the necessary
                 * methods on the <code>FilterBypass</code>.
                 * @param fb FilterBypass that can be used to mutate caret position
                 * @param dot the position &gt;= 0
                 * @param bias Bias for new location
                 */
                // @ts-ignore
                public moveDot(fb: javax.swing.text.NavigationFilter.FilterBypass, dot: number /*int*/, bias: javax.swing.text.Position.Bias): void
                /**
                 * Returns the next visual position to place the caret at from an
                 * existing position. The default implementation simply forwards the
                 * method to the root View. Subclasses may wish to further restrict the
                 * location based on additional criteria.
                 * @param text JTextComponent containing text
                 * @param pos Position used in determining next position
                 * @param bias Bias used in determining next position
                 * @param direction the direction from the current position that can
                 *   be thought of as the arrow keys typically found on a keyboard.
                 *   This will be one of the following values:
                 *  <ul>
                 *  <li>SwingConstants.WEST
                 *  <li>SwingConstants.EAST
                 *  <li>SwingConstants.NORTH
                 *  <li>SwingConstants.SOUTH
                 *  </ul>
                 * @param biasRet Used to return resulting Bias of next position
                 * @return the location within the model that best represents the next
                 *   location visual position
                 * @exception BadLocationException
                 * @exception IllegalArgumentException if <code>direction</code>
                 *           doesn't have one of the legal values above
                 */
                // @ts-ignore
                public getNextVisualPositionFrom(text: javax.swing.text.JTextComponent, pos: number /*int*/, bias: javax.swing.text.Position.Bias, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[]): number /*int*/
            }
        }
    }
}
