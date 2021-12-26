declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace EntityUnleashEvent {
                    // @ts-ignore
                    class UnleashReason extends java.lang.Enum<org.bukkit.event.entity.EntityUnleashEvent.UnleashReason> {
                        /**
                         * When the entity's leashholder has died or logged out, and so is
                         * unleashed
                         */
                        // @ts-ignore
                        public static readonly HOLDER_GONE: org.bukkit.event.entity.EntityUnleashEvent.UnleashReason
                        /**
                         * When the entity's leashholder attempts to unleash it
                         */
                        // @ts-ignore
                        public static readonly PLAYER_UNLEASH: org.bukkit.event.entity.EntityUnleashEvent.UnleashReason
                        /**
                         * When the entity's leashholder is more than 10 blocks away
                         */
                        // @ts-ignore
                        public static readonly DISTANCE: org.bukkit.event.entity.EntityUnleashEvent.UnleashReason
                        // @ts-ignore
                        public static readonly UNKNOWN: org.bukkit.event.entity.EntityUnleashEvent.UnleashReason
                        // @ts-ignore
                        public static values(): org.bukkit.event.entity.EntityUnleashEvent.UnleashReason[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.entity.EntityUnleashEvent.UnleashReason
                    }
                }
            }
        }
    }
}
