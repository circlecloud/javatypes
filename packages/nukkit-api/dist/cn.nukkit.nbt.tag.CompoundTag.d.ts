declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                class CompoundTag extends cn.nukkit.nbt.tag.Tag implements java.lang.Cloneable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    public write(dos: cn.nukkit.nbt.stream.NBTOutputStream): void
                    // @ts-ignore
                    public load(dis: cn.nukkit.nbt.stream.NBTInputStream): void
                    // @ts-ignore
                    public getAllTags(): Array<cn.nukkit.nbt.tag.Tag>
                    // @ts-ignore
                    public getId(): number /*byte*/
                    // @ts-ignore
                    public put(name: java.lang.String | string, tag: cn.nukkit.nbt.tag.Tag): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putByte(name: java.lang.String | string, value: number /*int*/): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putShort(name: java.lang.String | string, value: number /*int*/): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putInt(name: java.lang.String | string, value: number /*int*/): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putLong(name: java.lang.String | string, value: number /*long*/): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putFloat(name: java.lang.String | string, value: number /*float*/): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putDouble(name: java.lang.String | string, value: number /*double*/): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putString(name: java.lang.String | string, value: java.lang.String | string): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putByteArray(name: java.lang.String | string, value: number /*byte*/[]): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putIntArray(name: java.lang.String | string, value: number /*int*/[]): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putList(listTag: cn.nukkit.nbt.tag.ListTag<any>): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putCompound(name: java.lang.String | string, value: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public putBoolean(string: java.lang.String | string, val: boolean): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public get(name: java.lang.String | string): cn.nukkit.nbt.tag.Tag
                    // @ts-ignore
                    public contains(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public remove(name: java.lang.String | string): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public removeAndGet<T extends cn.nukkit.nbt.tag.Tag>(name: java.lang.String | string): T
                    // @ts-ignore
                    public getByte(name: java.lang.String | string): number /*int*/
                    // @ts-ignore
                    public getShort(name: java.lang.String | string): number /*int*/
                    // @ts-ignore
                    public getInt(name: java.lang.String | string): number /*int*/
                    // @ts-ignore
                    public getLong(name: java.lang.String | string): number /*long*/
                    // @ts-ignore
                    public getFloat(name: java.lang.String | string): number /*float*/
                    // @ts-ignore
                    public getDouble(name: java.lang.String | string): number /*double*/
                    // @ts-ignore
                    public getString(name: java.lang.String | string): string
                    // @ts-ignore
                    public getByteArray(name: java.lang.String | string): number /*byte*/[]
                    // @ts-ignore
                    public getIntArray(name: java.lang.String | string): number /*int*/[]
                    // @ts-ignore
                    public getCompound(name: java.lang.String | string): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public getList(name: java.lang.String | string): cn.nukkit.nbt.tag.ListTag<any>
                    // @ts-ignore
                    public getList<T extends cn.nukkit.nbt.tag.Tag>(name: java.lang.String | string, type: java.lang.Class<T>): cn.nukkit.nbt.tag.ListTag<T>
                    // @ts-ignore
                    public getTags(): java.util.Map<java.lang.String | string, cn.nukkit.nbt.tag.Tag>
                    // @ts-ignore
                    public parseValue(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getBoolean(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public print(prefix: java.lang.String | string, out: java.io.PrintStream): void
                    // @ts-ignore
                    public isEmpty(): boolean
                    // @ts-ignore
                    public copy(): cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Check existence of NBT tag
                     * @param name - NBT tag Id.
                     * @return - true, if tag exists
                     */
                    // @ts-ignore
                    public exist(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public clone(): cn.nukkit.nbt.tag.CompoundTag
                }
            }
        }
    }
}
