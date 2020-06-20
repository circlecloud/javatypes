declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * This event is called when a player takes items out of the furnace
                 */
                // @ts-ignore
                class FurnaceExtractEvent extends org.bukkit.event.block.BlockExpEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, block: org.bukkit.block.Block, itemType: org.bukkit.Material, itemAmount: number /*int*/, exp: number /*int*/)
                    /**
                     * Get the player that triggered the event
                     * @return the relevant player
                     */
                    // @ts-ignore
                    getPlayer(): org.bukkit.entity.Player
                    /**
                     * Get the Material of the item being retrieved
                     * @return the material of the item
                     */
                    // @ts-ignore
                    getItemType(): org.bukkit.Material
                    /**
                     * Get the item count being retrieved
                     * @return the amount of the item
                     */
                    // @ts-ignore
                    getItemAmount(): int
                }
            }
        }
    }
}
