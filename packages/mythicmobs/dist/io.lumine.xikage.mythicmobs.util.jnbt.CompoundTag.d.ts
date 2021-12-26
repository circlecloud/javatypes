declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace jnbt {
                        // @ts-ignore
                        abstract class CompoundTag extends io.lumine.xikage.mythicmobs.util.jnbt.Tag {
                            // @ts-ignore
                            constructor(value: java.util.Map<java.lang.String | string, io.lumine.xikage.mythicmobs.util.jnbt.Tag>)
                            // @ts-ignore
                            readonly value: java.util.Map<java.lang.String | string, io.lumine.xikage.mythicmobs.util.jnbt.Tag>
                            // @ts-ignore
                            public containsKey(key: java.lang.String | string): boolean
                            // @ts-ignore
                            public getValue(): java.util.Map<java.lang.String | string, io.lumine.xikage.mythicmobs.util.jnbt.Tag>
                            // @ts-ignore
                            public setValue(value: java.util.Map<java.lang.String | string, io.lumine.xikage.mythicmobs.util.jnbt.Tag>): io.lumine.xikage.mythicmobs.util.jnbt.CompoundTag
                            // @ts-ignore
                            public createBuilder(): io.lumine.xikage.mythicmobs.util.jnbt.CompoundTagBuilder
                            // @ts-ignore
                            public getByteArray(key: java.lang.String | string): number /*byte*/[]
                            // @ts-ignore
                            public getByte(key: java.lang.String | string): number /*byte*/
                            // @ts-ignore
                            public getBoolean(key: java.lang.String | string): boolean
                            // @ts-ignore
                            public getDouble(key: java.lang.String | string): number /*double*/
                            // @ts-ignore
                            public asDouble(key: java.lang.String | string): number /*double*/
                            // @ts-ignore
                            public getFloat(key: java.lang.String | string): number /*float*/
                            // @ts-ignore
                            public getIntArray(key: java.lang.String | string): number /*int*/[]
                            // @ts-ignore
                            public getInt(key: java.lang.String | string): number /*int*/
                            // @ts-ignore
                            public asInt(key: java.lang.String | string): number /*int*/
                            // @ts-ignore
                            public getList(key: java.lang.String | string): Array<io.lumine.xikage.mythicmobs.util.jnbt.Tag>
                            // @ts-ignore
                            public getListTag(key: java.lang.String | string): io.lumine.xikage.mythicmobs.util.jnbt.ListTag
                            // @ts-ignore
                            public getList<T extends io.lumine.xikage.mythicmobs.util.jnbt.Tag>(key: java.lang.String | string, listType: java.lang.Class<T>): Array<T>
                            // @ts-ignore
                            public getLong(key: java.lang.String | string): number /*long*/
                            // @ts-ignore
                            public asLong(key: java.lang.String | string): number /*long*/
                            // @ts-ignore
                            public getShort(key: java.lang.String | string): number /*short*/
                            // @ts-ignore
                            public getString(key: java.lang.String | string): string
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
