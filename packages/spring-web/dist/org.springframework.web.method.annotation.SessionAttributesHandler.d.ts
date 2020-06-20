declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Manages controller-specific session attributes declared via
                     * {@link SessionAttributes @SessionAttributes}. Actual storage is
                     * delegated to a {@link SessionAttributeStore} instance.
                     * <p>When a controller annotated with {@code @SessionAttributes} adds
                     * attributes to its model, those attributes are checked against names and
                     * types specified via {@code @SessionAttributes}. Matching model attributes
                     * are saved in the HTTP session and remain there until the controller calls
                     * {@link SessionStatus#setComplete()}.
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @since 3.1
                     */
                    // @ts-ignore
                    class SessionAttributesHandler extends java.lang.Object {
                        /**
                         * Create a new session attributes handler. Session attribute names and types
                         * are extracted from the {@code @SessionAttributes} annotation, if present,
                         * on the given type.
                         * @param handlerType the controller type
                         * @param sessionAttributeStore used for session access
                         */
                        // @ts-ignore
                        constructor(handlerType: java.lang.Class<any>, sessionAttributeStore: org.springframework.web.bind.support.SessionAttributeStore)
                        /**
                         * Whether the controller represented by this instance has declared any
                         * session attributes through an {@link SessionAttributes} annotation.
                         */
                        // @ts-ignore
                        hasSessionAttributes(): boolean
                        /**
                         * Whether the attribute name or type match the names and types specified
                         * via {@code @SessionAttributes} on the underlying controller.
                         * <p>Attributes successfully resolved through this method are "remembered"
                         * and subsequently used in {@link #retrieveAttributes(WebRequest)} and
                         * {@link #cleanupAttributes(WebRequest)}.
                         * @param attributeName the attribute name to check
                         * @param attributeType the type for the attribute
                         */
                        // @ts-ignore
                        isHandlerSessionAttribute(attributeName: string, attributeType: java.lang.Class<any>): boolean
                        /**
                         * Store a subset of the given attributes in the session. Attributes not
                         * declared as session attributes via {@code @SessionAttributes} are ignored.
                         * @param request the current request
                         * @param attributes candidate attributes for session storage
                         */
                        // @ts-ignore
                        storeAttributes(request: org.springframework.web.context.request.WebRequest, attributes: java.util.Map<java.lang.String, any>): void
                        /**
                         * Retrieve "known" attributes from the session, i.e. attributes listed
                         * by name in {@code @SessionAttributes} or attributes previously stored
                         * in the model that matched by type.
                         * @param request the current request
                         * @return a map with handler session attributes, possibly empty
                         */
                        // @ts-ignore
                        retrieveAttributes(request: org.springframework.web.context.request.WebRequest): java.util.Map<java.lang.String, java.lang.Object>
                        /**
                         * Remove "known" attributes from the session, i.e. attributes listed
                         * by name in {@code @SessionAttributes} or attributes previously stored
                         * in the model that matched by type.
                         * @param request the current request
                         */
                        // @ts-ignore
                        cleanupAttributes(request: org.springframework.web.context.request.WebRequest): void
                    }
                }
            }
        }
    }
}
