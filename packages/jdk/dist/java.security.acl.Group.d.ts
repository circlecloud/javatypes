declare namespace java {
    namespace security {
        namespace acl {
            /**
             * This interface is used to represent a group of principals. (A principal
             * represents an entity such as an individual user or a company). <p>
             * Note that Group extends Principal. Thus, either a Principal or a Group can
             * be passed as an argument to methods containing a Principal parameter. For
             * example, you can add either a Principal or a Group to a Group object by
             * calling the object's {@code addMember} method, passing it the
             * Principal or Group.
             * @author Satish Dharmaraj
             */
            // @ts-ignore
            interface Group extends java.security.Principal {
                /**
                 * Adds the specified member to the group.
                 * @param user the principal to add to this group.
                 * @return true if the member was successfully added,
                 *  false if the principal was already a member.
                 */
                // @ts-ignore
                addMember(user: java.security.Principal): boolean
                /**
                 * Removes the specified member from the group.
                 * @param user the principal to remove from this group.
                 * @return true if the principal was removed, or
                 *  false if the principal was not a member.
                 */
                // @ts-ignore
                removeMember(user: java.security.Principal): boolean
                /**
                 * Returns true if the passed principal is a member of the group.
                 * This method does a recursive search, so if a principal belongs to a
                 * group which is a member of this group, true is returned.
                 * @param member the principal whose membership is to be checked.
                 * @return true if the principal is a member of this group,
                 *  false otherwise.
                 */
                // @ts-ignore
                isMember(member: java.security.Principal): boolean
                /**
                 * Returns an enumeration of the members in the group.
                 * The returned objects can be instances of either Principal
                 * or Group (which is a subclass of Principal).
                 * @return an enumeration of the group members.
                 */
                // @ts-ignore
                members(): java.util.Enumeration<? extends java.security.Principal>
            }
        }
    }
}
