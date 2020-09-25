declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BucketAutoOperation {
                            /**
                             * Supported MongoDB granularities.
                             * @see <a
                             *       href="https://docs.mongodb.com/manual/reference/operator/aggregation/bucketAuto/#granularity>https://docs.mongodb.com/manual/reference/operator/aggregation/bucketAuto/#granularity</a>
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class Granularities extends java.lang.Enum<org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities> implements org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularity {
                                // @ts-ignore
                                public static readonly R5: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly R10: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly R20: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly R40: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly R80: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly SERIES_1_2_5: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly E6: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly E12: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly E24: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly E48: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly E96: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly E192: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static readonly POWERSOF2: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public static values(): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities[]
                                // @ts-ignore
                                public static valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                public getMongoRepresentation(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
