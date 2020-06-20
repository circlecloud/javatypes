declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * Default implementation of the {@link SessionAttributeStore} interface,
                     * storing the attributes in the WebRequest session (i.e. HttpSession).
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see #setAttributeNamePrefix
                     * @see org.springframework.web.context.request.WebRequest#setAttribute
                     * @see org.springframework.web.context.request.WebRequest#getAttribute
                     * @see org.springframework.web.context.request.WebRequest#removeAttribute
                     */
                    // @ts-ignore
                    class DefaultSessionAttributeStore extends java.lang.Object implements org.springframework.web.bind.support.SessionAttributeStore {
                        // @ts-ignore
                        constructor()
                        /**
                         * Specify a prefix to use for the attribute names in the backend session.
                         * <p>Default is to use no prefix, storing the session attributes with the
                         * same name as in the model.
                         */
                        // @ts-ignore
                        setAttributeNamePrefix(attributeNamePrefix: string): void
                        // @ts-ignore
                        storeAttribute(request: org.springframework.web.context.request.WebRequest, attributeName: string, attributeValue: any): void
                        // @ts-ignore
                        retrieveAttribute(request: org.springframework.web.context.request.WebRequest, attributeName: string): java.lang.Object
                        // @ts-ignore
                        cleanupAttribute(request: org.springframework.web.context.request.WebRequest, attributeName: string): void
                        /**
                         * Calculate the attribute name in the backend session.
                         * <p>The default implementation simply prepends the configured
                         * {@link #setAttributeNamePrefix "attributeNamePrefix"}, if any.
                         * @param request the current request
                         * @param attributeName the name of the attribute
                         * @return the attribute name in the backend session
                         */
                        // @ts-ignore
                        getAttributeNameInSession(request: org.springframework.web.context.request.WebRequest, attributeName: string): java.lang.String
                    }
                }
            }
        }
    }
}
