declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                class ByteArrayTag extends cn.nukkit.nbt.tag.Tag {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, data: number /*byte*/[])
                    // @ts-ignore
                    public data: number /*byte*/[]
                    // @ts-ignore
                    public getData(): number /*byte*/[]
                    // @ts-ignore
                    public getId(): number /*byte*/
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public copy(): cn.nukkit.nbt.tag.Tag
                    // @ts-ignore
                    public parseValue(): number /*byte*/[]
                }
            }
        }
    }
}
