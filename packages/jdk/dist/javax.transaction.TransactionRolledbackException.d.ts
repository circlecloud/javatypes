declare namespace javax {
    namespace transaction {
        /**
         * This exception indicates that the transaction associated with processing
         * of the request has been rolled back, or marked to roll back. Thus the
         * requested operation either could not be performed or was not performed
         * because further computation on behalf of the transaction would be
         * fruitless
         */
        // @ts-ignore
        class TransactionRolledbackException extends java.rmi.RemoteException {
            // @ts-ignore
            constructor()
            // @ts-ignore
            constructor(msg: string)
        }
    }
}
