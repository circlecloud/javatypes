declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation which indicates that a method parameter should be bound to a web
                     * request parameter.
                     * <p>Supported for annotated handler methods in Spring MVC and Spring WebFlux
                     * as follows:
                     * <ul>
                     * <li>In Spring MVC, "request parameters" map to query parameters, form data,
                     * and parts in multipart requests. This is because the Servlet API combines
                     * query parameters and form data into a single map called "parameters", and
                     * that includes automatic parsing of the request body.
                     * <li>In Spring WebFlux, "request parameters" map to query parameters only.
                     * To work with all 3, query, form data, and multipart data, you can use data
                     * binding to a command object annotated with {@link ModelAttribute}.
                     * </ul>
                     * <p>If the method parameter type is {@link Map} and a request parameter name
                     * is specified, then the request parameter value is converted to a {@link Map}
                     * assuming an appropriate conversion strategy is available.
                     * <p>If the method parameter is {@link java.util.Map Map&lt;String, String&gt;} or
                     * {@link org.springframework.util.MultiValueMap MultiValueMap&lt;String, String&gt;}
                     * and a parameter name is not specified, then the map parameter is populated
                     * with all request parameter names and values.
                     * @author Arjen Poutsma
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 2.5
                     * @see RequestMapping
                     * @see RequestHeader
                     * @see CookieValue
                     */
                    // @ts-ignore
                    abstract class RequestParam implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
