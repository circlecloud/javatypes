declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class BlockBreakEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, block: cn.nukkit.block.Block, item: cn.nukkit.item.Item, drops: cn.nukkit.item.Item[])
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, block: cn.nukkit.block.Block, item: cn.nukkit.item.Item, drops: cn.nukkit.item.Item[], instaBreak: boolean)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, block: cn.nukkit.block.Block, item: cn.nukkit.item.Item, drops: cn.nukkit.item.Item[], instaBreak: boolean, fastBreak: boolean)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, block: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, item: cn.nukkit.item.Item, drops: cn.nukkit.item.Item[], instaBreak: boolean, fastBreak: boolean)
                    // @ts-ignore
                    readonly player: cn.nukkit.Player
                    // @ts-ignore
                    readonly item: cn.nukkit.item.Item
                    // @ts-ignore
                    readonly face: cn.nukkit.math.BlockFace
                    // @ts-ignore
                    instaBreak: boolean
                    // @ts-ignore
                    blockDrops: cn.nukkit.item.Item[]
                    // @ts-ignore
                    blockXP: number /*int*/
                    // @ts-ignore
                    fastBreak: boolean
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player
                    // @ts-ignore
                    public getFace(): cn.nukkit.math.BlockFace
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item
                    // @ts-ignore
                    public getInstaBreak(): boolean
                    // @ts-ignore
                    public getDrops(): cn.nukkit.item.Item[]
                    // @ts-ignore
                    public setDrops(drops: cn.nukkit.item.Item[]): void
                    // @ts-ignore
                    public getDropExp(): number /*int*/
                    // @ts-ignore
                    public setDropExp(xp: number /*int*/): void
                    // @ts-ignore
                    public setInstaBreak(instaBreak: boolean): void
                    // @ts-ignore
                    public isFastBreak(): boolean
                }
            }
        }
    }
}
