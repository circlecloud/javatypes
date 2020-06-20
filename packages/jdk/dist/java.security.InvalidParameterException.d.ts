declare namespace java {
    namespace security {
        /**
         * This exception, designed for use by the JCA/JCE engine classes,
         * is thrown when an invalid parameter is passed
         * to a method.
         * @author Benjamin Renaud
         */
        // @ts-ignore
        class InvalidParameterException extends java.lang.IllegalArgumentException {
            /**
             * Constructs an InvalidParameterException with no detail message.
             * A detail message is a String that describes this particular
             * exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an InvalidParameterException with the specified
             * detail message.  A detail message is a String that describes
             * this particular exception.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: string)
        }
    }
}
