declare namespace javax {
    namespace management {
        /**
         * Thrown when an invalid expression is passed to a method for
         * constructing a query.  This exception is used internally by JMX
         * during the evaluation of a query.  User code does not usually see
         * it.
         * @since 1.5
         */
        // @ts-ignore
        class BadBinaryOpValueExpException extends java.lang.Exception {
            /**
             * Constructs a <CODE>BadBinaryOpValueExpException</CODE> with the specified <CODE>ValueExp</CODE>.
             * @param exp the expression whose value was inappropriate.
             */
            // @ts-ignore
            constructor(exp: javax.management.ValueExp)
            /**
             * Returns the <CODE>ValueExp</CODE> that originated the exception.
             * @return the problematic {#link ValueExp}.
             */
            // @ts-ignore
            getExp(): javax.management.ValueExp
            /**
             * Returns the string representing the object.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
