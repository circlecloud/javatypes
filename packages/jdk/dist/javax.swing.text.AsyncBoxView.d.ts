declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A box that does layout asynchronously.  This
             * is useful to keep the GUI event thread moving by
             * not doing any layout on it.  The layout is done
             * on a granularity of operations on the child views.
             * After each child view is accessed for some part
             * of layout (a potentially time consuming operation)
             * the remaining tasks can be abandoned or a new higher
             * priority task (i.e. to service a synchronous request
             * or a visible area) can be taken on.
             * <p>
             * While the child view is being accessed
             * a read lock is acquired on the associated document
             * so that the model is stable while being accessed.
             * @author Timothy Prinzing
             * @since 1.3
             */
            // @ts-ignore
            class AsyncBoxView extends javax.swing.text.View {
                /**
                 * Construct a box view that does asynchronous layout.
                 * @param elem the element of the model to represent
                 * @param axis the axis to tile along.  This can be
                 *   either X_AXIS or Y_AXIS.
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element, axis: number /*int*/)
                /**
                 * Object that manages the offsets of the
                 * children.  All locking for management of
                 * child locations is on this object.
                 */
                // @ts-ignore
                locator: javax.swing.text.AsyncBoxView.ChildLocator
                /**
                 * Fetch the major axis (the axis the children
                 * are tiled along).  This will have a value of
                 * either X_AXIS or Y_AXIS.
                 */
                // @ts-ignore
                getMajorAxis(): int
                /**
                 * Fetch the minor axis (the axis orthogonal
                 * to the tiled axis).  This will have a value of
                 * either X_AXIS or Y_AXIS.
                 */
                // @ts-ignore
                getMinorAxis(): int
                /**
                 * Get the top part of the margin around the view.
                 */
                // @ts-ignore
                getTopInset(): float
                /**
                 * Set the top part of the margin around the view.
                 * @param i the value of the inset
                 */
                // @ts-ignore
                setTopInset(i: number /*float*/): void
                /**
                 * Get the bottom part of the margin around the view.
                 */
                // @ts-ignore
                getBottomInset(): float
                /**
                 * Set the bottom part of the margin around the view.
                 * @param i the value of the inset
                 */
                // @ts-ignore
                setBottomInset(i: number /*float*/): void
                /**
                 * Get the left part of the margin around the view.
                 */
                // @ts-ignore
                getLeftInset(): float
                /**
                 * Set the left part of the margin around the view.
                 * @param i the value of the inset
                 */
                // @ts-ignore
                setLeftInset(i: number /*float*/): void
                /**
                 * Get the right part of the margin around the view.
                 */
                // @ts-ignore
                getRightInset(): float
                /**
                 * Set the right part of the margin around the view.
                 * @param i the value of the inset
                 */
                // @ts-ignore
                setRightInset(i: number /*float*/): void
                /**
                 * Fetch the span along an axis that is taken up by the insets.
                 * @param axis the axis to determine the total insets along,
                 *   either X_AXIS or Y_AXIS.
                 * @since 1.4
                 */
                // @ts-ignore
                getInsetSpan(axis: number /*int*/): float
                /**
                 * Set the estimatedMajorSpan property that determines if the
                 * major span should be treated as being estimated.  If this
                 * property is true, the value of setSize along the major axis
                 * will change the requirements along the major axis and incremental
                 * changes will be ignored until all of the children have been updated
                 * (which will cause the property to automatically be set to false).
                 * If the property is false the value of the majorSpan will be
                 * considered to be accurate and incremental changes will be
                 * added into the total as they are calculated.
                 * @since 1.4
                 */
                // @ts-ignore
                setEstimatedMajorSpan(isEstimated: boolean): void
                /**
                 * Is the major span currently estimated?
                 * @since 1.4
                 */
                // @ts-ignore
                getEstimatedMajorSpan(): boolean
                /**
                 * Fetch the object representing the layout state of
                 * of the child at the given index.
                 * @param index the child index.  This should be a
                 *    value &gt;= 0 and &lt; getViewCount().
                 */
                // @ts-ignore
                getChildState(index: number /*int*/): javax.swing.text.AsyncBoxView.ChildState
                /**
                 * Fetch the queue to use for layout.
                 */
                // @ts-ignore
                getLayoutQueue(): javax.swing.text.LayoutQueue
                /**
                 * New ChildState records are created through
                 * this method to allow subclasses the extend
                 * the ChildState records to do/hold more
                 */
                // @ts-ignore
                createChildState(v: javax.swing.text.View): javax.swing.text.AsyncBoxView.ChildState
                /**
                 * Requirements changed along the major axis.
                 * This is called by the thread doing layout for
                 * the given ChildState object when it has completed
                 * fetching the child views new preferences.
                 * Typically this would be the layout thread, but
                 * might be the event thread if it is trying to update
                 * something immediately (such as to perform a
                 * model/view translation).
                 * <p>
                 * This is implemented to mark the major axis as having
                 * changed so that a future check to see if the requirements
                 * need to be published to the parent view will consider
                 * the major axis.  If the span along the major axis is
                 * not estimated, it is updated by the given delta to reflect
                 * the incremental change.  The delta is ignored if the
                 * major span is estimated.
                 */
                // @ts-ignore
                majorRequirementChange(cs: javax.swing.text.AsyncBoxView.ChildState, delta: number /*float*/): void
                /**
                 * Requirements changed along the minor axis.
                 * This is called by the thread doing layout for
                 * the given ChildState object when it has completed
                 * fetching the child views new preferences.
                 * Typically this would be the layout thread, but
                 * might be the GUI thread if it is trying to update
                 * something immediately (such as to perform a
                 * model/view translation).
                 */
                // @ts-ignore
                minorRequirementChange(cs: javax.swing.text.AsyncBoxView.ChildState): void
                /**
                 * Publish the changes in preferences upward to the parent
                 * view.  This is normally called by the layout thread.
                 */
                // @ts-ignore
                flushRequirementChanges(): void
                /**
                 * Calls the superclass to update the child views, and
                 * updates the status records for the children.  This
                 * is expected to be called while a write lock is held
                 * on the model so that interaction with the layout
                 * thread will not happen (i.e. the layout thread
                 * acquires a read lock before doing anything).
                 * @param offset the starting offset into the child views &gt;= 0
                 * @param length the number of existing views to replace &gt;= 0
                 * @param views the child views to insert
                 */
                // @ts-ignore
                replace(offset: number /*int*/, length: number /*int*/, views: javax.swing.text.View[]): void
                /**
                 * Loads all of the children to initialize the view.
                 * This is called by the {@link #setParent setParent}
                 * method.  Subclasses can reimplement this to initialize
                 * their child views in a different manner.  The default
                 * implementation creates a child view for each
                 * child element.
                 * <p>
                 * Normally a write-lock is held on the Document while
                 * the children are being changed, which keeps the rendering
                 * and layout threads safe.  The exception to this is when
                 * the view is initialized to represent an existing element
                 * (via this method), so it is synchronized to exclude
                 * preferenceChanged while we are initializing.
                 * @param f the view factory
                 * @see #setParent
                 */
                // @ts-ignore
                loadChildren(f: javax.swing.text.ViewFactory): void
                /**
                 * Fetches the child view index representing the given position in
                 * the model.  This is implemented to fetch the view in the case
                 * where there is a child view for each child element.
                 * @param pos the position &gt;= 0
                 * @return index of the view representing the given position, or
                 *    -1 if no view represents that position
                 */
                // @ts-ignore
                getViewIndexAtPosition(pos: number /*int*/, b: javax.swing.text.Position.Bias): int
                /**
                 * Update the layout in response to receiving notification of
                 * change from the model.  This is implemented to note the
                 * change on the ChildLocator so that offsets of the children
                 * will be correctly computed.
                 * @param ec changes to the element this view is responsible
                 *   for (may be null if there were no changes).
                 * @param e the change information from the associated document
                 * @param a the current allocation of the view
                 * @see #insertUpdate
                 * @see #removeUpdate
                 * @see #changedUpdate
                 */
                // @ts-ignore
                updateLayout(ec: javax.swing.event.DocumentEvent.ElementChange, e: javax.swing.event.DocumentEvent, a: java.awt.Shape): void
                /**
                 * Sets the parent of the view.
                 * This is reimplemented to provide the superclass
                 * behavior as well as calling the <code>loadChildren</code>
                 * method if this view does not already have children.
                 * The children should not be loaded in the
                 * constructor because the act of setting the parent
                 * may cause them to try to search up the hierarchy
                 * (to get the hosting Container for example).
                 * If this view has children (the view is being moved
                 * from one place in the view hierarchy to another),
                 * the <code>loadChildren</code> method will not be called.
                 * @param parent the parent of the view, null if none
                 */
                // @ts-ignore
                setParent(parent: javax.swing.text.View): void
                /**
                 * Child views can call this on the parent to indicate that
                 * the preference has changed and should be reconsidered
                 * for layout.  This is reimplemented to queue new work
                 * on the layout thread.  This method gets messaged from
                 * multiple threads via the children.
                 * @param child the child view
                 * @param width true if the width preference has changed
                 * @param height true if the height preference has changed
                 * @see javax.swing.JComponent#revalidate
                 */
                // @ts-ignore
                preferenceChanged(child: javax.swing.text.View, width: boolean, height: boolean): void
                /**
                 * Sets the size of the view.  This should cause
                 * layout of the view if the view caches any layout
                 * information.
                 * <p>
                 * Since the major axis is updated asynchronously and should be
                 * the sum of the tiled children the call is ignored for the major
                 * axis.  Since the minor axis is flexible, work is queued to resize
                 * the children if the minor span changes.
                 * @param width the width &gt;= 0
                 * @param height the height &gt;= 0
                 */
                // @ts-ignore
                setSize(width: number /*float*/, height: number /*float*/): void
                /**
                 * Render the view using the given allocation and
                 * rendering surface.
                 * <p>
                 * This is implemented to determine whether or not the
                 * desired region to be rendered (i.e. the unclipped
                 * area) is up to date or not.  If up-to-date the children
                 * are rendered.  If not up-to-date, a task to build
                 * the desired area is placed on the layout queue as
                 * a high priority task.  This keeps by event thread
                 * moving by rendering if ready, and postponing until
                 * a later time if not ready (since paint requests
                 * can be rescheduled).
                 * @param g the rendering surface to use
                 * @param alloc the allocated region to render into
                 * @see View#paint
                 */
                // @ts-ignore
                paint(g: java.awt.Graphics, alloc: java.awt.Shape): void
                /**
                 * Determines the preferred span for this view along an
                 * axis.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into &gt;= 0.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @exception IllegalArgumentException for an invalid axis type
                 */
                // @ts-ignore
                getPreferredSpan(axis: number /*int*/): float
                /**
                 * Determines the minimum span for this view along an
                 * axis.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into &gt;= 0.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @exception IllegalArgumentException for an invalid axis type
                 */
                // @ts-ignore
                getMinimumSpan(axis: number /*int*/): float
                /**
                 * Determines the maximum span for this view along an
                 * axis.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into &gt;= 0.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @exception IllegalArgumentException for an invalid axis type
                 */
                // @ts-ignore
                getMaximumSpan(axis: number /*int*/): float
                /**
                 * Returns the number of views in this view.  Since
                 * the default is to not be a composite view this
                 * returns 0.
                 * @return the number of views &gt;= 0
                 * @see View#getViewCount
                 */
                // @ts-ignore
                getViewCount(): int
                /**
                 * Gets the nth child view.  Since there are no
                 * children by default, this returns null.
                 * @param n the number of the view to get, &gt;= 0 &amp;&amp; &lt; getViewCount()
                 * @return the view
                 */
                // @ts-ignore
                getView(n: number /*int*/): javax.swing.text.View
                /**
                 * Fetches the allocation for the given child view.
                 * This enables finding out where various views
                 * are located, without assuming the views store
                 * their location.  This returns null since the
                 * default is to not have any child views.
                 * @param index the index of the child, &gt;= 0 &amp;&amp; &lt; getViewCount()
                 * @param a  the allocation to this view.
                 * @return the allocation to the child
                 */
                // @ts-ignore
                getChildAllocation(index: number /*int*/, a: java.awt.Shape): java.awt.Shape
                /**
                 * Returns the child view index representing the given position in
                 * the model.  By default a view has no children so this is implemented
                 * to return -1 to indicate there is no valid child index for any
                 * position.
                 * @param pos the position &gt;= 0
                 * @return index of the view representing the given position, or
                 *    -1 if no view represents that position
                 * @since 1.3
                 */
                // @ts-ignore
                getViewIndex(pos: number /*int*/, b: javax.swing.text.Position.Bias): int
                /**
                 * Provides a mapping from the document model coordinate space
                 * to the coordinate space of the view mapped to it.
                 * @param pos the position to convert &gt;= 0
                 * @param a the allocated region to render into
                 * @param b the bias toward the previous character or the
                 *   next character represented by the offset, in case the
                 *   position is a boundary of two views.
                 * @return the bounding box of the given position is returned
                 * @exception BadLocationException  if the given position does
                 *    not represent a valid location in the associated document
                 * @exception IllegalArgumentException for an invalid bias argument
                 * @see View#viewToModel
                 */
                // @ts-ignore
                modelToView(pos: number /*int*/, a: java.awt.Shape, b: javax.swing.text.Position.Bias): java.awt.Shape
                /**
                 * Provides a mapping from the view coordinate space to the logical
                 * coordinate space of the model.  The biasReturn argument will be
                 * filled in to indicate that the point given is closer to the next
                 * character in the model or the previous character in the model.
                 * <p>
                 * This is expected to be called by the GUI thread, holding a
                 * read-lock on the associated model.  It is implemented to
                 * locate the child view and determine it's allocation with a
                 * lock on the ChildLocator object, and to call viewToModel
                 * on the child view with a lock on the ChildState object
                 * to avoid interaction with the layout thread.
                 * @param x the X coordinate &gt;= 0
                 * @param y the Y coordinate &gt;= 0
                 * @param a the allocated region to render into
                 * @return the location within the model that best represents the
                 *   given point in the view &gt;= 0.  The biasReturn argument will be
                 *  filled in to indicate that the point given is closer to the next
                 *  character in the model or the previous character in the model.
                 */
                // @ts-ignore
                viewToModel(x: number /*float*/, y: number /*float*/, a: java.awt.Shape, biasReturn: javax.swing.text.Position.Bias[]): int
                /**
                 * Provides a way to determine the next visually represented model
                 * location that one might place a caret.  Some views may not be visible,
                 * they might not be in the same order found in the model, or they just
                 * might not allow access to some of the locations in the model.
                 * This method enables specifying a position to convert
                 * within the range of &gt;=0.  If the value is -1, a position
                 * will be calculated automatically.  If the value &lt; -1,
                 * the {@code BadLocationException} will be thrown.
                 * @param pos the position to convert
                 * @param a the allocated region to render into
                 * @param direction the direction from the current position that can
                 *   be thought of as the arrow keys typically found on a keyboard;
                 *   this may be one of the following:
                 *   <ul style="list-style-type:none">
                 *   <li><code>SwingConstants.WEST</code></li>
                 *   <li><code>SwingConstants.EAST</code></li>
                 *   <li><code>SwingConstants.NORTH</code></li>
                 *   <li><code>SwingConstants.SOUTH</code></li>
                 *   </ul>
                 * @param biasRet an array contain the bias that was checked
                 * @return the location within the model that best represents the next
                 *   location visual position
                 * @exception BadLocationException the given position is not a valid
                 *                                  position within the document
                 * @exception IllegalArgumentException if <code>direction</code> is invalid
                 */
                // @ts-ignore
                getNextVisualPositionFrom(pos: number /*int*/, b: javax.swing.text.Position.Bias, a: java.awt.Shape, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[]): int
            }
        }
    }
}
