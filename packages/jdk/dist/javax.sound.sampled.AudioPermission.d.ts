declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * The <code>AudioPermission</code> class represents access rights to the audio
             * system resources.  An <code>AudioPermission</code> contains a target name
             * but no actions list; you either have the named permission or you don't.
             * <p>
             * The target name is the name of the audio permission (see the table below).
             * The names follow the hierarchical property-naming convention. Also, an asterisk
             * can be used to represent all the audio permissions.
             * <p>
             * The following table lists the possible <code>AudioPermission</code> target names.
             * For each name, the table provides a description of exactly what that permission
             * allows, as well as a discussion of the risks of granting code the permission.
             * <p>
             * <table border=1 cellpadding=5 summary="permission target name, what the permission allows, and associated risks">
             * <tr>
             * <th>Permission Target Name</th>
             * <th>What the Permission Allows</th>
             * <th>Risks of Allowing this Permission</th>
             * </tr>
             * <tr>
             * <td>play</td>
             * <td>Audio playback through the audio device or devices on the system.
             * Allows the application to obtain and manipulate lines and mixers for
             * audio playback (rendering).</td>
             * <td>In some cases use of this permission may affect other
             * applications because the audio from one line may be mixed with other audio
             * being played on the system, or because manipulation of a mixer affects the
             * audio for all lines using that mixer.</td>
             * </tr>
             * <tr>
             * <td>record</td>
             * <td>Audio recording through the audio device or devices on the system.
             * Allows the application to obtain and manipulate lines and mixers for
             * audio recording (capture).</td>
             * <td>In some cases use of this permission may affect other
             * applications because manipulation of a mixer affects the audio for all lines
             * using that mixer.
             * This permission can enable an applet or application to eavesdrop on a user.</td>
             * </tr>
             * </table>
             * <p>
             * @author Kara Kytle
             * @since 1.3
             */
            // @ts-ignore
            class AudioPermission extends java.security.BasicPermission {
                /**
                 * Creates a new <code>AudioPermission</code> object that has the specified
                 * symbolic name, such as "play" or "record". An asterisk can be used to indicate
                 * all audio permissions.
                 * @param name the name of the new <code>AudioPermission</code>
                 * @throws NullPointerException if <code>name</code> is <code>null</code>.
                 * @throws IllegalArgumentException if <code>name</code> is empty.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string)
                /**
                 * Creates a new <code>AudioPermission</code> object that has the specified
                 * symbolic name, such as "play" or "record".  The <code>actions</code>
                 * parameter is currently unused and should be <code>null</code>.
                 * @param name the name of the new <code>AudioPermission</code>
                 * @param actions (unused; should be <code>null</code>)
                 * @throws NullPointerException if <code>name</code> is <code>null</code>.
                 * @throws IllegalArgumentException if <code>name</code> is empty.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, actions: java.lang.String | string)
            }
        }
    }
}
