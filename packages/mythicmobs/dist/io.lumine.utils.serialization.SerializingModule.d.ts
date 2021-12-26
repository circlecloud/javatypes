declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialization {
                // @ts-ignore
                class SerializingModule extends java.lang.Object {
                    // @ts-ignore
                    constructor(core: JavaPlugin, folderName: java.lang.String | string)
                    // @ts-ignore
                    constructor(core: JavaPlugin, folderName: java.lang.String | string, gson: Gson)
                    // @ts-ignore
                    GSON: Gson
                    // @ts-ignore
                    public getModuleFile(path: java.lang.String | string): java.io.File
                    // @ts-ignore
                    public getModuleDirectory(path: java.lang.String | string): java.io.File
                    // @ts-ignore
                    public getModuleFiles(): Array<java.io.File>
                    // @ts-ignore
                    public getModuleFiles(path: java.lang.String | string): Array<java.io.File>
                    // @ts-ignore
                    public loadFile<T>(file: java.io.File, type: java.lang.Class<T>): io.lumine.utils.serialization.WrappedJsonFile<T>
                    // @ts-ignore
                    public loadJson<T>(file: java.io.File, type: java.lang.Class<T>): T
                    // @ts-ignore
                    public saveJson(file: java.io.File, value: java.lang.Object | any): void
                    // @ts-ignore
                    public saveFile(file: java.io.File, contents: java.lang.String | string): void
                    // @ts-ignore
                    public getBasedir(): java.io.File
                }
            }
        }
    }
}
