declare namespace javax {
    namespace swing {
        namespace text {
            namespace TableView {
                /**
                 * View of a row in a row-centric table.
                 */
                // @ts-ignore
                class TableRow extends javax.swing.text.BoxView {
                    /**
                     * Constructs a TableView for the given element.
                     * @param elem the element that this view is responsible for
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(elem: javax.swing.text.Element)
                    /**
                     * Change the child views.  This is implemented to
                     * provide the superclass behavior and invalidate the
                     * grid so that rows and columns will be recalculated.
                     */
                    // @ts-ignore
                    public replace(offset: number /*int*/, length: number /*int*/, views: javax.swing.text.View[]): void
                    /**
                     * Perform layout for the major axis of the box (i.e. the
                     * axis that it represents).  The results of the layout should
                     * be placed in the given arrays which represent the allocations
                     * to the children along the major axis.
                     * <p>
                     * This is re-implemented to give each child the span of the column
                     * width for the table, and to give cells that span multiple columns
                     * the multi-column span.
                     * @param targetSpan the total span given to the view, which
                     *   would be used to layout the children.
                     * @param axis the axis being layed out.
                     * @param offsets the offsets from the origin of the view for
                     *   each of the child views.  This is a return value and is
                     *   filled in by the implementation of this method.
                     * @param spans the span of each child view.  This is a return
                     *   value and is filled in by the implementation of this method.
                     */
                    // @ts-ignore
                    layoutMajorAxis(targetSpan: number /*int*/, axis: number /*int*/, offsets: number /*int*/[], spans: number /*int*/[]): void
                    /**
                     * Perform layout for the minor axis of the box (i.e. the
                     * axis orthogonal to the axis that it represents).  The results
                     * of the layout should be placed in the given arrays which represent
                     * the allocations to the children along the minor axis.  This
                     * is called by the superclass whenever the layout needs to be
                     * updated along the minor axis.
                     * <p>
                     * This is implemented to delegate to the superclass, then adjust
                     * the span for any cell that spans multiple rows.
                     * @param targetSpan the total span given to the view, which
                     *   would be used to layout the children.
                     * @param axis the axis being layed out.
                     * @param offsets the offsets from the origin of the view for
                     *   each of the child views.  This is a return value and is
                     *   filled in by the implementation of this method.
                     * @param spans the span of each child view.  This is a return
                     *   value and is filled in by the implementation of this method.
                     */
                    // @ts-ignore
                    layoutMinorAxis(targetSpan: number /*int*/, axis: number /*int*/, offsets: number /*int*/[], spans: number /*int*/[]): void
                    /**
                     * Determines the resizability of the view along the
                     * given axis.  A value of 0 or less is not resizable.
                     * @param axis may be either View.X_AXIS or View.Y_AXIS
                     * @return the resize weight
                     * @exception IllegalArgumentException for an invalid axis
                     */
                    // @ts-ignore
                    public getResizeWeight(axis: number /*int*/): number /*int*/
                    /**
                     * Fetches the child view that represents the given position in
                     * the model.  This is implemented to walk through the children
                     * looking for a range that contains the given position.  In this
                     * view the children do not necessarily have a one to one mapping
                     * with the child elements.
                     * @param pos  the search position &gt;= 0
                     * @param a  the allocation to the table on entry, and the
                     *    allocation of the view containing the position on exit
                     * @return the view representing the given position, or
                     *    <code>null</code> if there isn't one
                     */
                    // @ts-ignore
                    getViewAtPosition(pos: number /*int*/, a: java.awt.Rectangle): javax.swing.text.View
                }
            }
        }
    }
}
