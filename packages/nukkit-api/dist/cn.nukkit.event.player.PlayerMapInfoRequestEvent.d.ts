declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * Created by CreeperFace on 18.3.2017.
                 */
                // @ts-ignore
                class PlayerMapInfoRequestEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(p: cn.nukkit.Player, item: cn.nukkit.item.Item)
                    // @ts-ignore
                    public getMap(): cn.nukkit.item.Item
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                }
            }
        }
    }
}
