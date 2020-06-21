declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * Implements a View suitable for use in JPasswordField
             * UI implementations.  This is basically a field ui that
             * renders its contents as the echo character specified
             * in the associated component (if it can narrow the
             * component to a JPasswordField).
             * @author Timothy Prinzing
             * @see View
             */
            // @ts-ignore
            class PasswordView extends javax.swing.text.FieldView {
                /**
                 * Constructs a new view wrapped on an element.
                 * @param elem the element
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element)
                /**
                 * Renders the given range in the model as normal unselected
                 * text.  This sets the foreground color and echos the characters
                 * using the value returned by getEchoChar().
                 * @param g the graphics context
                 * @param x the starting X coordinate &gt;= 0
                 * @param y the starting Y coordinate &gt;= 0
                 * @param p0 the starting offset in the model &gt;= 0
                 * @param p1 the ending offset in the model &gt;= p0
                 * @return the X location of the end of the range &gt;= 0
                 * @exception BadLocationException if p0 or p1 are out of range
                 */
                // @ts-ignore
                drawUnselectedText(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, p0: number /*int*/, p1: number /*int*/): number /*int*/
                /**
                 * Renders the given range in the model as selected text.  This
                 * is implemented to render the text in the color specified in
                 * the hosting component.  It assumes the highlighter will render
                 * the selected background.  Uses the result of getEchoChar() to
                 * display the characters.
                 * @param g the graphics context
                 * @param x the starting X coordinate &gt;= 0
                 * @param y the starting Y coordinate &gt;= 0
                 * @param p0 the starting offset in the model &gt;= 0
                 * @param p1 the ending offset in the model &gt;= p0
                 * @return the X location of the end of the range &gt;= 0
                 * @exception BadLocationException if p0 or p1 are out of range
                 */
                // @ts-ignore
                drawSelectedText(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, p0: number /*int*/, p1: number /*int*/): number /*int*/
                /**
                 * Renders the echo character, or whatever graphic should be used
                 * to display the password characters.  The color in the Graphics
                 * object is set to the appropriate foreground color for selected
                 * or unselected text.
                 * @param g the graphics context
                 * @param x the starting X coordinate &gt;= 0
                 * @param y the starting Y coordinate &gt;= 0
                 * @param c the echo character
                 * @return the updated X position &gt;= 0
                 */
                // @ts-ignore
                drawEchoCharacter(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, c: string): number /*int*/
                /**
                 * Provides a mapping from the document model coordinate space
                 * to the coordinate space of the view mapped to it.
                 * @param pos the position to convert &gt;= 0
                 * @param a the allocated region to render into
                 * @return the bounding box of the given position
                 * @exception BadLocationException  if the given position does not
                 *    represent a valid location in the associated document
                 * @see View#modelToView
                 */
                // @ts-ignore
                public modelToView(pos: number /*int*/, a: java.awt.Shape, b: javax.swing.text.Position.Bias): java.awt.Shape
                /**
                 * Provides a mapping from the view coordinate space to the logical
                 * coordinate space of the model.
                 * @param fx the X coordinate &gt;= 0.0f
                 * @param fy the Y coordinate &gt;= 0.0f
                 * @param a the allocated region to render into
                 * @return the location within the model that best represents the
                 *   given point in the view
                 * @see View#viewToModel
                 */
                // @ts-ignore
                public viewToModel(fx: number /*float*/, fy: number /*float*/, a: java.awt.Shape, bias: javax.swing.text.Position.Bias[]): number /*int*/
                /**
                 * Determines the preferred span for this view along an
                 * axis.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into &gt;= 0.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 */
                // @ts-ignore
                public getPreferredSpan(axis: number /*int*/): number /*float*/
            }
        }
    }
}
