declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                namespace CreeperPowerEvent {
                    /**
                     * An enum to specify the cause of the change in power
                     */
                    // @ts-ignore
                    class PowerCause extends java.lang.Enum<cn.nukkit.event.entity.CreeperPowerEvent.PowerCause> {
                        /**
                         * Power change caused by a lightning bolt
                         * <p>
                         * Powered state: true
                         */
                        // @ts-ignore
                        readonly LIGHTNING: cn.nukkit.event.entity.CreeperPowerEvent.PowerCause
                        /**
                         * Power change caused by something else (probably a plugin)
                         * <p>
                         * Powered state: true
                         */
                        // @ts-ignore
                        readonly SET_ON: cn.nukkit.event.entity.CreeperPowerEvent.PowerCause
                        /**
                         * Power change caused by something else (probably a plugin)
                         * <p>
                         * Powered state: false
                         */
                        // @ts-ignore
                        readonly SET_OFF: cn.nukkit.event.entity.CreeperPowerEvent.PowerCause
                        // @ts-ignore
                        values(): cn.nukkit.event.entity.CreeperPowerEvent.PowerCause[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): cn.nukkit.event.entity.CreeperPowerEvent.PowerCause
                    }
                }
            }
        }
    }
}
