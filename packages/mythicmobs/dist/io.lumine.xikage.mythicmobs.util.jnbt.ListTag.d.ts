declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace jnbt {
                        // @ts-ignore
                        class ListTag extends io.lumine.xikage.mythicmobs.util.jnbt.Tag {
                            // @ts-ignore
                            constructor(type: java.lang.Class<any>, value: java.util.List<any> | Array<any>)
                            // @ts-ignore
                            public getType(): java.lang.Class<any>
                            // @ts-ignore
                            public getValue(): Array<io.lumine.xikage.mythicmobs.util.jnbt.Tag>
                            // @ts-ignore
                            public setValue(list: java.util.List<io.lumine.xikage.mythicmobs.util.jnbt.Tag> | Array<io.lumine.xikage.mythicmobs.util.jnbt.Tag>): io.lumine.xikage.mythicmobs.util.jnbt.ListTag
                            // @ts-ignore
                            public getIfExists(index: number /*int*/): io.lumine.xikage.mythicmobs.util.jnbt.Tag
                            // @ts-ignore
                            public getByteArray(index: number /*int*/): number /*byte*/[]
                            // @ts-ignore
                            public getByte(index: number /*int*/): number /*byte*/
                            // @ts-ignore
                            public getDouble(index: number /*int*/): number /*double*/
                            // @ts-ignore
                            public asDouble(index: number /*int*/): number /*double*/
                            // @ts-ignore
                            public getFloat(index: number /*int*/): number /*float*/
                            // @ts-ignore
                            public getIntArray(index: number /*int*/): number /*int*/[]
                            // @ts-ignore
                            public getInt(index: number /*int*/): number /*int*/
                            // @ts-ignore
                            public asInt(index: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getList(index: number /*int*/): Array<io.lumine.xikage.mythicmobs.util.jnbt.Tag>
                            // @ts-ignore
                            public getListTag(index: number /*int*/): io.lumine.xikage.mythicmobs.util.jnbt.ListTag
                            // @ts-ignore
                            public getList<T extends io.lumine.xikage.mythicmobs.util.jnbt.Tag>(index: number /*int*/, listType: java.lang.Class<T>): Array<T>
                            // @ts-ignore
                            public getLong(index: number /*int*/): number /*long*/
                            // @ts-ignore
                            public asLong(index: number /*int*/): number /*long*/
                            // @ts-ignore
                            public getShort(index: number /*int*/): number /*short*/
                            // @ts-ignore
                            public getString(index: number /*int*/): string
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
