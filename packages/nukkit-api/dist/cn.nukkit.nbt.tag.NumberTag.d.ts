declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class NumberTag<T extends java.lang.Number> extends cn.nukkit.nbt.tag.Tag {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    public abstract getData(): T
                    // @ts-ignore
                    public abstract setData(data: T): void
                }
            }
        }
    }
}
