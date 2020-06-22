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
                                readonly R5: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly R10: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly R20: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly R40: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly R80: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly SERIES_1_2_5: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly E6: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly E12: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly E24: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly E48: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly E96: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly E192: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                readonly POWERSOF2: org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                values(): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities[]
                                // @ts-ignore
                                valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation.Granularities
                                // @ts-ignore
                                getMongoRepresentation(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
