declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Unchecked exception thrown when an attempt is made to invoke a method on an
             * object created by one file system provider with a parameter created by a
             * different file system provider.
             */
            // @ts-ignore
            class ProviderMismatchException extends java.lang.IllegalArgumentException {
                /**
                 * Constructs an instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an instance of this class.
                 * @param msg
                 *           the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
            }
        }
    }
}
