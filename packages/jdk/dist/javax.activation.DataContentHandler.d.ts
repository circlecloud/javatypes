declare namespace javax {
    namespace activation {
        /**
         * The DataContentHandler interface is implemented by objects that can
         * be used to extend the capabilities of the DataHandler's implementation
         * of the Transferable interface. Through <code>DataContentHandlers</code>
         * the framework can be extended to convert streams in to objects, and
         * to write objects to streams. <p>
         * Applications don't generally call the methods in DataContentHandlers
         * directly. Instead, an application calls the equivalent methods in
         * DataHandler. The DataHandler will attempt to find an appropriate
         * DataContentHandler that corresponds to its MIME type using the
         * current DataContentHandlerFactory. The DataHandler then calls
         * through to the methods in the DataContentHandler.
         * @since 1.6
         */
        // @ts-ignore
        interface DataContentHandler {
            /**
             * Returns an array of DataFlavor objects indicating the flavors the
             * data can be provided in. The array should be ordered according to
             * preference for providing the data (from most richly descriptive to
             * least descriptive).
             * @return The DataFlavors.
             */
            // @ts-ignore
            getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
            /**
             * Returns an object which represents the data to be transferred.
             * The class of the object returned is defined by the representation class
             * of the flavor.
             * @param df The DataFlavor representing the requested type.
             * @param ds The DataSource representing the data to be converted.
             * @return The constructed Object.
             * @exception UnsupportedFlavorException    if the handler doesn't
             *                                           support the requested flavor
             * @exception IOException   if the data can't be accessed
             */
            // @ts-ignore
            getTransferData(df: java.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any
            /**
             * Return an object representing the data in its most preferred form.
             * Generally this will be the form described by the first DataFlavor
             * returned by the <code>getTransferDataFlavors</code> method.
             * @param ds The DataSource representing the data to be converted.
             * @return The constructed Object.
             * @exception IOException   if the data can't be accessed
             */
            // @ts-ignore
            getContent(ds: javax.activation.DataSource): any
            /**
             * Convert the object to a byte stream of the specified MIME type
             * and write it to the output stream.
             * @param obj       The object to be converted.
             * @param mimeType  The requested MIME type of the resulting byte stream.
             * @param os        The output stream into which to write the converted
             *                   byte stream.
             * @exception IOException   errors writing to the stream
             */
            // @ts-ignore
            writeTo(obj: java.lang.Object | any, mimeType: java.lang.String | string, os: java.io.OutputStream): void
        }
    }
}
