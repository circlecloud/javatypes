declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                // @ts-ignore
                class PGZIPBlock extends java.lang.Object implements java.util.concurrent.Callable<number /*byte*/[]> {
                    // @ts-ignore
                    constructor(parent: cn.nukkit.nbt.stream.PGZIPOutputStream)
                    /**
                     * This ThreadLocal avoids the recycling of a lot of memory, causing lumpy performance.
                     */
                    // @ts-ignore
                    readonly STATE: java.lang.ThreadLocal<cn.nukkit.nbt.stream.PGZIPState>
                    // @ts-ignore
                    public static readonly SIZE: number /*int*/
                    // @ts-ignore
                    readonly in: number /*byte*/[]
                    // @ts-ignore
                    in_length: number /*int*/
                    // @ts-ignore
                    public call(): number /*byte*/[]
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
