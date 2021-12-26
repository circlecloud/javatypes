declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                namespace LightningStrikeEvent {
                    // @ts-ignore
                    class Cause extends java.lang.Enum<org.bukkit.event.weather.LightningStrikeEvent.Cause> {
                        /**
                         * Triggered by the /summon command.
                         */
                        // @ts-ignore
                        public static readonly COMMAND: org.bukkit.event.weather.LightningStrikeEvent.Cause
                        /**
                         * Triggered by an enchanted trident.
                         */
                        // @ts-ignore
                        public static readonly TRIDENT: org.bukkit.event.weather.LightningStrikeEvent.Cause
                        /**
                         * Triggered by a skeleton horse trap.
                         */
                        // @ts-ignore
                        public static readonly TRAP: org.bukkit.event.weather.LightningStrikeEvent.Cause
                        /**
                         * Triggered by weather.
                         */
                        // @ts-ignore
                        public static readonly WEATHER: org.bukkit.event.weather.LightningStrikeEvent.Cause
                        /**
                         * Unknown trigger.
                         */
                        // @ts-ignore
                        public static readonly UNKNOWN: org.bukkit.event.weather.LightningStrikeEvent.Cause
                        // @ts-ignore
                        public static values(): org.bukkit.event.weather.LightningStrikeEvent.Cause[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.weather.LightningStrikeEvent.Cause
                    }
                }
            }
        }
    }
}
