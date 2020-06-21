declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a block is formed or spreads based on world conditions.
                 * <p>
                 * Use {@link BlockSpreadEvent} to catch blocks that actually spread and don't
                 * just "randomly" form.
                 * <p>
                 * Examples:
                 * <ul>
                 * <li>Snow forming due to a snow storm.
                 * <li>Ice forming in a snowy Biome like Taiga or Tundra.
                 * <li> Obsidian / Cobblestone forming due to contact with water.
                 * <li> Concrete forming due to mixing of concrete powder and water.
                 * </ul>
                 * <p>
                 * If a Block Form event is cancelled, the block will not be formed.
                 * @see BlockSpreadEvent
                 */
                // @ts-ignore
                class BlockFormEvent extends org.bukkit.event.block.BlockGrowEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
