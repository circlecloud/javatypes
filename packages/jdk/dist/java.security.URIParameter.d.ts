declare namespace java {
    namespace security {
        /**
         * A parameter that contains a URI pointing to data intended for a
         * PolicySpi or ConfigurationSpi implementation.
         * @since 1.6
         */
        // @ts-ignore
        class URIParameter extends java.lang.Object implements java.security.Policy.Parameters, javax.security.auth.login.Configuration.Parameters {
            /**
             * Constructs a URIParameter with the URI pointing to
             * data intended for an SPI implementation.
             * @param uri the URI pointing to the data.
             * @exception NullPointerException if the specified URI is null.
             */
            // @ts-ignore
            constructor(uri: java.net.URI)
            /**
             * Returns the URI.
             * @return uri the URI.
             */
            // @ts-ignore
            getURI(): java.net.URI
        }
    }
}
