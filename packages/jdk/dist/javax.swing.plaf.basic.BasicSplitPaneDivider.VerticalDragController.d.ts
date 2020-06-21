declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicSplitPaneDivider {
                    /**
                     * Handles the events during a dragging session for a
                     * VERTICAL_SPLIT oriented split pane. This continually
                     * messages <code>dragDividerTo</code> and then when done messages
                     * <code>finishDraggingTo</code>. When an instance is created it should be
                     * messaged with <code>isValid</code> to insure that dragging can happen
                     * (dragging won't be allowed if the two views can not be resized).
                     */
                    // @ts-ignore
                    class VerticalDragController extends javax.swing.plaf.basic.BasicSplitPaneDivider.DragController {
                        // @ts-ignore
                        constructor(e: java.awt.event.MouseEvent)
                        /**
                         * Returns the y argument, since this is used for vertical
                         * splits.
                         */
                        // @ts-ignore
                        getNeededLocation(x: number /*int*/, y: number /*int*/): number /*int*/
                        /**
                         * Returns the new position to put the divider at based on
                         * the passed in MouseEvent.
                         */
                        // @ts-ignore
                        positionForMouseEvent(e: java.awt.event.MouseEvent): number /*int*/
                    }
                }
            }
        }
    }
}
