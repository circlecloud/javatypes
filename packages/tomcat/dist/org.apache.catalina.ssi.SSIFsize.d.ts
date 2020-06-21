declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Implements the Server-side #fsize command
                 * @author Bip Thelin
                 * @author Paul Speed
                 * @author Dan Sandberg
                 * @author David Becker
                 */
                // @ts-ignore
                class SSIFsize extends java.lang.Object implements org.apache.catalina.ssi.SSICommand {
                    // @ts-ignore
                    constructor()
                    /**
                     * @see SSICommand
                     */
                    // @ts-ignore
                    public process(ssiMediator: org.apache.catalina.ssi.SSIMediator, commandName: java.lang.String | string, paramNames: java.lang.String[] | string[], paramValues: java.lang.String[] | string[], writer: java.io.PrintWriter): number /*long*/
                    // @ts-ignore
                    public repeat(aChar: string, numChars: number /*int*/): string
                    // @ts-ignore
                    public padLeft(str: java.lang.String | string, maxChars: number /*int*/): string
                    // @ts-ignore
                    formatSize(size: number /*long*/, format: java.lang.String | string): string
                }
            }
        }
    }
}
