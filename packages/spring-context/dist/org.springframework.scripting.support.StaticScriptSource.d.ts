declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace support {
                /**
                 * Static implementation of the
                 * {@link org.springframework.scripting.ScriptSource} interface,
                 * encapsulating a given String that contains the script source text.
                 * Supports programmatic updates of the script String.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 2.0
                 */
                // @ts-ignore
                class StaticScriptSource extends java.lang.Object implements org.springframework.scripting.ScriptSource {
                    /**
                     * Create a new StaticScriptSource for the given script.
                     * @param script the script String
                     */
                    // @ts-ignore
                    constructor(script: java.lang.String | string)
                    /**
                     * Create a new StaticScriptSource for the given script.
                     * @param script the script String
                     * @param className the suggested class name for the script
                     *  (may be {#code null})
                     */
                    // @ts-ignore
                    constructor(script: java.lang.String | string, className: java.lang.String | string)
                    /**
                     * Set a fresh script String, overriding the previous script.
                     * @param script the script String
                     */
                    // @ts-ignore
                    public setScript(script: java.lang.String | string): void
                    // @ts-ignore
                    public getScriptAsString(): string
                    // @ts-ignore
                    public isModified(): boolean
                    // @ts-ignore
                    public suggestedClassName(): string
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
