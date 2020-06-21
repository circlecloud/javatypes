declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class BlockPlaceEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, blockPlace: cn.nukkit.block.Block, blockReplace: cn.nukkit.block.Block, blockAgainst: cn.nukkit.block.Block, item: cn.nukkit.item.Item)
                    // @ts-ignore
                    readonly player: cn.nukkit.Player
                    // @ts-ignore
                    readonly item: cn.nukkit.item.Item
                    // @ts-ignore
                    readonly blockReplace: cn.nukkit.block.Block
                    // @ts-ignore
                    readonly blockAgainst: cn.nukkit.block.Block
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item
                    // @ts-ignore
                    public getBlockReplace(): cn.nukkit.block.Block
                    // @ts-ignore
                    public getBlockAgainst(): cn.nukkit.block.Block
                }
            }
        }
    }
}
