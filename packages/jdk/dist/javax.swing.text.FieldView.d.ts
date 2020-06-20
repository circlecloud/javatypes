declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * Extends the multi-line plain text view to be suitable
             * for a single-line editor view.  If the view is
             * allocated extra space, the field must adjust for it.
             * If the hosting component is a JTextField, this view
             * will manage the ranges of the associated BoundedRangeModel
             * and will adjust the horizontal allocation to match the
             * current visibility settings of the JTextField.
             * @author Timothy Prinzing
             * @see View
             */
            // @ts-ignore
            class FieldView extends javax.swing.text.PlainView {
                /**
                 * Constructs a new FieldView wrapped on an element.
                 * @param elem the element
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element)
                /**
                 * Fetches the font metrics associated with the component hosting
                 * this view.
                 * @return the metrics
                 */
                // @ts-ignore
                getFontMetrics(): java.awt.FontMetrics
                /**
                 * Adjusts the allocation given to the view
                 * to be a suitable allocation for a text field.
                 * If the view has been allocated more than the
                 * preferred span vertically, the allocation is
                 * changed to be centered vertically.  Horizontally
                 * the view is adjusted according to the horizontal
                 * alignment property set on the associated JTextField
                 * (if that is the type of the hosting component).
                 * @param a the allocation given to the view, which may need
                 *   to be adjusted.
                 * @return the allocation that the superclass should use.
                 */
                // @ts-ignore
                adjustAllocation(a: java.awt.Shape): java.awt.Shape
                /**
                 * Renders using the given rendering surface and area on that surface.
                 * The view may need to do layout and create child views to enable
                 * itself to render into the given allocation.
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
                 * @return the span the view would like to be rendered into &gt;= 0.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 */
                // @ts-ignore
                getPreferredSpan(axis: number /*int*/): float
                /**
                 * Determines the resizability of the view along the
                 * given axis.  A value of 0 or less is not resizable.
                 * @param axis View.X_AXIS or View.Y_AXIS
                 * @return the weight -&gt; 1 for View.X_AXIS, else 0
                 */
                // @ts-ignore
                getResizeWeight(axis: number /*int*/): int
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
                 * @param fx the X coordinate &gt;= 0.0f
                 * @param fy the Y coordinate &gt;= 0.0f
                 * @param a the allocated region to render into
                 * @return the location within the model that best represents the
                 *   given point in the view
                 * @see View#viewToModel
                 */
                // @ts-ignore
                viewToModel(fx: number /*float*/, fy: number /*float*/, a: java.awt.Shape, bias: javax.swing.text.Position.Bias[]): int
                /**
                 * Gives notification that something was inserted into the document
                 * in a location that this view is responsible for.
                 * @param changes the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#insertUpdate
                 */
                // @ts-ignore
                insertUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Gives notification that something was removed from the document
                 * in a location that this view is responsible for.
                 * @param changes the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#removeUpdate
                 */
                // @ts-ignore
                removeUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
            }
        }
    }
}
