declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class NBTEntityData extends cn.nukkit.entity.data.EntityData<cn.nukkit.nbt.tag.CompoundTag> {
                    // @ts-ignore
                    constructor(id: number /*int*/, tag: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public tag: cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public getData(): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public setData(tag: cn.nukkit.nbt.tag.CompoundTag): void
                    // @ts-ignore
                    public getType(): number /*int*/
                }
            }
        }
    }
}
