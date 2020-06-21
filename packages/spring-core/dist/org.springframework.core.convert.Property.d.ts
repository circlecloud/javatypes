declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                /**
                 * A description of a JavaBeans Property that allows us to avoid a dependency on
                 * {@code java.beans.PropertyDescriptor}. The {@code java.beans} package
                 * is not available in a number of environments (e.g. Android, Java ME), so this is
                 * desirable for portability of Spring's core conversion facility.
                 * <p>Used to build a {@link TypeDescriptor} from a property location. The built
                 * {@code TypeDescriptor} can then be used to convert from/to the property type.
                 * @author Keith Donald
                 * @author Phillip Webb
                 * @since 3.1
                 * @see TypeDescriptor#TypeDescriptor(Property)
                 * @see TypeDescriptor#nested(Property, int)
                 */
                // @ts-ignore
                class Property extends java.lang.Object {
                    // @ts-ignore
                    constructor(objectType: java.lang.Class<any>, readMethod: java.lang.reflect.Method, writeMethod: java.lang.reflect.Method)
                    // @ts-ignore
                    constructor(objectType: java.lang.Class<any>, readMethod: java.lang.reflect.Method, writeMethod: java.lang.reflect.Method, name: java.lang.String | string)
                    /**
                     * The object declaring this property, either directly or in a superclass the object extends.
                     */
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    /**
                     * The name of the property: e.g. 'foo'
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * The property type: e.g. {@code java.lang.String}
                     */
                    // @ts-ignore
                    public getType(): java.lang.Class<any>
                    /**
                     * The property getter method: e.g. {@code getFoo()}
                     */
                    // @ts-ignore
                    public getReadMethod(): java.lang.reflect.Method
                    /**
                     * The property setter method: e.g. {@code setFoo(String)}
                     */
                    // @ts-ignore
                    public getWriteMethod(): java.lang.reflect.Method
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
