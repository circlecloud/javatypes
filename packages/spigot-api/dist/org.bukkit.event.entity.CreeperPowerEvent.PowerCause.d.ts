declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace CreeperPowerEvent {
                    /**
                     * An enum to specify the cause of the change in power
                     */
                    // @ts-ignore
                    class PowerCause extends java.lang.Enum<org.bukkit.event.entity.CreeperPowerEvent.PowerCause> {
                        /**
                         * Power change caused by a lightning bolt
                         * <p>
                         * Powered state: true
                         */
                        // @ts-ignore
                        readonly LIGHTNING: org.bukkit.event.entity.CreeperPowerEvent.PowerCause
                        /**
                         * Power change caused by something else (probably a plugin)
                         * <p>
                         * Powered state: true
                         */
                        // @ts-ignore
                        readonly SET_ON: org.bukkit.event.entity.CreeperPowerEvent.PowerCause
                        /**
                         * Power change caused by something else (probably a plugin)
                         * <p>
                         * Powered state: false
                         */
                        // @ts-ignore
                        readonly SET_OFF: org.bukkit.event.entity.CreeperPowerEvent.PowerCause
                        // @ts-ignore
                        values(): org.bukkit.event.entity.CreeperPowerEvent.PowerCause[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.entity.CreeperPowerEvent.PowerCause
                    }
                }
            }
        }
    }
}
