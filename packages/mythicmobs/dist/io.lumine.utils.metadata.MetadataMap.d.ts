declare namespace io {
    namespace lumine {
        namespace utils {
            namespace metadata {
                // @ts-ignore
                interface MetadataMap {
                    // @ts-ignore
                    create(): io.lumine.utils.metadata.MetadataMap
                    // @ts-ignore
                    put<T>(p0: io.lumine.utils.metadata.MetadataKey<T>, p1: T): void
                    // @ts-ignore
                    put<T>(p0: io.lumine.utils.metadata.MetadataKey<T>, p1: io.lumine.utils.metadata.TransientValue<T>): void
                    // @ts-ignore
                    forcePut<T>(p0: io.lumine.utils.metadata.MetadataKey<T>, p1: T): void
                    // @ts-ignore
                    forcePut<T>(p0: io.lumine.utils.metadata.MetadataKey<T>, p1: io.lumine.utils.metadata.TransientValue<T>): void
                    // @ts-ignore
                    putIfAbsent<T>(p0: io.lumine.utils.metadata.MetadataKey<T>, p1: T): boolean
                    // @ts-ignore
                    putIfAbsent<T>(p0: io.lumine.utils.metadata.MetadataKey<T>, p1: io.lumine.utils.metadata.TransientValue<T>): boolean
                    // @ts-ignore
                    get<T>(p0: io.lumine.utils.metadata.MetadataKey<T>): java.util.Optional<T>
                    // @ts-ignore
                    getOrNull<T>(p0: io.lumine.utils.metadata.MetadataKey<T>): T
                    // @ts-ignore
                    getOrDefault<T>(p0: io.lumine.utils.metadata.MetadataKey<T>, p1: T): T
                    // @ts-ignore
                    getOrPut<T>(p0: io.lumine.utils.metadata.MetadataKey<T>, p1: java.util.function$.Supplier<T>): T
                    // @ts-ignore
                    getOrPutExpiring<T>(p0: io.lumine.utils.metadata.MetadataKey<T>, p1: java.util.function$.Supplier<io.lumine.utils.metadata.TransientValue<T>>): T
                    // @ts-ignore
                    has(p0: io.lumine.utils.metadata.MetadataKey<any>): boolean
                    // @ts-ignore
                    remove(p0: io.lumine.utils.metadata.MetadataKey<any>): boolean
                    // @ts-ignore
                    clear(): void
                    // @ts-ignore
                    asMap(): object
                    // @ts-ignore
                    isEmpty(): boolean
                }
            }
        }
    }
}
