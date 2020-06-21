declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class PlayerInteractEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, item: cn.nukkit.item.Item, block: cn.nukkit.math.Vector3, face: cn.nukkit.math.BlockFace)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, item: cn.nukkit.item.Item, block: cn.nukkit.math.Vector3, face: cn.nukkit.math.BlockFace, action: cn.nukkit.event.player.PlayerInteractEvent.Action)
                    // @ts-ignore
                    readonly blockTouched: cn.nukkit.block.Block
                    // @ts-ignore
                    readonly touchVector: cn.nukkit.math.Vector3
                    // @ts-ignore
                    readonly blockFace: cn.nukkit.math.BlockFace
                    // @ts-ignore
                    readonly item: cn.nukkit.item.Item
                    // @ts-ignore
                    readonly action: cn.nukkit.event.player.PlayerInteractEvent.Action
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getAction(): cn.nukkit.event.player.PlayerInteractEvent.Action
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item
                    // @ts-ignore
                    public getBlock(): cn.nukkit.block.Block
                    // @ts-ignore
                    public getTouchVector(): cn.nukkit.math.Vector3
                    // @ts-ignore
                    public getFace(): cn.nukkit.math.BlockFace
                }
            }
        }
    }
}
