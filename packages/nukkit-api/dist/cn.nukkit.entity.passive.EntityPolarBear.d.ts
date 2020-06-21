declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                /**
                 * @author PikyCZ
                 */
                // @ts-ignore
                class EntityPolarBear extends cn.nukkit.entity.passive.EntityAnimal {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public initEntity(): void
                    // @ts-ignore
                    public getDrops(): cn.nukkit.item.Item[]
                }
            }
        }
    }
}
