declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                namespace PlayerPreLoginEvent {
                    /**
                     * Basic kick reasons for communicating to plugins
                     */
                    // @ts-ignore
                    class Result extends java.lang.Enum<org.bukkit.event.player.PlayerPreLoginEvent.Result> {
                        /**
                         * The player is allowed to log in
                         */
                        // @ts-ignore
                        readonly ALLOWED: org.bukkit.event.player.PlayerPreLoginEvent.Result
                        /**
                         * The player is not allowed to log in, due to the server being full
                         */
                        // @ts-ignore
                        readonly KICK_FULL: org.bukkit.event.player.PlayerPreLoginEvent.Result
                        /**
                         * The player is not allowed to log in, due to them being banned
                         */
                        // @ts-ignore
                        readonly KICK_BANNED: org.bukkit.event.player.PlayerPreLoginEvent.Result
                        /**
                         * The player is not allowed to log in, due to them not being on the
                         * white list
                         */
                        // @ts-ignore
                        readonly KICK_WHITELIST: org.bukkit.event.player.PlayerPreLoginEvent.Result
                        /**
                         * The player is not allowed to log in, for reasons undefined
                         */
                        // @ts-ignore
                        readonly KICK_OTHER: org.bukkit.event.player.PlayerPreLoginEvent.Result
                        // @ts-ignore
                        values(): org.bukkit.event.player.PlayerPreLoginEvent.Result[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.player.PlayerPreLoginEvent.Result
                    }
                }
            }
        }
    }
}
