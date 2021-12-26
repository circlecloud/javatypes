declare namespace io {
    namespace lumine {
        namespace utils {
            namespace storage {
                // @ts-ignore
                class StorageType extends java.lang.Enum<io.lumine.utils.storage.StorageType> {
                    // @ts-ignore
                    public static readonly YAML: io.lumine.utils.storage.StorageType
                    // @ts-ignore
                    public static readonly JSON: io.lumine.utils.storage.StorageType
                    // @ts-ignore
                    public static readonly MARIADB: io.lumine.utils.storage.StorageType
                    // @ts-ignore
                    public static readonly MYSQL: io.lumine.utils.storage.StorageType
                    // @ts-ignore
                    public static readonly POSTGRESQL: io.lumine.utils.storage.StorageType
                    // @ts-ignore
                    public static readonly SQLITE: io.lumine.utils.storage.StorageType
                    // @ts-ignore
                    public static values(): io.lumine.utils.storage.StorageType[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): io.lumine.utils.storage.StorageType
                    // @ts-ignore
                    public static parse(name: java.lang.String | string, def: io.lumine.utils.storage.StorageType): io.lumine.utils.storage.StorageType
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getIdentifiers(): Array<java.lang.String | string>
                }
            }
        }
    }
}
