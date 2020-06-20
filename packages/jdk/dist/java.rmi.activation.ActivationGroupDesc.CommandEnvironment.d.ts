declare namespace java {
    namespace rmi {
        namespace activation {
            namespace ActivationGroupDesc {
                /**
                 * Startup options for ActivationGroup implementations.
                 * This class allows overriding default system properties and
                 * specifying implementation-defined options for ActivationGroups.
                 * @since 1.2
                 */
                // @ts-ignore
                class CommandEnvironment extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Create a CommandEnvironment with all the necessary
                     * information.
                     * @param cmdpath the name of the java executable, including
                     *  the full path, or <code>null</code>, meaning "use rmid's default".
                     *  The named program <em>must</em> be able to accept multiple
                     *  <code>-Dpropname=value</code> options (as documented for the
                     *  "java" tool)
                     * @param argv extra options which will be used in creating the
                     *  ActivationGroup.  Null has the same effect as an empty
                     *  list.
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(cmdpath: string, argv: string[])
                    /**
                     * Fetch the configured path-qualified java command name.
                     * @return the configured name, or <code>null</code> if configured to
                     *  accept the default
                     * @since 1.2
                     */
                    // @ts-ignore
                    getCommandPath(): java.lang.String
                    /**
                     * Fetch the configured java command options.
                     * @return An array of the command options which will be passed
                     *  to the new child command by rmid.
                     *  Note that rmid may add other options before or after these
                     *  options, or both.
                     *  Never returns <code>null</code>.
                     * @since 1.2
                     */
                    // @ts-ignore
                    getCommandOptions(): java.lang.String[]
                    /**
                     * Compares two command environments for content equality.
                     * @param obj     the Object to compare with
                     * @return true if these Objects are equal; false otherwise.
                     * @see java.util.Hashtable
                     * @since 1.2
                     */
                    // @ts-ignore
                    equals(obj: any): boolean
                    /**
                     * Return identical values for similar
                     * <code>CommandEnvironment</code>s.
                     * @return an integer
                     * @see java.util.Hashtable
                     */
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
