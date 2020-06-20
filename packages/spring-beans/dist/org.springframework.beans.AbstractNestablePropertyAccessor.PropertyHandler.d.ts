declare namespace org {
    namespace springframework {
        namespace beans {
            namespace AbstractNestablePropertyAccessor {
                /**
                 * A handler for a specific property.
                 */
                // @ts-ignore
                class PropertyHandler extends java.lang.Object {
                    // @ts-ignore
                    constructor(propertyType: java.lang.Class<any>, readable: boolean, writable: boolean)
                    // @ts-ignore
                    getPropertyType(): java.lang.Class<?>
                    // @ts-ignore
                    isReadable(): boolean
                    // @ts-ignore
                    isWritable(): boolean
                    // @ts-ignore
                    abstract toTypeDescriptor(): TypeDescriptor
                    // @ts-ignore
                    abstract getResolvableType(): ResolvableType
                    // @ts-ignore
                    getMapKeyType(nestingLevel: number /*int*/): java.lang.Class<?>
                    // @ts-ignore
                    getMapValueType(nestingLevel: number /*int*/): java.lang.Class<?>
                    // @ts-ignore
                    getCollectionType(nestingLevel: number /*int*/): java.lang.Class<?>
                    // @ts-ignore
                    abstract nested(level: number /*int*/): TypeDescriptor
                    // @ts-ignore
                    abstract getValue(): java.lang.Object
                    // @ts-ignore
                    abstract setValue(value: any): void
                }
            }
        }
    }
}
