declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation which indicates that a method parameter should be bound to a web request header.
                     * <p>Supported for annotated handler methods in Spring MVC and Spring WebFlux.
                     * <p>If the method parameter is {@link java.util.Map Map&lt;String, String&gt;},
                     * {@link org.springframework.util.MultiValueMap MultiValueMap&lt;String, String&gt;},
                     * or {@link org.springframework.http.HttpHeaders HttpHeaders} then the map is
                     * populated with all header names and values.
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 3.0
                     * @see RequestMapping
                     * @see RequestParam
                     * @see CookieValue
                     */
                    // @ts-ignore
                    class RequestHeader implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
