declare namespace org {
    namespace springframework {
        namespace beans {
            namespace AbstractNestablePropertyAccessor {
                /**
                 * A handler for a specific property.
                 */
                // @ts-ignore
                abstract class PropertyHandler extends java.lang.Object {
                    // @ts-ignore
                    constructor(propertyType: java.lang.Class<any>, readable: boolean, writable: boolean)
                    // @ts-ignore
                    public getPropertyType(): java.lang.Class<any>
                    // @ts-ignore
                    public isReadable(): boolean
                    // @ts-ignore
                    public isWritable(): boolean
                    // @ts-ignore
                    public abstract toTypeDescriptor(): TypeDescriptor
                    // @ts-ignore
                    public abstract getResolvableType(): ResolvableType
                    // @ts-ignore
                    public getMapKeyType(nestingLevel: number /*int*/): java.lang.Class<any>
                    // @ts-ignore
                    public getMapValueType(nestingLevel: number /*int*/): java.lang.Class<any>
                    // @ts-ignore
                    public getCollectionType(nestingLevel: number /*int*/): java.lang.Class<any>
                    // @ts-ignore
                    public abstract nested(level: number /*int*/): TypeDescriptor
                    // @ts-ignore
                    public abstract getValue(): any
                    // @ts-ignore
                    public abstract setValue(value: java.lang.Object | any): void
                }
            }
        }
    }
}
