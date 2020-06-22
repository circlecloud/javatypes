declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Default implementation for {@link SortParameters}.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    class DefaultSortParameters extends java.lang.Object implements org.springframework.data.redis.connection.SortParameters {
                        /**
                         * Constructs a new <code>DefaultSortParameters</code> instance.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructs a new <code>DefaultSortParameters</code> instance.
                         * @param limit
                         * @param order
                         * @param alphabetic
                         */
                        // @ts-ignore
                        constructor(limit: org.springframework.data.redis.connection.SortParameters.Range, order: org.springframework.data.redis.connection.SortParameters.Order, alphabetic: java.lang.Boolean)
                        /**
                         * Constructs a new <code>DefaultSortParameters</code> instance.
                         * @param byPattern
                         * @param limit
                         * @param getPattern
                         * @param order
                         * @param alphabetic
                         */
                        // @ts-ignore
                        constructor(byPattern: number /*byte*/[], limit: org.springframework.data.redis.connection.SortParameters.Range, getPattern: number /*byte*/[][], order: org.springframework.data.redis.connection.SortParameters.Order, alphabetic: java.lang.Boolean)
                        // @ts-ignore
                        public getByPattern(): number /*byte*/[]
                        // @ts-ignore
                        public setByPattern(byPattern: number /*byte*/[]): void
                        // @ts-ignore
                        public getLimit(): org.springframework.data.redis.connection.SortParameters.Range
                        // @ts-ignore
                        public setLimit(limit: org.springframework.data.redis.connection.SortParameters.Range): void
                        // @ts-ignore
                        public getGetPattern(): number /*byte*/[][]
                        // @ts-ignore
                        public addGetPattern(gPattern: number /*byte*/[]): void
                        // @ts-ignore
                        public setGetPattern(gPattern: number /*byte*/[][]): void
                        // @ts-ignore
                        public getOrder(): org.springframework.data.redis.connection.SortParameters.Order
                        // @ts-ignore
                        public setOrder(order: org.springframework.data.redis.connection.SortParameters.Order): void
                        // @ts-ignore
                        public isAlphabetic(): java.lang.Boolean
                        // @ts-ignore
                        public setAlphabetic(alphabetic: java.lang.Boolean): void
                        // @ts-ignore
                        public order(order: org.springframework.data.redis.connection.SortParameters.Order): org.springframework.data.redis.connection.DefaultSortParameters
                        // @ts-ignore
                        public alpha(): org.springframework.data.redis.connection.DefaultSortParameters
                        // @ts-ignore
                        public asc(): org.springframework.data.redis.connection.DefaultSortParameters
                        // @ts-ignore
                        public desc(): org.springframework.data.redis.connection.DefaultSortParameters
                        // @ts-ignore
                        public numeric(): org.springframework.data.redis.connection.DefaultSortParameters
                        // @ts-ignore
                        public get(pattern: number /*byte*/[]): org.springframework.data.redis.connection.DefaultSortParameters
                        // @ts-ignore
                        public by(pattern: number /*byte*/[]): org.springframework.data.redis.connection.DefaultSortParameters
                        // @ts-ignore
                        public limit(start: number /*long*/, count: number /*long*/): org.springframework.data.redis.connection.DefaultSortParameters
                    }
                }
            }
        }
    }
}
