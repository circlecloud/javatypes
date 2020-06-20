declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Provides methods to support various naming and other conventions used
             * throughout the framework. Mainly for internal use within the framework.
             * @author Rob Harrop
             * @author Juergen Hoeller
             * @author Rossen Stoyanchev
             * @since 2.0
             */
            // @ts-ignore
            class Conventions extends java.lang.Object {
                /**
                 * Determine the conventional variable name for the supplied {@code Object}
                 * based on its concrete type. The convention used is to return the
                 * un-capitalized short name of the {@code Class}, according to JavaBeans
                 * property naming rules.
                 * <p>For example:<br>
                 * {@code com.myapp.Product} becomes {@code "product"}<br>
                 * {@code com.myapp.MyProduct} becomes {@code "myProduct"}<br>
                 * {@code com.myapp.UKProduct} becomes {@code "UKProduct"}<br>
                 * <p>For arrays the pluralized version of the array component type is used.
                 * For {@code Collection}s an attempt is made to 'peek ahead' to determine
                 * the component type and return its pluralized version.
                 * @param value the value to generate a variable name for
                 * @return the generated variable name
                 */
                // @ts-ignore
                getVariableName(value: any): java.lang.String
                /**
                 * Determine the conventional variable name for the given parameter taking
                 * the generic collection type, if any, into account.
                 * <p>As of 5.0 this method supports reactive types:<br>
                 * {@code Mono<com.myapp.Product>} becomes {@code "productMono"}<br>
                 * {@code Flux<com.myapp.MyProduct>} becomes {@code "myProductFlux"}<br>
                 * {@code Observable<com.myapp.MyProduct>} becomes {@code "myProductObservable"}<br>
                 * @param parameter the method or constructor parameter
                 * @return the generated variable name
                 */
                // @ts-ignore
                getVariableNameForParameter(parameter: org.springframework.core.MethodParameter): java.lang.String
                /**
                 * Determine the conventional variable name for the return type of the
                 * given method, taking the generic collection type, if any, into account.
                 * @param method the method to generate a variable name for
                 * @return the generated variable name
                 */
                // @ts-ignore
                getVariableNameForReturnType(method: java.lang.reflect.Method): java.lang.String
                /**
                 * Determine the conventional variable name for the return type of the given
                 * method, taking the generic collection type, if any, into account, falling
                 * back on the given actual return value if the method declaration is not
                 * specific enough, e.g. {@code Object} return type or untyped collection.
                 * @param method the method to generate a variable name for
                 * @param value the return value (may be {#code null} if not available)
                 * @return the generated variable name
                 */
                // @ts-ignore
                getVariableNameForReturnType(method: java.lang.reflect.Method, value: any): java.lang.String
                /**
                 * Determine the conventional variable name for the return type of the given
                 * method, taking the generic collection type, if any, into account, falling
                 * back on the given return value if the method declaration is not specific
                 * enough, e.g. {@code Object} return type or untyped collection.
                 * <p>As of 5.0 this method supports reactive types:<br>
                 * {@code Mono<com.myapp.Product>} becomes {@code "productMono"}<br>
                 * {@code Flux<com.myapp.MyProduct>} becomes {@code "myProductFlux"}<br>
                 * {@code Observable<com.myapp.MyProduct>} becomes {@code "myProductObservable"}<br>
                 * @param method the method to generate a variable name for
                 * @param resolvedType the resolved return type of the method
                 * @param value the return value (may be {#code null} if not available)
                 * @return the generated variable name
                 */
                // @ts-ignore
                getVariableNameForReturnType(method: java.lang.reflect.Method, resolvedType: java.lang.Class<any>, value: any): java.lang.String
                /**
                 * Convert {@code String}s in attribute name format (e.g. lowercase, hyphens
                 * separating words) into property name format (camel-case). For example
                 * {@code transaction-manager} becomes {@code "transactionManager"}.
                 */
                // @ts-ignore
                attributeNameToPropertyName(attributeName: string): java.lang.String
                /**
                 * Return an attribute name qualified by the given enclosing {@link Class}.
                 * For example the attribute name '{@code foo}' qualified by {@link Class}
                 * '{@code com.myapp.SomeClass}' would be '{@code com.myapp.SomeClass.foo}'
                 */
                // @ts-ignore
                getQualifiedAttributeName(enclosingClass: java.lang.Class<any>, attributeName: string): java.lang.String
            }
        }
    }
}
