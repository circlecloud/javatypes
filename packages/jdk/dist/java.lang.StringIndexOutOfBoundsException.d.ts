declare namespace java {
    namespace lang {
        /**
         * Thrown by {@code String} methods to indicate that an index
         * is either negative or greater than the size of the string.  For
         * some methods such as the charAt method, this exception also is
         * thrown when the index is equal to the size of the string.
         * @author unascribed
         * @see java.lang.String#charAt(int)
         * @since JDK1.0
         */
        // @ts-ignore
        class StringIndexOutOfBoundsException extends java.lang.IndexOutOfBoundsException {
            /**
             * Constructs a {@code StringIndexOutOfBoundsException} with no
             * detail message.
             * @since JDK1.0.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a {@code StringIndexOutOfBoundsException} with
             * the specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Constructs a new {@code StringIndexOutOfBoundsException}
             * class with an argument indicating the illegal index.
             * @param index   the illegal index.
             */
            // @ts-ignore
            constructor(index: number /*int*/)
        }
    }
}
