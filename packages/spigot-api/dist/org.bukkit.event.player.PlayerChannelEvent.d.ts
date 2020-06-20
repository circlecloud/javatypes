declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * This event is called after a player registers or unregisters a new plugin
                 * channel.
                 */
                // @ts-ignore
                class PlayerChannelEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, channel: string)
                    // @ts-ignore
                    getChannel(): java.lang.String
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
