declare namespace java {
    namespace lang {
        /**
         * Thrown when the Java Virtual Machine detects a circularity in the
         * superclass hierarchy of a class being loaded.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class ClassCircularityError extends java.lang.LinkageError {
            /**
             * Constructs a {@code ClassCircularityError} with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a {@code ClassCircularityError} with the specified detail
             * message.
             * @param s
             *          The detail message
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
