declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Allows the different SSICommand implementations to share data/talk to each
                 * other
                 * @author Bip Thelin
                 * @author Amy Roh
                 * @author Paul Speed
                 * @author Dan Sandberg
                 * @author David Becker
                 */
                // @ts-ignore
                class SSIMediator extends java.lang.Object {
                    // @ts-ignore
                    constructor(ssiExternalResolver: org.apache.catalina.ssi.SSIExternalResolver, lastModifiedDate: number /*long*/)
                    // @ts-ignore
                    static readonly DEFAULT_CONFIG_ERR_MSG: java.lang.String | string
                    // @ts-ignore
                    static readonly DEFAULT_CONFIG_TIME_FMT: java.lang.String | string
                    // @ts-ignore
                    static readonly DEFAULT_CONFIG_SIZE_FMT: java.lang.String | string
                    // @ts-ignore
                    configErrMsg: java.lang.String | string
                    // @ts-ignore
                    configTimeFmt: java.lang.String | string
                    // @ts-ignore
                    configSizeFmt: java.lang.String | string
                    // @ts-ignore
                    readonly className: java.lang.String | string
                    // @ts-ignore
                    readonly ssiExternalResolver: org.apache.catalina.ssi.SSIExternalResolver
                    // @ts-ignore
                    readonly lastModifiedDate: number /*long*/
                    // @ts-ignore
                    strftime: org.apache.catalina.util.Strftime
                    // @ts-ignore
                    readonly conditionalState: org.apache.catalina.ssi.SSIConditionalState
                    // @ts-ignore
                    lastMatchCount: number /*int*/
                    // @ts-ignore
                    public setConfigErrMsg(configErrMsg: java.lang.String | string): void
                    // @ts-ignore
                    public setConfigTimeFmt(configTimeFmt: java.lang.String | string): void
                    // @ts-ignore
                    public setConfigTimeFmt(configTimeFmt: java.lang.String | string, fromConstructor: boolean): void
                    // @ts-ignore
                    public setConfigSizeFmt(configSizeFmt: java.lang.String | string): void
                    // @ts-ignore
                    public getConfigErrMsg(): string
                    // @ts-ignore
                    public getConfigTimeFmt(): string
                    // @ts-ignore
                    public getConfigSizeFmt(): string
                    // @ts-ignore
                    public getConditionalState(): org.apache.catalina.ssi.SSIConditionalState
                    // @ts-ignore
                    public getVariableNames(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getFileSize(path: java.lang.String | string, virtual: boolean): number /*long*/
                    // @ts-ignore
                    public getFileLastModified(path: java.lang.String | string, virtual: boolean): number /*long*/
                    // @ts-ignore
                    public getFileText(path: java.lang.String | string, virtual: boolean): string
                    // @ts-ignore
                    isNameReserved(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public getVariableValue(variableName: java.lang.String | string): string
                    // @ts-ignore
                    public setVariableValue(variableName: java.lang.String | string, variableValue: java.lang.String | string): void
                    // @ts-ignore
                    public getVariableValue(variableName: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Applies variable substitution to the specified String and returns the
                     * new resolved string.
                     * @param val The value which should be checked
                     * @return the value after variable substitution
                     */
                    // @ts-ignore
                    public substituteVariables(val: java.lang.String | string): string
                    // @ts-ignore
                    formatDate(date: java.util.Date, timeZone: java.util.TimeZone): string
                    // @ts-ignore
                    encode(value: java.lang.String | string, encoding: java.lang.String | string): string
                    // @ts-ignore
                    public log(message: java.lang.String | string): void
                    // @ts-ignore
                    public log(message: java.lang.String | string, throwable: java.lang.Throwable | Error): void
                    // @ts-ignore
                    setDateVariables(fromConstructor: boolean): void
                    // @ts-ignore
                    clearMatchGroups(): void
                    // @ts-ignore
                    populateMatchGroups(matcher: java.util.regex.Matcher): void
                }
            }
        }
    }
}
