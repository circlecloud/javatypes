declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                class GsonStorageHandler<T> extends io.lumine.utils.serialize.FileStorageHandler<T> {
                    // @ts-ignore
                    constructor(fileName: java.lang.String | string, fileExtension: java.lang.String | string, dataFolder: java.io.File, clazz: java.lang.Class<T>)
                    // @ts-ignore
                    constructor(fileName: java.lang.String | string, fileExtension: java.lang.String | string, dataFolder: java.io.File, clazz: java.lang.Class<T>, gson: Gson)
                    // @ts-ignore
                    constructor(fileName: java.lang.String | string, fileExtension: java.lang.String | string, dataFolder: java.io.File, type: object)
                    // @ts-ignore
                    constructor(fileName: java.lang.String | string, fileExtension: java.lang.String | string, dataFolder: java.io.File, type: object, gson: Gson)
                    // @ts-ignore
                    constructor(fileName: java.lang.String | string, fileExtension: java.lang.String | string, dataFolder: java.io.File, type: java.lang.reflect.Type, gson: Gson)
                    // @ts-ignore
                    readonly type: java.lang.reflect.Type
                    // @ts-ignore
                    readonly gson: Gson
                    // @ts-ignore
                    readFromFile(path: java.nio.file.Path): T
                    // @ts-ignore
                    saveToFile(path: java.nio.file.Path, t: T): void
                }
            }
        }
    }
}
