declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * Event raised when a request is handled within an ApplicationContext.
                     * <p>Supported by Spring's own FrameworkServlet (through a specific
                     * ServletRequestHandledEvent subclass), but can also be raised by any
                     * other web component.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since January 17, 2001
                     * @see ServletRequestHandledEvent
                     * @see org.springframework.web.servlet.FrameworkServlet
                     * @see org.springframework.context.ApplicationContext#publishEvent
                     */
                    // @ts-ignore
                    class RequestHandledEvent extends ApplicationEvent {
                        /**
                         * Create a new RequestHandledEvent with session information.
                         * @param source the component that published the event
                         * @param sessionId the id of the HTTP session, if any
                         * @param userName the name of the user that was associated with the
                         *  request, if any (usually the UserPrincipal)
                         * @param processingTimeMillis the processing time of the request in milliseconds
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, sessionId: java.lang.String | string, userName: java.lang.String | string, processingTimeMillis: number /*long*/)
                        /**
                         * Create a new RequestHandledEvent with session information.
                         * @param source the component that published the event
                         * @param sessionId the id of the HTTP session, if any
                         * @param userName the name of the user that was associated with the
                         *  request, if any (usually the UserPrincipal)
                         * @param processingTimeMillis the processing time of the request in milliseconds
                         * @param failureCause the cause of failure, if any
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, sessionId: java.lang.String | string, userName: java.lang.String | string, processingTimeMillis: number /*long*/, failureCause: java.lang.Throwable | Error)
                        /**
                         * Return the processing time of the request in milliseconds.
                         */
                        // @ts-ignore
                        public getProcessingTimeMillis(): number /*long*/
                        /**
                         * Return the id of the HTTP session, if any.
                         */
                        // @ts-ignore
                        public getSessionId(): string
                        /**
                         * Return the name of the user that was associated with the request
                         * (usually the UserPrincipal).
                         * @see javax.servlet.http.HttpServletRequest#getUserPrincipal()
                         */
                        // @ts-ignore
                        public getUserName(): string
                        /**
                         * Return whether the request failed.
                         */
                        // @ts-ignore
                        public wasFailure(): boolean
                        /**
                         * Return the cause of failure, if any.
                         */
                        // @ts-ignore
                        public getFailureCause(): Error
                        /**
                         * Return a short description of this event, only involving
                         * the most important context data.
                         */
                        // @ts-ignore
                        public getShortDescription(): string
                        /**
                         * Return a full description of this event, involving
                         * all available context data.
                         */
                        // @ts-ignore
                        public getDescription(): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
