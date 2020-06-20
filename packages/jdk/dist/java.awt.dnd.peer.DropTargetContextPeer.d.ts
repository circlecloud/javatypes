declare namespace java {
    namespace awt {
        namespace dnd {
            namespace peer {
                /**
                 * <p>
                 * This interface is exposed by the underlying window system platform to
                 * enable control of platform DnD operations
                 * </p>
                 * @since 1.2
                 */
                // @ts-ignore
                interface DropTargetContextPeer {
                    /**
                     * update the peer's notion of the Target's actions
                     */
                    // @ts-ignore
                    setTargetActions(actions: number /*int*/): void
                    /**
                     * get the current Target actions
                     */
                    // @ts-ignore
                    getTargetActions(): int
                    /**
                     * get the DropTarget associated with this peer
                     */
                    // @ts-ignore
                    getDropTarget(): java.awt.dnd.DropTarget
                    /**
                     * get the (remote) DataFlavors from the peer
                     */
                    // @ts-ignore
                    getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
                    /**
                     * get an input stream to the remote data
                     */
                    // @ts-ignore
                    getTransferable(): java.awt.datatransfer.Transferable
                    /**
                     * @return if the DragSource Transferable is in the same JVM as the Target
                     */
                    // @ts-ignore
                    isTransferableJVMLocal(): boolean
                    /**
                     * accept the Drag
                     */
                    // @ts-ignore
                    acceptDrag(dragAction: number /*int*/): void
                    /**
                     * reject the Drag
                     */
                    // @ts-ignore
                    rejectDrag(): void
                    /**
                     * accept the Drop
                     */
                    // @ts-ignore
                    acceptDrop(dropAction: number /*int*/): void
                    /**
                     * reject the Drop
                     */
                    // @ts-ignore
                    rejectDrop(): void
                    /**
                     * signal complete
                     */
                    // @ts-ignore
                    dropComplete(success: boolean): void
                }
            }
        }
    }
}
