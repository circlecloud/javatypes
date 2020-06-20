declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicSplitPaneDivider {
                    /**
                     * Handles the events during a dragging session for a
                     * HORIZONTAL_SPLIT oriented split pane. This continually
                     * messages <code>dragDividerTo</code> and then when done messages
                     * <code>finishDraggingTo</code>. When an instance is created it should be
                     * messaged with <code>isValid</code> to insure that dragging can happen
                     * (dragging won't be allowed if the two views can not be resized).
                     * <p>
                     * <strong>Warning:</strong>
                     * Serialized objects of this class will not be compatible with
                     * future Swing releases. The current serialization support is
                     * appropriate for short term storage or RMI between applications running
                     * the same version of Swing.  As of 1.4, support for long term storage
                     * of all JavaBeans&trade;
                     * has been added to the <code>java.beans</code> package.
                     * Please see {@link java.beans.XMLEncoder}.
                     */
                    // @ts-ignore
                    class DragController extends java.lang.Object {
                        // @ts-ignore
                        constructor(e: java.awt.event.MouseEvent)
                        /**
                         * Returns true if the dragging session is valid.
                         */
                        // @ts-ignore
                        isValid(): boolean
                        /**
                         * Returns the new position to put the divider at based on
                         * the passed in MouseEvent.
                         */
                        // @ts-ignore
                        positionForMouseEvent(e: java.awt.event.MouseEvent): int
                        /**
                         * Returns the x argument, since this is used for horizontal
                         * splits.
                         */
                        // @ts-ignore
                        getNeededLocation(x: number /*int*/, y: number /*int*/): int
                        // @ts-ignore
                        continueDrag(newX: number /*int*/, newY: number /*int*/): void
                        /**
                         * Messages dragDividerTo with the new location for the mouse
                         * event.
                         */
                        // @ts-ignore
                        continueDrag(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        completeDrag(x: number /*int*/, y: number /*int*/): void
                        /**
                         * Messages finishDraggingTo with the new location for the mouse
                         * event.
                         */
                        // @ts-ignore
                        completeDrag(e: java.awt.event.MouseEvent): void
                    }
                }
            }
        }
    }
}
