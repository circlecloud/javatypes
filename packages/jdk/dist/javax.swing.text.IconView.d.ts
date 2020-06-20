declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * Icon decorator that implements the view interface.  The
             * entire element is used to represent the icon.  This acts
             * as a gateway from the display-only View implementations to
             * interactive lightweight icons (that is, it allows icons
             * to be embedded into the View hierarchy.  The parent of the icon
             * is the container that is handed out by the associated view
             * factory.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class IconView extends javax.swing.text.View {
                /**
                 * Creates a new icon view that represents an element.
                 * @param elem the element to create a view for
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element)
                /**
                 * Paints the icon.
                 * The real paint behavior occurs naturally from the association
                 * that the icon has with its parent container (the same
                 * container hosting this view), so this simply allows us to
                 * position the icon properly relative to the view.  Since
                 * the coordinate system for the view is simply the parent
                 * containers, positioning the child icon is easy.
                 * @param g the rendering surface to use
                 * @param a the allocated region to render into
                 * @see View#paint
                 */
                // @ts-ignore
                paint(g: java.awt.Graphics, a: java.awt.Shape): void
                /**
                 * Determines the preferred span for this view along an
                 * axis.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @exception IllegalArgumentException for an invalid axis
                 */
                // @ts-ignore
                getPreferredSpan(axis: number /*int*/): float
                /**
                 * Determines the desired alignment for this view along an
                 * axis.  This is implemented to give the alignment to the
                 * bottom of the icon along the y axis, and the default
                 * along the x axis.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the desired alignment &gt;= 0.0f &amp;&amp; &lt;= 1.0f.  This should be
                 *    a value between 0.0 and 1.0 where 0 indicates alignment at the
                 *    origin and 1.0 indicates alignment to the full span
                 *    away from the origin.  An alignment of 0.5 would be the
                 *    center of the view.
                 */
                // @ts-ignore
                getAlignment(axis: number /*int*/): float
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
                modelToView(pos: number /*int*/, a: java.awt.Shape, b: javax.swing.text.Position.Bias): java.awt.Shape
                /**
                 * Provides a mapping from the view coordinate space to the logical
                 * coordinate space of the model.
                 * @param x the X coordinate &gt;= 0
                 * @param y the Y coordinate &gt;= 0
                 * @param a the allocated region to render into
                 * @return the location within the model that best represents the
                 *   given point of view &gt;= 0
                 * @see View#viewToModel
                 */
                // @ts-ignore
                viewToModel(x: number /*float*/, y: number /*float*/, a: java.awt.Shape, bias: javax.swing.text.Position.Bias[]): int
            }
        }
    }
}
