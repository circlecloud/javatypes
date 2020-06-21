declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace support {
                    /**
                     * Standard implementation of the {@link MultipartResolver} interface,
                     * based on the Servlet 3.0 {@link javax.servlet.http.Part} API.
                     * To be added as "multipartResolver" bean to a Spring DispatcherServlet context,
                     * without any extra configuration at the bean level (see below).
                     * <p><b>Note:</b> In order to use Servlet 3.0 based multipart parsing,
                     * you need to mark the affected servlet with a "multipart-config" section in
                     * {@code web.xml}, or with a {@link javax.servlet.MultipartConfigElement}
                     * in programmatic servlet registration, or (in case of a custom servlet class)
                     * possibly with a {@link javax.servlet.annotation.MultipartConfig} annotation
                     * on your servlet class. Configuration settings such as maximum sizes or
                     * storage locations need to be applied at that servlet registration level;
                     * Servlet 3.0 does not allow for them to be set at the MultipartResolver level.
                     * <pre class="code">
                     * public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
                     * // ...
                     * &#064;Override
                     * protected void customizeRegistration(ServletRegistration.Dynamic registration) {
                     * // Optionally also set maxFileSize, maxRequestSize, fileSizeThreshold
                     * registration.setMultipartConfig(new MultipartConfigElement("/tmp"));
                     * }
                     * }
                     * </pre>
                     * @author Juergen Hoeller
                     * @since 3.1
                     * @see #setResolveLazily
                     * @see HttpServletRequest#getParts()
                     * @see org.springframework.web.multipart.commons.CommonsMultipartResolver
                     */
                    // @ts-ignore
                    class StandardServletMultipartResolver extends java.lang.Object implements org.springframework.web.multipart.MultipartResolver {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set whether to resolve the multipart request lazily at the time of
                         * file or parameter access.
                         * <p>Default is "false", resolving the multipart elements immediately, throwing
                         * corresponding exceptions at the time of the {@link #resolveMultipart} call.
                         * Switch this to "true" for lazy multipart parsing, throwing parse exceptions
                         * once the application attempts to obtain multipart files or parameters.
                         * @since 3.2.9
                         */
                        // @ts-ignore
                        public setResolveLazily(resolveLazily: boolean): void
                        // @ts-ignore
                        public isMultipart(request: HttpServletRequest): boolean
                        // @ts-ignore
                        public resolveMultipart(request: HttpServletRequest): org.springframework.web.multipart.MultipartHttpServletRequest
                        // @ts-ignore
                        public cleanupMultipart(request: org.springframework.web.multipart.MultipartHttpServletRequest): void
                    }
                }
            }
        }
    }
}
