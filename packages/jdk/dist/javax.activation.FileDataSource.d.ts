declare namespace javax {
    namespace activation {
        /**
         * The FileDataSource class implements a simple DataSource object
         * that encapsulates a file. It provides data typing services via
         * a FileTypeMap object. <p>
         * <b>FileDataSource Typing Semantics</b><p>
         * The FileDataSource class delegates data typing of files
         * to an object subclassed from the FileTypeMap class.
         * The <code>setFileTypeMap</code> method can be used to explicitly
         * set the FileTypeMap for an instance of FileDataSource. If no
         * FileTypeMap is set, the FileDataSource will call the FileTypeMap's
         * getDefaultFileTypeMap method to get the System's default FileTypeMap.
         * @see javax.activation.DataSource
         * @see javax.activation.FileTypeMap
         * @see javax.activation.MimetypesFileTypeMap
         * @since 1.6
         */
        // @ts-ignore
        class FileDataSource extends java.lang.Object implements javax.activation.DataSource {
            /**
             * Creates a FileDataSource from a File object. <i>Note:
             * The file will not actually be opened until a method is
             * called that requires the file to be opened.</i>
             * @param file the file
             */
            // @ts-ignore
            constructor(file: java.io.File)
            /**
             * Creates a FileDataSource from
             * the specified path name. <i>Note:
             * The file will not actually be opened until a method is
             * called that requires the file to be opened.</i>
             * @param name the system-dependent file name.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * This method will return an InputStream representing the
             * the data and will throw an IOException if it can
             * not do so. This method will return a new
             * instance of InputStream with each invocation.
             * @return an InputStream
             */
            // @ts-ignore
            getInputStream(): java.io.InputStream
            /**
             * This method will return an OutputStream representing the
             * the data and will throw an IOException if it can
             * not do so. This method will return a new instance of
             * OutputStream with each invocation.
             * @return an OutputStream
             */
            // @ts-ignore
            getOutputStream(): java.io.OutputStream
            /**
             * This method returns the MIME type of the data in the form of a
             * string. This method uses the currently installed FileTypeMap. If
             * there is no FileTypeMap explictly set, the FileDataSource will
             * call the <code>getDefaultFileTypeMap</code> method on
             * FileTypeMap to acquire a default FileTypeMap. <i>Note: By
             * default, the FileTypeMap used will be a MimetypesFileTypeMap.</i>
             * @return the MIME Type
             * @see javax.activation.FileTypeMap#getDefaultFileTypeMap
             */
            // @ts-ignore
            getContentType(): java.lang.String
            /**
             * Return the <i>name</i> of this object. The FileDataSource
             * will return the file name of the object.
             * @return the name of the object.
             * @see javax.activation.DataSource
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Return the File object that corresponds to this FileDataSource.
             * @return the File object for the file represented by this object.
             */
            // @ts-ignore
            getFile(): java.io.File
            /**
             * Set the FileTypeMap to use with this FileDataSource
             * @param map The FileTypeMap for this object.
             */
            // @ts-ignore
            setFileTypeMap(map: javax.activation.FileTypeMap): void
        }
    }
}
