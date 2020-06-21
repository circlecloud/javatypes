declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Provides introspection utilities that either require knowledge of Tomcat
                 * internals or are solely used by Tomcat internals.
                 */
                // @ts-ignore
                class Introspection extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Extract the Java Bean property name from the setter name.
                     * Note: This method assumes that the method name has already been checked
                     * for correctness.
                     * @param setter The setter method
                     * @return the bean property name
                     */
                    // @ts-ignore
                    public static getPropertyName(setter: java.lang.reflect.Method): string
                    /**
                     * Determines if a method has a valid name and signature for a Java Bean
                     * setter.
                     * @param method    The method to test
                     * @return <code>true</code> if the method does have a valid name and
                     *           signature, else <code>false</code>
                     */
                    // @ts-ignore
                    public static isValidSetter(method: java.lang.reflect.Method): boolean
                    /**
                     * Determines if a method is a valid lifecycle callback method.
                     * @param method
                     *             The method to test
                     * @return <code>true</code> if the method is a valid lifecycle callback
                     *          method, else <code>false</code>
                     */
                    // @ts-ignore
                    public static isValidLifecycleCallback(method: java.lang.reflect.Method): boolean
                    /**
                     * Obtain the declared fields for a class taking account of any security
                     * manager that may be configured.
                     * @param clazz The class to introspect
                     * @return the class fields as an array
                     */
                    // @ts-ignore
                    public static getDeclaredFields(clazz: java.lang.Class<any>): java.lang.reflect.Field[]
                    /**
                     * Obtain the declared methods for a class taking account of any security
                     * manager that may be configured.
                     * @param clazz The class to introspect
                     * @return the class methods as an array
                     */
                    // @ts-ignore
                    public static getDeclaredMethods(clazz: java.lang.Class<any>): java.lang.reflect.Method[]
                    /**
                     * Attempt to load a class using the given Container's class loader. If the
                     * class cannot be loaded, a debug level log message will be written to the
                     * Container's log and null will be returned.
                     * @param context The class loader of this context will be used to attempt
                     *   to load the class
                     * @param className The class name
                     * @return the loaded class or <code>null</code> if loading failed
                     */
                    // @ts-ignore
                    public static loadClass(context: org.apache.catalina.Context, className: java.lang.String | string): java.lang.Class<any>
                    /**
                     * Converts the primitive type to its corresponding wrapper.
                     * @param clazz
                     *             Class that will be evaluated
                     * @return if the parameter is a primitive type returns its wrapper;
                     *          otherwise returns the same class
                     */
                    // @ts-ignore
                    public static convertPrimitiveType(clazz: java.lang.Class<any>): java.lang.Class<any>
                }
            }
        }
    }
}
