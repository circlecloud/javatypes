declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialization {
                // @ts-ignore
                class WrappedJsonFile<T> extends java.lang.Object {
                    // @ts-ignore
                    constructor(parent: io.lumine.utils.serialization.SerializingModule, file: java.io.File, value: T)
                    // @ts-ignore
                    public set(value: T): void
                    // @ts-ignore
                    public get(): T
                    // @ts-ignore
                    public save(): void
                }
            }
        }
    }
}
