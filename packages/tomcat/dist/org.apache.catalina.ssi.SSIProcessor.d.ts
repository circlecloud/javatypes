declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * The entry point to SSI processing. This class does the actual parsing,
                 * delegating to the SSIMediator, SSICommand, and SSIExternalResolver as
                 * necessary[
                 * @author Dan Sandberg
                 * @author David Becker
                 */
                // @ts-ignore
                class SSIProcessor extends java.lang.Object {
                    // @ts-ignore
                    constructor(ssiExternalResolver: org.apache.catalina.ssi.SSIExternalResolver, debug: number /*int*/, allowExec: boolean)
                    /**
                     * The start pattern
                     */
                    // @ts-ignore
                    static readonly COMMAND_START: java.lang.String | string
                    /**
                     * The end pattern
                     */
                    // @ts-ignore
                    static readonly COMMAND_END: java.lang.String | string
                    // @ts-ignore
                    readonly ssiExternalResolver: org.apache.catalina.ssi.SSIExternalResolver
                    // @ts-ignore
                    readonly commands: java.util.HashMap<java.lang.String | string, org.apache.catalina.ssi.SSICommand>
                    // @ts-ignore
                    readonly debug: number /*int*/
                    // @ts-ignore
                    readonly allowExec: boolean
                    // @ts-ignore
                    addBuiltinCommands(): void
                    // @ts-ignore
                    public addCommand(name: java.lang.String | string, command: org.apache.catalina.ssi.SSICommand): void
                    /**
                     * Process a file with server-side commands, reading from reader and
                     * writing the processed version to writer. NOTE: We really should be doing
                     * this in a streaming way rather than converting it to an array first.
                     * @param reader
                     *             the reader to read the file containing SSIs from
                     * @param lastModifiedDate resource last modification date
                     * @param writer
                     *             the writer to write the file with the SSIs processed.
                     * @return the most current modified date resulting from any SSI commands
                     * @throws IOException
                     *              when things go horribly awry. Should be unlikely since the
                     *              SSICommand usually catches 'normal' IOExceptions.
                     */
                    // @ts-ignore
                    public process(reader: java.io.Reader, lastModifiedDate: number /*long*/, writer: java.io.PrintWriter): number /*long*/
                    /**
                     * Parse a StringBuilder and take out the param type token. Called from
                     * <code>requestHandler</code>
                     * @param cmd
                     *             a value of type 'StringBuilder'
                     * @param start index on which parsing will start
                     * @return an array with the parameter names
                     */
                    // @ts-ignore
                    parseParamNames(cmd: java.lang.StringBuilder, start: number /*int*/): string[]
                    /**
                     * Parse a StringBuilder and take out the param token. Called from
                     * <code>requestHandler</code>
                     * @param cmd
                     *             a value of type 'StringBuilder'
                     * @param start index on which parsing will start
                     * @param count number of values which should be parsed
                     * @return an array with the parameter values
                     */
                    // @ts-ignore
                    parseParamValues(cmd: java.lang.StringBuilder, start: number /*int*/, count: number /*int*/): string[]
                    // @ts-ignore
                    charCmp(buf: java.lang.String | string, index: number /*int*/, command: java.lang.String | string): boolean
                    // @ts-ignore
                    isSpace(c: string): boolean
                    // @ts-ignore
                    isQuote(c: string): boolean
                }
            }
        }
    }
}
