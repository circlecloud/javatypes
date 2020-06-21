declare namespace javax {
    namespace activity {
        /**
         * This exception may be thrown on any method for which Activity context is
         * accessed and indicates that ongoing work within the Activity is not
         * possible. This may be because the Activity has been instructed to complete
         * with CompletionStatusFailOnly or has ended as a result of a timeout. This
         * exception will be propagated across ORB boundaries via an
         * org.omg.CORBA.ACTIVITY_COMPLETED system exception. An application should
         * handle this error by attempting to complete the Activity.
         */
        // @ts-ignore
        class ActivityCompletedException extends java.rmi.RemoteException {
            /**
             * Constructs a new instance with null as its detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new instance with the specified detail message.
             * @param message the detail message.
             */
            // @ts-ignore
            constructor(message: java.lang.String | string)
            /**
             * Constructs a new throwable with the specified cause.
             * @param cause a chained exception of type
             *  <code>Throwable</code>.
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable | Error)
            /**
             * Constructs a new throwable with the specified detail message and cause.
             * @param message the detail message.
             * @param cause a chained exception of type
             *  <code>Throwable</code>.
             */
            // @ts-ignore
            constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
        }
    }
}
