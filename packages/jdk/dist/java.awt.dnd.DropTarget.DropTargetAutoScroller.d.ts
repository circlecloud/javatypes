declare namespace java {
    namespace awt {
        namespace dnd {
            namespace DropTarget {
                /**
                 * this protected nested class implements autoscrolling
                 */
                // @ts-ignore
                class DropTargetAutoScroller extends java.lang.Object implements java.awt.event.ActionListener {
                    /**
                     * construct a DropTargetAutoScroller
                     * <P>
                     * @param c the <code>Component</code>
                     * @param p the <code>Point</code>
                     */
                    // @ts-ignore
                    constructor(c: java.awt.Component, p: java.awt.Point)
                    /**
                     * cause autoscroll to occur
                     * <P>
                     * @param newLocn the <code>Point</code>
                     */
                    // @ts-ignore
                    updateLocation(newLocn: java.awt.Point): void
                    /**
                     * cause autoscrolling to stop
                     */
                    // @ts-ignore
                    stop(): void
                    /**
                     * cause autoscroll to occur
                     * <P>
                     * @param e the <code>ActionEvent</code>
                     */
                    // @ts-ignore
                    actionPerformed(e: java.awt.event.ActionEvent): void
                }
            }
        }
    }
}
