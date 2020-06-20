declare namespace javax {
    namespace swing {
        namespace text {
            namespace FlowView {
                /**
                 * Strategy for maintaining the physical form
                 * of the flow.  The default implementation is
                 * completely stateless, and recalculates the
                 * entire flow if the layout is invalid on the
                 * given FlowView.  Alternative strategies can
                 * be implemented by subclassing, and might
                 * perform incremental repair to the layout
                 * or alternative breaking behavior.
                 * @since 1.3
                 */
                // @ts-ignore
                class FlowStrategy extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Gives notification that something was inserted into the document
                     * in a location that the given flow view is responsible for.  The
                     * strategy should update the appropriate changed region (which
                     * depends upon the strategy used for repair).
                     * @param e the change information from the associated document
                     * @param alloc the current allocation of the view inside of the insets.
                     *    This value will be null if the view has not yet been displayed.
                     * @see View#insertUpdate
                     */
                    // @ts-ignore
                    insertUpdate(fv: javax.swing.text.FlowView, e: javax.swing.event.DocumentEvent, alloc: java.awt.Rectangle): void
                    /**
                     * Gives notification that something was removed from the document
                     * in a location that the given flow view is responsible for.
                     * @param e the change information from the associated document
                     * @param alloc the current allocation of the view inside of the insets.
                     * @see View#removeUpdate
                     */
                    // @ts-ignore
                    removeUpdate(fv: javax.swing.text.FlowView, e: javax.swing.event.DocumentEvent, alloc: java.awt.Rectangle): void
                    /**
                     * Gives notification from the document that attributes were changed
                     * in a location that this view is responsible for.
                     * @param fv     the <code>FlowView</code> containing the changes
                     * @param e      the <code>DocumentEvent</code> describing the changes
                     *                done to the Document
                     * @param alloc  Bounds of the View
                     * @see View#changedUpdate
                     */
                    // @ts-ignore
                    changedUpdate(fv: javax.swing.text.FlowView, e: javax.swing.event.DocumentEvent, alloc: java.awt.Rectangle): void
                    /**
                     * This method gives flow strategies access to the logical
                     * view of the FlowView.
                     */
                    // @ts-ignore
                    getLogicalView(fv: javax.swing.text.FlowView): javax.swing.text.View
                    /**
                     * Update the flow on the given FlowView.  By default, this causes
                     * all of the rows (child views) to be rebuilt to match the given
                     * constraints for each row.  This is called by a FlowView.layout
                     * to update the child views in the flow.
                     * @param fv the view to reflow
                     */
                    // @ts-ignore
                    layout(fv: javax.swing.text.FlowView): void
                    /**
                     * Creates a row of views that will fit within the
                     * layout span of the row.  This is called by the layout method.
                     * This is implemented to fill the row by repeatedly calling
                     * the createView method until the available span has been
                     * exhausted, a forced break was encountered, or the createView
                     * method returned null.  If the remaining span was exhausted,
                     * the adjustRow method will be called to perform adjustments
                     * to the row to try and make it fit into the given span.
                     * @param rowIndex the index of the row to fill in with views.  The
                     *    row is assumed to be empty on entry.
                     * @param pos  The current position in the children of
                     *    this views element from which to start.
                     * @return the position to start the next row
                     */
                    // @ts-ignore
                    layoutRow(fv: javax.swing.text.FlowView, rowIndex: number /*int*/, pos: number /*int*/): int
                    /**
                     * Adjusts the given row if possible to fit within the
                     * layout span.  By default this will try to find the
                     * highest break weight possible nearest the end of
                     * the row.  If a forced break is encountered, the
                     * break will be positioned there.
                     * @param rowIndex the row to adjust to the current layout
                     *   span.
                     * @param desiredSpan the current layout span &gt;= 0
                     * @param x the location r starts at.
                     */
                    // @ts-ignore
                    adjustRow(fv: javax.swing.text.FlowView, rowIndex: number /*int*/, desiredSpan: number /*int*/, x: number /*int*/): void
                    /**
                     * Creates a view that can be used to represent the current piece
                     * of the flow.  This can be either an entire view from the
                     * logical view, or a fragment of the logical view.
                     * @param fv the view holding the flow
                     * @param startOffset the start location for the view being created
                     * @param spanLeft the about of span left to fill in the row
                     * @param rowIndex the row the view will be placed into
                     */
                    // @ts-ignore
                    createView(fv: javax.swing.text.FlowView, startOffset: number /*int*/, spanLeft: number /*int*/, rowIndex: number /*int*/): javax.swing.text.View
                }
            }
        }
    }
}
