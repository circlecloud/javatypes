declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                class DoubleTag extends cn.nukkit.nbt.tag.NumberTag<java.lang.Double | number> {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, data: number /*double*/)
                    // @ts-ignore
                    public data: number /*double*/
                    // @ts-ignore
                    public getData(): number
                    // @ts-ignore
                    public setData(data: java.lang.Double | number): void
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
