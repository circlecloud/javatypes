declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Return the result associated with the supplied Server Variable.
                 * @author Bip Thelin
                 * @author Paul Speed
                 * @author Dan Sandberg
                 * @author David Becker
                 */
                // @ts-ignore
                class SSIEcho extends java.lang.Object implements org.apache.catalina.ssi.SSICommand {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly DEFAULT_ENCODING: java.lang.String | string
                    // @ts-ignore
                    static readonly MISSING_VARIABLE_VALUE: java.lang.String | string
                    /**
                     * @see SSICommand
                     */
                    // @ts-ignore
                    public process(ssiMediator: org.apache.catalina.ssi.SSIMediator, commandName: java.lang.String | string, paramNames: java.lang.String[] | string[], paramValues: java.lang.String[] | string[], writer: java.io.PrintWriter): number /*long*/
                    // @ts-ignore
                    isValidEncoding(encoding: java.lang.String | string): boolean
                }
            }
        }
    }
}
