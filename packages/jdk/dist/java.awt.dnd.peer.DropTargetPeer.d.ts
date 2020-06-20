declare namespace java {
    namespace awt {
        namespace dnd {
            namespace peer {
                /**
                 * <p>
                 * The DropTargetPeer class is the interface to the platform dependent
                 * DnD facilities. Since the DnD system is based on the native platform's
                 * facilities, a DropTargetPeer will be associated with a ComponentPeer
                 * of the nearsest enclosing native Container (in the case of lightweights)
                 * </p>
                 * @since 1.2
                 */
                // @ts-ignore
                interface DropTargetPeer {
                    /**
                     * Add the DropTarget to the System
                     * @param dt The DropTarget effected
                     */
                    // @ts-ignore
                    addDropTarget(dt: java.awt.dnd.DropTarget): void
                    /**
                     * Remove the DropTarget from the system
                     * @param dt The DropTarget effected
                     */
                    // @ts-ignore
                    removeDropTarget(dt: java.awt.dnd.DropTarget): void
                }
            }
        }
    }
}
