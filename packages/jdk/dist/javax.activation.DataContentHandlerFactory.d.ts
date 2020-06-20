declare namespace javax {
    namespace activation {
        /**
         * This interface defines a factory for <code>DataContentHandlers</code>. An
         * implementation of this interface should map a MIME type into an
         * instance of DataContentHandler. The design pattern for classes implementing
         * this interface is the same as for the ContentHandler mechanism used in
         * <code>java.net.URL</code>.
         * @since 1.6
         */
        // @ts-ignore
        interface DataContentHandlerFactory {
            /**
             * Creates a new DataContentHandler object for the MIME type.
             * @param mimeType the MIME type to create the DataContentHandler for.
             * @return The new <code>DataContentHandler</code>, or <i>null</i>
             *  if none are found.
             */
            // @ts-ignore
            createDataContentHandler(mimeType: string): javax.activation.DataContentHandler
        }
    }
}
