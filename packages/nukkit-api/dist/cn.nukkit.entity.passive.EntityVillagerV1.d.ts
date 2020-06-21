declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                /**
                 * Created by Pub4Game on 21.06.2016.
                 */
                // @ts-ignore
                class EntityVillagerV1 extends cn.nukkit.entity.EntityCreature implements cn.nukkit.entity.passive.EntityNPC, cn.nukkit.entity.EntityAgeable {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly PROFESSION_FARMER: number /*int*/
                    // @ts-ignore
                    public static readonly PROFESSION_LIBRARIAN: number /*int*/
                    // @ts-ignore
                    public static readonly PROFESSION_PRIEST: number /*int*/
                    // @ts-ignore
                    public static readonly PROFESSION_BLACKSMITH: number /*int*/
                    // @ts-ignore
                    public static readonly PROFESSION_BUTCHER: number /*int*/
                    // @ts-ignore
                    public static readonly PROFESSION_GENERIC: number /*int*/
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public initEntity(): void
                    // @ts-ignore
                    public getProfession(): number /*int*/
                    // @ts-ignore
                    public setProfession(profession: number /*int*/): void
                    // @ts-ignore
                    public isBaby(): boolean
                }
            }
        }
    }
}
