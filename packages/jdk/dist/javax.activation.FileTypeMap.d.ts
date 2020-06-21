declare namespace javax {
    namespace activation {
        /**
         * The FileTypeMap is an abstract class that provides a data typing
         * interface for files. Implementations of this class will
         * implement the getContentType methods which will derive a content
         * type from a file name or a File object. FileTypeMaps could use any
         * scheme to determine the data type, from examining the file extension
         * of a file (like the MimetypesFileTypeMap) to opening the file and
         * trying to derive its type from the contents of the file. The
         * FileDataSource class uses the default FileTypeMap (a MimetypesFileTypeMap
         * unless changed) to determine the content type of files.
         * @see javax.activation.FileTypeMap
         * @see javax.activation.FileDataSource
         * @see javax.activation.MimetypesFileTypeMap
         * @since 1.6
         */
        // @ts-ignore
        abstract class FileTypeMap extends java.lang.Object {
            /**
             * The default constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Return the type of the file object. This method should
             * always return a valid MIME type.
             * @param file A file to be typed.
             * @return The content type.
             */
            // @ts-ignore
            public abstract getContentType(file: java.io.File): string
            /**
             * Return the type of the file passed in.  This method should
             * always return a valid MIME type.
             * @param filename the pathname of the file.
             * @return The content type.
             */
            // @ts-ignore
            public abstract getContentType(filename: java.lang.String | string): string
            /**
             * Sets the default FileTypeMap for the system. This instance
             * will be returned to callers of getDefaultFileTypeMap.
             * @param fileTypeMap The FileTypeMap.
             * @exception SecurityException if the caller doesn't have permission
             *                                   to change the default
             */
            // @ts-ignore
            public static setDefaultFileTypeMap(fileTypeMap: javax.activation.FileTypeMap): void
            /**
             * Return the default FileTypeMap for the system.
             * If setDefaultFileTypeMap was called, return
             * that instance, otherwise return an instance of
             * <code>MimetypesFileTypeMap</code>.
             * @return The default FileTypeMap
             * @see javax.activation.FileTypeMap#setDefaultFileTypeMap
             */
            // @ts-ignore
            public static getDefaultFileTypeMap(): javax.activation.FileTypeMap
        }
    }
}
