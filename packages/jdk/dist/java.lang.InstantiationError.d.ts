declare namespace java {
    namespace lang {
        /**
         * This error is thrown when the VM notices that a
         * an attempt is being made to create a new instance
         * of a class which has no visible constructors from
         * the location where new is invoked.
         * <p>
         * Note that this can only occur when inconsistant
         * class files are being loaded.
         * @author OTI
         * @version initial
         */
        // @ts-ignore
        class InstantiationError extends java.lang.IncompatibleClassChangeError {
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
            constructor(detailMessage: java.lang.String | string)
        }
    }
}
