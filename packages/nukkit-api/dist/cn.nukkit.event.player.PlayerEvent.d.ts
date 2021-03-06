declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class PlayerEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    player: cn.nukkit.Player
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player
                }
            }
        }
    }
}
