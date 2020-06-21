declare namespace javax {
    namespace management {
        /**
         * Thrown when an attempt is made to apply either of the following: A
         * subquery expression to an MBean or a qualified attribute expression
         * to an MBean of the wrong class.  This exception is used internally
         * by JMX during the evaluation of a query.  User code does not
         * usually see it.
         * @since 1.5
         */
        // @ts-ignore
        class InvalidApplicationException extends java.lang.Exception {
            /**
             * Constructs an <CODE>InvalidApplicationException</CODE> with the specified <CODE>Object</CODE>.
             * @param val the detail message of this exception.
             */
            // @ts-ignore
            constructor(val: java.lang.Object | any)
        }
    }
}
