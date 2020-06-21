declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * Strategy interface for storing model attributes in a backend session.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see org.springframework.web.bind.annotation.SessionAttributes
                     */
                    // @ts-ignore
                    interface SessionAttributeStore {
                        /**
                         * Store the supplied attribute in the backend session.
                         * <p>Can be called for new attributes as well as for existing attributes.
                         * In the latter case, this signals that the attribute value may have been modified.
                         * @param request the current request
                         * @param attributeName the name of the attribute
                         * @param attributeValue the attribute value to store
                         */
                        // @ts-ignore
                        storeAttribute(request: org.springframework.web.context.request.WebRequest, attributeName: java.lang.String | string, attributeValue: java.lang.Object | any): void
                        /**
                         * Retrieve the specified attribute from the backend session.
                         * <p>This will typically be called with the expectation that the
                         * attribute is already present, with an exception to be thrown
                         * if this method returns {@code null}.
                         * @param request the current request
                         * @param attributeName the name of the attribute
                         * @return the current attribute value, or {#code null} if none
                         */
                        // @ts-ignore
                        retrieveAttribute(request: org.springframework.web.context.request.WebRequest, attributeName: java.lang.String | string): any
                        /**
                         * Clean up the specified attribute in the backend session.
                         * <p>Indicates that the attribute name will not be used anymore.
                         * @param request the current request
                         * @param attributeName the name of the attribute
                         */
                        // @ts-ignore
                        cleanupAttribute(request: org.springframework.web.context.request.WebRequest, attributeName: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
