declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                // @ts-ignore
                abstract class AbstractFileResourceSet extends org.apache.catalina.webresources.AbstractResourceSet {
                    // @ts-ignore
                    constructor(internalPath: java.lang.String | string)
                    // @ts-ignore
                    static readonly EMPTY_STRING_ARRAY: java.lang.String[] | string[]
                    // @ts-ignore
                    getFileBase(): java.io.File
                    // @ts-ignore
                    public setReadOnly(readOnly: boolean): void
                    // @ts-ignore
                    public isReadOnly(): boolean
                    // @ts-ignore
                    file(name: java.lang.String | string, mustExist: boolean): java.io.File
                    // @ts-ignore
                    public getBaseUrl(): java.net.URL
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This is a NO-OP by default for File based resource sets.
                     */
                    // @ts-ignore
                    public gc(): void
                    // @ts-ignore
                    initInternal(): void
                    // @ts-ignore
                    abstract checkType(file: java.io.File): void
                }
            }
        }
    }
}
