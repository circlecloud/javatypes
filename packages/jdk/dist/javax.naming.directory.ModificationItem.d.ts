declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This class represents a modification item.
             * It consists of a modification code and an attribute on which to operate.
             * <p>
             * A ModificationItem instance is not synchronized against concurrent
             * multithreaded access. Multiple threads trying to access and modify
             * a single ModificationItem instance should lock the object.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @since 1.3
             */
            // @ts-ignore
            class ModificationItem extends java.lang.Object implements java.io.Serializable {
                /**
                 * Creates a new instance of ModificationItem.
                 * @param mod_op Modification to apply.  It must be one of:
                 *          DirContext.ADD_ATTRIBUTE
                 *          DirContext.REPLACE_ATTRIBUTE
                 *          DirContext.REMOVE_ATTRIBUTE
                 * @param attr     The non-null attribute to use for modification.
                 * @exception IllegalArgumentException If attr is null, or if mod_op is
                 *          not one of the ones specified above.
                 */
                // @ts-ignore
                constructor(mod_op: number /*int*/, attr: javax.naming.directory.Attribute)
                /**
                 * Retrieves the modification code of this modification item.
                 * @return The modification code.  It is one of:
                 *          DirContext.ADD_ATTRIBUTE
                 *          DirContext.REPLACE_ATTRIBUTE
                 *          DirContext.REMOVE_ATTRIBUTE
                 */
                // @ts-ignore
                getModificationOp(): int
                /**
                 * Retrieves the attribute associated with this modification item.
                 * @return The non-null attribute to use for the modification.
                 */
                // @ts-ignore
                getAttribute(): javax.naming.directory.Attribute
                /**
                 * Generates the string representation of this modification item,
                 * which consists of the modification operation and its related attribute.
                 * The string representation is meant for debugging and not to be
                 * interpreted programmatically.
                 * @return The non-null string representation of this modification item.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
