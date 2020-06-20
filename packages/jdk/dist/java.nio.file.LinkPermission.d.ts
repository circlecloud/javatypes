declare namespace java {
    namespace nio {
        namespace file {
            /**
             * The {@code Permission} class for link creation operations.
             * <p> The following table provides a summary description of what the permission
             * allows, and discusses the risks of granting code the permission.
             * <table border=1 cellpadding=5
             * summary="Table shows permission target name, what the permission allows, and associated risks">
             * <tr>
             * <th>Permission Target Name</th>
             * <th>What the Permission Allows</th>
             * <th>Risks of Allowing this Permission</th>
             * </tr>
             * <tr>
             * <td>hard</td>
             * <td> Ability to add an existing file to a directory. This is sometimes
             * known as creating a link, or hard link. </td>
             * <td> Extreme care should be taken when granting this permission. It allows
             * linking to any file or directory in the file system thus allowing the
             * attacker access to all files. </td>
             * </tr>
             * <tr>
             * <td>symbolic</td>
             * <td> Ability to create symbolic links. </td>
             * <td> Extreme care should be taken when granting this permission. It allows
             * linking to any file or directory in the file system thus allowing the
             * attacker to access to all files. </td>
             * </tr>
             * </table>
             * @since 1.7
             * @see Files#createLink
             * @see Files#createSymbolicLink
             */
            // @ts-ignore
            class LinkPermission extends java.security.BasicPermission {
                /**
                 * Constructs a {@code LinkPermission} with the specified name.
                 * @param name
                 *           the name of the permission. It must be "hard" or "symbolic".
                 * @throws IllegalArgumentException
                 *           if name is empty or invalid
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Constructs a {@code LinkPermission} with the specified name.
                 * @param name
                 *           the name of the permission; must be "hard" or "symbolic".
                 * @param actions
                 *           the actions for the permission; must be the empty string or
                 *           {#code null}
                 * @throws IllegalArgumentException
                 *           if name is empty or invalid, or actions is a non-empty string
                 */
                // @ts-ignore
                constructor(name: string, actions: string)
            }
        }
    }
}
