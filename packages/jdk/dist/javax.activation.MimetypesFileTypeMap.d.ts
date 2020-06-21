declare namespace javax {
    namespace activation {
        /**
         * This class extends FileTypeMap and provides data typing of files
         * via their file extension. It uses the <code>.mime.types</code> format. <p>
         * <b>MIME types file search order:</b><p>
         * The MimetypesFileTypeMap looks in various places in the user's
         * system for MIME types file entries. When requests are made
         * to search for MIME types in the MimetypesFileTypeMap, it searches
         * MIME types files in the following order:
         * <p>
         * <ol>
         * <li> Programmatically added entries to the MimetypesFileTypeMap instance.
         * <li> The file <code>.mime.types</code> in the user's home directory.
         * <li> The file &lt;<i>java.home</i>&gt;<code>/lib/mime.types</code>.
         * <li> The file or resources named <code>META-INF/mime.types</code>.
         * <li> The file or resource named <code>META-INF/mimetypes.default</code>
         * (usually found only in the <code>activation.jar</code> file).
         * </ol>
         * <p>
         * <b>MIME types file format:</b><p>
         * <code>
         * # comments begin with a '#'<br>
         * # the format is &lt;mime type> &lt;space separated file extensions><br>
         * # for example:<br>
         * text/plain    txt text TXT<br>
         * # this would map file.txt, file.text, and file.TXT to<br>
         * # the mime type "text/plain"<br>
         * </code>
         * @author Bart Calder
         * @author Bill Shannon
         * @since 1.6
         */
        // @ts-ignore
        class MimetypesFileTypeMap extends javax.activation.FileTypeMap {
            /**
             * The default constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Construct a MimetypesFileTypeMap with programmatic entries
             * added from the named file.
             * @param mimeTypeFileName  the file name
             */
            // @ts-ignore
            constructor(mimeTypeFileName: java.lang.String | string)
            /**
             * Construct a MimetypesFileTypeMap with programmatic entries
             * added from the InputStream.
             * @param is        the input stream to read from
             */
            // @ts-ignore
            constructor(jis: java.io.InputStream)
            /**
             * Prepend the MIME type values to the registry.
             * @param mime_types A .mime.types formatted string of entries.
             */
            // @ts-ignore
            public addMimeTypes(mime_types: java.lang.String | string): void
            /**
             * Return the MIME type of the file object.
             * The implementation in this class calls
             * <code>getContentType(f.getName())</code>.
             * @param f the file
             * @return the file's MIME type
             */
            // @ts-ignore
            public getContentType(f: java.io.File): string
            /**
             * Return the MIME type based on the specified file name.
             * The MIME type entries are searched as described above under
             * <i>MIME types file search order</i>.
             * If no entry is found, the type "application/octet-stream" is returned.
             * @param filename  the file name
             * @return the file's MIME type
             */
            // @ts-ignore
            public getContentType(filename: java.lang.String | string): string
        }
    }
}
