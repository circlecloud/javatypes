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
                        readonly COMMAND: org.bukkit.event.weather.LightningStrikeEvent.Cause
                        /**
                         * Triggered by an enchanted trident.
                         */
                        // @ts-ignore
                        readonly TRIDENT: org.bukkit.event.weather.LightningStrikeEvent.Cause
                        /**
                         * Triggered by a skeleton horse trap.
                         */
                        // @ts-ignore
                        readonly TRAP: org.bukkit.event.weather.LightningStrikeEvent.Cause
                        /**
                         * Triggered by weather.
                         */
                        // @ts-ignore
                        readonly WEATHER: org.bukkit.event.weather.LightningStrikeEvent.Cause
                        /**
                         * Unknown trigger.
                         */
                        // @ts-ignore
                        readonly UNKNOWN: org.bukkit.event.weather.LightningStrikeEvent.Cause
                        // @ts-ignore
                        values(): org.bukkit.event.weather.LightningStrikeEvent.Cause[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.weather.LightningStrikeEvent.Cause
                    }
                }
            }
        }
    }
}
