declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Helper class for resolving generic types against type variables.
             * <p>Mainly intended for usage within the framework, resolving method
             * parameter types even when they are declared generically.
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @author Sam Brannen
             * @author Phillip Webb
             * @since 2.5.2
             */
            // @ts-ignore
            class GenericTypeResolver extends java.lang.Object {
                /**
                 * Determine the target type for the given generic parameter type.
                 * @param methodParameter the method parameter specification
                 * @param implementationClass the class to resolve type variables against
                 * @return the corresponding generic parameter or return type
                 * @deprecated since 5.2 in favor of {#code methodParameter.withContainingClass(implementationClass).getParameterType()}
                 */
                // @ts-ignore
                public static resolveParameterType(methodParameter: org.springframework.core.MethodParameter, implementationClass: java.lang.Class<any>): java.lang.Class<any>
                /**
                 * Determine the target type for the generic return type of the given method,
                 * where formal type variables are declared on the given class.
                 * @param method the method to introspect
                 * @param clazz the class to resolve type variables against
                 * @return the corresponding generic parameter or return type
                 */
                // @ts-ignore
                public static resolveReturnType(method: java.lang.reflect.Method, clazz: java.lang.Class<any>): java.lang.Class<any>
                /**
                 * Resolve the single type argument of the given generic interface against the given
                 * target method which is assumed to return the given interface or an implementation
                 * of it.
                 * @param method the target method to check the return type of
                 * @param genericIfc the generic interface or superclass to resolve the type argument from
                 * @return the resolved parameter type of the method return type, or {#code null}
                 *  if not resolvable or if the single argument is of type {@link WildcardType}.
                 */
                // @ts-ignore
                public static resolveReturnTypeArgument(method: java.lang.reflect.Method, genericIfc: java.lang.Class<any>): java.lang.Class<any>
                /**
                 * Resolve the single type argument of the given generic interface against
                 * the given target class which is assumed to implement the generic interface
                 * and possibly declare a concrete type for its type variable.
                 * @param clazz the target class to check against
                 * @param genericIfc the generic interface or superclass to resolve the type argument from
                 * @return the resolved type of the argument, or {#code null} if not resolvable
                 */
                // @ts-ignore
                public static resolveTypeArgument(clazz: java.lang.Class<any>, genericIfc: java.lang.Class<any>): java.lang.Class<any>
                /**
                 * Resolve the type arguments of the given generic interface against the given
                 * target class which is assumed to implement the generic interface and possibly
                 * declare concrete types for its type variables.
                 * @param clazz the target class to check against
                 * @param genericIfc the generic interface or superclass to resolve the type argument from
                 * @return the resolved type of each argument, with the array size matching the
                 *  number of actual type arguments, or {#code null} if not resolvable
                 */
                // @ts-ignore
                public static resolveTypeArguments(clazz: java.lang.Class<any>, genericIfc: java.lang.Class<any>): java.lang.Class<any>[]
                /**
                 * Resolve the given generic type against the given context class,
                 * substituting type variables as far as possible.
                 * @param genericType the (potentially) generic type
                 * @param contextClass a context class for the target type, for example a class
                 *  in which the target type appears in a method signature (can be {#code null})
                 * @return the resolved type (possibly the given generic type as-is)
                 * @since 5.0
                 */
                // @ts-ignore
                public static resolveType(genericType: java.lang.reflect.Type, contextClass: java.lang.Class<any>): java.lang.reflect.Type
                /**
                 * Resolve the specified generic type against the given TypeVariable map.
                 * <p>Used by Spring Data.
                 * @param genericType the generic type to resolve
                 * @param map the TypeVariable Map to resolved against
                 * @return the type if it resolves to a Class, or {#code Object.class} otherwise
                 */
                // @ts-ignore
                public static resolveType(genericType: java.lang.reflect.Type, map: java.util.Map<java.lang.reflect.TypeVariable<any>, java.lang.reflect.Type>): java.lang.Class<any>
                /**
                 * Build a mapping of {@link TypeVariable#getName TypeVariable names} to
                 * {@link Class concrete classes} for the specified {@link Class}.
                 * Searches all super types, enclosing types and interfaces.
                 * @see #resolveType(Type, Map)
                 */
                // @ts-ignore
                public static getTypeVariableMap(clazz: java.lang.Class<any>): java.util.Map<java.lang.reflect.TypeVariable<any>, java.lang.reflect.Type>
            }
        }
    }
}
