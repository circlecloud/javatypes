declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace json {
                /**
                 * Will be removed in 6.0
                 * @deprecated Use a third-party JSON library, e.g. Jackson or Gson
                 */
                // @ts-ignore
                class JSONWriter extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(indenting: boolean)
                    // @ts-ignore
                    public getIndentMode(): boolean
                    // @ts-ignore
                    public setIndentMode(value: boolean): void
                    // @ts-ignore
                    public write(object: java.lang.Object | any): string
                    // @ts-ignore
                    public write(n: number /*long*/): string
                    // @ts-ignore
                    public write(d: number /*double*/): any
                    // @ts-ignore
                    public write(c: string): string
                    // @ts-ignore
                    public write(b: boolean): string
                    /**
                     * Write only a certain subset of the object's properties and fields.
                     * @param klass the class to look up properties etc in
                     * @param object the object
                     * @param properties explicit list of property/field names to include - may be null for "all"
                     */
                    // @ts-ignore
                    public writeLimited(klass: java.lang.Class<any>, object: java.lang.Object | any, properties: java.lang.String[] | string[]): void
                }
            }
        }
    }
}
