declare namespace java {
    namespace io {
        /**
         * Signals that an end of file or end of stream has been reached
         * unexpectedly during input.
         * <p>
         * This exception is mainly used by data input streams to signal end of
         * stream. Note that many other input operations return a special value on
         * end of stream rather than throwing an exception.
         * @author Frank Yellin
         * @see java.io.DataInputStream
         * @see java.io.IOException
         * @since JDK1.0
         */
        // @ts-ignore
        class EOFException extends java.io.IOException {
            /**
             * Constructs an <code>EOFException</code> with <code>null</code>
             * as its error detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>EOFException</code> with the specified detail
             * message. The string <code>s</code> may later be retrieved by the
             * <code>{@link java.lang.Throwable#getMessage}</code> method of class
             * <code>java.lang.Throwable</code>.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
