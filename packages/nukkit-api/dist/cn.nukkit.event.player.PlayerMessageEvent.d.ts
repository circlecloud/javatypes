declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * Created on 2015/12/23 by xtypr.
                 * Package cn.nukkit.event.player in project Nukkit .
                 */
                // @ts-ignore
                abstract class PlayerMessageEvent extends cn.nukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    message: java.lang.String | string
                    // @ts-ignore
                    public getMessage(): string
                    // @ts-ignore
                    public setMessage(message: java.lang.String | string): void
                }
            }
        }
    }
}
