declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace element {
                // @ts-ignore
                class ElementDropdown extends cn.nukkit.form.element.Element {
                    // @ts-ignore
                    constructor(text: java.lang.String | string)
                    // @ts-ignore
                    constructor(text: java.lang.String | string, options: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                    // @ts-ignore
                    constructor(text: java.lang.String | string, options: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, defaultOption: number /*int*/)
                    // @ts-ignore
                    public getDefaultOptionIndex(): number /*int*/
                    // @ts-ignore
                    public setDefaultOptionIndex(index: number /*int*/): void
                    // @ts-ignore
                    public getOptions(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getText(): string
                    // @ts-ignore
                    public setText(text: java.lang.String | string): void
                    // @ts-ignore
                    public addOption(option: java.lang.String | string): void
                    // @ts-ignore
                    public addOption(option: java.lang.String | string, isDefault: boolean): void
                }
            }
        }
    }
}
