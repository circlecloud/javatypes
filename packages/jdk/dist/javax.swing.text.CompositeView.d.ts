declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <code>CompositeView</code> is an abstract <code>View</code>
             * implementation which manages one or more child views.
             * (Note that <code>CompositeView</code> is intended
             * for managing relatively small numbers of child views.)
             * <code>CompositeView</code> is intended to be used as
             * a starting point for <code>View</code> implementations,
             * such as <code>BoxView</code>, that will contain child
             * <code>View</code>s. Subclasses that wish to manage the
             * collection of child <code>View</code>s should use the
             * {@link #replace} method.  As <code>View</code> invokes
             * <code>replace</code> during <code>DocumentListener</code>
             * notification, you normally won't need to directly
             * invoke <code>replace</code>.
             * <p>While <code>CompositeView</code>
             * does not impose a layout policy on its child <code>View</code>s,
             * it does allow for inseting the child <code>View</code>s
             * it will contain.  The insets can be set by either
             * {@link #setInsets} or {@link #setParagraphInsets}.
             * <p>In addition to the abstract methods of
             * {@link javax.swing.text.View},
             * subclasses of <code>CompositeView</code> will need to
             * override:
             * <ul>
             * <li>{@link #isBefore} - Used to test if a given
             * <code>View</code> location is before the visual space
             * of the <code>CompositeView</code>.
             * <li>{@link #isAfter} - Used to test if a given
             * <code>View</code> location is after the visual space
             * of the <code>CompositeView</code>.
             * <li>{@link #getViewAtPoint} - Returns the view at
             * a given visual location.
             * <li>{@link #childAllocation} - Returns the bounds of
             * a particular child <code>View</code>.
             * <code>getChildAllocation</code> will invoke
             * <code>childAllocation</code> after offseting
             * the bounds by the <code>Inset</code>s of the
             * <code>CompositeView</code>.
             * </ul>
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class CompositeView extends javax.swing.text.View {
                /**
                 * Constructs a <code>CompositeView</code> for the given element.
                 * @param elem  the element this view is responsible for
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element)
                /**
                 * Loads all of the children to initialize the view.
                 * This is called by the {@link #setParent}
                 * method.  Subclasses can reimplement this to initialize
                 * their child views in a different manner.  The default
                 * implementation creates a child view for each
                 * child element.
                 * @param f the view factory
                 * @see #setParent
                 */
                // @ts-ignore
                loadChildren(f: javax.swing.text.ViewFactory): void
                /**
                 * Sets the parent of the view.
                 * This is reimplemented to provide the superclass
                 * behavior as well as calling the <code>loadChildren</code>
                 * method if this view does not already have children.
                 * The children should not be loaded in the
                 * constructor because the act of setting the parent
                 * may cause them to try to search up the hierarchy
                 * (to get the hosting <code>Container</code> for example).
                 * If this view has children (the view is being moved
                 * from one place in the view hierarchy to another),
                 * the <code>loadChildren</code> method will not be called.
                 * @param parent the parent of the view, <code>null</code> if none
                 */
                // @ts-ignore
                setParent(parent: javax.swing.text.View): void
                /**
                 * Returns the number of child views of this view.
                 * @return the number of views &gt;= 0
                 * @see #getView
                 */
                // @ts-ignore
                getViewCount(): int
                /**
                 * Returns the n-th view in this container.
                 * @param n the number of the desired view, &gt;= 0 &amp;&amp; &lt; getViewCount()
                 * @return the view at index <code>n</code>
                 */
                // @ts-ignore
                getView(n: number /*int*/): javax.swing.text.View
                /**
                 * Replaces child views.  If there are no views to remove
                 * this acts as an insert.  If there are no views to
                 * add this acts as a remove.  Views being removed will
                 * have the parent set to <code>null</code>,
                 * and the internal reference to them removed so that they
                 * may be garbage collected.
                 * @param offset the starting index into the child views to insert
                 *    the new views; &gt;= 0 and &lt;= getViewCount
                 * @param length the number of existing child views to remove;
                 *    this should be a value &gt;= 0 and &lt;= (getViewCount() - offset)
                 * @param views the child views to add; this value can be
                 *   <code>null</code>
                 *    to indicate no children are being added (useful to remove)
                 */
                // @ts-ignore
                replace(offset: number /*int*/, length: number /*int*/, views: javax.swing.text.View[]): void
                /**
                 * Fetches the allocation for the given child view to
                 * render into. This enables finding out where various views
                 * are located.
                 * @param index the index of the child, &gt;= 0 &amp;&amp; &lt; getViewCount()
                 * @param a  the allocation to this view
                 * @return the allocation to the child
                 */
                // @ts-ignore
                getChildAllocation(index: number /*int*/, a: java.awt.Shape): java.awt.Shape
                /**
                 * Provides a mapping from the document model coordinate space
                 * to the coordinate space of the view mapped to it.
                 * @param pos the position to convert &gt;= 0
                 * @param a the allocated region to render into
                 * @param b a bias value of either <code>Position.Bias.Forward</code>
                 *   or <code>Position.Bias.Backward</code>
                 * @return the bounding box of the given position
                 * @exception BadLocationException  if the given position does
                 *    not represent a valid location in the associated document
                 * @see View#modelToView
                 */
                // @ts-ignore
                modelToView(pos: number /*int*/, a: java.awt.Shape, b: javax.swing.text.Position.Bias): java.awt.Shape
                /**
                 * Provides a mapping from the document model coordinate space
                 * to the coordinate space of the view mapped to it.
                 * @param p0 the position to convert &gt;= 0
                 * @param b0 the bias toward the previous character or the
                 *   next character represented by p0, in case the
                 *   position is a boundary of two views; either
                 *   <code>Position.Bias.Forward</code> or
                 *   <code>Position.Bias.Backward</code>
                 * @param p1 the position to convert &gt;= 0
                 * @param b1 the bias toward the previous character or the
                 *   next character represented by p1, in case the
                 *   position is a boundary of two views
                 * @param a the allocated region to render into
                 * @return the bounding box of the given position is returned
                 * @exception BadLocationException  if the given position does
                 *    not represent a valid location in the associated document
                 * @exception IllegalArgumentException for an invalid bias argument
                 * @see View#viewToModel
                 */
                // @ts-ignore
                modelToView(p0: number /*int*/, b0: javax.swing.text.Position.Bias, p1: number /*int*/, b1: javax.swing.text.Position.Bias, a: java.awt.Shape): java.awt.Shape
                /**
                 * Provides a mapping from the view coordinate space to the logical
                 * coordinate space of the model.
                 * @param x   x coordinate of the view location to convert &gt;= 0
                 * @param y   y coordinate of the view location to convert &gt;= 0
                 * @param a the allocated region to render into
                 * @param bias either <code>Position.Bias.Forward</code> or
                 *   <code>Position.Bias.Backward</code>
                 * @return the location within the model that best represents the
                 *   given point in the view &gt;= 0
                 * @see View#viewToModel
                 */
                // @ts-ignore
                viewToModel(x: number /*float*/, y: number /*float*/, a: java.awt.Shape, bias: javax.swing.text.Position.Bias[]): int
                /**
                 * Provides a way to determine the next visually represented model
                 * location that one might place a caret.  Some views may not be visible,
                 * they might not be in the same order found in the model, or they just
                 * might not allow access to some of the locations in the model.
                 * This is a convenience method for {@link #getNextNorthSouthVisualPositionFrom}
                 * and {@link #getNextEastWestVisualPositionFrom}.
                 * This method enables specifying a position to convert
                 * within the range of &gt;=0.  If the value is -1, a position
                 * will be calculated automatically.  If the value &lt; -1,
                 * the {@code BadLocationException} will be thrown.
                 * @param pos the position to convert
                 * @param b a bias value of either <code>Position.Bias.Forward</code>
                 *   or <code>Position.Bias.Backward</code>
                 * @param a the allocated region to render into
                 * @param direction the direction from the current position that can
                 *   be thought of as the arrow keys typically found on a keyboard;
                 *   this may be one of the following:
                 *   <ul>
                 *   <li><code>SwingConstants.WEST</code>
                 *   <li><code>SwingConstants.EAST</code>
                 *   <li><code>SwingConstants.NORTH</code>
                 *   <li><code>SwingConstants.SOUTH</code>
                 *   </ul>
                 * @param biasRet an array containing the bias that was checked
                 * @return the location within the model that best represents the next
                 *   location visual position
                 * @exception BadLocationException the given position is not a valid
                 *                                  position within the document
                 * @exception IllegalArgumentException if <code>direction</code> is invalid
                 */
                // @ts-ignore
                getNextVisualPositionFrom(pos: number /*int*/, b: javax.swing.text.Position.Bias, a: java.awt.Shape, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[]): int
                /**
                 * Returns the child view index representing the given
                 * position in the model.  This is implemented to call the
                 * <code>getViewIndexByPosition</code>
                 * method for backward compatibility.
                 * @param pos the position &gt;= 0
                 * @return index of the view representing the given position, or
                 *    -1 if no view represents that position
                 * @since 1.3
                 */
                // @ts-ignore
                getViewIndex(pos: number /*int*/, b: javax.swing.text.Position.Bias): int
                /**
                 * Tests whether a point lies before the rectangle range.
                 * @param x the X coordinate &gt;= 0
                 * @param y the Y coordinate &gt;= 0
                 * @param alloc the rectangle
                 * @return true if the point is before the specified range
                 */
                // @ts-ignore
                abstract isBefore(x: number /*int*/, y: number /*int*/, alloc: java.awt.Rectangle): boolean
                /**
                 * Tests whether a point lies after the rectangle range.
                 * @param x the X coordinate &gt;= 0
                 * @param y the Y coordinate &gt;= 0
                 * @param alloc the rectangle
                 * @return true if the point is after the specified range
                 */
                // @ts-ignore
                abstract isAfter(x: number /*int*/, y: number /*int*/, alloc: java.awt.Rectangle): boolean
                /**
                 * Fetches the child view at the given coordinates.
                 * @param x the X coordinate &gt;= 0
                 * @param y the Y coordinate &gt;= 0
                 * @param alloc the parent's allocation on entry, which should
                 *    be changed to the child's allocation on exit
                 * @return the child view
                 */
                // @ts-ignore
                abstract getViewAtPoint(x: number /*int*/, y: number /*int*/, alloc: java.awt.Rectangle): javax.swing.text.View
                /**
                 * Returns the allocation for a given child.
                 * @param index the index of the child, &gt;= 0 &amp;&amp; &lt; getViewCount()
                 * @param a  the allocation to the interior of the box on entry,
                 *    and the allocation of the child view at the index on exit.
                 */
                // @ts-ignore
                abstract childAllocation(index: number /*int*/, a: java.awt.Rectangle): void
                /**
                 * Fetches the child view that represents the given position in
                 * the model.  This is implemented to fetch the view in the case
                 * where there is a child view for each child element.
                 * @param pos the position &gt;= 0
                 * @param a  the allocation to the interior of the box on entry,
                 *    and the allocation of the view containing the position on exit
                 * @return the view representing the given position, or
                 *    <code>null</code> if there isn't one
                 */
                // @ts-ignore
                getViewAtPosition(pos: number /*int*/, a: java.awt.Rectangle): javax.swing.text.View
                /**
                 * Fetches the child view index representing the given position in
                 * the model.  This is implemented to fetch the view in the case
                 * where there is a child view for each child element.
                 * @param pos the position &gt;= 0
                 * @return index of the view representing the given position, or
                 *    -1 if no view represents that position
                 */
                // @ts-ignore
                getViewIndexAtPosition(pos: number /*int*/): int
                /**
                 * Translates the immutable allocation given to the view
                 * to a mutable allocation that represents the interior
                 * allocation (i.e. the bounds of the given allocation
                 * with the top, left, bottom, and right insets removed.
                 * It is expected that the returned value would be further
                 * mutated to represent an allocation to a child view.
                 * This is implemented to reuse an instance variable so
                 * it avoids creating excessive Rectangles.  Typically
                 * the result of calling this method would be fed to
                 * the <code>childAllocation</code> method.
                 * @param a the allocation given to the view
                 * @return the allocation that represents the inside of the
                 *    view after the margins have all been removed; if the
                 *    given allocation was <code>null</code>,
                 *    the return value is <code>null</code>
                 */
                // @ts-ignore
                getInsideAllocation(a: java.awt.Shape): java.awt.Rectangle
                /**
                 * Sets the insets from the paragraph attributes specified in
                 * the given attributes.
                 * @param attr the attributes
                 */
                // @ts-ignore
                setParagraphInsets(attr: javax.swing.text.AttributeSet): void
                /**
                 * Sets the insets for the view.
                 * @param top the top inset &gt;= 0
                 * @param left the left inset &gt;= 0
                 * @param bottom the bottom inset &gt;= 0
                 * @param right the right inset &gt;= 0
                 */
                // @ts-ignore
                setInsets(top: number /*short*/, left: number /*short*/, bottom: number /*short*/, right: number /*short*/): void
                /**
                 * Gets the left inset.
                 * @return the inset &gt;= 0
                 */
                // @ts-ignore
                getLeftInset(): short
                /**
                 * Gets the right inset.
                 * @return the inset &gt;= 0
                 */
                // @ts-ignore
                getRightInset(): short
                /**
                 * Gets the top inset.
                 * @return the inset &gt;= 0
                 */
                // @ts-ignore
                getTopInset(): short
                /**
                 * Gets the bottom inset.
                 * @return the inset &gt;= 0
                 */
                // @ts-ignore
                getBottomInset(): short
                /**
                 * Returns the next visual position for the cursor, in either the
                 * north or south direction.
                 * @param pos the position to convert &gt;= 0
                 * @param b a bias value of either <code>Position.Bias.Forward</code>
                 *   or <code>Position.Bias.Backward</code>
                 * @param a the allocated region to render into
                 * @param direction the direction from the current position that can
                 *   be thought of as the arrow keys typically found on a keyboard;
                 *   this may be one of the following:
                 *   <ul>
                 *   <li><code>SwingConstants.NORTH</code>
                 *   <li><code>SwingConstants.SOUTH</code>
                 *   </ul>
                 * @param biasRet an array containing the bias that was checked
                 * @return the location within the model that best represents the next
                 *   north or south location
                 * @exception BadLocationException
                 * @exception IllegalArgumentException if <code>direction</code> is invalid
                 * @see #getNextVisualPositionFrom
                 * @return the next position west of the passed in position
                 */
                // @ts-ignore
                getNextNorthSouthVisualPositionFrom(pos: number /*int*/, b: javax.swing.text.Position.Bias, a: java.awt.Shape, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[]): int
                /**
                 * Returns the next visual position for the cursor, in either the
                 * east or west direction.
                 * @param pos the position to convert &gt;= 0
                 * @param b a bias value of either <code>Position.Bias.Forward</code>
                 *   or <code>Position.Bias.Backward</code>
                 * @param a the allocated region to render into
                 * @param direction the direction from the current position that can
                 *   be thought of as the arrow keys typically found on a keyboard;
                 *   this may be one of the following:
                 *   <ul>
                 *   <li><code>SwingConstants.WEST</code>
                 *   <li><code>SwingConstants.EAST</code>
                 *   </ul>
                 * @param biasRet an array containing the bias that was checked
                 * @return the location within the model that best represents the next
                 *   west or east location
                 * @exception BadLocationException
                 * @exception IllegalArgumentException if <code>direction</code> is invalid
                 * @see #getNextVisualPositionFrom
                 */
                // @ts-ignore
                getNextEastWestVisualPositionFrom(pos: number /*int*/, b: javax.swing.text.Position.Bias, a: java.awt.Shape, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[]): int
                /**
                 * Determines in which direction the next view lays.
                 * Consider the <code>View</code> at index n. Typically the
                 * <code>View</code>s are layed out from left to right,
                 * so that the <code>View</code> to the EAST will be
                 * at index n + 1, and the <code>View</code> to the WEST
                 * will be at index n - 1. In certain situations,
                 * such as with bidirectional text, it is possible
                 * that the <code>View</code> to EAST is not at index n + 1,
                 * but rather at index n - 1, or that the <code>View</code>
                 * to the WEST is not at index n - 1, but index n + 1.
                 * In this case this method would return true, indicating the
                 * <code>View</code>s are layed out in descending order.
                 * <p>
                 * This unconditionally returns false, subclasses should override this
                 * method if there is the possibility for laying <code>View</code>s in
                 * descending order.
                 * @param position position into the model
                 * @param bias either <code>Position.Bias.Forward</code> or
                 *           <code>Position.Bias.Backward</code>
                 * @return false
                 */
                // @ts-ignore
                flipEastAndWestAtEnds(position: number /*int*/, bias: javax.swing.text.Position.Bias): boolean
            }
        }
    }
}
