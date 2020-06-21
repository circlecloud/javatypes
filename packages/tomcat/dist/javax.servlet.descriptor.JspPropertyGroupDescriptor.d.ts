declare namespace javax {
    namespace servlet {
        namespace descriptor {
            /**
             * @since Servlet 3.0
             *  TODO SERVLET3 - Add comments
             */
            // @ts-ignore
            interface JspPropertyGroupDescriptor {
                // @ts-ignore
                getUrlPatterns(): Array<java.lang.String | string>
                // @ts-ignore
                getElIgnored(): string
                // @ts-ignore
                getPageEncoding(): string
                // @ts-ignore
                getScriptingInvalid(): string
                // @ts-ignore
                getIsXml(): string
                // @ts-ignore
                getIncludePreludes(): Array<java.lang.String | string>
                // @ts-ignore
                getIncludeCodas(): Array<java.lang.String | string>
                // @ts-ignore
                getDeferredSyntaxAllowedAsLiteral(): string
                // @ts-ignore
                getTrimDirectiveWhitespaces(): string
                // @ts-ignore
                getDefaultContentType(): string
                // @ts-ignore
                getBuffer(): string
                // @ts-ignore
                getErrorOnUndeclaredNamespace(): string
            }
        }
    }
}
