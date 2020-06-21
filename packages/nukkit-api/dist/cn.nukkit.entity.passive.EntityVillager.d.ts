declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                // @ts-ignore
                class EntityVillager extends cn.nukkit.entity.EntityCreature implements cn.nukkit.entity.passive.EntityNPC, cn.nukkit.entity.EntityAgeable {
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
                    public getName(): string
                    // @ts-ignore
                    public initEntity(): void
                    // @ts-ignore
                    public isBaby(): boolean
                    // @ts-ignore
                    public setBaby(baby: boolean): void
                }
            }
        }
    }
}
