declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace mob {
                /**
                 * @author Box.
                 */
                // @ts-ignore
                class EntityCreeper extends cn.nukkit.entity.mob.EntityMob {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public static readonly DATA_SWELL_DIRECTION: number /*int*/
                    // @ts-ignore
                    public static readonly DATA_SWELL: number /*int*/
                    // @ts-ignore
                    public static readonly DATA_SWELL_OLD: number /*int*/
                    // @ts-ignore
                    public static readonly DATA_POWERED: number /*int*/
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public isPowered(): boolean
                    // @ts-ignore
                    public setPowered(bolt: cn.nukkit.entity.weather.EntityLightningStrike): void
                    // @ts-ignore
                    public setPowered(powered: boolean): void
                    // @ts-ignore
                    public onStruckByLightning(entity: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getDrops(): cn.nukkit.item.Item[]
                }
            }
        }
    }
}
