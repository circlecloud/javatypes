declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Text editor user interface
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class TextUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                /**
                 * Converts the given location in the model to a place in
                 * the view coordinate system.
                 * @param pos  the local location in the model to translate &gt;= 0
                 * @return the coordinates as a rectangle
                 * @exception BadLocationException  if the given position does not
                 *    represent a valid location in the associated document
                 */
                // @ts-ignore
                abstract modelToView(t: javax.swing.text.JTextComponent, pos: number /*int*/): java.awt.Rectangle
                /**
                 * Converts the given location in the model to a place in
                 * the view coordinate system.
                 * @param pos  the local location in the model to translate &gt;= 0
                 * @return the coordinates as a rectangle
                 * @exception BadLocationException  if the given position does not
                 *    represent a valid location in the associated document
                 */
                // @ts-ignore
                abstract modelToView(t: javax.swing.text.JTextComponent, pos: number /*int*/, bias: javax.swing.text.Position.Bias): java.awt.Rectangle
                /**
                 * Converts the given place in the view coordinate system
                 * to the nearest representative location in the model.
                 * @param pt  the location in the view to translate.  This
                 *    should be in the same coordinate system as the mouse
                 *    events.
                 * @return the offset from the start of the document &gt;= 0
                 */
                // @ts-ignore
                abstract viewToModel(t: javax.swing.text.JTextComponent, pt: java.awt.Point): int
                /**
                 * Provides a mapping from the view coordinate space to the logical
                 * coordinate space of the model.
                 * @param pt the location in the view to translate.
                 *            This should be in the same coordinate system
                 *            as the mouse events.
                 * @param biasReturn
                 *            filled in by this method to indicate whether
                 *            the point given is closer to the previous or the next
                 *            character in the model
                 * @return the location within the model that best represents the
                 *          given point in the view &gt;= 0
                 */
                // @ts-ignore
                abstract viewToModel(t: javax.swing.text.JTextComponent, pt: java.awt.Point, biasReturn: javax.swing.text.Position.Bias[]): int
                /**
                 * Provides a way to determine the next visually represented model
                 * location that one might place a caret.  Some views may not be visible,
                 * they might not be in the same order found in the model, or they just
                 * might not allow access to some of the locations in the model.
                 * @param t the text component for which this UI is installed
                 * @param pos the position to convert &gt;= 0
                 * @param b the bias for the position
                 * @param direction the direction from the current position that can
                 *   be thought of as the arrow keys typically found on a keyboard.
                 *   This may be SwingConstants.WEST, SwingConstants.EAST,
                 *   SwingConstants.NORTH, or SwingConstants.SOUTH
                 * @param biasRet an array to contain the bias for the returned position
                 * @return the location within the model that best represents the next
                 *   location visual position
                 * @exception BadLocationException
                 * @exception IllegalArgumentException for an invalid direction
                 */
                // @ts-ignore
                abstract getNextVisualPositionFrom(t: javax.swing.text.JTextComponent, pos: number /*int*/, b: javax.swing.text.Position.Bias, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[]): int
                /**
                 * Causes the portion of the view responsible for the
                 * given part of the model to be repainted.
                 * @param p0 the beginning of the range &gt;= 0
                 * @param p1 the end of the range &gt;= p0
                 */
                // @ts-ignore
                abstract damageRange(t: javax.swing.text.JTextComponent, p0: number /*int*/, p1: number /*int*/): void
                /**
                 * Causes the portion of the view responsible for the
                 * given part of the model to be repainted.
                 * @param p0 the beginning of the range &gt;= 0
                 * @param p1 the end of the range &gt;= p0
                 */
                // @ts-ignore
                abstract damageRange(t: javax.swing.text.JTextComponent, p0: number /*int*/, p1: number /*int*/, firstBias: javax.swing.text.Position.Bias, secondBias: javax.swing.text.Position.Bias): void
                /**
                 * Fetches the binding of services that set a policy
                 * for the type of document being edited.  This contains
                 * things like the commands available, stream readers and
                 * writers, etc.
                 * @return the editor kit binding
                 */
                // @ts-ignore
                abstract getEditorKit(t: javax.swing.text.JTextComponent): javax.swing.text.EditorKit
                /**
                 * Fetches a View with the allocation of the associated
                 * text component (i.e. the root of the hierarchy) that
                 * can be traversed to determine how the model is being
                 * represented spatially.
                 * @return the view
                 */
                // @ts-ignore
                abstract getRootView(t: javax.swing.text.JTextComponent): javax.swing.text.View
                /**
                 * Returns the string to be used as the tooltip at the passed in location.
                 * @see javax.swing.text.JTextComponent#getToolTipText
                 * @since 1.4
                 */
                // @ts-ignore
                getToolTipText(t: javax.swing.text.JTextComponent, pt: java.awt.Point): java.lang.String
            }
        }
    }
}