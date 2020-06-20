declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation for mapping web requests onto methods in request-handling classes
                     * with flexible method signatures.
                     * <p>Both Spring MVC and Spring WebFlux support this annotation through a
                     * {@code RequestMappingHandlerMapping} and {@code RequestMappingHandlerAdapter}
                     * in their respective modules and package structure. For the exact list of
                     * supported handler method arguments and return types in each, please use the
                     * reference documentation links below:
                     * <ul>
                     * <li>Spring MVC
                     * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#mvc-ann-arguments">Method Arguments</a>
                     * and
                     * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#mvc-ann-return-types">Return Values</a>
                     * </li>
                     * <li>Spring WebFlux
                     * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-ann-arguments">Method Arguments</a>
                     * and
                     * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-ann-return-types">Return Values</a>
                     * </li>
                     * </ul>
                     * <p><strong>Note:</strong> This annotation can be used both at the class and
                     * at the method level. In most cases, at the method level applications will
                     * prefer to use one of the HTTP method specific variants
                     * {@link GetMapping @GetMapping}, {@link PostMapping @PostMapping},
                     * {@link PutMapping @PutMapping}, {@link DeleteMapping @DeleteMapping}, or
                     * {@link PatchMapping @PatchMapping}.</p>
                     * <p><b>NOTE:</b> When using controller interfaces (e.g. for AOP proxying),
                     * make sure to consistently put <i>all</i> your mapping annotations - such as
                     * {@code @RequestMapping} and {@code @SessionAttributes} - on
                     * the controller <i>interface</i> rather than on the implementation class.
                     * @author Juergen Hoeller
                     * @author Arjen Poutsma
                     * @author Sam Brannen
                     * @since 2.5
                     * @see GetMapping
                     * @see PostMapping
                     * @see PutMapping
                     * @see DeleteMapping
                     * @see PatchMapping
                     * @see org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter
                     * @see org.springframework.web.reactive.result.method.annotation.RequestMappingHandlerAdapter
                     */
                    // @ts-ignore
                    class RequestMapping implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
