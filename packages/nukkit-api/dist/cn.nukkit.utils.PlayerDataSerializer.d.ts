declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            interface PlayerDataSerializer {
                /**
                 * Reads player data from {@link InputStream} if the file exists otherwise it will create the default data.
                 * @param name name of player or {#link UUID} as {@link String}
                 * @param uuid uuid of player. Could be null if name is used.
                 * @return {#link InputStream} if the player data exists
                 */
                // @ts-ignore
                read(name: java.lang.String | string, uuid: java.util.UUID): java.util.Optional<java.io.InputStream>
                /**
                 * Writes player data to given {@link OutputStream}.
                 * @param name name of player or {#link UUID} as {@link String}
                 * @param uuid uuid of player. Could be null if name is used.
                 * @return stream to write player data
                 */
                // @ts-ignore
                write(name: java.lang.String | string, uuid: java.util.UUID): java.io.OutputStream
            }
        }
    }
}
