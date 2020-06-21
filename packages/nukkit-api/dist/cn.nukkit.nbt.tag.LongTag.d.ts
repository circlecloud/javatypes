declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                class LongTag extends cn.nukkit.nbt.tag.NumberTag<java.lang.Long | number> {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, data: number /*long*/)
                    // @ts-ignore
                    public data: number /*long*/
                    // @ts-ignore
                    public getData(): number
                    // @ts-ignore
                    public setData(data: java.lang.Long | number): void
                    // @ts-ignore
                    public parseValue(): number
                    // @ts-ignore
                    public getId(): number /*byte*/
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public copy(): cn.nukkit.nbt.tag.Tag
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                }
            }
        }
    }
}
