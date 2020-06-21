declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * Created by CreeperFace on 1. 1. 2017.
                 */
                // @ts-ignore
                class PlayerInteractEntityEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, entity: cn.nukkit.entity.Entity, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3)
                    // @ts-ignore
                    readonly entity: cn.nukkit.entity.Entity
                    // @ts-ignore
                    readonly item: cn.nukkit.item.Item
                    // @ts-ignore
                    readonly clickedPos: cn.nukkit.math.Vector3
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.Entity
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item
                    // @ts-ignore
                    public getClickedPos(): cn.nukkit.math.Vector3
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                }
            }
        }
    }
}
