declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Exception used to tell SSIProcessor that it should stop processing SSI
                 * commands. This is used to mimic the Apache behavior in #set with invalid
                 * attributes.
                 * @author Paul Speed
                 * @author Dan Sandberg
                 */
                // @ts-ignore
                class SSIStopProcessingException extends java.lang.Exception {
                    // @ts-ignore
                    constructor()
                }
            }
        }
    }
}
