declare namespace javax {
    namespace transaction {
        /**
         * This exception indicates that the request carried an invalid transaction
         * context. For example, this exception could be raised if an error
         * occured when trying to register a resource.
         */
        // @ts-ignore
        class InvalidTransactionException extends java.rmi.RemoteException {
            // @ts-ignore
            constructor()
            // @ts-ignore
            constructor(msg: java.lang.String | string)
        }
    }
}
