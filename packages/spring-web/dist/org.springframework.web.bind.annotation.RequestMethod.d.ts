declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Java 5 enumeration of HTTP request methods. Intended for use with the
                     * {@link RequestMapping#method()} attribute of the {@link RequestMapping} annotation.
                     * <p>Note that, by default, {@link org.springframework.web.servlet.DispatcherServlet}
                     * supports GET, HEAD, POST, PUT, PATCH and DELETE only. DispatcherServlet will
                     * process TRACE and OPTIONS with the default HttpServlet behavior unless explicitly
                     * told to dispatch those request types as well: Check out the "dispatchOptionsRequest"
                     * and "dispatchTraceRequest" properties, switching them to "true" if necessary.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see RequestMapping
                     * @see org.springframework.web.servlet.DispatcherServlet#setDispatchOptionsRequest
                     * @see org.springframework.web.servlet.DispatcherServlet#setDispatchTraceRequest
                     */
                    // @ts-ignore
                    class RequestMethod extends java.lang.Enum<org.springframework.web.bind.annotation.RequestMethod> {
                        // @ts-ignore
                        public static readonly GET: org.springframework.web.bind.annotation.RequestMethod
                        // @ts-ignore
                        public static readonly HEAD: org.springframework.web.bind.annotation.RequestMethod
                        // @ts-ignore
                        public static readonly POST: org.springframework.web.bind.annotation.RequestMethod
                        // @ts-ignore
                        public static readonly PUT: org.springframework.web.bind.annotation.RequestMethod
                        // @ts-ignore
                        public static readonly PATCH: org.springframework.web.bind.annotation.RequestMethod
                        // @ts-ignore
                        public static readonly DELETE: org.springframework.web.bind.annotation.RequestMethod
                        // @ts-ignore
                        public static readonly OPTIONS: org.springframework.web.bind.annotation.RequestMethod
                        // @ts-ignore
                        public static readonly TRACE: org.springframework.web.bind.annotation.RequestMethod
                        // @ts-ignore
                        public static values(): org.springframework.web.bind.annotation.RequestMethod[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.web.bind.annotation.RequestMethod
                    }
                }
            }
        }
    }
}
