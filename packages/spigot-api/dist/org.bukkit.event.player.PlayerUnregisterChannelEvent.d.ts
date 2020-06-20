declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * This is called immediately after a player unregisters for a plugin channel.
                 */
                // @ts-ignore
                class PlayerUnregisterChannelEvent extends org.bukkit.event.player.PlayerChannelEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, channel: string)
                }
            }
        }
    }
}
