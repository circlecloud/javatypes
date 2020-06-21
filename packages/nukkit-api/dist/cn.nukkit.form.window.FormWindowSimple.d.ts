declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace window {
                // @ts-ignore
                class FormWindowSimple extends cn.nukkit.form.window.FormWindow {
                    // @ts-ignore
                    constructor(title: java.lang.String | string, content: java.lang.String | string)
                    // @ts-ignore
                    constructor(title: java.lang.String | string, content: java.lang.String | string, buttons: java.util.List<cn.nukkit.form.element.ElementButton> | Array<cn.nukkit.form.element.ElementButton>)
                    // @ts-ignore
                    public getTitle(): string
                    // @ts-ignore
                    public setTitle(title: java.lang.String | string): void
                    // @ts-ignore
                    public getContent(): string
                    // @ts-ignore
                    public setContent(content: java.lang.String | string): void
                    // @ts-ignore
                    public getButtons(): Array<cn.nukkit.form.element.ElementButton>
                    // @ts-ignore
                    public addButton(button: cn.nukkit.form.element.ElementButton): void
                    // @ts-ignore
                    public getResponse(): cn.nukkit.form.response.FormResponseSimple
                    // @ts-ignore
                    public setResponse(data: java.lang.String | string): void
                }
            }
        }
    }
}
