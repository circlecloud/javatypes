declare namespace javax {
    namespace management {
        /**
         * Thrown when an invalid MBean attribute is passed to a query
         * constructing method.  This exception is used internally by JMX
         * during the evaluation of a query.  User code does not usually
         * see it.
         * @since 1.5
         */
        // @ts-ignore
        class BadAttributeValueExpException extends java.lang.Exception {
            /**
             * Constructs a BadAttributeValueExpException using the specified Object to
             * create the toString() value.
             * @param val the inappropriate value.
             */
            // @ts-ignore
            constructor(val: any)
            /**
             * Returns the string representing the object.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
