declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace weather {
                /**
                 * Created by funcraft on 2016/2/27.
                 */
                // @ts-ignore
                interface EntityLightningStrike extends cn.nukkit.entity.weather.EntityWeather {
                    // @ts-ignore
                    isEffect(): boolean
                    // @ts-ignore
                    setEffect(e: boolean): void
                }
            }
        }
    }
}
