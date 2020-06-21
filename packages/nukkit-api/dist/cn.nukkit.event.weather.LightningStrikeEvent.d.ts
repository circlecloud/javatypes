declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace weather {
                /**
                 * author: funcraft
                 * Nukkit Project
                 */
                // @ts-ignore
                class LightningStrikeEvent extends cn.nukkit.event.weather.WeatherEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(level: cn.nukkit.level.Level, bolt: cn.nukkit.entity.weather.EntityLightningStrike)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    /**
                     * Gets the bolt which is striking the earth.
                     * @return lightning entity
                     */
                    // @ts-ignore
                    public getLightning(): cn.nukkit.entity.weather.EntityLightningStrike
                }
            }
        }
    }
}
