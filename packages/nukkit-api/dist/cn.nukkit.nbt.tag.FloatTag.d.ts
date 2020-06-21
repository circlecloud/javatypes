declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                class FloatTag extends cn.nukkit.nbt.tag.NumberTag<java.lang.Float | number> {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, data: number /*float*/)
                    // @ts-ignore
                    public data: number /*float*/
                    // @ts-ignore
                    public getData(): number
                    // @ts-ignore
                    public setData(data: java.lang.Float | number): void
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
