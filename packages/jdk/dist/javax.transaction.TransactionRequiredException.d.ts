declare namespace javax {
    namespace transaction {
        /**
         * This exception indicates that a request carried a null transaction context,
         * but the target object requires an activate transaction.
         */
        // @ts-ignore
        class TransactionRequiredException extends java.rmi.RemoteException {
            // @ts-ignore
            constructor()
            // @ts-ignore
            constructor(msg: java.lang.String | string)
        }
    }
}
