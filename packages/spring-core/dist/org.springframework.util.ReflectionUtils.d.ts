declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Simple utility class for working with the reflection API and handling
             * reflection exceptions.
             * <p>Only intended for internal use.
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @author Rod Johnson
             * @author Costin Leau
             * @author Sam Brannen
             * @author Chris Beams
             * @since 1.2.2
             */
            // @ts-ignore
            abstract class ReflectionUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Pre-built MethodFilter that matches all non-bridge non-synthetic methods
                 * which are not declared on {@code java.lang.Object}.
                 * @since 3.0.5
                 */
                // @ts-ignore
                public static readonly USER_DECLARED_METHODS: org.springframework.util.ReflectionUtils.MethodFilter
                /**
                 * Pre-built FieldFilter that matches all non-static, non-final fields.
                 */
                // @ts-ignore
                public static readonly COPYABLE_FIELDS: org.springframework.util.ReflectionUtils.FieldFilter
                /**
                 * Handle the given reflection exception.
                 * <p>Should only be called if no checked exception is expected to be thrown
                 * by a target method, or if an error occurs while accessing a method or field.
                 * <p>Throws the underlying RuntimeException or Error in case of an
                 * InvocationTargetException with such a root cause. Throws an
                 * IllegalStateException with an appropriate message or
                 * UndeclaredThrowableException otherwise.
                 * @param ex the reflection exception to handle
                 */
                // @ts-ignore
                public static handleReflectionException(ex: java.lang.Exception): void
                /**
                 * Handle the given invocation target exception. Should only be called if no
                 * checked exception is expected to be thrown by the target method.
                 * <p>Throws the underlying RuntimeException or Error in case of such a root
                 * cause. Throws an UndeclaredThrowableException otherwise.
                 * @param ex the invocation target exception to handle
                 */
                // @ts-ignore
                public static handleInvocationTargetException(ex: java.lang.reflect.InvocationTargetException): void
                /**
                 * Rethrow the given {@link Throwable exception}, which is presumably the
                 * <em>target exception</em> of an {@link InvocationTargetException}.
                 * Should only be called if no checked exception is expected to be thrown
                 * by the target method.
                 * <p>Rethrows the underlying exception cast to a {@link RuntimeException} or
                 * {@link Error} if appropriate; otherwise, throws an
                 * {@link UndeclaredThrowableException}.
                 * @param ex the exception to rethrow
                 * @throws RuntimeException the rethrown exception
                 */
                // @ts-ignore
                public static rethrowRuntimeException(ex: java.lang.Throwable | Error): void
                /**
                 * Rethrow the given {@link Throwable exception}, which is presumably the
                 * <em>target exception</em> of an {@link InvocationTargetException}.
                 * Should only be called if no checked exception is expected to be thrown
                 * by the target method.
                 * <p>Rethrows the underlying exception cast to an {@link Exception} or
                 * {@link Error} if appropriate; otherwise, throws an
                 * {@link UndeclaredThrowableException}.
                 * @param ex the exception to rethrow
                 * @throws Exception the rethrown exception (in case of a checked exception)
                 */
                // @ts-ignore
                public static rethrowException(ex: java.lang.Throwable | Error): void
                /**
                 * Obtain an accessible constructor for the given class and parameters.
                 * @param clazz the clazz to check
                 * @param parameterTypes the parameter types of the desired constructor
                 * @return the constructor reference
                 * @throws NoSuchMethodException if no such constructor exists
                 * @since 5.0
                 */
                // @ts-ignore
                public static accessibleConstructor<T>(clazz: java.lang.Class<T>, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Constructor<T>
                /**
                 * Make the given constructor accessible, explicitly setting it accessible
                 * if necessary. The {@code setAccessible(true)} method is only called
                 * when actually necessary, to avoid unnecessary conflicts with a JVM
                 * SecurityManager (if active).
                 * @param ctor the constructor to make accessible
                 * @see java.lang.reflect.Constructor#setAccessible
                 */
                // @ts-ignore
                public static makeAccessible(ctor: java.lang.reflect.Constructor<any>): void
                /**
                 * Attempt to find a {@link Method} on the supplied class with the supplied name
                 * and no parameters. Searches all superclasses up to {@code Object}.
                 * <p>Returns {@code null} if no {@link Method} can be found.
                 * @param clazz the class to introspect
                 * @param name the name of the method
                 * @return the Method object, or {#code null} if none found
                 */
                // @ts-ignore
                public static findMethod(clazz: java.lang.Class<any>, name: java.lang.String | string): java.lang.reflect.Method
                /**
                 * Attempt to find a {@link Method} on the supplied class with the supplied name
                 * and parameter types. Searches all superclasses up to {@code Object}.
                 * <p>Returns {@code null} if no {@link Method} can be found.
                 * @param clazz the class to introspect
                 * @param name the name of the method
                 * @param paramTypes the parameter types of the method
                 *  (may be {#code null} to indicate any signature)
                 * @return the Method object, or {#code null} if none found
                 */
                // @ts-ignore
                public static findMethod(clazz: java.lang.Class<any>, name: java.lang.String | string, ...paramTypes: java.lang.Class<any>[]): java.lang.reflect.Method
                /**
                 * Invoke the specified {@link Method} against the supplied target object with no arguments.
                 * The target object can be {@code null} when invoking a static {@link Method}.
                 * <p>Thrown exceptions are handled via a call to {@link #handleReflectionException}.
                 * @param method the method to invoke
                 * @param target the target object to invoke the method on
                 * @return the invocation result, if any
                 * @see #invokeMethod(java.lang.reflect.Method, Object, Object[])
                 */
                // @ts-ignore
                public static invokeMethod(method: java.lang.reflect.Method, target: java.lang.Object | any): any
                /**
                 * Invoke the specified {@link Method} against the supplied target object with the
                 * supplied arguments. The target object can be {@code null} when invoking a
                 * static {@link Method}.
                 * <p>Thrown exceptions are handled via a call to {@link #handleReflectionException}.
                 * @param method the method to invoke
                 * @param target the target object to invoke the method on
                 * @param args the invocation arguments (may be {#code null})
                 * @return the invocation result, if any
                 */
                // @ts-ignore
                public static invokeMethod(method: java.lang.reflect.Method, target: java.lang.Object | any, ...args: java.lang.Object[] | any[]): any
                /**
                 * Determine whether the given method explicitly declares the given
                 * exception or one of its superclasses, which means that an exception
                 * of that type can be propagated as-is within a reflective invocation.
                 * @param method the declaring method
                 * @param exceptionType the exception to throw
                 * @return {#code true} if the exception can be thrown as-is;
                 *  {@code false} if it needs to be wrapped
                 */
                // @ts-ignore
                public static declaresException(method: java.lang.reflect.Method, exceptionType: java.lang.Class<any>): boolean
                /**
                 * Perform the given callback operation on all matching methods of the given
                 * class, as locally declared or equivalent thereof (such as default methods
                 * on Java 8 based interfaces that the given class implements).
                 * @param clazz the class to introspect
                 * @param mc the callback to invoke for each method
                 * @throws IllegalStateException if introspection fails
                 * @since 4.2
                 * @see #doWithMethods
                 */
                // @ts-ignore
                public static doWithLocalMethods(clazz: java.lang.Class<any>, mc: org.springframework.util.ReflectionUtils.MethodCallback): void
                /**
                 * Perform the given callback operation on all matching methods of the given
                 * class and superclasses.
                 * <p>The same named method occurring on subclass and superclass will appear
                 * twice, unless excluded by a {@link MethodFilter}.
                 * @param clazz the class to introspect
                 * @param mc the callback to invoke for each method
                 * @throws IllegalStateException if introspection fails
                 * @see #doWithMethods(Class, MethodCallback, MethodFilter)
                 */
                // @ts-ignore
                public static doWithMethods(clazz: java.lang.Class<any>, mc: org.springframework.util.ReflectionUtils.MethodCallback): void
                /**
                 * Perform the given callback operation on all matching methods of the given
                 * class and superclasses (or given interface and super-interfaces).
                 * <p>The same named method occurring on subclass and superclass will appear
                 * twice, unless excluded by the specified {@link MethodFilter}.
                 * @param clazz the class to introspect
                 * @param mc the callback to invoke for each method
                 * @param mf the filter that determines the methods to apply the callback to
                 * @throws IllegalStateException if introspection fails
                 */
                // @ts-ignore
                public static doWithMethods(clazz: java.lang.Class<any>, mc: org.springframework.util.ReflectionUtils.MethodCallback, mf: org.springframework.util.ReflectionUtils.MethodFilter): void
                /**
                 * Get all declared methods on the leaf class and all superclasses.
                 * Leaf class methods are included first.
                 * @param leafClass the class to introspect
                 * @throws IllegalStateException if introspection fails
                 */
                // @ts-ignore
                public static getAllDeclaredMethods(leafClass: java.lang.Class<any>): java.lang.reflect.Method[]
                /**
                 * Get the unique set of declared methods on the leaf class and all superclasses.
                 * Leaf class methods are included first and while traversing the superclass hierarchy
                 * any methods found with signatures matching a method already included are filtered out.
                 * @param leafClass the class to introspect
                 * @throws IllegalStateException if introspection fails
                 */
                // @ts-ignore
                public static getUniqueDeclaredMethods(leafClass: java.lang.Class<any>): java.lang.reflect.Method[]
                /**
                 * Get the unique set of declared methods on the leaf class and all superclasses.
                 * Leaf class methods are included first and while traversing the superclass hierarchy
                 * any methods found with signatures matching a method already included are filtered out.
                 * @param leafClass the class to introspect
                 * @param mf the filter that determines the methods to take into account
                 * @throws IllegalStateException if introspection fails
                 * @since 5.2
                 */
                // @ts-ignore
                public static getUniqueDeclaredMethods(leafClass: java.lang.Class<any>, mf: org.springframework.util.ReflectionUtils.MethodFilter): java.lang.reflect.Method[]
                /**
                 * Variant of {@link Class#getDeclaredMethods()} that uses a local cache in
                 * order to avoid the JVM's SecurityManager check and new Method instances.
                 * In addition, it also includes Java 8 default methods from locally
                 * implemented interfaces, since those are effectively to be treated just
                 * like declared methods.
                 * @param clazz the class to introspect
                 * @return the cached array of methods
                 * @throws IllegalStateException if introspection fails
                 * @since 5.2
                 * @see Class#getDeclaredMethods()
                 */
                // @ts-ignore
                public static getDeclaredMethods(clazz: java.lang.Class<any>): java.lang.reflect.Method[]
                /**
                 * Determine whether the given method is an "equals" method.
                 * @see java.lang.Object#equals(Object)
                 */
                // @ts-ignore
                public static isEqualsMethod(method: java.lang.reflect.Method): boolean
                /**
                 * Determine whether the given method is a "hashCode" method.
                 * @see java.lang.Object#hashCode()
                 */
                // @ts-ignore
                public static isHashCodeMethod(method: java.lang.reflect.Method): boolean
                /**
                 * Determine whether the given method is a "toString" method.
                 * @see java.lang.Object#toString()
                 */
                // @ts-ignore
                public static isToStringMethod(method: java.lang.reflect.Method): boolean
                /**
                 * Determine whether the given method is originally declared by {@link java.lang.Object}.
                 */
                // @ts-ignore
                public static isObjectMethod(method: java.lang.reflect.Method): boolean
                /**
                 * Determine whether the given method is a CGLIB 'renamed' method,
                 * following the pattern "CGLIB$methodName$0".
                 * @param renamedMethod the method to check
                 */
                // @ts-ignore
                public static isCglibRenamedMethod(renamedMethod: java.lang.reflect.Method): boolean
                /**
                 * Make the given method accessible, explicitly setting it accessible if
                 * necessary. The {@code setAccessible(true)} method is only called
                 * when actually necessary, to avoid unnecessary conflicts with a JVM
                 * SecurityManager (if active).
                 * @param method the method to make accessible
                 * @see java.lang.reflect.Method#setAccessible
                 */
                // @ts-ignore
                public static makeAccessible(method: java.lang.reflect.Method): void
                /**
                 * Attempt to find a {@link Field field} on the supplied {@link Class} with the
                 * supplied {@code name}. Searches all superclasses up to {@link Object}.
                 * @param clazz the class to introspect
                 * @param name the name of the field
                 * @return the corresponding Field object, or {#code null} if not found
                 */
                // @ts-ignore
                public static findField(clazz: java.lang.Class<any>, name: java.lang.String | string): java.lang.reflect.Field
                /**
                 * Attempt to find a {@link Field field} on the supplied {@link Class} with the
                 * supplied {@code name} and/or {@link Class type}. Searches all superclasses
                 * up to {@link Object}.
                 * @param clazz the class to introspect
                 * @param name the name of the field (may be {#code null} if type is specified)
                 * @param type the type of the field (may be {#code null} if name is specified)
                 * @return the corresponding Field object, or {#code null} if not found
                 */
                // @ts-ignore
                public static findField(clazz: java.lang.Class<any>, name: java.lang.String | string, type: java.lang.Class<any>): java.lang.reflect.Field
                /**
                 * Set the field represented by the supplied {@linkplain Field field object} on
                 * the specified {@linkplain Object target object} to the specified {@code value}.
                 * <p>In accordance with {@link Field#set(Object, Object)} semantics, the new value
                 * is automatically unwrapped if the underlying field has a primitive type.
                 * <p>This method does not support setting {@code static final} fields.
                 * <p>Thrown exceptions are handled via a call to {@link #handleReflectionException(Exception)}.
                 * @param field the field to set
                 * @param target the target object on which to set the field
                 * @param value the value to set (may be {#code null})
                 */
                // @ts-ignore
                public static setField(field: java.lang.reflect.Field, target: java.lang.Object | any, value: java.lang.Object | any): void
                /**
                 * Get the field represented by the supplied {@link Field field object} on the
                 * specified {@link Object target object}. In accordance with {@link Field#get(Object)}
                 * semantics, the returned value is automatically wrapped if the underlying field
                 * has a primitive type.
                 * <p>Thrown exceptions are handled via a call to {@link #handleReflectionException(Exception)}.
                 * @param field the field to get
                 * @param target the target object from which to get the field
                 * @return the field's current value
                 */
                // @ts-ignore
                public static getField(field: java.lang.reflect.Field, target: java.lang.Object | any): any
                /**
                 * Invoke the given callback on all locally declared fields in the given class.
                 * @param clazz the target class to analyze
                 * @param fc the callback to invoke for each field
                 * @throws IllegalStateException if introspection fails
                 * @since 4.2
                 * @see #doWithFields
                 */
                // @ts-ignore
                public static doWithLocalFields(clazz: java.lang.Class<any>, fc: org.springframework.util.ReflectionUtils.FieldCallback): void
                /**
                 * Invoke the given callback on all fields in the target class, going up the
                 * class hierarchy to get all declared fields.
                 * @param clazz the target class to analyze
                 * @param fc the callback to invoke for each field
                 * @throws IllegalStateException if introspection fails
                 */
                // @ts-ignore
                public static doWithFields(clazz: java.lang.Class<any>, fc: org.springframework.util.ReflectionUtils.FieldCallback): void
                /**
                 * Invoke the given callback on all fields in the target class, going up the
                 * class hierarchy to get all declared fields.
                 * @param clazz the target class to analyze
                 * @param fc the callback to invoke for each field
                 * @param ff the filter that determines the fields to apply the callback to
                 * @throws IllegalStateException if introspection fails
                 */
                // @ts-ignore
                public static doWithFields(clazz: java.lang.Class<any>, fc: org.springframework.util.ReflectionUtils.FieldCallback, ff: org.springframework.util.ReflectionUtils.FieldFilter): void
                /**
                 * Given the source object and the destination, which must be the same class
                 * or a subclass, copy all fields, including inherited fields. Designed to
                 * work on objects with public no-arg constructors.
                 * @throws IllegalStateException if introspection fails
                 */
                // @ts-ignore
                public static shallowCopyFieldState(src: java.lang.Object | any, dest: java.lang.Object | any): void
                /**
                 * Determine whether the given field is a "public static final" constant.
                 * @param field the field to check
                 */
                // @ts-ignore
                public static isPublicStaticFinal(field: java.lang.reflect.Field): boolean
                /**
                 * Make the given field accessible, explicitly setting it accessible if
                 * necessary. The {@code setAccessible(true)} method is only called
                 * when actually necessary, to avoid unnecessary conflicts with a JVM
                 * SecurityManager (if active).
                 * @param field the field to make accessible
                 * @see java.lang.reflect.Field#setAccessible
                 */
                // @ts-ignore
                public static makeAccessible(field: java.lang.reflect.Field): void
                /**
                 * Clear the internal method/field cache.
                 * @since 4.2.4
                 */
                // @ts-ignore
                public static clearCache(): void
            }
        }
    }
}
