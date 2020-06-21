declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                /**
                 * Author: BeYkeRYkt Nukkit Project
                 */
                // @ts-ignore
                class EntityChicken extends cn.nukkit.entity.passive.EntityAnimal {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getDrops(): cn.nukkit.item.Item[]
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public isBreedingItem(item: cn.nukkit.item.Item): boolean
                }
            }
        }
    }
}
