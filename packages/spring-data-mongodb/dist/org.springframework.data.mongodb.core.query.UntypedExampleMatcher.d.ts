declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * {@link ExampleMatcher} implementation for query by example (QBE). Unlike plain {@link ExampleMatcher} this untyped
                         * counterpart does not enforce type matching when executing the query. This allows to query unrelated example documents
                         * as references for querying collections as long as the used field/property names match.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.0
                         */
                        // @ts-ignore
                        class UntypedExampleMatcher extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public static matching(): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public static matchingAny(): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public static matchingAll(): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withIgnorePaths(...ignoredPaths: java.lang.String[] | string[]): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withStringMatcher(defaultStringMatcher: StringMatcher): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withIgnoreCase(): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withIgnoreCase(defaultIgnoreCase: boolean): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withMatcher(propertyPath: java.lang.String | string, matcherConfigurer: object): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withMatcher(propertyPath: java.lang.String | string, genericPropertyMatcher: GenericPropertyMatcher): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withTransformer(propertyPath: java.lang.String | string, propertyValueTransformer: PropertyValueTransformer): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withIgnoreCase(...propertyPaths: java.lang.String[] | string[]): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withIncludeNullValues(): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withIgnoreNullValues(): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public withNullHandler(nullHandler: NullHandler): org.springframework.data.mongodb.core.query.UntypedExampleMatcher
                            // @ts-ignore
                            public getNullHandler(): NullHandler
                            // @ts-ignore
                            public getDefaultStringMatcher(): StringMatcher
                            // @ts-ignore
                            public isIgnoreCaseEnabled(): boolean
                            // @ts-ignore
                            public isIgnoredPath(path: java.lang.String | string): boolean
                            // @ts-ignore
                            public getIgnoredPaths(): Array<java.lang.String | string>
                            // @ts-ignore
                            public getPropertySpecifiers(): PropertySpecifiers
                            // @ts-ignore
                            public isAllMatching(): boolean
                            // @ts-ignore
                            public isAnyMatching(): boolean
                            // @ts-ignore
                            public getMatchMode(): MatchMode
                        }
                    }
                }
            }
        }
    }
}
