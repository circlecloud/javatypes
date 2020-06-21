declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                abstract class Tag extends java.lang.Object {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    public static readonly TAG_End: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_Byte: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_Short: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_Int: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_Long: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_Float: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_Double: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_Byte_Array: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_String: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_List: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_Compound: number /*byte*/
                    // @ts-ignore
                    public static readonly TAG_Int_Array: number /*byte*/
                    // @ts-ignore
                    public abstract toString(): string
                    // @ts-ignore
                    public abstract getId(): number /*byte*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public print(out: java.io.PrintStream): void
                    // @ts-ignore
                    public print(prefix: java.lang.String | string, out: java.io.PrintStream): void
                    // @ts-ignore
                    public setName(name: java.lang.String | string): cn.nukkit.nbt.tag.Tag
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public static readNamedTag(dis: cn.nukkit.nbt.stream.NBTInputStream): cn.nukkit.nbt.tag.Tag
                    // @ts-ignore
                    public static writeNamedTag(tag: cn.nukkit.nbt.tag.Tag, dos: cn.nukkit.nbt.stream.NBTOutputStream): void
                    // @ts-ignore
                    public static writeNamedTag(tag: cn.nukkit.nbt.tag.Tag, name: java.lang.String | string, dos: cn.nukkit.nbt.stream.NBTOutputStream): void
                    // @ts-ignore
                    public static newTag(type: number /*byte*/, name: java.lang.String | string): cn.nukkit.nbt.tag.Tag
                    // @ts-ignore
                    public static getTagName(type: number /*byte*/): string
                    // @ts-ignore
                    public abstract copy(): cn.nukkit.nbt.tag.Tag
                    // @ts-ignore
                    public abstract parseValue(): any
                }
            }
        }
    }
}
