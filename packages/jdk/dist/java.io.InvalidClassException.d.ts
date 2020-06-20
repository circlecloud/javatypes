declare namespace java {
    namespace io {
        /**
         * Thrown when the Serialization runtime detects one of the following
         * problems with a Class.
         * <UL>
         * <LI> The serial version of the class does not match that of the class
         * descriptor read from the stream
         * <LI> The class contains unknown datatypes
         * <LI> The class does not have an accessible no-arg constructor
         * </UL>
         * @author unascribed
         * @since JDK1.1
         */
        // @ts-ignore
        class InvalidClassException extends java.io.ObjectStreamException {
            /**
             * Report an InvalidClassException for the reason specified.
             * @param reason  String describing the reason for the exception.
             */
            // @ts-ignore
            constructor(reason: string)
            /**
             * Constructs an InvalidClassException object.
             * @param cname   a String naming the invalid class.
             * @param reason  a String describing the reason for the exception.
             */
            // @ts-ignore
            constructor(cname: string, reason: string)
            /**
             * Name of the invalid class.
             * @serial Name of the invalid class.
             */
            // @ts-ignore
            classname: string
            /**
             * Produce the message and include the classname, if present.
             */
            // @ts-ignore
            getMessage(): java.lang.String
        }
    }
}
