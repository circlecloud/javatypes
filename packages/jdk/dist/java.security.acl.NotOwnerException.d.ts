declare namespace java {
    namespace security {
        namespace acl {
            /**
             * This is an exception that is thrown whenever the modification of an object
             * (such as an Access Control List) is only allowed to be done by an owner of
             * the object, but the Principal attempting the modification is not an owner.
             * @author Satish Dharmaraj
             */
            // @ts-ignore
            class NotOwnerException extends java.lang.Exception {
                /**
                 * Constructs a NotOwnerException.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
