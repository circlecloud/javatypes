declare namespace io {
    namespace lumine {
        namespace utils {
            namespace metadata {
                // @ts-ignore
                interface MetadataKey<T> {
                    // @ts-ignore
                    create<T>(id: java.lang.String | string, type: object): io.lumine.utils.metadata.MetadataKey<T>
                    // @ts-ignore
                    createEmptyKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<io.lumine.utils.metadata.Empty>
                    // @ts-ignore
                    createStringKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<java.lang.String | string>
                    // @ts-ignore
                    createBooleanKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<java.lang.Boolean>
                    // @ts-ignore
                    createIntegerKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<java.lang.Integer | number>
                    // @ts-ignore
                    createLongKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<java.lang.Long | number>
                    // @ts-ignore
                    createDoubleKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<java.lang.Double | number>
                    // @ts-ignore
                    createFloatKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<java.lang.Float | number>
                    // @ts-ignore
                    createShortKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<java.lang.Short | number>
                    // @ts-ignore
                    createCharacterKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<java.lang.Character>
                    // @ts-ignore
                    createCooldownKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<io.lumine.utils.Cooldown>
                    // @ts-ignore
                    createUuidKey(id: java.lang.String | string): io.lumine.utils.metadata.MetadataKey<java.util.UUID>
                    // @ts-ignore
                    getId(): string
                    // @ts-ignore
                    getType(): object
                    // @ts-ignore
                    cast(p0: java.lang.Object | any): T
                }
            }
        }
    }
}
