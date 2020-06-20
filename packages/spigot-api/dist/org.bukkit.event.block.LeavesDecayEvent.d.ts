declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when leaves are decaying naturally.
                 * <p>
                 * If a Leaves Decay event is cancelled, the leaves will not decay.
                 */
                // @ts-ignore
                class LeavesDecayEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
