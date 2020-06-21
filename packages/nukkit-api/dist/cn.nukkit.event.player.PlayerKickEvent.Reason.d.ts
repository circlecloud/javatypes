declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                namespace PlayerKickEvent {
                    // @ts-ignore
                    class Reason extends java.lang.Enum<cn.nukkit.event.player.PlayerKickEvent.Reason> {
                        // @ts-ignore
                        readonly NEW_CONNECTION: cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        readonly KICKED_BY_ADMIN: cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        readonly NOT_WHITELISTED: cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        readonly IP_BANNED: cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        readonly NAME_BANNED: cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        readonly INVALID_PVE: cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        readonly LOGIN_TIMEOUT: cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        readonly SERVER_FULL: cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        readonly FLYING_DISABLED: cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        readonly UNKNOWN: cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        values(): cn.nukkit.event.player.PlayerKickEvent.Reason[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): cn.nukkit.event.player.PlayerKickEvent.Reason
                        // @ts-ignore
                        toString(): string
                    }
                }
            }
        }
    }
}
