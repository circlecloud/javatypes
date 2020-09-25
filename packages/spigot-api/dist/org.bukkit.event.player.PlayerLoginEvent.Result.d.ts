declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                namespace PlayerLoginEvent {
                    /**
                     * Basic kick reasons for communicating to plugins
                     */
                    // @ts-ignore
                    class Result extends java.lang.Enum<org.bukkit.event.player.PlayerLoginEvent.Result> {
                        /**
                         * The player is allowed to log in
                         */
                        // @ts-ignore
                        public static readonly ALLOWED: org.bukkit.event.player.PlayerLoginEvent.Result
                        /**
                         * The player is not allowed to log in, due to the server being full
                         */
                        // @ts-ignore
                        public static readonly KICK_FULL: org.bukkit.event.player.PlayerLoginEvent.Result
                        /**
                         * The player is not allowed to log in, due to them being banned
                         */
                        // @ts-ignore
                        public static readonly KICK_BANNED: org.bukkit.event.player.PlayerLoginEvent.Result
                        /**
                         * The player is not allowed to log in, due to them not being on the
                         * white list
                         */
                        // @ts-ignore
                        public static readonly KICK_WHITELIST: org.bukkit.event.player.PlayerLoginEvent.Result
                        /**
                         * The player is not allowed to log in, for reasons undefined
                         */
                        // @ts-ignore
                        public static readonly KICK_OTHER: org.bukkit.event.player.PlayerLoginEvent.Result
                        // @ts-ignore
                        public static values(): org.bukkit.event.player.PlayerLoginEvent.Result[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.player.PlayerLoginEvent.Result
                    }
                }
            }
        }
    }
}
