declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Encapsulates a shutdown condition for a connection to an AMQP broker.
             * Depending on HardError when calling
             * {@link com.rabbitmq.client.ShutdownSignalException#getReference()} we will
             * either get a reference to the Connection or Channel instance that fired
             * this exception.
             */
            // @ts-ignore
            class ShutdownSignalException extends java.lang.RuntimeException implements com.rabbitmq.utility.SensibleClone<com.rabbitmq.client.ShutdownSignalException> {
                /**
                 * Construct a ShutdownSignalException from the arguments.
                 * @param hardError the relevant hard error
                 * @param initiatedByApplication if the shutdown was client-initiated
                 * @param reason AMQP method describing the exception reason
                 * @param ref Reference to Connection or Channel that fired the signal
                 */
                // @ts-ignore
                constructor(hardError: boolean, initiatedByApplication: boolean, reason: com.rabbitmq.client.Method, ref: java.lang.Object | any)
                /**
                 * Construct a ShutdownSignalException from the arguments.
                 * @param hardError the relevant hard error
                 * @param initiatedByApplication if the shutdown was client-initiated
                 * @param reason AMQP method describing the exception reason
                 * @param ref Reference to Connection or Channel that fired the signal
                 * @param messagePrefix prefix to add to exception message
                 */
                // @ts-ignore
                constructor(hardError: boolean, initiatedByApplication: boolean, reason: com.rabbitmq.client.Method, ref: java.lang.Object | any, messagePrefix: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * @return true if this signals a connection error, or false if a channel error
                 */
                // @ts-ignore
                isHardError(): boolean
                /**
                 * @return true if this exception was caused by explicit application
                 *  action; false if it originated with the broker or as a result
                 *  of detectable non-deliberate application failure
                 */
                // @ts-ignore
                isInitiatedByApplication(): boolean
                /**
                 * @return the reason, if any
                 */
                // @ts-ignore
                getReason(): com.rabbitmq.client.Method
                /**
                 * @return Reference to Connection or Channel object that fired the signal
                 */
                // @ts-ignore
                getReference(): any
                // @ts-ignore
                sensibleClone(): com.rabbitmq.client.ShutdownSignalException
            }
        }
    }
}
