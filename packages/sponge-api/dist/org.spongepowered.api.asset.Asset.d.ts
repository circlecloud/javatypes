declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace asset {
                /**
                 * Represents an {@link Asset} within Sponge that belongs to a {@link Plugin}.
                 */
                // @ts-ignore
                interface Asset {
                    /**
                     * The default {@link Charset} that is used for reading {@link Asset}s.
                     */
                    // @ts-ignore
                    
                    /**
                     * Returns the original {@link Plugin} owner of this Asset.
                     * @return Original owner of asset
                     */
                    // @ts-ignore
                    getOwner(): org.spongepowered.api.plugin.PluginContainer
                    /**
                     * Returns the {@link URL} to this Asset.
                     * @return URL to asset
                     */
                    // @ts-ignore
                    getUrl(): java.net.URL
                    /**
                     * Copies this Asset to the specified 'output' {@link Path}.
                     * @param output Path to copy to
                     * @throws IOException If any file exception is thrown
                     */
                    // @ts-ignore
                    copyToFile(output: java.nio.file.Path): void
                    /**
                     * Copies this Asset to the specified 'output' {@link Path}.
                     * @param output Path to copy to
                     * @param overwrite If the file should be overwritten if it exists
                     * @throws IOException File exception
                     */
                    // @ts-ignore
                    copyToFile(output: java.nio.file.Path, overwrite: boolean): void
                    /**
                     * Copies this Asset to the specified 'output' {@link Path}.
                     * @param output Path to copy to
                     * @param overwrite If the file should be overwritten if it exists
                     * @param onlyIfAbsent If the file should only be copied if absent
                     * @throws IOException File exception
                     */
                    // @ts-ignore
                    copyToFile(output: java.nio.file.Path, overwrite: boolean, onlyIfAbsent: boolean): void
                    /**
                     * Copies this Asset to the specified 'outputDirectory' {@link Path}.
                     * @param outputDirectory The directory to copy to
                     * @throws IOException If any file exception is thrown
                     */
                    // @ts-ignore
                    copyToDirectory(outputDirectory: java.nio.file.Path): void
                    /**
                     * Copies this Asset to the specified 'outputDirectory' {@link Path}.
                     * @param outputDirectory The directory to copy to
                     * @param overwrite If the file should be overwritten if it exists
                     * @throws IOException File exception
                     */
                    // @ts-ignore
                    copyToDirectory(outputDirectory: java.nio.file.Path, overwrite: boolean): void
                    /**
                     * Copies this Asset to the specified 'outputDirectory' {@link Path}.
                     * @param outputDirectory The directory to copy to
                     * @param overwrite If the file should be overwritten if it exists
                     * @param onlyIfAbsent If the file should only be copied if absent
                     * @throws IOException File exception
                     */
                    // @ts-ignore
                    copyToDirectory(outputDirectory: java.nio.file.Path, overwrite: boolean, onlyIfAbsent: boolean): void
                    /**
                     * Returns the the last portion of the Asset URL, e.g. the file name.
                     * @return The file name
                     */
                    // @ts-ignore
                    getFileName(): java.lang.String
                    /**
                     * Reads this Asset in it's entirety as a {@link String} and returns the
                     * result.
                     * @return String representation of Asset
                     * @throws IOException If any file exception is thrown
                     */
                    // @ts-ignore
                    readString(): java.lang.String
                    /**
                     * Reads this Asset in it's entirety as a {@link String} and returns the
                     * result.
                     * @param charset The charset to read the asset with
                     * @return String representation of Asset
                     * @throws IOException If any file exception is thrown
                     */
                    // @ts-ignore
                    readString(charset: java.nio.charset.Charset): java.lang.String
                    /**
                     * Reads all lines from the asset and returns the result.
                     * @return The lines read from the asset
                     * @throws IOException If any file exception is thrown
                     */
                    // @ts-ignore
                    readLines(): java.util.List<java.lang.String>
                    /**
                     * Reads all lines from the asset and returns the result.
                     * @param charset The charset to read the asset with
                     * @return An immutable list of the lines read from the asset
                     * @throws IOException If any file exception is thrown
                     */
                    // @ts-ignore
                    readLines(charset: java.nio.charset.Charset): java.util.List<java.lang.String>
                    /**
                     * Reads this Asset in it's entirety as a byte array and returns the
                     * result.
                     * @return Byte array representation of Asset
                     * @throws IOException If any file exception is thrown
                     */
                    // @ts-ignore
                    readBytes(): byte[]
                }
            }
        }
    }
}
