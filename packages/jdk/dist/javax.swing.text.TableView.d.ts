declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <p>
             * Implements View interface for a table, that is composed of an
             * element structure where the child elements of the element
             * this view is responsible for represent rows and the child
             * elements of the row elements are cells.  The cell elements can
             * have an arbitrary element structure under them, which will
             * be built with the ViewFactory returned by the getViewFactory
             * method.
             * <pre>
             * &nbsp;  TABLE
             * &nbsp;    ROW
             * &nbsp;      CELL
             * &nbsp;      CELL
             * &nbsp;    ROW
             * &nbsp;      CELL
             * &nbsp;      CELL
             * </pre>
             * <p>
             * This is implemented as a hierarchy of boxes, the table itself
             * is a vertical box, the rows are horizontal boxes, and the cells
             * are vertical boxes.  The cells are allowed to span multiple
             * columns and rows.  By default, the table can be thought of as
             * being formed over a grid (i.e. somewhat like one would find in
             * gridbag layout), where table cells can request to span more
             * than one grid cell.  The default horizontal span of table cells
             * will be based upon this grid, but can be changed by reimplementing
             * the requested span of the cell (i.e. table cells can have independant
             * spans if desired).
             * @author Timothy Prinzing
             * @see View
             */
            // @ts-ignore
            class TableView extends javax.swing.text.BoxView {
                /**
                 * Constructs a TableView for the given element.
                 * @param elem the element that this view is responsible for
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element)
                /**
                 * Creates a new table row.
                 * @param elem an element
                 * @return the row
                 */
                // @ts-ignore
                createTableRow(elem: javax.swing.text.Element): javax.swing.text.TableView.TableRow
                /**
                 * @deprecated Table cells can now be any arbitrary
                 *  View implementation and should be produced by the
                 *  ViewFactory rather than the table.
                 * @param elem an element
                 * @return the cell
                 */
                // @ts-ignore
                createTableCell(elem: javax.swing.text.Element): javax.swing.text.TableView.TableCell
                // @ts-ignore
                forwardUpdate(ec: javax.swing.event.DocumentEvent.ElementChange, e: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Change the child views.  This is implemented to
                 * provide the superclass behavior and invalidate the
                 * grid so that rows and columns will be recalculated.
                 */
                // @ts-ignore
                replace(offset: number /*int*/, length: number /*int*/, views: javax.swing.text.View[]): void
                /**
                 * Lays out the columns to fit within the given target span.
                 * Returns the results through {@code offsets} and {@code spans}.
                 * @param targetSpan the given span for total of all the table
                 *   columns
                 * @param reqs the requirements desired for each column.  This
                 *   is the column maximum of the cells minimum, preferred, and
                 *   maximum requested span
                 * @param spans the return value of how much to allocated to
                 *   each column
                 * @param offsets the return value of the offset from the
                 *   origin for each column
                 */
                // @ts-ignore
                layoutColumns(targetSpan: number /*int*/, offsets: number /*int*/[], spans: number /*int*/[], reqs: javax.swing.SizeRequirements[]): void
                /**
                 * Perform layout for the minor axis of the box (i.e. the
                 * axis orthogonal to the axis that it represents).  The results
                 * of the layout should be placed in the given arrays which represent
                 * the allocations to the children along the minor axis.  This
                 * is called by the superclass whenever the layout needs to be
                 * updated along the minor axis.
                 * <p>
                 * This is implemented to call the
                 * {@link #layoutColumns layoutColumns} method, and then
                 * forward to the superclass to actually carry out the layout
                 * of the tables rows.
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
                 * Calculate the requirements for the minor axis.  This is called by
                 * the superclass whenever the requirements need to be updated (i.e.
                 * a preferenceChanged was messaged through this view).
                 * <p>
                 * This is implemented to calculate the requirements as the sum of the
                 * requirements of the columns.
                 */
                // @ts-ignore
                calculateMinorAxisRequirements(axis: number /*int*/, r: javax.swing.SizeRequirements): javax.swing.SizeRequirements
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
