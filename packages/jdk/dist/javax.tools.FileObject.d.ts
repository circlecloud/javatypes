declare namespace javax {
    namespace tools {
        /**
         * File abstraction for tools.  In this context, <em>file</em> means
         * an abstraction of regular files and other sources of data.  For
         * example, a file object can be used to represent regular files,
         * memory cache, or data in databases.
         * <p>All methods in this interface might throw a SecurityException if
         * a security exception occurs.
         * <p>Unless explicitly allowed, all methods in this interface might
         * throw a NullPointerException if given a {@code null} argument.
         * @author Peter von der Ah&eacute;
         * @author Jonathan Gibbons
         * @since 1.6
         */
        // @ts-ignore
        interface FileObject {
            /**
             * Returns a URI identifying this file object.
             * @return a URI
             */
            // @ts-ignore
            toUri(): java.net.URI
            /**
             * Gets a user-friendly name for this file object.  The exact
             * value returned is not specified but implementations should take
             * care to preserve names as given by the user.  For example, if
             * the user writes the filename {@code "BobsApp\Test.java"} on
             * the command line, this method should return {@code
             * "BobsApp\Test.java"} whereas the {@linkplain #toUri toUri}
             * method might return {@code
             * file:///C:/Documents%20and%20Settings/UncleBob/BobsApp/Test.java}.
             * @return a user-friendly name
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Gets an InputStream for this file object.
             * @return an InputStream
             * @throws IllegalStateException if this file object was
             *  opened for writing and does not support reading
             * @throws UnsupportedOperationException if this kind of file
             *  object does not support byte access
             * @throws IOException if an I/O error occurred
             */
            // @ts-ignore
            openInputStream(): java.io.InputStream
            /**
             * Gets an OutputStream for this file object.
             * @return an OutputStream
             * @throws IllegalStateException if this file object was
             *  opened for reading and does not support writing
             * @throws UnsupportedOperationException if this kind of
             *  file object does not support byte access
             * @throws IOException if an I/O error occurred
             */
            // @ts-ignore
            openOutputStream(): java.io.OutputStream
            /**
             * Gets a reader for this object.  The returned reader will
             * replace bytes that cannot be decoded with the default
             * translation character.  In addition, the reader may report a
             * diagnostic unless {@code ignoreEncodingErrors} is true.
             * @param ignoreEncodingErrors ignore encoding errors if true
             * @return a Reader
             * @throws IllegalStateException if this file object was
             *  opened for writing and does not support reading
             * @throws UnsupportedOperationException if this kind of
             *  file object does not support character access
             * @throws IOException if an I/O error occurred
             */
            // @ts-ignore
            openReader(ignoreEncodingErrors: boolean): java.io.Reader
            /**
             * Gets the character content of this file object, if available.
             * Any byte that cannot be decoded will be replaced by the default
             * translation character.  In addition, a diagnostic may be
             * reported unless {@code ignoreEncodingErrors} is true.
             * @param ignoreEncodingErrors ignore encoding errors if true
             * @return a CharSequence if available; {#code null} otherwise
             * @throws IllegalStateException if this file object was
             *  opened for writing and does not support reading
             * @throws UnsupportedOperationException if this kind of
             *  file object does not support character access
             * @throws IOException if an I/O error occurred
             */
            // @ts-ignore
            getCharContent(ignoreEncodingErrors: boolean): java.lang.CharSequence
            /**
             * Gets a Writer for this file object.
             * @return a Writer
             * @throws IllegalStateException if this file object was
             *  opened for reading and does not support writing
             * @throws UnsupportedOperationException if this kind of
             *  file object does not support character access
             * @throws IOException if an I/O error occurred
             */
            // @ts-ignore
            openWriter(): java.io.Writer
            /**
             * Gets the time this file object was last modified.  The time is
             * measured in milliseconds since the epoch (00:00:00 GMT, January
             * 1, 1970).
             * @return the time this file object was last modified; or 0 if
             *  the file object does not exist, if an I/O error occurred, or if
             *  the operation is not supported
             */
            // @ts-ignore
            getLastModified(): long
            /**
             * Deletes this file object.  In case of errors, returns false.
             * @return true if and only if this file object is successfully
             *  deleted; false otherwise
             */
            // @ts-ignore
            delete(): boolean
        }
    }
}
