declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityMetadata extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public get(id: number /*int*/): cn.nukkit.entity.data.EntityData<any>
                    // @ts-ignore
                    public getOrDefault(id: number /*int*/, defaultValue: cn.nukkit.entity.data.EntityData<any>): cn.nukkit.entity.data.EntityData<any>
                    // @ts-ignore
                    public exists(id: number /*int*/): boolean
                    // @ts-ignore
                    public put(data: cn.nukkit.entity.data.EntityData<any>): cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public getByte(id: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getShort(id: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getInt(id: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getLong(id: number /*int*/): number /*long*/
                    // @ts-ignore
                    public getFloat(id: number /*int*/): number /*float*/
                    // @ts-ignore
                    public getBoolean(id: number /*int*/): boolean
                    // @ts-ignore
                    public getNBT(id: number /*int*/): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public getString(id: number /*int*/): string
                    // @ts-ignore
                    public getPosition(id: number /*int*/): cn.nukkit.math.Vector3
                    // @ts-ignore
                    public getFloatPosition(id: number /*int*/): cn.nukkit.math.Vector3f
                    // @ts-ignore
                    public putByte(id: number /*int*/, value: number /*int*/): cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public putShort(id: number /*int*/, value: number /*int*/): cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public putInt(id: number /*int*/, value: number /*int*/): cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public putLong(id: number /*int*/, value: number /*long*/): cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public putFloat(id: number /*int*/, value: number /*float*/): cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public putBoolean(id: number /*int*/, value: boolean): cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public putNBT(id: number /*int*/, tag: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public putSlot(id: number /*int*/, value: cn.nukkit.item.Item): cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public putString(id: number /*int*/, value: java.lang.String | string): cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public getMap(): java.util.Map<java.lang.Integer | number, cn.nukkit.entity.data.EntityData<any>>
                }
            }
        }
    }
}
