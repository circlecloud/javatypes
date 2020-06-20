declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Java 5 enumeration of HTTP request methods. Intended for use
             * with {@link org.springframework.http.client.ClientHttpRequest}
             * and {@link org.springframework.web.client.RestTemplate}.
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @since 3.0
             */
            // @ts-ignore
            class HttpMethod extends java.lang.Enum<org.springframework.http.HttpMethod> {
                // @ts-ignore
                values(): org.springframework.http.HttpMethod[]
                // @ts-ignore
                valueOf(name: string): org.springframework.http.HttpMethod
                /**
                 * Resolve the given method value to an {@code HttpMethod}.
                 * @param method the method value as a String
                 * @return the corresponding {#code HttpMethod}, or {@code null} if not found
                 * @since 4.2.4
                 */
                // @ts-ignore
                resolve(method: string): org.springframework.http.HttpMethod
                /**
                 * Determine whether this {@code HttpMethod} matches the given
                 * method value.
                 * @param method the method value as a String
                 * @return {#code true} if it matches, {@code false} otherwise
                 * @since 4.2.4
                 */
                // @ts-ignore
                matches(method: string): boolean
            }
        }
    }
}
