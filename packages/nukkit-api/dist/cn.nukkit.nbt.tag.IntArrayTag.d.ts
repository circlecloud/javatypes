declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                class IntArrayTag extends cn.nukkit.nbt.tag.Tag {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, data: number /*int*/[])
                    // @ts-ignore
                    public data: number /*int*/[]
                    // @ts-ignore
                    public getData(): number /*int*/[]
                    // @ts-ignore
                    public parseValue(): number /*int*/[]
                    // @ts-ignore
                    public getId(): number /*byte*/
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public copy(): cn.nukkit.nbt.tag.Tag
                }
            }
        }
    }
}
