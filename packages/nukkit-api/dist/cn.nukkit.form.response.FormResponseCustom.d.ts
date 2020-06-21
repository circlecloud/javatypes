declare namespace cn {
    namespace nukkit {
        namespace form {
            namespace response {
                // @ts-ignore
                class FormResponseCustom extends cn.nukkit.form.response.FormResponse {
                    // @ts-ignore
                    constructor(responses: java.util.HashMap<java.lang.Integer | number, java.lang.Object | any>, dropdownResponses: java.util.HashMap<java.lang.Integer | number, cn.nukkit.form.response.FormResponseData>, inputResponses: java.util.HashMap<java.lang.Integer | number, java.lang.String | string>, sliderResponses: java.util.HashMap<java.lang.Integer | number, java.lang.Float | number>, stepSliderResponses: java.util.HashMap<java.lang.Integer | number, cn.nukkit.form.response.FormResponseData>, toggleResponses: java.util.HashMap<java.lang.Integer | number, java.lang.Boolean>, labelResponses: java.util.HashMap<java.lang.Integer | number, java.lang.String | string>)
                    // @ts-ignore
                    public getResponses(): java.util.HashMap<java.lang.Integer | number, java.lang.Object | any>
                    // @ts-ignore
                    public getResponse(id: number /*int*/): any
                    // @ts-ignore
                    public getDropdownResponse(id: number /*int*/): cn.nukkit.form.response.FormResponseData
                    // @ts-ignore
                    public getInputResponse(id: number /*int*/): string
                    // @ts-ignore
                    public getSliderResponse(id: number /*int*/): number /*float*/
                    // @ts-ignore
                    public getStepSliderResponse(id: number /*int*/): cn.nukkit.form.response.FormResponseData
                    // @ts-ignore
                    public getToggleResponse(id: number /*int*/): boolean
                    // @ts-ignore
                    public getLabelResponse(id: number /*int*/): string
                }
            }
        }
    }
}
