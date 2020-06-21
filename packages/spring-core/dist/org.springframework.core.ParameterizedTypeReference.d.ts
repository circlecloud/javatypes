declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * The purpose of this class is to enable capturing and passing a generic
             * {@link Type}. In order to capture the generic type and retain it at runtime,
             * you need to create a subclass (ideally as anonymous inline class) as follows:
             * <pre class="code">
             * ParameterizedTypeReference&lt;List&lt;String&gt;&gt; typeRef = new ParameterizedTypeReference&lt;List&lt;String&gt;&gt;() {};
             * </pre>
             * <p>The resulting {@code typeRef} instance can then be used to obtain a {@link Type}
             * instance that carries the captured parameterized type information at runtime.
             * For more information on "super type tokens" see the link to Neal Gafter's blog post.
             * @author Arjen Poutsma
             * @author Rossen Stoyanchev
             * @since 3.2
             * @param <T> the referenced type
             * @see <a href="https://gafter.blogspot.nl/2006/12/super-type-tokens.html">Neal Gafter on Super Type Tokens</a>
             */
            // @ts-ignore
            abstract class ParameterizedTypeReference<T> extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getType(): java.lang.reflect.Type
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
                /**
                 * Build a {@code ParameterizedTypeReference} wrapping the given type.
                 * @param type a generic type (possibly obtained via reflection,
                 *  e.g. from {#link java.lang.reflect.Method#getGenericReturnType()})
                 * @return a corresponding reference which may be passed into
                 *  {#code ParameterizedTypeReference}-accepting methods
                 * @since 4.3.12
                 */
                // @ts-ignore
                public static forType<T>(type: java.lang.reflect.Type): org.springframework.core.ParameterizedTypeReference<T>
            }
        }
    }
}
