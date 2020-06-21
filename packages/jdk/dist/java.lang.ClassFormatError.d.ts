declare namespace java {
    namespace lang {
        /**
         * Thrown when the Java Virtual Machine attempts to read a class
         * file and determines that the file is malformed or otherwise cannot
         * be interpreted as a class file.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class ClassFormatError extends java.lang.LinkageError {
            /**
             * Constructs a <code>ClassFormatError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>ClassFormatError</code> with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
