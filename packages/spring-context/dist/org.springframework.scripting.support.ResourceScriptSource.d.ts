declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace support {
                /**
                 * {@link org.springframework.scripting.ScriptSource} implementation
                 * based on Spring's {@link org.springframework.core.io.Resource}
                 * abstraction. Loads the script text from the underlying Resource's
                 * {@link org.springframework.core.io.Resource#getFile() File} or
                 * {@link org.springframework.core.io.Resource#getInputStream() InputStream},
                 * and tracks the last-modified timestamp of the file (if possible).
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see org.springframework.core.io.Resource#getInputStream()
                 * @see org.springframework.core.io.Resource#getFile()
                 * @see org.springframework.core.io.ResourceLoader
                 */
                // @ts-ignore
                class ResourceScriptSource extends java.lang.Object implements org.springframework.scripting.ScriptSource {
                    /**
                     * Create a new ResourceScriptSource for the given resource.
                     * @param resource the EncodedResource to load the script from
                     */
                    // @ts-ignore
                    constructor(resource: EncodedResource)
                    /**
                     * Create a new ResourceScriptSource for the given resource.
                     * @param resource the Resource to load the script from (using UTF-8 encoding)
                     */
                    // @ts-ignore
                    constructor(resource: Resource)
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Return the {@link org.springframework.core.io.Resource} to load the
                     * script from.
                     */
                    // @ts-ignore
                    public getResource(): Resource
                    /**
                     * Set the encoding used for reading the script resource.
                     * <p>The default value for regular Resources is "UTF-8".
                     * A {@code null} value implies the platform default.
                     */
                    // @ts-ignore
                    public setEncoding(encoding: java.lang.String | string): void
                    // @ts-ignore
                    public getScriptAsString(): string
                    // @ts-ignore
                    public isModified(): boolean
                    /**
                     * Retrieve the current last-modified timestamp of the underlying resource.
                     * @return the current timestamp, or 0 if not determinable
                     */
                    // @ts-ignore
                    retrieveLastModifiedTime(): number /*long*/
                    // @ts-ignore
                    public suggestedClassName(): string
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
