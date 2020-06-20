declare namespace java {
    namespace io {
        /**
         * Signals that an attempt to open the file denoted by a specified pathname
         * has failed.
         * <p> This exception will be thrown by the {@link FileInputStream}, {@link
         * FileOutputStream}, and {@link RandomAccessFile} constructors when a file
         * with the specified pathname does not exist.  It will also be thrown by these
         * constructors if the file does exist but for some reason is inaccessible, for
         * example when an attempt is made to open a read-only file for writing.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class FileNotFoundException extends java.io.IOException {
            /**
             * Constructs a <code>FileNotFoundException</code> with
             * <code>null</code> as its error detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>FileNotFoundException</code> with the
             * specified detail message. The string <code>s</code> can be
             * retrieved later by the
             * <code>{@link java.lang.Throwable#getMessage}</code>
             * method of class <code>java.lang.Throwable</code>.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
