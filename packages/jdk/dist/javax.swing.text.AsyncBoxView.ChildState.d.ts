declare namespace javax {
    namespace swing {
        namespace text {
            namespace AsyncBoxView {
                /**
                 * A record representing the layout state of a
                 * child view.  It is runnable as a task on another
                 * thread.  All access to the child view that is
                 * based upon a read-lock on the model should synchronize
                 * on this object (i.e. The layout thread and the GUI
                 * thread can both have a read lock on the model at the
                 * same time and are not protected from each other).
                 * Access to a child view hierarchy is serialized via
                 * synchronization on the ChildState instance.
                 * @since 1.3
                 */
                // @ts-ignore
                class ChildState extends java.lang.Object implements java.lang.Runnable {
                    /**
                     * Construct a child status.  This needs to start
                     * out as fairly large so we don't falsely begin with
                     * the idea that all of the children are visible.
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(v: javax.swing.text.View)
                    /**
                     * Fetch the child view this record represents
                     */
                    // @ts-ignore
                    public getChildView(): javax.swing.text.View
                    /**
                     * Update the child state.  This should be
                     * called by the thread that desires to spend
                     * time updating the child state (intended to
                     * be the layout thread).
                     * <p>
                     * This acquires a read lock on the associated
                     * document for the duration of the update to
                     * ensure the model is not changed while it is
                     * operating.  The first thing to do would be
                     * to see if any work actually needs to be done.
                     * The following could have conceivably happened
                     * while the state was waiting to be updated:
                     * <ol>
                     * <li>The child may have been removed from the
                     * view hierarchy.
                     * <li>The child may have been updated by a
                     * higher priority operation (i.e. the child
                     * may have become visible).
                     * </ol>
                     */
                    // @ts-ignore
                    public run(): void
                    /**
                     * What is the span along the minor axis.
                     */
                    // @ts-ignore
                    public getMinorSpan(): number /*float*/
                    /**
                     * What is the offset along the minor axis
                     */
                    // @ts-ignore
                    public getMinorOffset(): number /*float*/
                    /**
                     * What is the span along the major axis.
                     */
                    // @ts-ignore
                    public getMajorSpan(): number /*float*/
                    /**
                     * Get the offset along the major axis
                     */
                    // @ts-ignore
                    public getMajorOffset(): number /*float*/
                    /**
                     * This method should only be called by the ChildLocator,
                     * it is simply a convenient place to hold the cached
                     * location.
                     */
                    // @ts-ignore
                    public setMajorOffset(offs: number /*float*/): void
                    /**
                     * Mark preferences changed for this child.
                     * @param width true if the width preference has changed
                     * @param height true if the height preference has changed
                     * @see javax.swing.JComponent#revalidate
                     */
                    // @ts-ignore
                    public preferenceChanged(width: boolean, height: boolean): void
                    /**
                     * Has the child view been laid out.
                     */
                    // @ts-ignore
                    public isLayoutValid(): boolean
                }
            }
        }
    }
}
