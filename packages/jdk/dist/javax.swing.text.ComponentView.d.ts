declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * Component decorator that implements the view interface.  The
             * entire element is used to represent the component.  This acts
             * as a gateway from the display-only View implementations to
             * interactive lightweight components (ie it allows components
             * to be embedded into the View hierarchy).
             * <p>
             * The component is placed relative to the text baseline
             * according to the value returned by
             * <code>Component.getAlignmentY</code>.  For Swing components
             * this value can be conveniently set using the method
             * <code>JComponent.setAlignmentY</code>.  For example, setting
             * a value of <code>0.75</code> will cause 75 percent of the
             * component to be above the baseline, and 25 percent of the
             * component to be below the baseline.
             * <p>
             * This class is implemented to do the extra work necessary to
             * work properly in the presence of multiple threads (i.e. from
             * asynchronous notification of model changes for example) by
             * ensuring that all component access is done on the event thread.
             * <p>
             * The component used is determined by the return value of the
             * createComponent method.  The default implementation of this
             * method is to return the component held as an attribute of
             * the element (by calling StyleConstants.getComponent).  A
             * limitation of this behavior is that the component cannot
             * be used by more than one text component (i.e. with a shared
             * model).  Subclasses can remove this constraint by implementing
             * the createComponent to actually create a component based upon
             * some kind of specification contained in the attributes.  The
             * ObjectView class in the html package is an example of a
             * ComponentView implementation that supports multiple component
             * views of a shared model.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class ComponentView extends javax.swing.text.View {
                /**
                 * Creates a new ComponentView object.
                 * @param elem the element to decorate
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element)
                /**
                 * Create the component that is associated with
                 * this view.  This will be called when it has
                 * been determined that a new component is needed.
                 * This would result from a call to setParent or
                 * as a result of being notified that attributes
                 * have changed.
                 */
                // @ts-ignore
                createComponent(): java.awt.Component
                /**
                 * Fetch the component associated with the view.
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component
                /**
                 * The real paint behavior occurs naturally from the association
                 * that the component has with its parent container (the same
                 * container hosting this view).  This is implemented to do nothing.
                 * @param g the graphics context
                 * @param a the shape
                 * @see View#paint
                 */
                // @ts-ignore
                public paint(g: java.awt.Graphics, a: java.awt.Shape): void
                /**
                 * Determines the preferred span for this view along an
                 * axis.  This is implemented to return the value
                 * returned by Component.getPreferredSize along the
                 * axis of interest.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into &gt;=0.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @exception IllegalArgumentException for an invalid axis
                 */
                // @ts-ignore
                public getPreferredSpan(axis: number /*int*/): number /*float*/
                /**
                 * Determines the minimum span for this view along an
                 * axis.  This is implemented to return the value
                 * returned by Component.getMinimumSize along the
                 * axis of interest.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into &gt;=0.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @exception IllegalArgumentException for an invalid axis
                 */
                // @ts-ignore
                public getMinimumSpan(axis: number /*int*/): number /*float*/
                /**
                 * Determines the maximum span for this view along an
                 * axis.  This is implemented to return the value
                 * returned by Component.getMaximumSize along the
                 * axis of interest.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into &gt;=0.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @exception IllegalArgumentException for an invalid axis
                 */
                // @ts-ignore
                public getMaximumSpan(axis: number /*int*/): number /*float*/
                /**
                 * Determines the desired alignment for this view along an
                 * axis.  This is implemented to give the alignment of the
                 * embedded component.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the desired alignment.  This should be a value
                 *    between 0.0 and 1.0 where 0 indicates alignment at the
                 *    origin and 1.0 indicates alignment to the full span
                 *    away from the origin.  An alignment of 0.5 would be the
                 *    center of the view.
                 */
                // @ts-ignore
                public getAlignment(axis: number /*int*/): number /*float*/
                /**
                 * Sets the parent for a child view.
                 * The parent calls this on the child to tell it who its
                 * parent is, giving the view access to things like
                 * the hosting Container.  The superclass behavior is
                 * executed, followed by a call to createComponent if
                 * the parent view parameter is non-null and a component
                 * has not yet been created. The embedded components parent
                 * is then set to the value returned by <code>getContainer</code>.
                 * If the parent view parameter is null, this view is being
                 * cleaned up, thus the component is removed from its parent.
                 * <p>
                 * The changing of the component hierarchy will
                 * touch the component lock, which is the one thing
                 * that is not safe from the View hierarchy.  Therefore,
                 * this functionality is executed immediately if on the
                 * event thread, or is queued on the event queue if
                 * called from another thread (notification of change
                 * from an asynchronous update).
                 * @param p the parent
                 */
                // @ts-ignore
                public setParent(p: javax.swing.text.View): void
                /**
                 * Provides a mapping from the coordinate space of the model to
                 * that of the view.
                 * @param pos the position to convert &gt;=0
                 * @param a the allocated region to render into
                 * @return the bounding box of the given position is returned
                 * @exception BadLocationException  if the given position does not
                 *    represent a valid location in the associated document
                 * @see View#modelToView
                 */
                // @ts-ignore
                public modelToView(pos: number /*int*/, a: java.awt.Shape, b: javax.swing.text.Position.Bias): java.awt.Shape
                /**
                 * Provides a mapping from the view coordinate space to the logical
                 * coordinate space of the model.
                 * @param x the X coordinate &gt;=0
                 * @param y the Y coordinate &gt;=0
                 * @param a the allocated region to render into
                 * @return the location within the model that best represents
                 *     the given point in the view
                 * @see View#viewToModel
                 */
                // @ts-ignore
                public viewToModel(x: number /*float*/, y: number /*float*/, a: java.awt.Shape, bias: javax.swing.text.Position.Bias[]): number /*int*/
            }
        }
    }
}
