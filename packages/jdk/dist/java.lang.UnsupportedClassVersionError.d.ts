declare namespace java {
    namespace lang {
        /**
         * Thrown when the Java Virtual Machine attempts to read a class
         * file and determines that the major and minor version numbers
         * in the file are not supported.
         * @since 1.2
         */
        // @ts-ignore
        class UnsupportedClassVersionError extends java.lang.ClassFormatError {
            /**
             * Constructs a <code>UnsupportedClassVersionError</code>
             * with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>UnsupportedClassVersionError</code> with
             * the specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
