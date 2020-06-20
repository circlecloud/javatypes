declare namespace java {
    namespace security {
        namespace acl {
            /**
             * Interface for managing owners of Access Control Lists (ACLs) or ACL
             * configurations. (Note that the Acl interface in the
             * {@code  java.security.acl} package extends this Owner
             * interface.) The initial owner Principal should be specified as an
             * argument to the constructor of the class implementing this interface.
             * @see java.security.acl.Acl
             */
            // @ts-ignore
            interface Owner {
                /**
                 * Adds an owner. Only owners can modify ACL contents. The caller
                 * principal must be an owner of the ACL in order to invoke this method.
                 * That is, only an owner can add another owner. The initial owner is
                 * configured at ACL construction time.
                 * @param caller the principal invoking this method. It must be an owner
                 *  of the ACL.
                 * @param owner the owner that should be added to the list of owners.
                 * @return true if successful, false if owner is already an owner.
                 * @exception NotOwnerException if the caller principal is not an owner
                 *  of the ACL.
                 */
                // @ts-ignore
                addOwner(caller: java.security.Principal, owner: java.security.Principal): boolean
                /**
                 * Deletes an owner. If this is the last owner in the ACL, an exception is
                 * raised.<p>
                 * The caller principal must be an owner of the ACL in order to invoke
                 * this method.
                 * @param caller the principal invoking this method. It must be an owner
                 *  of the ACL.
                 * @param owner the owner to be removed from the list of owners.
                 * @return true if the owner is removed, false if the owner is not part
                 *  of the list of owners.
                 * @exception NotOwnerException if the caller principal is not an owner
                 *  of the ACL.
                 * @exception LastOwnerException if there is only one owner left, so that
                 *  deleteOwner would leave the ACL owner-less.
                 */
                // @ts-ignore
                deleteOwner(caller: java.security.Principal, owner: java.security.Principal): boolean
                /**
                 * Returns true if the given principal is an owner of the ACL.
                 * @param owner the principal to be checked to determine whether or not
                 *  it is an owner.
                 * @return true if the passed principal is in the list of owners, false
                 *  if not.
                 */
                // @ts-ignore
                isOwner(owner: java.security.Principal): boolean
            }
        }
    }
}
