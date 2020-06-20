declare namespace javax {
    namespace activation {
        /**
         * The URLDataSource class provides an object that wraps a <code>URL</code>
         * object in a DataSource interface. URLDataSource simplifies the handling
         * of data described by URLs within the JavaBeans Activation Framework
         * because this class can be used to create new DataHandlers. <i>NOTE: The
         * DataHandler object creates a URLDataSource internally,
         * when it is constructed with a URL.</i>
         * @see javax.activation.DataSource
         * @see javax.activation.DataHandler
         * @since 1.6
         */
        // @ts-ignore
        class URLDataSource extends java.lang.Object implements javax.activation.DataSource {
            /**
             * URLDataSource constructor. The URLDataSource class will
             * not open a connection to the URL until a method requiring it
             * to do so is called.
             * @param url The URL to be encapsulated in this object.
             */
            // @ts-ignore
            constructor(url: java.net.URL)
            /**
             * Returns the value of the URL content-type header field.
             * It calls the URL's <code>URLConnection.getContentType</code> method
             * after retrieving a URLConnection object.
             * <i>Note: this method attempts to call the <code>openConnection</code>
             * method on the URL. If this method fails, or if a content type is not
             * returned from the URLConnection, getContentType returns
             * "application/octet-stream" as the content type.</i>
             * @return the content type.
             */
            // @ts-ignore
            getContentType(): java.lang.String
            /**
             * Calls the <code>getFile</code> method on the URL used to
             * instantiate the object.
             * @return the result of calling the URL's getFile method.
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * The getInputStream method from the URL. Calls the
             * <code>openStream</code> method on the URL.
             * @return the InputStream.
             */
            // @ts-ignore
            getInputStream(): java.io.InputStream
            /**
             * The getOutputStream method from the URL. First an attempt is
             * made to get the URLConnection object for the URL. If that
             * succeeds, the getOutputStream method on the URLConnection
             * is returned.
             * @return the OutputStream.
             */
            // @ts-ignore
            getOutputStream(): java.io.OutputStream
            /**
             * Return the URL used to create this DataSource.
             * @return The URL.
             */
            // @ts-ignore
            getURL(): java.net.URL
        }
    }
}
