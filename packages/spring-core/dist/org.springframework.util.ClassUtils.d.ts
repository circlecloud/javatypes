declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Miscellaneous {@code java.lang.Class} utility methods.
             * Mainly for internal use within the framework.
             * @author Juergen Hoeller
             * @author Keith Donald
             * @author Rob Harrop
             * @author Sam Brannen
             * @since 1.1
             * @see TypeUtils
             * @see ReflectionUtils
             */
            // @ts-ignore
            abstract class ClassUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Suffix for array class names: {@code "[]"}.
                 */
                // @ts-ignore
                public static readonly ARRAY_SUFFIX: java.lang.String | string
                /**
                 * The CGLIB class separator: {@code "$$"}.
                 */
                // @ts-ignore
                public static readonly CGLIB_CLASS_SEPARATOR: java.lang.String | string
                /**
                 * The ".class" file suffix.
                 */
                // @ts-ignore
                public static readonly CLASS_FILE_SUFFIX: java.lang.String | string
                /**
                 * Return the default ClassLoader to use: typically the thread context
                 * ClassLoader, if available; the ClassLoader that loaded the ClassUtils
                 * class will be used as fallback.
                 * <p>Call this method if you intend to use the thread context ClassLoader
                 * in a scenario where you clearly prefer a non-null ClassLoader reference:
                 * for example, for class path resource loading (but not necessarily for
                 * {@code Class.forName}, which accepts a {@code null} ClassLoader
                 * reference as well).
                 * @return the default ClassLoader (only {#code null} if even the system
                 *  ClassLoader isn't accessible)
                 * @see Thread#getContextClassLoader()
                 * @see ClassLoader#getSystemClassLoader()
                 */
                // @ts-ignore
                public static getDefaultClassLoader(): java.lang.ClassLoader
                /**
                 * Override the thread context ClassLoader with the environment's bean ClassLoader
                 * if necessary, i.e. if the bean ClassLoader is not equivalent to the thread
                 * context ClassLoader already.
                 * @param classLoaderToUse the actual ClassLoader to use for the thread context
                 * @return the original thread context ClassLoader, or {#code null} if not overridden
                 */
                // @ts-ignore
                public static overrideThreadContextClassLoader(classLoaderToUse: java.lang.ClassLoader): java.lang.ClassLoader
                /**
                 * Replacement for {@code Class.forName()} that also returns Class instances
                 * for primitives (e.g. "int") and array class names (e.g. "String[]").
                 * Furthermore, it is also capable of resolving inner class names in Java source
                 * style (e.g. "java.lang.Thread.State" instead of "java.lang.Thread$State").
                 * @param name the name of the Class
                 * @param classLoader the class loader to use
                 *  (may be {#code null}, which indicates the default class loader)
                 * @return a class instance for the supplied name
                 * @throws ClassNotFoundException if the class was not found
                 * @throws LinkageError if the class file could not be loaded
                 * @see Class#forName(String, boolean, ClassLoader)
                 */
                // @ts-ignore
                public static forName(name: java.lang.String | string, classLoader: java.lang.ClassLoader): java.lang.Class<any>
                /**
                 * Resolve the given class name into a Class instance. Supports
                 * primitives (like "int") and array class names (like "String[]").
                 * <p>This is effectively equivalent to the {@code forName}
                 * method with the same arguments, with the only difference being
                 * the exceptions thrown in case of class loading failure.
                 * @param className the name of the Class
                 * @param classLoader the class loader to use
                 *  (may be {#code null}, which indicates the default class loader)
                 * @return a class instance for the supplied name
                 * @throws IllegalArgumentException if the class name was not resolvable
                 *  (that is, the class could not be found or the class file could not be loaded)
                 * @throws IllegalStateException if the corresponding class is resolvable but
                 *  there was a readability mismatch in the inheritance hierarchy of the class
                 *  (typically a missing dependency declaration in a Jigsaw module definition
                 *  for a superclass or interface implemented by the class to be loaded here)
                 * @see #forName(String, ClassLoader)
                 */
                // @ts-ignore
                public static resolveClassName(className: java.lang.String | string, classLoader: java.lang.ClassLoader): java.lang.Class<any>
                /**
                 * Determine whether the {@link Class} identified by the supplied name is present
                 * and can be loaded. Will return {@code false} if either the class or
                 * one of its dependencies is not present or cannot be loaded.
                 * @param className the name of the class to check
                 * @param classLoader the class loader to use
                 *  (may be {#code null} which indicates the default class loader)
                 * @return whether the specified class is present (including all of its
                 *  superclasses and interfaces)
                 * @throws IllegalStateException if the corresponding class is resolvable but
                 *  there was a readability mismatch in the inheritance hierarchy of the class
                 *  (typically a missing dependency declaration in a Jigsaw module definition
                 *  for a superclass or interface implemented by the class to be checked here)
                 */
                // @ts-ignore
                public static isPresent(className: java.lang.String | string, classLoader: java.lang.ClassLoader): boolean
                /**
                 * Check whether the given class is visible in the given ClassLoader.
                 * @param clazz the class to check (typically an interface)
                 * @param classLoader the ClassLoader to check against
                 *  (may be {#code null} in which case this method will always return {@code true})
                 */
                // @ts-ignore
                public static isVisible(clazz: java.lang.Class<any>, classLoader: java.lang.ClassLoader): boolean
                /**
                 * Check whether the given class is cache-safe in the given context,
                 * i.e. whether it is loaded by the given ClassLoader or a parent of it.
                 * @param clazz the class to analyze
                 * @param classLoader the ClassLoader to potentially cache metadata in
                 *  (may be {#code null} which indicates the system class loader)
                 */
                // @ts-ignore
                public static isCacheSafe(clazz: java.lang.Class<any>, classLoader: java.lang.ClassLoader): boolean
                /**
                 * Resolve the given class name as primitive class, if appropriate,
                 * according to the JVM's naming rules for primitive classes.
                 * <p>Also supports the JVM's internal class names for primitive arrays.
                 * Does <i>not</i> support the "[]" suffix notation for primitive arrays;
                 * this is only supported by {@link #forName(String, ClassLoader)}.
                 * @param name the name of the potentially primitive class
                 * @return the primitive class, or {#code null} if the name does not denote
                 *  a primitive class or primitive array class
                 */
                // @ts-ignore
                public static resolvePrimitiveClassName(name: java.lang.String | string): java.lang.Class<any>
                /**
                 * Check if the given class represents a primitive wrapper,
                 * i.e. Boolean, Byte, Character, Short, Integer, Long, Float, Double, or
                 * Void.
                 * @param clazz the class to check
                 * @return whether the given class is a primitive wrapper class
                 */
                // @ts-ignore
                public static isPrimitiveWrapper(clazz: java.lang.Class<any>): boolean
                /**
                 * Check if the given class represents a primitive (i.e. boolean, byte,
                 * char, short, int, long, float, or double), {@code void}, or a wrapper for
                 * those types (i.e. Boolean, Byte, Character, Short, Integer, Long, Float,
                 * Double, or Void).
                 * @param clazz the class to check
                 * @return {#code true} if the given class represents a primitive, void, or
                 *  a wrapper class
                 */
                // @ts-ignore
                public static isPrimitiveOrWrapper(clazz: java.lang.Class<any>): boolean
                /**
                 * Check if the given class represents an array of primitives,
                 * i.e. boolean, byte, char, short, int, long, float, or double.
                 * @param clazz the class to check
                 * @return whether the given class is a primitive array class
                 */
                // @ts-ignore
                public static isPrimitiveArray(clazz: java.lang.Class<any>): boolean
                /**
                 * Check if the given class represents an array of primitive wrappers,
                 * i.e. Boolean, Byte, Character, Short, Integer, Long, Float, or Double.
                 * @param clazz the class to check
                 * @return whether the given class is a primitive wrapper array class
                 */
                // @ts-ignore
                public static isPrimitiveWrapperArray(clazz: java.lang.Class<any>): boolean
                /**
                 * Resolve the given class if it is a primitive class,
                 * returning the corresponding primitive wrapper type instead.
                 * @param clazz the class to check
                 * @return the original class, or a primitive wrapper for the original primitive type
                 */
                // @ts-ignore
                public static resolvePrimitiveIfNecessary(clazz: java.lang.Class<any>): java.lang.Class<any>
                /**
                 * Check if the right-hand side type may be assigned to the left-hand side
                 * type, assuming setting by reflection. Considers primitive wrapper
                 * classes as assignable to the corresponding primitive types.
                 * @param lhsType the target type
                 * @param rhsType the value type that should be assigned to the target type
                 * @return if the target type is assignable from the value type
                 * @see TypeUtils#isAssignable(java.lang.reflect.Type, java.lang.reflect.Type)
                 */
                // @ts-ignore
                public static isAssignable(lhsType: java.lang.Class<any>, rhsType: java.lang.Class<any>): boolean
                /**
                 * Determine if the given type is assignable from the given value,
                 * assuming setting by reflection. Considers primitive wrapper classes
                 * as assignable to the corresponding primitive types.
                 * @param type the target type
                 * @param value the value that should be assigned to the type
                 * @return if the type is assignable from the value
                 */
                // @ts-ignore
                public static isAssignableValue(type: java.lang.Class<any>, value: java.lang.Object | any): boolean
                /**
                 * Convert a "/"-based resource path to a "."-based fully qualified class name.
                 * @param resourcePath the resource path pointing to a class
                 * @return the corresponding fully qualified class name
                 */
                // @ts-ignore
                public static convertResourcePathToClassName(resourcePath: java.lang.String | string): string
                /**
                 * Convert a "."-based fully qualified class name to a "/"-based resource path.
                 * @param className the fully qualified class name
                 * @return the corresponding resource path, pointing to the class
                 */
                // @ts-ignore
                public static convertClassNameToResourcePath(className: java.lang.String | string): string
                /**
                 * Return a path suitable for use with {@code ClassLoader.getResource}
                 * (also suitable for use with {@code Class.getResource} by prepending a
                 * slash ('/') to the return value). Built by taking the package of the specified
                 * class file, converting all dots ('.') to slashes ('/'), adding a trailing slash
                 * if necessary, and concatenating the specified resource name to this.
                 * <br/>As such, this function may be used to build a path suitable for
                 * loading a resource file that is in the same package as a class file,
                 * although {@link org.springframework.core.io.ClassPathResource} is usually
                 * even more convenient.
                 * @param clazz the Class whose package will be used as the base
                 * @param resourceName the resource name to append. A leading slash is optional.
                 * @return the built-up resource path
                 * @see ClassLoader#getResource
                 * @see Class#getResource
                 */
                // @ts-ignore
                public static addResourcePathToPackagePath(clazz: java.lang.Class<any>, resourceName: java.lang.String | string): string
                /**
                 * Given an input class object, return a string which consists of the
                 * class's package name as a pathname, i.e., all dots ('.') are replaced by
                 * slashes ('/'). Neither a leading nor trailing slash is added. The result
                 * could be concatenated with a slash and the name of a resource and fed
                 * directly to {@code ClassLoader.getResource()}. For it to be fed to
                 * {@code Class.getResource} instead, a leading slash would also have
                 * to be prepended to the returned value.
                 * @param clazz the input class. A {#code null} value or the default
                 *  (empty) package will result in an empty string ("") being returned.
                 * @return a path which represents the package name
                 * @see ClassLoader#getResource
                 * @see Class#getResource
                 */
                // @ts-ignore
                public static classPackageAsResourcePath(clazz: java.lang.Class<any>): string
                /**
                 * Build a String that consists of the names of the classes/interfaces
                 * in the given array.
                 * <p>Basically like {@code AbstractCollection.toString()}, but stripping
                 * the "class "/"interface " prefix before every class name.
                 * @param classes an array of Class objects
                 * @return a String of form "[com.foo.Bar, com.foo.Baz]"
                 * @see java.util.AbstractCollection#toString()
                 */
                // @ts-ignore
                public static classNamesToString(...classes: java.lang.Class<any>[]): string
                /**
                 * Build a String that consists of the names of the classes/interfaces
                 * in the given collection.
                 * <p>Basically like {@code AbstractCollection.toString()}, but stripping
                 * the "class "/"interface " prefix before every class name.
                 * @param classes a Collection of Class objects (may be {#code null})
                 * @return a String of form "[com.foo.Bar, com.foo.Baz]"
                 * @see java.util.AbstractCollection#toString()
                 */
                // @ts-ignore
                public static classNamesToString(classes: java.util.Collection<java.lang.Class<any>> | Array<java.lang.Class<any>>): string
                /**
                 * Copy the given {@code Collection} into a {@code Class} array.
                 * <p>The {@code Collection} must contain {@code Class} elements only.
                 * @param collection the {#code Collection} to copy
                 * @return the {#code Class} array
                 * @since 3.1
                 * @see StringUtils#toStringArray
                 */
                // @ts-ignore
                public static toClassArray(collection: java.util.Collection<java.lang.Class<any>> | Array<java.lang.Class<any>>): java.lang.Class<any>[]
                /**
                 * Return all interfaces that the given instance implements as an array,
                 * including ones implemented by superclasses.
                 * @param instance the instance to analyze for interfaces
                 * @return all interfaces that the given instance implements as an array
                 */
                // @ts-ignore
                public static getAllInterfaces(instance: java.lang.Object | any): java.lang.Class<any>[]
                /**
                 * Return all interfaces that the given class implements as an array,
                 * including ones implemented by superclasses.
                 * <p>If the class itself is an interface, it gets returned as sole interface.
                 * @param clazz the class to analyze for interfaces
                 * @return all interfaces that the given object implements as an array
                 */
                // @ts-ignore
                public static getAllInterfacesForClass(clazz: java.lang.Class<any>): java.lang.Class<any>[]
                /**
                 * Return all interfaces that the given class implements as an array,
                 * including ones implemented by superclasses.
                 * <p>If the class itself is an interface, it gets returned as sole interface.
                 * @param clazz the class to analyze for interfaces
                 * @param classLoader the ClassLoader that the interfaces need to be visible in
                 *  (may be {#code null} when accepting all declared interfaces)
                 * @return all interfaces that the given object implements as an array
                 */
                // @ts-ignore
                public static getAllInterfacesForClass(clazz: java.lang.Class<any>, classLoader: java.lang.ClassLoader): java.lang.Class<any>[]
                /**
                 * Return all interfaces that the given instance implements as a Set,
                 * including ones implemented by superclasses.
                 * @param instance the instance to analyze for interfaces
                 * @return all interfaces that the given instance implements as a Set
                 */
                // @ts-ignore
                public static getAllInterfacesAsSet(instance: java.lang.Object | any): Array<java.lang.Class<any>>
                /**
                 * Return all interfaces that the given class implements as a Set,
                 * including ones implemented by superclasses.
                 * <p>If the class itself is an interface, it gets returned as sole interface.
                 * @param clazz the class to analyze for interfaces
                 * @return all interfaces that the given object implements as a Set
                 */
                // @ts-ignore
                public static getAllInterfacesForClassAsSet(clazz: java.lang.Class<any>): Array<java.lang.Class<any>>
                /**
                 * Return all interfaces that the given class implements as a Set,
                 * including ones implemented by superclasses.
                 * <p>If the class itself is an interface, it gets returned as sole interface.
                 * @param clazz the class to analyze for interfaces
                 * @param classLoader the ClassLoader that the interfaces need to be visible in
                 *  (may be {#code null} when accepting all declared interfaces)
                 * @return all interfaces that the given object implements as a Set
                 */
                // @ts-ignore
                public static getAllInterfacesForClassAsSet(clazz: java.lang.Class<any>, classLoader: java.lang.ClassLoader): Array<java.lang.Class<any>>
                /**
                 * Create a composite interface Class for the given interfaces,
                 * implementing the given interfaces in one single Class.
                 * <p>This implementation builds a JDK proxy class for the given interfaces.
                 * @param interfaces the interfaces to merge
                 * @param classLoader the ClassLoader to create the composite Class in
                 * @return the merged interface as Class
                 * @throws IllegalArgumentException if the specified interfaces expose
                 *  conflicting method signatures (or a similar constraint is violated)
                 * @see java.lang.reflect.Proxy#getProxyClass
                 */
                // @ts-ignore
                public static createCompositeInterface(interfaces: java.lang.Class<any>[], classLoader: java.lang.ClassLoader): java.lang.Class<any>
                /**
                 * Determine the common ancestor of the given classes, if any.
                 * @param clazz1 the class to introspect
                 * @param clazz2 the other class to introspect
                 * @return the common ancestor (i.e. common superclass, one interface
                 *  extending the other), or {#code null} if none found. If any of the
                 *  given classes is {@code null}, the other class will be returned.
                 * @since 3.2.6
                 */
                // @ts-ignore
                public static determineCommonAncestor(clazz1: java.lang.Class<any>, clazz2: java.lang.Class<any>): java.lang.Class<any>
                /**
                 * Determine whether the given interface is a common Java language interface:
                 * {@link Serializable}, {@link Externalizable}, {@link Closeable}, {@link AutoCloseable},
                 * {@link Cloneable}, {@link Comparable} - all of which can be ignored when looking
                 * for 'primary' user-level interfaces. Common characteristics: no service-level
                 * operations, no bean property methods, no default methods.
                 * @param ifc the interface to check
                 * @since 5.0.3
                 */
                // @ts-ignore
                public static isJavaLanguageInterface(ifc: java.lang.Class<any>): boolean
                /**
                 * Determine if the supplied class is an <em>inner class</em>,
                 * i.e. a non-static member of an enclosing class.
                 * @return {#code true} if the supplied class is an inner class
                 * @since 5.0.5
                 * @see Class#isMemberClass()
                 */
                // @ts-ignore
                public static isInnerClass(clazz: java.lang.Class<any>): boolean
                /**
                 * Check whether the given object is a CGLIB proxy.
                 * @param object the object to check
                 * @see #isCglibProxyClass(Class)
                 * @see org.springframework.aop.support.AopUtils#isCglibProxy(Object)
                 * @deprecated as of 5.2, in favor of custom (possibly narrower) checks
                 */
                // @ts-ignore
                public static isCglibProxy(object: java.lang.Object | any): boolean
                /**
                 * Check whether the specified class is a CGLIB-generated class.
                 * @param clazz the class to check
                 * @see #isCglibProxyClassName(String)
                 * @deprecated as of 5.2, in favor of custom (possibly narrower) checks
                 */
                // @ts-ignore
                public static isCglibProxyClass(clazz: java.lang.Class<any>): boolean
                /**
                 * Check whether the specified class name is a CGLIB-generated class.
                 * @param className the class name to check
                 * @deprecated as of 5.2, in favor of custom (possibly narrower) checks
                 */
                // @ts-ignore
                public static isCglibProxyClassName(className: java.lang.String | string): boolean
                /**
                 * Return the user-defined class for the given instance: usually simply
                 * the class of the given instance, but the original class in case of a
                 * CGLIB-generated subclass.
                 * @param instance the instance to check
                 * @return the user-defined class
                 */
                // @ts-ignore
                public static getUserClass(instance: java.lang.Object | any): java.lang.Class<any>
                /**
                 * Return the user-defined class for the given class: usually simply the given
                 * class, but the original class in case of a CGLIB-generated subclass.
                 * @param clazz the class to check
                 * @return the user-defined class
                 */
                // @ts-ignore
                public static getUserClass(clazz: java.lang.Class<any>): java.lang.Class<any>
                /**
                 * Return a descriptive name for the given object's type: usually simply
                 * the class name, but component type class name + "[]" for arrays,
                 * and an appended list of implemented interfaces for JDK proxies.
                 * @param value the value to introspect
                 * @return the qualified name of the class
                 */
                // @ts-ignore
                public static getDescriptiveType(value: java.lang.Object | any): string
                /**
                 * Check whether the given class matches the user-specified type name.
                 * @param clazz the class to check
                 * @param typeName the type name to match
                 */
                // @ts-ignore
                public static matchesTypeName(clazz: java.lang.Class<any>, typeName: java.lang.String | string): boolean
                /**
                 * Get the class name without the qualified package name.
                 * @param className the className to get the short name for
                 * @return the class name of the class without the package name
                 * @throws IllegalArgumentException if the className is empty
                 */
                // @ts-ignore
                public static getShortName(className: java.lang.String | string): string
                /**
                 * Get the class name without the qualified package name.
                 * @param clazz the class to get the short name for
                 * @return the class name of the class without the package name
                 */
                // @ts-ignore
                public static getShortName(clazz: java.lang.Class<any>): string
                /**
                 * Return the short string name of a Java class in uncapitalized JavaBeans
                 * property format. Strips the outer class name in case of an inner class.
                 * @param clazz the class
                 * @return the short name rendered in a standard JavaBeans property format
                 * @see java.beans.Introspector#decapitalize(String)
                 */
                // @ts-ignore
                public static getShortNameAsProperty(clazz: java.lang.Class<any>): string
                /**
                 * Determine the name of the class file, relative to the containing
                 * package: e.g. "String.class"
                 * @param clazz the class
                 * @return the file name of the ".class" file
                 */
                // @ts-ignore
                public static getClassFileName(clazz: java.lang.Class<any>): string
                /**
                 * Determine the name of the package of the given class,
                 * e.g. "java.lang" for the {@code java.lang.String} class.
                 * @param clazz the class
                 * @return the package name, or the empty String if the class
                 *  is defined in the default package
                 */
                // @ts-ignore
                public static getPackageName(clazz: java.lang.Class<any>): string
                /**
                 * Determine the name of the package of the given fully-qualified class name,
                 * e.g. "java.lang" for the {@code java.lang.String} class name.
                 * @param fqClassName the fully-qualified class name
                 * @return the package name, or the empty String if the class
                 *  is defined in the default package
                 */
                // @ts-ignore
                public static getPackageName(fqClassName: java.lang.String | string): string
                /**
                 * Return the qualified name of the given class: usually simply
                 * the class name, but component type class name + "[]" for arrays.
                 * @param clazz the class
                 * @return the qualified name of the class
                 */
                // @ts-ignore
                public static getQualifiedName(clazz: java.lang.Class<any>): string
                /**
                 * Return the qualified name of the given method, consisting of
                 * fully qualified interface/class name + "." + method name.
                 * @param method the method
                 * @return the qualified name of the method
                 */
                // @ts-ignore
                public static getQualifiedMethodName(method: java.lang.reflect.Method): string
                /**
                 * Return the qualified name of the given method, consisting of
                 * fully qualified interface/class name + "." + method name.
                 * @param method the method
                 * @param clazz the clazz that the method is being invoked on
                 *  (may be {#code null} to indicate the method's declaring class)
                 * @return the qualified name of the method
                 * @since 4.3.4
                 */
                // @ts-ignore
                public static getQualifiedMethodName(method: java.lang.reflect.Method, clazz: java.lang.Class<any>): string
                /**
                 * Determine whether the given class has a public constructor with the given signature.
                 * <p>Essentially translates {@code NoSuchMethodException} to "false".
                 * @param clazz the clazz to analyze
                 * @param paramTypes the parameter types of the method
                 * @return whether the class has a corresponding constructor
                 * @see Class#getConstructor
                 */
                // @ts-ignore
                public static hasConstructor(clazz: java.lang.Class<any>, ...paramTypes: java.lang.Class<any>[]): boolean
                /**
                 * Determine whether the given class has a public constructor with the given signature,
                 * and return it if available (else return {@code null}).
                 * <p>Essentially translates {@code NoSuchMethodException} to {@code null}.
                 * @param clazz the clazz to analyze
                 * @param paramTypes the parameter types of the method
                 * @return the constructor, or {#code null} if not found
                 * @see Class#getConstructor
                 */
                // @ts-ignore
                public static getConstructorIfAvailable<T>(clazz: java.lang.Class<T>, ...paramTypes: java.lang.Class<any>[]): java.lang.reflect.Constructor<T>
                /**
                 * Determine whether the given class has a public method with the given signature.
                 * @param clazz the clazz to analyze
                 * @param method the method to look for
                 * @return whether the class has a corresponding method
                 * @since 5.2.3
                 */
                // @ts-ignore
                public static hasMethod(clazz: java.lang.Class<any>, method: java.lang.reflect.Method): boolean
                /**
                 * Determine whether the given class has a public method with the given signature.
                 * <p>Essentially translates {@code NoSuchMethodException} to "false".
                 * @param clazz the clazz to analyze
                 * @param methodName the name of the method
                 * @param paramTypes the parameter types of the method
                 * @return whether the class has a corresponding method
                 * @see Class#getMethod
                 */
                // @ts-ignore
                public static hasMethod(clazz: java.lang.Class<any>, methodName: java.lang.String | string, ...paramTypes: java.lang.Class<any>[]): boolean
                /**
                 * Determine whether the given class has a public method with the given signature,
                 * and return it if available (else throws an {@code IllegalStateException}).
                 * <p>In case of any signature specified, only returns the method if there is a
                 * unique candidate, i.e. a single public method with the specified name.
                 * <p>Essentially translates {@code NoSuchMethodException} to {@code IllegalStateException}.
                 * @param clazz the clazz to analyze
                 * @param methodName the name of the method
                 * @param paramTypes the parameter types of the method
                 *  (may be {#code null} to indicate any signature)
                 * @return the method (never {#code null})
                 * @throws IllegalStateException if the method has not been found
                 * @see Class#getMethod
                 */
                // @ts-ignore
                public static getMethod(clazz: java.lang.Class<any>, methodName: java.lang.String | string, ...paramTypes: java.lang.Class<any>[]): java.lang.reflect.Method
                /**
                 * Determine whether the given class has a public method with the given signature,
                 * and return it if available (else return {@code null}).
                 * <p>In case of any signature specified, only returns the method if there is a
                 * unique candidate, i.e. a single public method with the specified name.
                 * <p>Essentially translates {@code NoSuchMethodException} to {@code null}.
                 * @param clazz the clazz to analyze
                 * @param methodName the name of the method
                 * @param paramTypes the parameter types of the method
                 *  (may be {#code null} to indicate any signature)
                 * @return the method, or {#code null} if not found
                 * @see Class#getMethod
                 */
                // @ts-ignore
                public static getMethodIfAvailable(clazz: java.lang.Class<any>, methodName: java.lang.String | string, ...paramTypes: java.lang.Class<any>[]): java.lang.reflect.Method
                /**
                 * Return the number of methods with a given name (with any argument types),
                 * for the given class and/or its superclasses. Includes non-public methods.
                 * @param clazz	the clazz to check
                 * @param methodName the name of the method
                 * @return the number of methods with the given name
                 */
                // @ts-ignore
                public static getMethodCountForName(clazz: java.lang.Class<any>, methodName: java.lang.String | string): number /*int*/
                /**
                 * Does the given class or one of its superclasses at least have one or more
                 * methods with the supplied name (with any argument types)?
                 * Includes non-public methods.
                 * @param clazz	the clazz to check
                 * @param methodName the name of the method
                 * @return whether there is at least one method with the given name
                 */
                // @ts-ignore
                public static hasAtLeastOneMethodWithName(clazz: java.lang.Class<any>, methodName: java.lang.String | string): boolean
                /**
                 * Given a method, which may come from an interface, and a target class used
                 * in the current reflective invocation, find the corresponding target method
                 * if there is one. E.g. the method may be {@code IFoo.bar()} and the
                 * target class may be {@code DefaultFoo}. In this case, the method may be
                 * {@code DefaultFoo.bar()}. This enables attributes on that method to be found.
                 * <p><b>NOTE:</b> In contrast to {@link org.springframework.aop.support.AopUtils#getMostSpecificMethod},
                 * this method does <i>not</i> resolve Java 5 bridge methods automatically.
                 * Call {@link org.springframework.core.BridgeMethodResolver#findBridgedMethod}
                 * if bridge method resolution is desirable (e.g. for obtaining metadata from
                 * the original method definition).
                 * <p><b>NOTE:</b> Since Spring 3.1.1, if Java security settings disallow reflective
                 * access (e.g. calls to {@code Class#getDeclaredMethods} etc, this implementation
                 * will fall back to returning the originally provided method.
                 * @param method the method to be invoked, which may come from an interface
                 * @param targetClass the target class for the current invocation
                 *  (may be {#code null} or may not even implement the method)
                 * @return the specific target method, or the original method if the
                 *  {#code targetClass} does not implement it
                 * @see #getInterfaceMethodIfPossible
                 */
                // @ts-ignore
                public static getMostSpecificMethod(method: java.lang.reflect.Method, targetClass: java.lang.Class<any>): java.lang.reflect.Method
                /**
                 * Determine a corresponding interface method for the given method handle, if possible.
                 * <p>This is particularly useful for arriving at a public exported type on Jigsaw
                 * which can be reflectively invoked without an illegal access warning.
                 * @param method the method to be invoked, potentially from an implementation class
                 * @return the corresponding interface method, or the original method if none found
                 * @since 5.1
                 * @see #getMostSpecificMethod
                 */
                // @ts-ignore
                public static getInterfaceMethodIfPossible(method: java.lang.reflect.Method): java.lang.reflect.Method
                /**
                 * Determine whether the given method is declared by the user or at least pointing to
                 * a user-declared method.
                 * <p>Checks {@link Method#isSynthetic()} (for implementation methods) as well as the
                 * {@code GroovyObject} interface (for interface methods; on an implementation class,
                 * implementations of the {@code GroovyObject} methods will be marked as synthetic anyway).
                 * Note that, despite being synthetic, bridge methods ({@link Method#isBridge()}) are considered
                 * as user-level methods since they are eventually pointing to a user-declared generic method.
                 * @param method the method to check
                 * @return {#code true} if the method can be considered as user-declared; [@code false} otherwise
                 */
                // @ts-ignore
                public static isUserLevelMethod(method: java.lang.reflect.Method): boolean
                /**
                 * Return a public static method of a class.
                 * @param clazz the class which defines the method
                 * @param methodName the static method name
                 * @param args the parameter types to the method
                 * @return the static method, or {#code null} if no static method was found
                 * @throws IllegalArgumentException if the method name is blank or the clazz is null
                 */
                // @ts-ignore
                public static getStaticMethod(clazz: java.lang.Class<any>, methodName: java.lang.String | string, ...args: java.lang.Class<any>[]): java.lang.reflect.Method
            }
        }
    }
}
