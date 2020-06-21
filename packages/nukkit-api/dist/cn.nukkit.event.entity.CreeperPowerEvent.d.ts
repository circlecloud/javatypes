declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class CreeperPowerEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(creeper: cn.nukkit.entity.mob.EntityCreeper, bolt: cn.nukkit.entity.weather.EntityLightningStrike, cause: cn.nukkit.event.entity.CreeperPowerEvent.PowerCause)
                    // @ts-ignore
                    constructor(creeper: cn.nukkit.entity.mob.EntityCreeper, cause: cn.nukkit.event.entity.CreeperPowerEvent.PowerCause)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.mob.EntityCreeper
                    /**
                     * Gets the lightning bolt which is striking the Creeper.
                     * @return The Entity for the lightning bolt which is striking the Creeper
                     */
                    // @ts-ignore
                    public getLightning(): cn.nukkit.entity.weather.EntityLightningStrike
                    /**
                     * Gets the cause of the creeper being (un)powered.
                     * @return A PowerCause value detailing the cause of change in power.
                     */
                    // @ts-ignore
                    public getCause(): cn.nukkit.event.entity.CreeperPowerEvent.PowerCause
                }
            }
        }
    }
}
