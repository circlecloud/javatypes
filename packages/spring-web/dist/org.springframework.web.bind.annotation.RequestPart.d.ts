declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation that can be used to associate the part of a "multipart/form-data" request
                     * with a method argument.
                     * <p>Supported method argument types include {@link MultipartFile} in conjunction with
                     * Spring's {@link MultipartResolver} abstraction, {@code javax.servlet.http.Part} in
                     * conjunction with Servlet 3.0 multipart requests, or otherwise for any other method
                     * argument, the content of the part is passed through an {@link HttpMessageConverter}
                     * taking into consideration the 'Content-Type' header of the request part. This is
                     * analogous to what @{@link RequestBody} does to resolve an argument based on the
                     * content of a non-multipart regular request.
                     * <p>Note that @{@link RequestParam} annotation can also be used to associate the part
                     * of a "multipart/form-data" request with a method argument supporting the same method
                     * argument types. The main difference is that when the method argument is not a String
                     * or raw {@code MultipartFile} / {@code Part}, {@code @RequestParam} relies on type
                     * conversion via a registered {@link Converter} or {@link PropertyEditor} while
                     * {@link RequestPart} relies on {@link HttpMessageConverter HttpMessageConverters}
                     * taking into consideration the 'Content-Type' header of the request part.
                     * {@link RequestParam} is likely to be used with name-value form fields while
                     * {@link RequestPart} is likely to be used with parts containing more complex content
                     * e.g. JSON, XML).
                     * @author Rossen Stoyanchev
                     * @author Arjen Poutsma
                     * @author Sam Brannen
                     * @since 3.1
                     * @see RequestParam
                     * @see org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter
                     */
                    // @ts-ignore
                    abstract class RequestPart implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
