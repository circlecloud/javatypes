declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                class ByteTag extends cn.nukkit.nbt.tag.NumberTag<java.lang.Integer | number> {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, data: number /*int*/)
                    // @ts-ignore
                    public data: number /*int*/
                    // @ts-ignore
                    public getData(): number
                    // @ts-ignore
                    public setData(data: java.lang.Integer | number): void
                    // @ts-ignore
                    public getId(): number /*byte*/
                    // @ts-ignore
                    public parseValue(): number
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
