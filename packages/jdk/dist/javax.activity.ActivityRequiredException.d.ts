declare namespace javax {
    namespace activity {
        /**
         * This exception is thrown by a container if Activity context is not received
         * on a method for which Activity context is mandatory. This exception
         * indicates a deployment or application configuration error. This exception
         * will be propagated across ORB boundaries via an
         * org.omg.CORBA.ACTIVITY_REQUIRED system exception.
         */
        // @ts-ignore
        class ActivityRequiredException extends java.rmi.RemoteException {
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
            constructor(message: string)
            /**
             * Constructs a new throwable with the specified cause.
             * @param cause a chained exception of type
             *  <code>Throwable</code>.
             */
            // @ts-ignore
            constructor(cause: Error)
            /**
             * Constructs a new throwable with the specified detail message and cause.
             * @param message the detail message.
             * @param cause a chained exception of type
             *  <code>Throwable</code>.
             */
            // @ts-ignore
            constructor(message: string, cause: Error)
        }
    }
}
