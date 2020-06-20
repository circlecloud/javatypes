declare namespace java {
    namespace lang {
        /**
         * This exception is thrown when a program attempts
         * to access a constructor which is not accessible
         * from the location where the reference is made.
         * @author OTI
         * @version initial
         */
        // @ts-ignore
        class InstantiationException extends java.lang.ReflectiveOperationException {
            /**
             * Constructs a new instance of this class with its
             * walkback filled in.
             * @author OTI
             * @version initial
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new instance of this class with its
             * walkback and message filled in.
             * @author OTI
             * @version initial
             * @param detailMessage String
             * 				The detail message for the exception.
             */
            // @ts-ignore
            constructor(detailMessage: string)
        }
    }
}
