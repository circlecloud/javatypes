declare namespace javax {
    namespace swing {
        namespace text {
            namespace AsyncBoxView {
                /**
                 * A class to manage the effective position of the
                 * child views in a localized area while changes are
                 * being made around the localized area.  The AsyncBoxView
                 * may be continuously changing, but the visible area
                 * needs to remain fairly stable until the layout thread
                 * decides to publish an update to the parent.
                 * @since 1.3
                 */
                // @ts-ignore
                class ChildLocator extends java.lang.Object {
                    /**
                     * construct a child locator.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * The location of the last offset calculation
                     * that is valid.
                     */
                    // @ts-ignore
                    lastValidOffset: javax.swing.text.AsyncBoxView.ChildState
                    /**
                     * The last seen allocation (for repainting when changes
                     * are flushed upward).
                     */
                    // @ts-ignore
                    lastAlloc: java.awt.Rectangle
                    /**
                     * A shape to use for the child allocation to avoid
                     * creating a lot of garbage.
                     */
                    // @ts-ignore
                    childAlloc: java.awt.Rectangle
                    /**
                     * Notification that a child changed.  This can effect
                     * whether or not new offset calculations are needed.
                     * This is called by a ChildState object that has
                     * changed it's major span.  This can therefore be
                     * called by multiple threads.
                     */
                    // @ts-ignore
                    childChanged(cs: javax.swing.text.AsyncBoxView.ChildState): void
                    /**
                     * Paint the children that intersect the clip area.
                     */
                    // @ts-ignore
                    paintChildren(g: java.awt.Graphics): void
                    /**
                     * Fetch the allocation to use for a child view.
                     * This will update the offsets for all children
                     * not yet updated before the given index.
                     */
                    // @ts-ignore
                    getChildAllocation(index: number /*int*/, a: java.awt.Shape): java.awt.Shape
                    /**
                     * Fetches the child view index at the given point.
                     * This is called by the various View methods that
                     * need to calculate which child to forward a message
                     * to.  This should be called by a block synchronized
                     * on this object, and would typically be followed
                     * with one or more calls to getChildAllocation that
                     * should also be in the synchronized block.
                     * @param x the X coordinate &gt;= 0
                     * @param y the Y coordinate &gt;= 0
                     * @param a the allocation to the View
                     * @return the nearest child index
                     */
                    // @ts-ignore
                    getViewIndexAtPoint(x: number /*float*/, y: number /*float*/, a: java.awt.Shape): int
                    /**
                     * Fetch the allocation to use for a child view.
                     * <em>This does not update the offsets in the ChildState
                     * records.</em>
                     */
                    // @ts-ignore
                    getChildAllocation(index: number /*int*/): java.awt.Shape
                    /**
                     * Copy the currently allocated shape into the Rectangle
                     * used to store the current allocation.  This would be
                     * a floating point rectangle in a Java2D-specific implementation.
                     */
                    // @ts-ignore
                    setAllocation(a: java.awt.Shape): void
                    /**
                     * Locate the view responsible for an offset into the box
                     * along the major axis.  Make sure that offsets are set
                     * on the ChildState objects up to the given target span
                     * past the desired offset.
                     * @return index of the view representing the given visual
                     *    location (targetOffset), or -1 if no view represents
                     *    that location
                     */
                    // @ts-ignore
                    getViewIndexAtVisualOffset(targetOffset: number /*float*/): int
                }
            }
        }
    }
}
