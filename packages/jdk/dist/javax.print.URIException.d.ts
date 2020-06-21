declare namespace javax {
    namespace print {
        /**
         * Interface URIException is a mixin interface which a subclass of {@link
         * PrintException PrintException} can implement to report an error condition
         * involving a URI address. The Print Service API does not define any print
         * exception classes that implement interface URIException, that being left to
         * the Print Service implementor's discretion.
         */
        // @ts-ignore
        interface URIException {
            /**
             * Indicates that the printer cannot access the URI address.
             * For example, the printer might report this error if it goes to get
             * the print data and cannot even establish a connection to the
             * URI address.
             */
            // @ts-ignore
            readonly URIInaccessible: number /*int*/
            /**
             * Indicates that the printer does not support the URI
             * scheme ("http", "ftp", etc.) in the URI address.
             */
            // @ts-ignore
            readonly URISchemeNotSupported: number /*int*/
            /**
             * Indicates any kind of problem not specifically identified
             * by the other reasons.
             */
            // @ts-ignore
            readonly URIOtherProblem: number /*int*/
            /**
             * Return the URI.
             * @return the URI that is the cause of this exception.
             */
            // @ts-ignore
            getUnsupportedURI(): java.net.URI
            /**
             * Return the reason for the event.
             * @return one of the predefined reasons enumerated in this interface.
             */
            // @ts-ignore
            getReason(): number /*int*/
        }
    }
}
