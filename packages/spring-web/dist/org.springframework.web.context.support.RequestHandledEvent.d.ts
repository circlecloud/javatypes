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
                        constructor(source: any, sessionId: string, userName: string, processingTimeMillis: number /*long*/)
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
                        constructor(source: any, sessionId: string, userName: string, processingTimeMillis: number /*long*/, failureCause: Error)
                        /**
                         * Return the processing time of the request in milliseconds.
                         */
                        // @ts-ignore
                        getProcessingTimeMillis(): long
                        /**
                         * Return the id of the HTTP session, if any.
                         */
                        // @ts-ignore
                        getSessionId(): java.lang.String
                        /**
                         * Return the name of the user that was associated with the request
                         * (usually the UserPrincipal).
                         * @see javax.servlet.http.HttpServletRequest#getUserPrincipal()
                         */
                        // @ts-ignore
                        getUserName(): java.lang.String
                        /**
                         * Return whether the request failed.
                         */
                        // @ts-ignore
                        wasFailure(): boolean
                        /**
                         * Return the cause of failure, if any.
                         */
                        // @ts-ignore
                        getFailureCause(): java.lang.Throwable
                        /**
                         * Return a short description of this event, only involving
                         * the most important context data.
                         */
                        // @ts-ignore
                        getShortDescription(): java.lang.String
                        /**
                         * Return a full description of this event, involving
                         * all available context data.
                         */
                        // @ts-ignore
                        getDescription(): java.lang.String
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
