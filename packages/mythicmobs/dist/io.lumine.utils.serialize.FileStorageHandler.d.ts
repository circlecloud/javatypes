declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                abstract class FileStorageHandler<T> extends java.lang.Object {
                    // @ts-ignore
                    constructor(fileName: java.lang.String | string, fileExtension: java.lang.String | string, dataFolder: java.io.File)
                    // @ts-ignore
                    public static build<T>(fileName: java.lang.String | string, fileExtension: java.lang.String | string, dataFolder: java.io.File, loadingFunc: java.util.function$.Function<java.nio.file.Path, T>, savingFunc: java.util.function$.BiConsumer<java.nio.file.Path, T>): io.lumine.utils.serialize.FileStorageHandler<T>
                    // @ts-ignore
                    abstract readFromFile(p0: java.nio.file.Path): T
                    // @ts-ignore
                    abstract saveToFile(p0: java.nio.file.Path, p1: T): void
                    // @ts-ignore
                    public load(): java.util.Optional<T>
                    // @ts-ignore
                    public saveAndBackup(data: T): void
                    // @ts-ignore
                    public save(data: T): void
                }
            }
        }
    }
}
