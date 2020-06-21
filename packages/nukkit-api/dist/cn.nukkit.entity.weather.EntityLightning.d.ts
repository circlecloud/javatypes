declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace weather {
                /**
                 * Created by boybook on 2016/2/27.
                 */
                // @ts-ignore
                class EntityLightning extends cn.nukkit.entity.Entity implements cn.nukkit.entity.weather.EntityLightningStrike {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public state: number /*int*/
                    // @ts-ignore
                    public liveTime: number /*int*/
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public isEffect(): boolean
                    // @ts-ignore
                    public setEffect(e: boolean): void
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                }
            }
        }
    }
}
