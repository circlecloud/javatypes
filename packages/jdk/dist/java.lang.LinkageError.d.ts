declare namespace java {
    namespace lang {
        /**
         * Subclasses of {@code LinkageError} indicate that a class has
         * some dependency on another class; however, the latter class has
         * incompatibly changed after the compilation of the former class.
         * @author Frank Yellin
         * @since JDK1.0
         */
        // @ts-ignore
        class LinkageError extends java.lang.Error {
            /**
             * Constructs a {@code LinkageError} with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a {@code LinkageError} with the specified detail
             * message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Constructs a {@code LinkageError} with the specified detail
             * message and cause.
             * @param s     the detail message.
             * @param cause the cause, may be {#code null}
             * @since 1.7
             */
            // @ts-ignore
            constructor(s: java.lang.String | string, cause: java.lang.Throwable | Error)
        }
    }
}
