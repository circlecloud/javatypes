declare namespace javax {
    namespace activation {
        /**
         * The DataSource interface provides the JavaBeans Activation Framework
         * with an abstraction of an arbitrary collection of data.  It
         * provides a type for that data as well as access
         * to it in the form of <code>InputStreams</code> and
         * <code>OutputStreams</code> where appropriate.
         * @since 1.6
         */
        // @ts-ignore
        interface DataSource {
            /**
             * This method returns an <code>InputStream</code> representing
             * the data and throws the appropriate exception if it can
             * not do so.  Note that a new <code>InputStream</code> object must be
             * returned each time this method is called, and the stream must be
             * positioned at the beginning of the data.
             * @return an InputStream
             */
            // @ts-ignore
            getInputStream(): java.io.InputStream
            /**
             * This method returns an <code>OutputStream</code> where the
             * data can be written and throws the appropriate exception if it can
             * not do so.  Note that a new <code>OutputStream</code> object must
             * be returned each time this method is called, and the stream must
             * be positioned at the location the data is to be written.
             * @return an OutputStream
             */
            // @ts-ignore
            getOutputStream(): java.io.OutputStream
            /**
             * This method returns the MIME type of the data in the form of a
             * string. It should always return a valid type. It is suggested
             * that getContentType return "application/octet-stream" if the
             * DataSource implementation can not determine the data type.
             * @return the MIME Type
             */
            // @ts-ignore
            getContentType(): string
            /**
             * Return the <i>name</i> of this object where the name of the object
             * is dependant on the nature of the underlying objects. DataSources
             * encapsulating files may choose to return the filename of the object.
             * (Typically this would be the last component of the filename, not an
             * entire pathname.)
             * @return the name of the object.
             */
            // @ts-ignore
            getName(): string
        }
    }
}
