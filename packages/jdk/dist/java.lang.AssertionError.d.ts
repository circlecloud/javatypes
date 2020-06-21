declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that an assertion has failed.
         * <p>The seven one-argument public constructors provided by this
         * class ensure that the assertion error returned by the invocation:
         * <pre>
         * new AssertionError(<i>expression</i>)
         * </pre>
         * has as its detail message the <i>string conversion</i> of
         * <i>expression</i> (as defined in section 15.18.1.1 of
         * <cite>The Java&trade; Language Specification</cite>),
         * regardless of the type of <i>expression</i>.
         * @since 1.4
         */
        // @ts-ignore
        class AssertionError extends java.lang.Error {
            /**
             * Constructs an AssertionError with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an AssertionError with its detail message derived
             * from the specified object, which is converted to a string as
             * defined in section 15.18.1.1 of
             * <cite>The Java&trade; Language Specification</cite>.
             * <p>
             * If the specified object is an instance of {@code Throwable}, it
             * becomes the <i>cause</i> of the newly constructed assertion error.
             * @param detailMessage value to be used in constructing detail message
             * @see Throwable#getCause()
             */
            // @ts-ignore
            constructor(detailMessage: java.lang.Object | any)
            /**
             * Constructs an AssertionError with its detail message derived
             * from the specified <code>boolean</code>, which is converted to
             * a string as defined in section 15.18.1.1 of
             * <cite>The Java&trade; Language Specification</cite>.
             * @param detailMessage value to be used in constructing detail message
             */
            // @ts-ignore
            constructor(detailMessage: boolean)
            /**
             * Constructs an AssertionError with its detail message derived
             * from the specified <code>char</code>, which is converted to a
             * string as defined in section 15.18.1.1 of
             * <cite>The Java&trade; Language Specification</cite>.
             * @param detailMessage value to be used in constructing detail message
             */
            // @ts-ignore
            constructor(detailMessage: string)
            /**
             * Constructs an AssertionError with its detail message derived
             * from the specified <code>int</code>, which is converted to a
             * string as defined in section 15.18.1.1 of
             * <cite>The Java&trade; Language Specification</cite>.
             * @param detailMessage value to be used in constructing detail message
             */
            // @ts-ignore
            constructor(detailMessage: number /*int*/)
            /**
             * Constructs an AssertionError with its detail message derived
             * from the specified <code>long</code>, which is converted to a
             * string as defined in section 15.18.1.1 of
             * <cite>The Java&trade; Language Specification</cite>.
             * @param detailMessage value to be used in constructing detail message
             */
            // @ts-ignore
            constructor(detailMessage: number /*long*/)
            /**
             * Constructs an AssertionError with its detail message derived
             * from the specified <code>float</code>, which is converted to a
             * string as defined in section 15.18.1.1 of
             * <cite>The Java&trade; Language Specification</cite>.
             * @param detailMessage value to be used in constructing detail message
             */
            // @ts-ignore
            constructor(detailMessage: number /*float*/)
            /**
             * Constructs an AssertionError with its detail message derived
             * from the specified <code>double</code>, which is converted to a
             * string as defined in section 15.18.1.1 of
             * <cite>The Java&trade; Language Specification</cite>.
             * @param detailMessage value to be used in constructing detail message
             */
            // @ts-ignore
            constructor(detailMessage: number /*double*/)
            /**
             * Constructs a new {@code AssertionError} with the specified
             * detail message and cause.
             * <p>Note that the detail message associated with
             * {@code cause} is <i>not</i> automatically incorporated in
             * this error's detail message.
             * @param message the detail message, may be {#code null}
             * @param cause the cause, may be {#code null}
             * @since 1.7
             */
            // @ts-ignore
            constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
        }
    }
}
