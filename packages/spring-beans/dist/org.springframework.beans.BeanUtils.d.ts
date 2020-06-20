declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Static convenience methods for JavaBeans: for instantiating beans,
             * checking bean property types, copying bean properties, etc.
             * <p>Mainly for internal use within the framework, but to some degree also
             * useful for application classes. Consider
             * <a href="https://commons.apache.org/proper/commons-beanutils/">Apache Commons BeanUtils</a>,
             * <a href="https://hotelsdotcom.github.io/bull/">BULL - Bean Utils Light Library</a>,
             * or similar third-party frameworks for more comprehensive bean utilities.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @author Sam Brannen
             * @author Sebastien Deleuze
             */
            // @ts-ignore
            class BeanUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Convenience method to instantiate a class using its no-arg constructor.
                 * @param clazz class to instantiate
                 * @return the new instance
                 * @throws BeanInstantiationException if the bean cannot be instantiated
                 * @deprecated as of Spring 5.0, following the deprecation of
                 *  {#link Class#newInstance()} in JDK 9
                 * @see Class#newInstance()
                 */
                // @ts-ignore
                instantiate<T>(clazz: java.lang.Class<T>): T
                /**
                 * Instantiate a class using its 'primary' constructor (for Kotlin classes,
                 * potentially having default arguments declared) or its default constructor
                 * (for regular Java classes, expecting a standard no-arg setup).
                 * <p>Note that this method tries to set the constructor accessible
                 * if given a non-accessible (that is, non-public) constructor.
                 * @param clazz the class to instantiate
                 * @return the new instance
                 * @throws BeanInstantiationException if the bean cannot be instantiated.
                 *  The cause may notably indicate a {#link NoSuchMethodException} if no
                 *  primary/default constructor was found, a {@link NoClassDefFoundError}
                 *  or other {@link LinkageError} in case of an unresolvable class definition
                 *  (e.g. due to a missing dependency at runtime), or an exception thrown
                 *  from the constructor invocation itself.
                 * @see Constructor#newInstance
                 */
                // @ts-ignore
                instantiateClass<T>(clazz: java.lang.Class<T>): T
                /**
                 * Instantiate a class using its no-arg constructor and return the new instance
                 * as the specified assignable type.
                 * <p>Useful in cases where the type of the class to instantiate (clazz) is not
                 * available, but the type desired (assignableTo) is known.
                 * <p>Note that this method tries to set the constructor accessible if given a
                 * non-accessible (that is, non-public) constructor.
                 * @param clazz class to instantiate
                 * @param assignableTo type that clazz must be assignableTo
                 * @return the new instance
                 * @throws BeanInstantiationException if the bean cannot be instantiated
                 * @see Constructor#newInstance
                 */
                // @ts-ignore
                instantiateClass<T>(clazz: java.lang.Class<any>, assignableTo: java.lang.Class<T>): T
                /**
                 * Convenience method to instantiate a class using the given constructor.
                 * <p>Note that this method tries to set the constructor accessible if given a
                 * non-accessible (that is, non-public) constructor, and supports Kotlin classes
                 * with optional parameters and default values.
                 * @param ctor the constructor to instantiate
                 * @param args the constructor arguments to apply (use {#code null} for an unspecified
                 *  parameter, Kotlin optional parameters and Java primitive types are supported)
                 * @return the new instance
                 * @throws BeanInstantiationException if the bean cannot be instantiated
                 * @see Constructor#newInstance
                 */
                // @ts-ignore
                instantiateClass<T>(ctor: java.lang.reflect.Constructor<T>, ...args: any[]): T
                /**
                 * Return the primary constructor of the provided class. For Kotlin classes, this
                 * returns the Java constructor corresponding to the Kotlin primary constructor
                 * (as defined in the Kotlin specification). Otherwise, in particular for non-Kotlin
                 * classes, this simply returns {@code null}.
                 * @param clazz the class to check
                 * @since 5.0
                 * @see <a href="https://kotlinlang.org/docs/reference/classes.html#constructors">Kotlin docs</a>
                 */
                // @ts-ignore
                findPrimaryConstructor<T>(clazz: java.lang.Class<T>): java.lang.reflect.Constructor<T>
                /**
                 * Find a method with the given method name and the given parameter types,
                 * declared on the given class or one of its superclasses. Prefers public methods,
                 * but will return a protected, package access, or private method too.
                 * <p>Checks {@code Class.getMethod} first, falling back to
                 * {@code findDeclaredMethod}. This allows to find public methods
                 * without issues even in environments with restricted Java security settings.
                 * @param clazz the class to check
                 * @param methodName the name of the method to find
                 * @param paramTypes the parameter types of the method to find
                 * @return the Method object, or {#code null} if not found
                 * @see Class#getMethod
                 * @see #findDeclaredMethod
                 */
                // @ts-ignore
                findMethod(clazz: java.lang.Class<any>, methodName: string, ...paramTypes: java.lang.Class[]): java.lang.reflect.Method
                /**
                 * Find a method with the given method name and the given parameter types,
                 * declared on the given class or one of its superclasses. Will return a public,
                 * protected, package access, or private method.
                 * <p>Checks {@code Class.getDeclaredMethod}, cascading upwards to all superclasses.
                 * @param clazz the class to check
                 * @param methodName the name of the method to find
                 * @param paramTypes the parameter types of the method to find
                 * @return the Method object, or {#code null} if not found
                 * @see Class#getDeclaredMethod
                 */
                // @ts-ignore
                findDeclaredMethod(clazz: java.lang.Class<any>, methodName: string, ...paramTypes: java.lang.Class[]): java.lang.reflect.Method
                /**
                 * Find a method with the given method name and minimal parameters (best case: none),
                 * declared on the given class or one of its superclasses. Prefers public methods,
                 * but will return a protected, package access, or private method too.
                 * <p>Checks {@code Class.getMethods} first, falling back to
                 * {@code findDeclaredMethodWithMinimalParameters}. This allows for finding public
                 * methods without issues even in environments with restricted Java security settings.
                 * @param clazz the class to check
                 * @param methodName the name of the method to find
                 * @return the Method object, or {#code null} if not found
                 * @throws IllegalArgumentException if methods of the given name were found but
                 *  could not be resolved to a unique method with minimal parameters
                 * @see Class#getMethods
                 * @see #findDeclaredMethodWithMinimalParameters
                 */
                // @ts-ignore
                findMethodWithMinimalParameters(clazz: java.lang.Class<any>, methodName: string): java.lang.reflect.Method
                /**
                 * Find a method with the given method name and minimal parameters (best case: none),
                 * declared on the given class or one of its superclasses. Will return a public,
                 * protected, package access, or private method.
                 * <p>Checks {@code Class.getDeclaredMethods}, cascading upwards to all superclasses.
                 * @param clazz the class to check
                 * @param methodName the name of the method to find
                 * @return the Method object, or {#code null} if not found
                 * @throws IllegalArgumentException if methods of the given name were found but
                 *  could not be resolved to a unique method with minimal parameters
                 * @see Class#getDeclaredMethods
                 */
                // @ts-ignore
                findDeclaredMethodWithMinimalParameters(clazz: java.lang.Class<any>, methodName: string): java.lang.reflect.Method
                /**
                 * Find a method with the given method name and minimal parameters (best case: none)
                 * in the given list of methods.
                 * @param methods the methods to check
                 * @param methodName the name of the method to find
                 * @return the Method object, or {#code null} if not found
                 * @throws IllegalArgumentException if methods of the given name were found but
                 *  could not be resolved to a unique method with minimal parameters
                 */
                // @ts-ignore
                findMethodWithMinimalParameters(methods: java.lang.reflect.Method[], methodName: string): java.lang.reflect.Method
                /**
                 * Parse a method signature in the form {@code methodName[([arg_list])]},
                 * where {@code arg_list} is an optional, comma-separated list of fully-qualified
                 * type names, and attempts to resolve that signature against the supplied {@code Class}.
                 * <p>When not supplying an argument list ({@code methodName}) the method whose name
                 * matches and has the least number of parameters will be returned. When supplying an
                 * argument type list, only the method whose name and argument types match will be returned.
                 * <p>Note then that {@code methodName} and {@code methodName()} are <strong>not</strong>
                 * resolved in the same way. The signature {@code methodName} means the method called
                 * {@code methodName} with the least number of arguments, whereas {@code methodName()}
                 * means the method called {@code methodName} with exactly 0 arguments.
                 * <p>If no method can be found, then {@code null} is returned.
                 * @param signature the method signature as String representation
                 * @param clazz the class to resolve the method signature against
                 * @return the resolved Method
                 * @see #findMethod
                 * @see #findMethodWithMinimalParameters
                 */
                // @ts-ignore
                resolveSignature(signature: string, clazz: java.lang.Class<any>): java.lang.reflect.Method
                /**
                 * Retrieve the JavaBeans {@code PropertyDescriptor}s of a given class.
                 * @param clazz the Class to retrieve the PropertyDescriptors for
                 * @return an array of {#code PropertyDescriptors} for the given class
                 * @throws BeansException if PropertyDescriptor look fails
                 */
                // @ts-ignore
                getPropertyDescriptors(clazz: java.lang.Class<any>): java.beans.PropertyDescriptor[]
                /**
                 * Retrieve the JavaBeans {@code PropertyDescriptors} for the given property.
                 * @param clazz the Class to retrieve the PropertyDescriptor for
                 * @param propertyName the name of the property
                 * @return the corresponding PropertyDescriptor, or {#code null} if none
                 * @throws BeansException if PropertyDescriptor lookup fails
                 */
                // @ts-ignore
                getPropertyDescriptor(clazz: java.lang.Class<any>, propertyName: string): java.beans.PropertyDescriptor
                /**
                 * Find a JavaBeans {@code PropertyDescriptor} for the given method,
                 * with the method either being the read method or the write method for
                 * that bean property.
                 * @param method the method to find a corresponding PropertyDescriptor for,
                 *  introspecting its declaring class
                 * @return the corresponding PropertyDescriptor, or {#code null} if none
                 * @throws BeansException if PropertyDescriptor lookup fails
                 */
                // @ts-ignore
                findPropertyForMethod(method: java.lang.reflect.Method): java.beans.PropertyDescriptor
                /**
                 * Find a JavaBeans {@code PropertyDescriptor} for the given method,
                 * with the method either being the read method or the write method for
                 * that bean property.
                 * @param method the method to find a corresponding PropertyDescriptor for
                 * @param clazz the (most specific) class to introspect for descriptors
                 * @return the corresponding PropertyDescriptor, or {#code null} if none
                 * @throws BeansException if PropertyDescriptor lookup fails
                 * @since 3.2.13
                 */
                // @ts-ignore
                findPropertyForMethod(method: java.lang.reflect.Method, clazz: java.lang.Class<any>): java.beans.PropertyDescriptor
                /**
                 * Find a JavaBeans PropertyEditor following the 'Editor' suffix convention
                 * (e.g. "mypackage.MyDomainClass" -> "mypackage.MyDomainClassEditor").
                 * <p>Compatible to the standard JavaBeans convention as implemented by
                 * {@link java.beans.PropertyEditorManager} but isolated from the latter's
                 * registered default editors for primitive types.
                 * @param targetType the type to find an editor for
                 * @return the corresponding editor, or {#code null} if none found
                 */
                // @ts-ignore
                findEditorByConvention(targetType: java.lang.Class<any>): java.beans.PropertyEditor
                /**
                 * Determine the bean property type for the given property from the
                 * given classes/interfaces, if possible.
                 * @param propertyName the name of the bean property
                 * @param beanClasses the classes to check against
                 * @return the property type, or {#code Object.class} as fallback
                 */
                // @ts-ignore
                findPropertyType(propertyName: string, ...beanClasses: java.lang.Class[]): java.lang.Class<?>
                /**
                 * Obtain a new MethodParameter object for the write method of the
                 * specified property.
                 * @param pd the PropertyDescriptor for the property
                 * @return a corresponding MethodParameter object
                 */
                // @ts-ignore
                getWriteMethodParameter(pd: java.beans.PropertyDescriptor): MethodParameter
                /**
                 * Check if the given type represents a "simple" property: a simple value
                 * type or an array of simple value types.
                 * <p>See {@link #isSimpleValueType(Class)} for the definition of <em>simple
                 * value type</em>.
                 * <p>Used to determine properties to check for a "simple" dependency-check.
                 * @param type the type to check
                 * @return whether the given type represents a "simple" property
                 * @see org.springframework.beans.factory.support.RootBeanDefinition#DEPENDENCY_CHECK_SIMPLE
                 * @see org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory#checkDependencies
                 * @see #isSimpleValueType(Class)
                 */
                // @ts-ignore
                isSimpleProperty(type: java.lang.Class<any>): boolean
                /**
                 * Check if the given type represents a "simple" value type: a primitive or
                 * primitive wrapper, an enum, a String or other CharSequence, a Number, a
                 * Date, a Temporal, a URI, a URL, a Locale, or a Class.
                 * <p>{@code Void} and {@code void} are not considered simple value types.
                 * @param type the type to check
                 * @return whether the given type represents a "simple" value type
                 * @see #isSimpleProperty(Class)
                 */
                // @ts-ignore
                isSimpleValueType(type: java.lang.Class<any>): boolean
                /**
                 * Copy the property values of the given source bean into the target bean.
                 * <p>Note: The source and target classes do not have to match or even be derived
                 * from each other, as long as the properties match. Any bean properties that the
                 * source bean exposes but the target bean does not will silently be ignored.
                 * <p>This is just a convenience method. For more complex transfer needs,
                 * consider using a full BeanWrapper.
                 * @param source the source bean
                 * @param target the target bean
                 * @throws BeansException if the copying failed
                 * @see BeanWrapper
                 */
                // @ts-ignore
                copyProperties(source: any, target: any): void
                /**
                 * Copy the property values of the given source bean into the given target bean,
                 * only setting properties defined in the given "editable" class (or interface).
                 * <p>Note: The source and target classes do not have to match or even be derived
                 * from each other, as long as the properties match. Any bean properties that the
                 * source bean exposes but the target bean does not will silently be ignored.
                 * <p>This is just a convenience method. For more complex transfer needs,
                 * consider using a full BeanWrapper.
                 * @param source the source bean
                 * @param target the target bean
                 * @param editable the class (or interface) to restrict property setting to
                 * @throws BeansException if the copying failed
                 * @see BeanWrapper
                 */
                // @ts-ignore
                copyProperties(source: any, target: any, editable: java.lang.Class<any>): void
                /**
                 * Copy the property values of the given source bean into the given target bean,
                 * ignoring the given "ignoreProperties".
                 * <p>Note: The source and target classes do not have to match or even be derived
                 * from each other, as long as the properties match. Any bean properties that the
                 * source bean exposes but the target bean does not will silently be ignored.
                 * <p>This is just a convenience method. For more complex transfer needs,
                 * consider using a full BeanWrapper.
                 * @param source the source bean
                 * @param target the target bean
                 * @param ignoreProperties array of property names to ignore
                 * @throws BeansException if the copying failed
                 * @see BeanWrapper
                 */
                // @ts-ignore
                copyProperties(source: any, target: any, ...ignoreProperties: string[]): void
            }
        }
    }
}
