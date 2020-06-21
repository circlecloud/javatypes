declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                /**
                 * Utils for introspection and reflection
                 */
                // @ts-ignore
                class IntrospectionUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Find a method with the right name If found, call the method ( if param is
                     * int or boolean we'll convert value to the right type before) - that means
                     * you can have setDebug(1).
                     * @param o The object to set a property on
                     * @param name The property name
                     * @param value The property value
                     * @return <code>true</code> if operation was successful
                     */
                    // @ts-ignore
                    public static setProperty(o: java.lang.Object | any, name: java.lang.String | string, value: java.lang.String | string): boolean
                    // @ts-ignore
                    public static setProperty(o: java.lang.Object | any, name: java.lang.String | string, value: java.lang.String | string, invokeSetProperty: boolean): boolean
                    // @ts-ignore
                    public static getProperty(o: java.lang.Object | any, name: java.lang.String | string): any
                    /**
                     * Replace ${NAME} with the property value.
                     * @param value The value
                     * @param staticProp Replacement properties
                     * @param dynamicProp Replacement properties
                     * @return the replacement value
                     */
                    // @ts-ignore
                    public static replaceProperties(value: java.lang.String | string, staticProp: java.util.Hashtable<java.lang.Object | any, java.lang.Object | any>, dynamicProp: org.apache.tomcat.util.IntrospectionUtils.PropertySource[]): string
                    /**
                     * Reverse of Introspector.decapitalize.
                     * @param name The name
                     * @return the capitalized string
                     */
                    // @ts-ignore
                    public static capitalize(name: java.lang.String | string): string
                    // @ts-ignore
                    public static clear(): void
                    // @ts-ignore
                    public static findMethods(c: java.lang.Class<any>): java.lang.reflect.Method[]
                    // @ts-ignore
                    public static findMethod(c: java.lang.Class<any>, name: java.lang.String | string, params: java.lang.Class<any>[]): java.lang.reflect.Method
                    // @ts-ignore
                    public static callMethod1(target: java.lang.Object | any, methodN: java.lang.String | string, param1: java.lang.Object | any, typeParam1: java.lang.String | string, cl: java.lang.ClassLoader): any
                    // @ts-ignore
                    public static callMethodN(target: java.lang.Object | any, methodN: java.lang.String | string, params: java.lang.Object[] | any[], typeParams: java.lang.Class<any>[]): any
                    // @ts-ignore
                    public static convert(object: java.lang.String | string, paramType: java.lang.Class<any>): any
                }
            }
        }
    }
}
