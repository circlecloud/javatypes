declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * A {@code UserPrincipal} representing a <em>group identity</em>, used to
                 * determine access rights to objects in a file system. The exact definition of
                 * a group is implementation specific, but typically, it represents an identity
                 * created for administrative purposes so as to determine the access rights for
                 * the members of the group. Whether an entity can be a member of multiple
                 * groups, and whether groups can be nested, are implementation specified and
                 * therefore not specified.
                 * @since 1.7
                 * @see UserPrincipalLookupService#lookupPrincipalByGroupName
                 */
                // @ts-ignore
                interface GroupPrincipal extends java.nio.file.attribute.UserPrincipal {
                }
            }
        }
    }
}
