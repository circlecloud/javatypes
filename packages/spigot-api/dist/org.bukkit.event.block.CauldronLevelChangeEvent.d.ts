declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                class CauldronLevelChangeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, entity: org.bukkit.entity.Entity, reason: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason, oldLevel: number /*int*/, newLevel: number /*int*/)
                    /**
                     * Get entity which did this. May be null.
                     * @return acting entity
                     */
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Entity
                    // @ts-ignore
                    getReason(): org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                    // @ts-ignore
                    getOldLevel(): int
                    // @ts-ignore
                    getNewLevel(): int
                    // @ts-ignore
                    setNewLevel(newLevel: number /*int*/): void
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
