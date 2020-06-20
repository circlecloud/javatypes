declare namespace java {
    namespace security {
        namespace acl {
            /**
             * This is an exception that is thrown whenever an attempt is made to delete
             * the last owner of an Access Control List.
             * @see java.security.acl.Owner#deleteOwner
             * @author Satish Dharmaraj
             */
            // @ts-ignore
            class LastOwnerException extends java.lang.Exception {
                /**
                 * Constructs a LastOwnerException.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
