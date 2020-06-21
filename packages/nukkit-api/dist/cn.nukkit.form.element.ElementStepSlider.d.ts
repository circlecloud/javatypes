declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace element {
                // @ts-ignore
                class ElementStepSlider extends cn.nukkit.form.element.Element {
                    // @ts-ignore
                    constructor(text: java.lang.String | string)
                    // @ts-ignore
                    constructor(text: java.lang.String | string, steps: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                    // @ts-ignore
                    constructor(text: java.lang.String | string, steps: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, defaultStep: number /*int*/)
                    // @ts-ignore
                    public getDefaultStepIndex(): number /*int*/
                    // @ts-ignore
                    public setDefaultOptionIndex(index: number /*int*/): void
                    // @ts-ignore
                    public getText(): string
                    // @ts-ignore
                    public setText(text: java.lang.String | string): void
                    // @ts-ignore
                    public getSteps(): Array<java.lang.String | string>
                    // @ts-ignore
                    public addStep(step: java.lang.String | string): void
                    // @ts-ignore
                    public addStep(step: java.lang.String | string, isDefault: boolean): void
                }
            }
        }
    }
}
