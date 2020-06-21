declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A View that tries to flow it's children into some
             * partially constrained space.  This can be used to
             * build things like paragraphs, pages, etc.  The
             * flow is made up of the following pieces of functionality.
             * <ul>
             * <li>A logical set of child views, which as used as a
             * layout pool from which a physical view is formed.
             * <li>A strategy for translating the logical view to
             * a physical (flowed) view.
             * <li>Constraints for the strategy to work against.
             * <li>A physical structure, that represents the flow.
             * The children of this view are where the pieces of
             * of the logical views are placed to create the flow.
             * </ul>
             * @author Timothy Prinzing
             * @see View
             * @since 1.3
             */
            // @ts-ignore
            abstract class FlowView extends javax.swing.text.BoxView {
                /**
                 * Constructs a FlowView for the given element.
                 * @param elem the element that this view is responsible for
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element, axis: number /*int*/)
                /**
                 * Default constraint against which the flow is
                 * created against.
                 */
                // @ts-ignore
                layoutSpan: number /*int*/
                /**
                 * These are the views that represent the child elements
                 * of the element this view represents (The logical view
                 * to translate to a physical view).  These are not
                 * directly children of this view.  These are either
                 * placed into the rows directly or used for the purpose
                 * of breaking into smaller chunks, to form the physical
                 * view.
                 */
                // @ts-ignore
                layoutPool: javax.swing.text.View
                /**
                 * The behavior for keeping the flow updated.  By
                 * default this is a singleton shared by all instances
                 * of FlowView (FlowStrategy is stateless).  Subclasses
                 * can create an alternative strategy, which might keep
                 * state.
                 */
                // @ts-ignore
                strategy: javax.swing.text.FlowView.FlowStrategy
                /**
                 * Fetches the axis along which views should be
                 * flowed.  By default, this will be the axis
                 * orthogonal to the axis along which the flow
                 * rows are tiled (the axis of the default flow
                 * rows themselves).  This is typically used
                 * by the <code>FlowStrategy</code>.
                 */
                // @ts-ignore
                public getFlowAxis(): number /*int*/
                /**
                 * Fetch the constraining span to flow against for
                 * the given child index.  This is called by the
                 * FlowStrategy while it is updating the flow.
                 * A flow can be shaped by providing different values
                 * for the row constraints.  By default, the entire
                 * span inside of the insets along the flow axis
                 * is returned.
                 * @param index the index of the row being updated.
                 *    This should be a value &gt;= 0 and &lt; getViewCount().
                 * @see #getFlowStart
                 */
                // @ts-ignore
                public getFlowSpan(index: number /*int*/): number /*int*/
                /**
                 * Fetch the location along the flow axis that the
                 * flow span will start at.  This is called by the
                 * FlowStrategy while it is updating the flow.
                 * A flow can be shaped by providing different values
                 * for the row constraints.
                 * @param index the index of the row being updated.
                 *    This should be a value &gt;= 0 and &lt; getViewCount().
                 * @see #getFlowSpan
                 */
                // @ts-ignore
                public getFlowStart(index: number /*int*/): number /*int*/
                /**
                 * Create a View that should be used to hold a
                 * a rows worth of children in a flow.  This is
                 * called by the FlowStrategy when new children
                 * are added or removed (i.e. rows are added or
                 * removed) in the process of updating the flow.
                 */
                // @ts-ignore
                abstract createRow(): javax.swing.text.View
                /**
                 * Loads all of the children to initialize the view.
                 * This is called by the <code>setParent</code> method.
                 * This is reimplemented to not load any children directly
                 * (as they are created in the process of formatting).
                 * If the layoutPool variable is null, an instance of
                 * LogicalView is created to represent the logical view
                 * that is used in the process of formatting.
                 * @param f the view factory
                 */
                // @ts-ignore
                loadChildren(f: javax.swing.text.ViewFactory): void
                /**
                 * Fetches the child view index representing the given position in
                 * the model.
                 * @param pos the position &gt;= 0
                 * @return index of the view representing the given position, or
                 *    -1 if no view represents that position
                 */
                // @ts-ignore
                getViewIndexAtPosition(pos: number /*int*/): number /*int*/
                /**
                 * Lays out the children.  If the span along the flow
                 * axis has changed, layout is marked as invalid which
                 * which will cause the superclass behavior to recalculate
                 * the layout along the box axis.  The FlowStrategy.layout
                 * method will be called to rebuild the flow rows as
                 * appropriate.  If the height of this view changes
                 * (determined by the preferred size along the box axis),
                 * a preferenceChanged is called.  Following all of that,
                 * the normal box layout of the superclass is performed.
                 * @param width  the width to lay out against &gt;= 0.  This is
                 *    the width inside of the inset area.
                 * @param height the height to lay out against &gt;= 0 This
                 *    is the height inside of the inset area.
                 */
                // @ts-ignore
                layout(width: number /*int*/, height: number /*int*/): void
                /**
                 * Calculate requirements along the minor axis.  This
                 * is implemented to forward the request to the logical
                 * view by calling getMinimumSpan, getPreferredSpan, and
                 * getMaximumSpan on it.
                 */
                // @ts-ignore
                calculateMinorAxisRequirements(axis: number /*int*/, r: javax.swing.SizeRequirements): javax.swing.SizeRequirements
                /**
                 * Gives notification that something was inserted into the document
                 * in a location that this view is responsible for.
                 * @param changes the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#insertUpdate
                 */
                // @ts-ignore
                public insertUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Gives notification that something was removed from the document
                 * in a location that this view is responsible for.
                 * @param changes the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#removeUpdate
                 */
                // @ts-ignore
                public removeUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Gives notification from the document that attributes were changed
                 * in a location that this view is responsible for.
                 * @param changes the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#changedUpdate
                 */
                // @ts-ignore
                public changedUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public setParent(parent: javax.swing.text.View): void
            }
        }
    }
}
