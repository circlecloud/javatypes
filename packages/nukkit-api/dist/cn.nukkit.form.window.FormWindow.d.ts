declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace window {
                // @ts-ignore
                abstract class FormWindow extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    closed: boolean
                    // @ts-ignore
                    public getJSONData(): string
                    // @ts-ignore
                    public abstract setResponse(data: java.lang.String | string): void
                    // @ts-ignore
                    public abstract getResponse(): cn.nukkit.form.response.FormResponse
                    // @ts-ignore
                    public wasClosed(): boolean
                }
            }
        }
    }
}
