declare namespace cn {
    namespace nukkit {
        namespace lang {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class TranslationContainer extends cn.nukkit.lang.TextContainer implements java.lang.Cloneable {
                // @ts-ignore
                constructor(text: java.lang.String | string)
                // @ts-ignore
                constructor(text: java.lang.String | string, params: java.lang.String | string)
                // @ts-ignore
                constructor(text: java.lang.String | string, ...params: java.lang.String[] | string[])
                // @ts-ignore
                params: java.lang.String[] | string[]
                // @ts-ignore
                public getParameters(): string[]
                // @ts-ignore
                public setParameters(params: java.lang.String[] | string[]): void
                // @ts-ignore
                public getParameter(i: number /*int*/): string
                // @ts-ignore
                public setParameter(i: number /*int*/, str: java.lang.String | string): void
                // @ts-ignore
                public clone(): cn.nukkit.lang.TranslationContainer
            }
        }
    }
}
