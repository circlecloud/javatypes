declare namespace cn {
    namespace nukkit {
        namespace lang {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BaseLang extends java.lang.Object {
                // @ts-ignore
                constructor(lang: java.lang.String | string)
                // @ts-ignore
                constructor(lang: java.lang.String | string, path: java.lang.String | string)
                // @ts-ignore
                constructor(lang: java.lang.String | string, path: java.lang.String | string, fallback: java.lang.String | string)
                // @ts-ignore
                public static readonly FALLBACK_LANGUAGE: java.lang.String | string
                // @ts-ignore
                readonly langName: java.lang.String | string
                // @ts-ignore
                lang: java.util.Map<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                fallbackLang: java.util.Map<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                public getLangMap(): java.util.Map<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                public getFallbackLangMap(): java.util.Map<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getLang(): string
                // @ts-ignore
                loadLang(path: java.lang.String | string): java.util.Map<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                loadLang(stream: java.io.InputStream): java.util.Map<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                public translateString(str: java.lang.String | string): string
                // @ts-ignore
                public translateString(str: java.lang.String | string, ...params: java.lang.String[] | string[]): string
                // @ts-ignore
                public translateString(str: java.lang.String | string, ...params: java.lang.Object[] | any[]): string
                // @ts-ignore
                public translateString(str: java.lang.String | string, param: java.lang.String | string, onlyPrefix: java.lang.String | string): string
                // @ts-ignore
                public translateString(str: java.lang.String | string, params: java.lang.String[] | string[], onlyPrefix: java.lang.String | string): string
                // @ts-ignore
                public translate(c: cn.nukkit.lang.TextContainer): string
                // @ts-ignore
                public internalGet(id: java.lang.String | string): string
                // @ts-ignore
                public get(id: java.lang.String | string): string
                // @ts-ignore
                parseTranslation(text: java.lang.String | string): string
                // @ts-ignore
                parseTranslation(text: java.lang.String | string, onlyPrefix: java.lang.String | string): string
            }
        }
    }
}
