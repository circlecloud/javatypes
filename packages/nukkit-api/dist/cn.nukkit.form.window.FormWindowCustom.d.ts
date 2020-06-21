declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace window {
                // @ts-ignore
                class FormWindowCustom extends cn.nukkit.form.window.FormWindow {
                    // @ts-ignore
                    constructor(title: java.lang.String | string)
                    // @ts-ignore
                    constructor(title: java.lang.String | string, contents: java.util.List<cn.nukkit.form.element.Element> | Array<cn.nukkit.form.element.Element>)
                    // @ts-ignore
                    constructor(title: java.lang.String | string, contents: java.util.List<cn.nukkit.form.element.Element> | Array<cn.nukkit.form.element.Element>, icon: java.lang.String | string)
                    // @ts-ignore
                    constructor(title: java.lang.String | string, contents: java.util.List<cn.nukkit.form.element.Element> | Array<cn.nukkit.form.element.Element>, icon: cn.nukkit.form.element.ElementButtonImageData)
                    // @ts-ignore
                    public getTitle(): string
                    // @ts-ignore
                    public setTitle(title: java.lang.String | string): void
                    // @ts-ignore
                    public getElements(): Array<cn.nukkit.form.element.Element>
                    // @ts-ignore
                    public addElement(element: cn.nukkit.form.element.Element): void
                    // @ts-ignore
                    public getIcon(): cn.nukkit.form.element.ElementButtonImageData
                    // @ts-ignore
                    public setIcon(icon: java.lang.String | string): void
                    // @ts-ignore
                    public setIcon(icon: cn.nukkit.form.element.ElementButtonImageData): void
                    // @ts-ignore
                    public getResponse(): cn.nukkit.form.response.FormResponseCustom
                    // @ts-ignore
                    public setResponse(data: java.lang.String | string): void
                    /**
                     * Set Elements from Response
                     * Used on ServerSettings Form Response. After players set settings, we need to sync these settings to the server.
                     */
                    // @ts-ignore
                    public setElementsFromResponse(): void
                }
            }
        }
    }
}
