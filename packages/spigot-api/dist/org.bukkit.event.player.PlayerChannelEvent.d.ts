declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * This event is called after a player registers or unregisters a new plugin
                 * channel.
                 */
                // @ts-ignore
                abstract class PlayerChannelEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, channel: java.lang.String | string)
                    // @ts-ignore
                    public getChannel(): string
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
