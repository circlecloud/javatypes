declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class EntityData<T> extends java.lang.Object {
                    // @ts-ignore
                    constructor(id: number /*int*/)
                    // @ts-ignore
                    public abstract getType(): number /*int*/
                    // @ts-ignore
                    public abstract getData(): T
                    // @ts-ignore
                    public abstract setData(data: T): void
                    // @ts-ignore
                    public getId(): number /*int*/
                    // @ts-ignore
                    public setId(id: number /*int*/): cn.nukkit.entity.data.EntityData<any>
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                }
            }
        }
    }
}
