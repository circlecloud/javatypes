declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                class ListTag<T extends cn.nukkit.nbt.tag.Tag> extends cn.nukkit.nbt.tag.Tag {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    public type: number /*byte*/
                    // @ts-ignore
                    public getId(): number /*byte*/
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public print(prefix: java.lang.String | string, out: java.io.PrintStream): void
                    // @ts-ignore
                    public add(tag: T): cn.nukkit.nbt.tag.ListTag<T>
                    // @ts-ignore
                    public add(index: number /*int*/, tag: T): cn.nukkit.nbt.tag.ListTag<T>
                    // @ts-ignore
                    public parseValue(): Array<java.lang.Object | any>
                    // @ts-ignore
                    public get(index: number /*int*/): T
                    // @ts-ignore
                    public getAll(): Array<T>
                    // @ts-ignore
                    public setAll(tags: java.util.List<T> | Array<T>): void
                    // @ts-ignore
                    public remove(tag: T): void
                    // @ts-ignore
                    public remove(index: number /*int*/): void
                    // @ts-ignore
                    public removeAll(tags: java.util.Collection<T> | Array<T>): void
                    // @ts-ignore
                    public size(): number /*int*/
                    // @ts-ignore
                    public copy(): cn.nukkit.nbt.tag.Tag
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                }
            }
        }
    }
}
